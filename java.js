var save=document.querySelector(".save")
var name=document.querySelector(".name")
var age=document.querySelector(".age")
var gender=document.querySelector(".gender")
var course=document.querySelector(".course")
var email=document.querySelector(".email")

var dname=document.querySelector(".dname")
var dage=document.querySelector(".dage")
var dgender=document.querySelector(".dgender")
var dcourse=document.querySelector(".dcourse")
var demail=document.querySelector(".demail")
save.addEventListener("click" ,function(){
    dname.textContent= name.value;
    dage.textContent= age.value;
    genderInputs.forEach(function(gender) {
        if (gender.checked) {
            dgender.textContent = gender.value;
        }
    });
    
    dcourse.textContent = course.value;
    demail.textContent = email.value;
    name.value = "";
            age.value = "";
            gender.forEach(function(gender) {
                gender.checked = false;
            });
            course.value = "";
            email.value = "";
        });
    