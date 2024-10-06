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
