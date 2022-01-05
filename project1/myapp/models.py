from django.db import models

class Details(models.Model):
    yname = models.CharField(max_length=20,default='',null=False)
    yemail = models.CharField(max_length=20,default='',null=False)
    pnum = models.CharField(max_length=20,default='',null=False)
    person = models.CharField(max_length=20,default='',null=False)
    date = models.CharField(max_length=20,default='',null=False)
    yevent = models.CharField(max_length=20,default='',null=False)
    location = models.CharField(max_length=20,default='',null=False)
    foods = models.CharField(max_length=20,default='',null=False)
    drink = models.CharField(max_length=20,default='',null=False)
class Admin(models.Model):
    admin=models.CharField(max_length=20,default='',null=False)
    password = models.CharField(max_length=20,default='',null=False)