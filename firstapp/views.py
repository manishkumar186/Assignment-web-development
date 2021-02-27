from django.shortcuts import render
from firstapp.models import Student

def home(request):
    context={}
    data = Student.objects.all()
    context["all_data"]=data
    if request.method == "POST":
        Name = request.POST["name"]
        Email = request.POST["email"]
        Website = request.POST["website"]
        Image_link = request.POST["image_link"]
        Gender = request.POST["gender"]
        Skill = request.POST["check"]
        if len(Skill)==0:
            context["status"]="Please Select the Skills"
        else:
            student_data = Student(name=Name,email=Email,website=Website,image_link=Image_link,gender=Gender,skills=Skill)
            student_data.save()
            context["status"]="Student enrollment success"
    return render(request,"home.html",context)
