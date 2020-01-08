from django.shortcuts import render

def services_render(request):

    return render(request, "services/services.html")
