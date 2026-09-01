from django.urls import path
from . import views

urlpatterns = [
    path('', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('home/', views.home, name='home'),
    path('about_us/', views.about_us, name='about_us'),
    path('features/', views.features, name='features'), 
    path('logout/', views.logout, name='logout'),

]