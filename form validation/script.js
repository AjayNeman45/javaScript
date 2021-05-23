const btn = document.getElementById('btn');
const form = document.getElementById('form');
console.log(btn.value);
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phnumber');
const password = document.getElementById('pwd');
const cpassword = document.getElementById('cpwd');

function successOn(field) {
    const formControl = field.parentElement;
    const errorMsg = formControl.querySelector(".msg");
    const error = formControl.querySelector(".fa-exclamation-circle");
    const success = formControl.querySelector(".fa-check-circle-o");
    errorMsg.style.visibility = "hidden";
    error.style.visibility = "hidden";
    field.style.border = "2px solid rgb(76, 236, 76)";
    success.style.visibility = "visible";
    success.style.color = "rgb(76,236,76)";
}
function errorOn(field, error_msg) {
    const formControl = field.parentElement;
    const errorMsg = formControl.querySelector(".msg");
    const error = formControl.querySelector(".fa-exclamation-circle");
    field.style.border = "2px solid rgb(255, 62, 62)";
    error.style.visibility = "visible";
    error.style.color = "rgb(255, 62, 62)";
    errorMsg.style.visibility = "visible";
    errorMsg.textContent = error_msg;
}


var flag1 = false,flag2 = false,flag3 = false,flag4 = false,flag5 = false;

btn.addEventListener("click", function () {

    // validate username
    if (username.value == "") {
        errorOn(username, "Username cannot be empty.")
    }
    else if (username.value.length > 2) {
        successOn(username);
        flag1 = true;
    }
    else {
        errorOn(username, "Username must contain atleast 3 characters");
    }

    // validate email
    if (email.value == "") {
        errorOn(email, "Email cannot be empty");
    }
    else if (email.value.length > 3) {
        successOn(email);
        flag2 = true;
    }

    // validate phone number
    if (phone.value.length == 10) {
        successOn(phone);
        flag3 = true;
    } else {
        errorOn(phone, "Enter correct phone number");
    }

    // validate password
    function uppercase(pwd) {
        for (let i = 0; i < pwd.length; i++) {
            if (pwd[i] == pwd[i].toUpperCase()) {
                console.log(pwd[i]);
                return true;
            }
        }
        return false;
    }
    function specialChar(pwd) {
        var special_char = ['@', '#', '$', '*', '!'];
        for (let i = 0; i < pwd.length; i++) {
            for (let j = 0; j < special_char.length; j++) {
                if (pwd[i] == special_char[j]) {
                    console.log(pwd[i]);
                    return true;
                }
            }
        }
        return false;
    }
    function number(pwd) {
        for (let i = 0; i < pwd.length; i++) {
            if(pwd[i] == parseInt(pwd[i])){
                console.log(pwd[i]);
                return true;
            }
        }
        return false;
    }

    if(password.value.length > 6)
    {
        if(specialChar(password.value)){
            if(uppercase(password.value)){
                if(number(password.value)){
                    successOn(password);
                    flag4 = true;
                }
                else{
                    errorOn(password,"password must contain atleast one number");
                }
            }
            else{
                errorOn(password,"password must contain atleast one uppercase letter");
            }
        }
        else{
            console.log("cb");
            errorOn(password,"passsword must contain one special character");
        }
    }
    else{
        errorOn(password,"password must contain atleast 7 charcters");
    }

    if(password.value!= "" && password.value == cpassword.value) {
        successOn(cpassword);
        flag5 = true;
    }else{
        errorOn(cpassword,"password doesn't match");
    }


    if(flag1 && flag2 && flag3 && flag4 && flag5)
    {
        alert("Thank You for submitting your information");
    }
});