from django.db import models

# Create your models here.
from django.contrib.auth.models import User
from django.db import models



choices = (
    (1, 'Будет'),
    (2, 'Идет'),
    (3, 'Прошло')
)


class Topic(models.Model):
    name = models.CharField(max_length=255)
    info = models.CharField(max_length=500, null=True)

    def __str__(self):
        return self.name


class Schedule(models.Model):
    date_time_event = models.DateTimeField(auto_now=False)

    def __str__(self):
        return str(self.date_time_event)


# class Status(models.Model):
#     status = models.CharField(max_length=70)
#
#
#     def __str__(self):
#         return self.status


class Expert(models.Model):
    info = models.CharField(max_length=500)
    fio = models.CharField(max_length=100)
    links = models.CharField(max_length=500)


    def __str__(self):
        return self.fio



class Event(models.Model):
    name = models.CharField(max_length=100)
    info = models.CharField(max_length=100, null=True)
    topic = models.ForeignKey('Topic', on_delete=models.SET_NULL, null=True)
    shedule = models.ForeignKey('Schedule', on_delete=models.SET_NULL, null=True)
    expert = models.ForeignKey('Expert', on_delete=models.SET_NULL, null=True)
    photo = models.ImageField(upload_to='img/', null=True)
    status = models.IntegerField(verbose_name='Статус', choices=choices, null=True)
    # status = models.ForeignKey('Status', on_delete=models.SET_NULL, null=True)



    def __str__(self):
        return self.name














