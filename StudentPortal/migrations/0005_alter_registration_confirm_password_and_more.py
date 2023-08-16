# Generated by Django 4.2.4 on 2023-08-11 03:24

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StudentPortal', '0004_alter_registration_confirm_password_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='confirm_password',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='registration',
            name='email',
            field=models.EmailField(max_length=254, validators=[django.core.validators.EmailValidator]),
        ),
        migrations.AlterField(
            model_name='registration',
            name='password',
            field=models.CharField(max_length=100),
        ),
    ]