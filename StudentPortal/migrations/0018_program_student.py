# Generated by Django 4.2.4 on 2023-08-12 03:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('StudentPortal', '0017_remove_program_student'),
    ]

    operations = [
        migrations.AddField(
            model_name='program',
            name='student',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='StudentPortal.student'),
            preserve_default=False,
        ),
    ]
