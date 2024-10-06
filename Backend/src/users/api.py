from typing import List
import json
from django.shortcuts import get_object_or_404
from ninja import Router

import helpers
from ninja_jwt.authentication import JWTAuth

from .forms import WaitlistEntryCreateForm
from .models import WaitlistEntry
from .schemas import (
    UserCreateSchema
)

router = Router()





# /api/waitlists/
@router.post("", 
    response={
        201: UserCreateSchema,
        400: ErrorWaitlistEntryCreateSchema
    },
    auth=helpers.api_auth_user_or_annon
    )
def create_waitlist_entry(request, data:WaitlistEntryCreateSchema): 
    form = WaitlistEntryCreateForm(data.dict())
    if not form.is_valid():
        # cleaned_data = form.cleaned_data
        # obj = WaitlistEntry(**cleaned_data.dict())
        # {'email': [{'message': 'Cannot use gmail', 'code': ''}]}
        form_errors = json.loads(form.errors.as_json())
        return 400, form_errors
    obj = form.save(commit=False)
    if request.user.is_authenticated:
        obj.user = request.user
    obj.save()
    return 201, obj
