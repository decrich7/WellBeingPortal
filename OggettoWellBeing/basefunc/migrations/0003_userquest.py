# Generated by Django 4.2.6 on 2023-10-21 10:30

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('basefunc', '0002_clubmember'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserQuest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quest', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='basefunc.quest', verbose_name='Квесты')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL, verbose_name='Пользователь')),
            ],
        ),
    ]
