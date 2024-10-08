from typing import List, Any, Optional
from datetime import datetime
from ninja import Schema
from pydantic import EmailStr


class UserCreateSchema(Schema):
    # Create -> user
    # Register
    country: str = None
    accountType: str = None
    email: EmailStr
    password: str = None
    # timestamp: datetime
    # updated: datetime


class ErrorUserCreateSchema(Schema):
    # Create -> Data
    # UserData
    country: List[Any]
    accountType: List[Any]
    email: List[Any]
    password: List[Any]
    # non_field_errors: List[dict] = []

class LoginSchema(Schema):
    email: str
    password: str

class TokenSchema(Schema):
    token: str
