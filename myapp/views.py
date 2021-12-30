from django.http import HttpResponse
from django.shortcuts import render
from .models import Details



def active(request):
    if request.method == 'POST':
        yname = request.POST['yname']
        yemail = request.POST['yemail']
        pnum = request.POST['pnum']
        person = request.POST['person']
        date = request.POST['date']
        yevent = request.POST['yevent']
        location = request.POST['location']
        foods = request.POST['foods']
        drink = request.POST['drink']
        obj =Details()
        obj.yname = yname
        obj.yemail = yemail
        obj.pnum = pnum
        obj.person = person
        obj.date = date
        obj.yevent = yevent
        obj.location = location
        obj.foods = foods
        obj.drink = drink
        obj.save()

    return render(request, "index.html")

def details(request):
    data = Details.objects.all()

    return render(request, "details.html",{"messages":data})

def login(request):

    return render(request, "login.html")