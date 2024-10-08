from django import forms
from django.utils import timezone
from .models import User

# class UserCreateForm(forms.ModelForm):
#     # email = forms.EmailField()
#     class Meta:
#         model = User
#         fields = ['country', 'accountType', 'email', 'password']
    
#     def clean_email(self):
#         email = self.cleaned_data.get("email")
#         today = timezone.now().date()
#         qs = User.objects.filter(
#             email=email,
#             createdAt__date=today
#         )
#         if qs.count() >= 5:
#             raise forms.ValidationError("Cannot enter this email again today.")
#         return email
    
class UserLoginForm(forms.ModelForm):
    # email = forms.EmailField()
    class Meta:
        model = User
        fields = ['email', 'password']
    
    def clean_email(self):
        email = self.cleaned_data.get("email")
        today = timezone.now().day
        qs = User.objects.filter(
            email=email,
            createdAt__date=today
        )
        if qs.count() >= 5:
            raise forms.ValidationError("Cannot enter this email again today.")
        return email
    

class UserCreateForm(forms.ModelForm):
    class Meta:
        model = User
        fields = ['country', 'accountType', 'email', 'password']
    
    def clean_email(self):
        email = self.cleaned_data.get("email")
        today = timezone.now().date()
        
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError("Email already exists.")
        
        qs = User.objects.filter(
            email=email,
            createdAt__date=today
        )
        if qs.count() >= 5:
            raise forms.ValidationError("Cannot enter this email again today.")
        return email
    
    def clean_password(self):
        password = self.cleaned_data.get("password")
        if len(password) < 8:
            raise forms.ValidationError("Password must be at least 8 characters long.")
        return password
