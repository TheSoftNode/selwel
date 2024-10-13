from typing import List, Any, Optional
from datetime import datetime
from ninja import Schema
from pydantic import EmailStr


class UserCreateSchema(Schema):
    country: str = None
    accountType: str = None
    email: EmailStr
    password: str = None

class UserOutSchema(Schema):
    id: int
    country: str = None
    accountType: str = None
    email: str


class ErrorUserCreateSchema(Schema):
    country: Optional[List[Any]] = None
    accountType: Optional[List[Any]] = None
    email: Optional[List[Any]] = None
    password: Optional[List[Any]] = None

class LoginSchema(Schema):
    email: str
    password: str

class LoginResponseSchema(Schema):
    token: str
    refreshToken: str
    email: EmailStr


class ErrorUserLoginSchema(Schema):
    error: str
    code: int = 400  # Optional field for HTTP status codes
    detail: dict = None  # Optional for providing more details on the error


class RefreshTokenSchema(Schema):
    refresh_token: str


class ForgotPasswordSchema(Schema):
    email: EmailStr

class ResetPasswordSchema(Schema):
    token: str
    new_password: str

class PasswordResetResponseSchema(Schema):
    message: str
