# Generated by Django 4.2.4 on 2023-08-12 03:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('StudentPortal', '0014_remove_program_email_program_student'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='program',
            name='student',
        ),
    ]
