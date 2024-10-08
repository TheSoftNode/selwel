import json
from ninja import Router
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
import jwt
from datetime import datetime, timedelta
from django.utils import timezone

from .forms import UserCreateForm, UserLoginForm
from .models import User
from .schemas import (
    UserCreateSchema,
    ErrorUserCreateSchema,
    LoginSchema,
    TokenSchema
)

router = Router()

# /api/users/
@router.post("",
    response={
        201: UserCreateSchema,
        400: ErrorUserCreateSchema
    },
    auth=None
)
def register(request, data: UserCreateSchema):
    form = UserCreateForm(data.dict())
    if not form.is_valid():
        form_errors = json.loads(form.errors.as_json())
        return 400, form_errors
    
    # Encrypt the password before saving
    obj = form.save(commit=False)
    obj.password = make_password(obj.password)
    obj.save()
    
    return 201, obj

# /api/users/login/
@router.post("/login", response={200: TokenSchema, 400: ErrorUserCreateSchema})
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

    # Generate JWT token
    token = generate_jwt_token(user)
    
    return 200, {"token": token}

def generate_jwt_token(user):
    payload = {
        'user_id': user.id,
        'exp': timezone.now() + timedelta(days=1)  # Token expires in 1 day
    }
    return jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')