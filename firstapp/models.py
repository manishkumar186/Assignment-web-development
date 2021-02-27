from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField(max_length=250)
    website = models.URLField(max_length=250)
    image_link = models.URLField(max_length=250)
    gender = models.CharField(max_length=250)
    skills = models.CharField(max_length=250)

    def __str__(self):
        return self.name
