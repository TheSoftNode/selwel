import json
from ninja import Router
from ninja.security import HttpBearer
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
import jwt
from datetime import timedelta
from django.utils import timezone
from django.db import IntegrityError

from .forms import UserCreateForm, UserLoginForm
from .models import User
from .schemas import (
    UserCreateSchema,
    ErrorUserCreateSchema,
    LoginSchema,
    LoginResponseSchema,
    RefreshTokenSchema,
    UserOutSchema
)

router = Router()

# JWT Authentication
class JWTAuth(HttpBearer):
    def authenticate(self, request, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user_id = payload.get('user_id')
            return User.objects.get(id=user_id)
        except jwt.ExpiredSignatureError:
            return None
        except (jwt.DecodeError, User.DoesNotExist):
            return None

# /api/users 
@router.post("", response={201: UserOutSchema, 400: ErrorUserCreateSchema}, auth=None)
def register(request, data: UserCreateSchema):
    form = UserCreateForm(data.dict())
    if not form.is_valid():
        errors = ErrorUserCreateSchema()
        if not form.is_valid():
            form_errors = json.loads(form.errors.as_json())
            # Pass form errors to ErrorUserCreateSchema
            errors = ErrorUserCreateSchema(**form_errors)
            return 400, form_errors

    try:
        user = form.save(commit=False)
        user.password = make_password(user.password)
        user.save()

        return 201, UserOutSchema(
            id=user.id,
            country=user.country,
            accountType=user.accountType,
            email=user.email,
        )
    except IntegrityError:
        errors = ErrorUserCreateSchema(email=["Email already exists."])
        return 400, errors

# /api/users/login/
@router.post("/login", response={200: LoginResponseSchema, 400: ErrorUserCreateSchema})
def login(request, data: LoginSchema):
    form = UserLoginForm(data.dict())
    if not form.is_valid():
        form_errors = json.loads(form.errors.as_json())
        return 400, form_errors
    try:
        user = User.objects.get(email=data.email)
    except User.DoesNotExist:
        return 400, {"error": "Invalid email or password"}

    if not check_password(data.password, user.password):
        return 400, {"error": "Invalid email or password"}

    # Generate JWT tokens
    access_token = generate_jwt_token(user, token_type='access')
    refresh_token = generate_jwt_token(user, token_type='refresh')
    
    return 200, {
        "token": access_token,
        "refreshToken": refresh_token,
        "email": user.email
    }

# /api/users/refresh-token/
@router.post("/refresh-token", response={200: LoginResponseSchema, 400: ErrorUserCreateSchema})
def refresh_token(request, data: RefreshTokenSchema):
    try:
        payload = jwt.decode(data.refresh_token, settings.SECRET_KEY, algorithms=['HS256'])
        user_id = payload.get('user_id')
        user = User.objects.get(id=user_id)
    except (jwt.ExpiredSignatureError, jwt.DecodeError, User.DoesNotExist):
        return 400, {"error": "Invalid refresh token"}

    access_token = generate_jwt_token(user, token_type='access')
    refresh_token = generate_jwt_token(user, token_type='refresh')

    return 200, {
        "token": access_token,
        "refreshToken": refresh_token,
        "email": user.email
    }

def generate_jwt_token(user, token_type='access'):
    payload = {
        'user_id': user.id,
        'token_type': token_type,
    }

    if token_type == 'access':
        payload['exp'] = timezone.now() + timedelta(minutes=15)  # Access token expires in 15 minutes
    else:
        payload['exp'] = timezone.now() + timedelta(days=7)  # Refresh token expires in 7 days

    return jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')