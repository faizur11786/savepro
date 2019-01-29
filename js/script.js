

function signup_btn(){
    var lform = document.querySelector(".login__form");
    var sform = document.querySelector(".signup__form");
    var form_name = document.querySelector(".form__name");
    var login_text = document.querySelector(".l_text");
    var signup_text = document.querySelector(".s_text");
    lform.style.display = "none";
    sform.style.display = "block";
    form_name.innerHTML = "Sign Up";
    login_text.style.display = "block";
    signup_text.style.display = "none";
}




function login_btn(){
    var lform = document.querySelector(".login__form");
    var sform = document.querySelector(".signup__form");
    var form_name = document.querySelector(".form__name");
    var login_text = document.querySelector(".l_text");
    var signup_text = document.querySelector(".s_text");
    lform.style.display = "block";
    sform.style.display = "none";
    form_name.innerHTML = "Login";
    login_text.style.display = "none";
    signup_text.style.display = "block";
}

function user_signup(){
    var name = btoa(document.querySelector(".s_name").value);
    var email = btoa(document.querySelector(".s_email").value);
    var pass = btoa(document.querySelector(".s_pass").value);
    var number = btoa(document.querySelector(".s_number").value);
    var input_data = {name:name,email:email,password:pass,number:number};
    var user_data = JSON.stringify(input_data);
    if(name!= "" && email != "" && pass != "" && number != ""){
        localStorage.setItem(email,user_data);
    }
}


function user_already(){
    var email = btoa(document.querySelector(".s_email").value);
    
    if(localStorage.getItem(email) != null){
        var er_input = document.querySelector(".s_email");
        var btn = document.querySelector(".submit_btn");
        var er_text = document.querySelector(".error_text").innerHTML = "User Already";
        er_input.classList.add("input_error");
        btn.disabled = true;
    }
}

function remo_error(){
    var er_input = document.querySelector(".s_email");
    er_input.classList.remove("input_error");
    er_input.value="";
    var btn = document.querySelector(".submit_btn");
    var er_text = document.querySelector(".error_text").innerHTML = "";
    btn.disabled = false;
}



function user_login(){
    var username = btoa(document.querySelector("#username").value);
    var password = btoa(document.querySelector("#password").value);
    var login_input = {username:username,password:password};
    var login_data = JSON.stringify(login_input);
    sessionStorage.setItem(username,login_data);
    var sassi_data = sessionStorage.getItem(username);
    var user = JSON.parse(sassi_data);
    if(localStorage.getItem(user.username) == null){
        alert("User not Found");
    }
    else{
        if(localStorage.getItem(user.username).match(user.password)){
            location.replace("profile/user.html");
            sessionStorage.setItem("user_mail", username);
            return false;

        }
        else{
            alert("Password not Matched");
        }
    }
}
