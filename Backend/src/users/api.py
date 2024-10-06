import json
from ninja import Router

import helpers
from .forms import UserCreateForm
from .models import User
from .schemas import (
    UserCreateSchema,
    ErrorUserCreateSchema
)

router = Router()


# /api/users/
@router.post("", 
    response={
        201: UserCreateSchema,
        400: ErrorUserCreateSchema
    },
    auth=helpers.api_auth_user_or_annon
    )
def register(request, data:UserCreateSchema): 
    form = UserCreateForm(data.dict())
    if not form.is_valid():
        form_errors = json.loads(form.errors.as_json())
        return 400, form_errors
    obj = form.save(commit=False)
    obj.save()
    return 201, obj
