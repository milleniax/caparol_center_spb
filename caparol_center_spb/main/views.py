from django.shortcuts import render

def main_render(request):
    return render(request, 'main/index.html')
