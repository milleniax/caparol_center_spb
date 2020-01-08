from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.main_render, name='main_render'),
    path('question', views.question, name='question')
]