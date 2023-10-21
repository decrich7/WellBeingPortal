import os

from django.conf import settings
from django.db import models

# Create your models here.
from django.contrib.auth.models import User
from django.db import models

choices = (
    (1, 'Будет'),
    (2, 'Идет'),
    (3, 'Прошло')
)

rating = (
    (1, 'Не понравилось'),
    (2, 'Не совсем понравилось...'),
    (3, 'Можно было и лучше'),
    (4, 'В принципе неплохо.'),
    (5, 'Всем доволен!')
)


# class Topic(models.Model):
#     name = models.CharField(max_length=255, verbose_name='Имя')
#     info = models.CharField(max_length=500, null=True, verbose_name='О теме')
#
#     def __str__(self):
#         return self.name


# class Status(models.Model):
#     status = models.CharField(max_length=70)
#
#
#     def __str__(self):
#         return self.status


class Expert(models.Model):
    info = models.CharField(max_length=500, verbose_name='О эксперте')
    fio = models.CharField(max_length=100, verbose_name='ФИО')
    links = models.CharField(max_length=500, verbose_name='Ссылка')

    def __str__(self):
        return self.fio


class Event(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    info = models.CharField(max_length=100, null=True, verbose_name='О мероприятии')
    club = models.ForeignKey('Club', on_delete=models.SET_NULL, null=True, verbose_name='Клуб')
    shedule = models.DateTimeField(auto_now=False, verbose_name='Время', null=True)
    expert = models.ForeignKey('Expert', on_delete=models.SET_NULL, null=True, verbose_name='Эксперт')
    photo = models.ImageField(upload_to='img/event', null=True, verbose_name='Фото')
    status = models.IntegerField(verbose_name='Статус', choices=choices, null=True)
    user = models.ManyToManyField(settings.AUTH_USER_MODEL)
    link = models.CharField(max_length=200, verbose_name='Ссылка на мероприятие', default='youtube.com')
    text_materials = models.CharField(max_length=200, verbose_name='Ссылка на доп. материалы', default='7-8')

    # status = models.ForeignKey('Status', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name


class MeetMaterials(models.Model):
    video = models.FileField(upload_to='video-lecture/%Y/%m/%d/', verbose_name='Запись встречи')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name='Событие')


class Club(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    info = models.CharField(max_length=500, null=True, verbose_name='О клубе')
    photo = models.ImageField(upload_to='img/club', null=True, verbose_name='Фото')
    user = models.ManyToManyField(settings.AUTH_USER_MODEL)

    def __str__(self):
        return self.name


class Quest(models.Model):
    name = models.CharField(max_length=100, verbose_name='Имя')
    info = models.CharField(max_length=500, null=True, verbose_name='О мероприятии')
    target = models.CharField(max_length=500, null=True, verbose_name='Цель')
    deadline = models.DateTimeField(auto_now=False, verbose_name='Дедлайн')
    photo = models.ImageField(upload_to='img/quest', null=True, verbose_name='Фото')
    user = models.ManyToManyField(settings.AUTH_USER_MODEL)

    def __str__(self):
        return self.name


class Feedback(models.Model):
    comment = models.CharField(max_length=255, verbose_name="Комментарий")
    rating = models.IntegerField(verbose_name='Статус', choices=rating)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, verbose_name='Событие')
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name='Пользователь')

    def __str__(self):
        return f'{self.rating} - {self.user.first_name}'
