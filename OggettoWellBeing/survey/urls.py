from django.urls import path, include
from rest_framework import routers


from .views import *


urlpatterns = [
    path('', GetQuestion.as_view()),
    path('answer/', QuestionAnswer.as_view()),
]