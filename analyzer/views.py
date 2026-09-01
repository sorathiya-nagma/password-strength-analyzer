from django.shortcuts import render, redirect
from .models import UserRegister
from django.contrib.auth.hashers import make_password,check_password

# Create your views here.
#def home(request):
    #return render(request, 'home.html')

def home(request):

    if 'username' not in request.session:
        return redirect('login')

    return render(request, "home.html")

def about_us(request):
    return render(request, "about_us.html")

#def login(request):
    return render(request, "login.html")



def login(request):

    if request.method == "POST":

        username = request.POST['username']
        password = request.POST['password']

        user = UserRegister.objects.filter(
            username=username
        ).first()

        if user and check_password(password, user.password):
            request.session['username'] = user.username
            return redirect('home')

        else:
            return render(request, "login.html", {
                "error": "Invalid username or password"
            })

    return render(request, "login.html")

def features(request):
    return render(request, "features.html")

#def register(request):
    return render(request, "register.html")



def register(request):

    if request.method == "POST":

        username = request.POST['username']
        password = request.POST['password']

        # Hash password before saving
        hashed_password = make_password(password)

        UserRegister.objects.create(
            username=username,
            password=hashed_password
        )

        return redirect('login')

    return render(request, "register.html")

def logout(request):

    request.session.flush()

    return redirect('login')