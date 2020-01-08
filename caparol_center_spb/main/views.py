from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from .models import Question
from django.contrib import messages

def main_render(request):
    return render(request, 'main/index.html')

def question(request):
    if request.method == 'POST':
        email = request.POST.get("email")
        initial = request.POST.get("initial")
        question = request.POST.get("question")


        Question.objects.create(email=email,
                                initial=initial,
                                question=question)

        messages.info(request,initial + ", ваш вопрос успешно отправлен!")

    return HttpResponseRedirect(reverse('main:main_render'))
