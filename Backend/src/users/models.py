from django.db import models


# Create your models here.
class User(models.Model):
    country = models.TextField(blank=True, null=True)
    accountType = models.TextField(blank=True, null=True)
    email = models.EmailField()
    password = models.TextField(blank=True, null=True)
    updated = models.DateTimeField(auto_now=True)
    timestamp = models.DateTimeField(auto_now_add=True)