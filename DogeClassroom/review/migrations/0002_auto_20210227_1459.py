# Generated by Django 3.1.7 on 2021-02-27 19:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('review', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedbackanswer',
            name='text',
            field=models.TextField(max_length=100),
        ),
    ]