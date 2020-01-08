from django.db import models

class Protect(models.Model):
    img = models.FileField()
    description = models.CharField(max_length=500)
    title = models.CharField(max_length=50)

class Cover(models.Model):
    img = models.FileField()
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=500)
    price = models.DecimalField(decimal_places=0,max_digits=7)
    protect = models.ForeignKey(Protect, on_delete=models.CASCADE)
