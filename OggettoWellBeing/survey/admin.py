from django.contrib import admin

from django.contrib import admin
from .models import Question, Answer, Choice


class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        'title',
    )


class ChoiceAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'question',
    )
    list_filter = ('question',)


class AnswerAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'question',
        'choice',
    )
    list_filter = ('user',)


admin.site.register(Question, QuestionAdmin)
admin.site.register(Choice, ChoiceAdmin)
admin.site.register(Answer, AnswerAdmin)