function Loginform(){
    document.getElementById("login").style.display="block";
    document.querySelector("#signup").style.display="none";
    document.getElementById("buttons").style.display="none";
}
function loginPage(){
    document.getElementById("login").style.display="none";
    document.querySelector("#signup").style.display="block";
    document.getElementById("buttons").style.display="block";
}
function slogin(){
    document.querySelector(".studentLogin").style.display="none"
    document.querySelector(".institutionLogin").style.display="block"
}
function ilogin(){
    document.querySelector(".studentLogin").style.display="block"
    document.querySelector(".institutionLogin").style.display="none"
}

function validateStudentLogin()
{
    let username = document.getElementById("studentUsername").value;
    let password = document.getElementById("studentPassword").value;

    if(username===`abc` && password===`12345`)
    {
        alert("Student Login Success.");
    }
    else{
        alert("Student Login Denied.");
    }
}
function validateCollegeLogin()
{
    let username = document.getElementById("collegeUsername").value;
    let password = document.getElementById("collegePassword").value;

    if(username===`Admin` && password===`12345`)
    {
        alert("College Login Success.");
    }
    else{
        alert("College Login Denied.");
    }
}

function validateRegistration()
{
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let cpass = document.getElementById("cpassword").value;
    let mob = document.getElementById("mobileNumber").value;
    let email = document.getElementById("email-id").value;
    if(uname==null || uname=="")
    {
        alert("Invalid username");
    }
    else if(pass==null || pass=="" || pass.length<8)
    {
        alert("Invalid Password");
    }
    else if(pass!=cpass)
    {
        alert("Passwords didn't match");
    }
    else if(mob==null || mob=="" || mob.length<10)
    {
        alert("Invalid Mobile Number");
    }
    else if(email==null || email=="")
    {
        alert("Invalid Email");
    }
    else
    {
        alert("Registration done");
    }

}