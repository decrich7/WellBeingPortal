# Generated by Django 4.2.6 on 2023-10-21 14:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('basefunc', '0005_remove_userquest_quest_remove_userquest_user_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='topic',
        ),
        migrations.AddField(
            model_name='event',
            name='club',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='basefunc.club', verbose_name='Клуб'),
        ),
        migrations.DeleteModel(
            name='Topic',
        ),
    ]
