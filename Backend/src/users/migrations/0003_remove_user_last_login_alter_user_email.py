# Generated by Django 5.0.9 on 2024-10-08 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_user_last_login_alter_user_email'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='last_login',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.EmailField(max_length=254),
        ),
    ]
