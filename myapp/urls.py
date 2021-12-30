from django.urls import path
from . import views

urlpatterns = [
    path('', views.active),
    path('details',views.details,name='details'),
    path('login',views.login,name='login')
]
