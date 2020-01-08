from django.db import models


class Question(models.Model):
    email = models.EmailField()
    initial = models.CharField(max_length=50)
    question = models.CharField(max_length=500)

    def __str__(self):
        return self.initial
