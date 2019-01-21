

function signup(){
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




function login(){
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
    var name = document.querySelector(".s_name").value;
    var email = document.querySelector(".s_email").value;
    var pass = document.querySelector(".s_pass").value;
    var number = document.querySelector(".s_number").value;
    var input_data = {name:name,email:email,password:pass,number:number};
    var user_data = JSON.stringify(input_data);
    console.log("hello")
    if(name!= "" && email != "" && pass != "" && number != ""){
        localStorage.setItem(email,user_data);
        setTimeout(alert("Sign Up Success now you can Login"),100);
        
    }
     

    

}
