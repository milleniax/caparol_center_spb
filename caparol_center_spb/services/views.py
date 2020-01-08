from django.shortcuts import render
from .models import Protect, Cover

def services_render(request):
    protects = Protect.objects.all()
    covers = Cover.objects.all()
    return render(request, "services/services.html", {'protects': protects, 'covers': covers})
