//Assigning Variables to the Forms
let signup_visible = document.querySelector('.signup_box');
let login_visible = document.querySelector('.login_box');

//Validates the Signup Form
function validate_form(){
    //Assigning Variables to get the State of the Element
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone_number').value;
    let password = document.getElementById('password').value;
    let confirm_pass = document.getElementById('confirm_pass').value;
    let agreement = document.getElementById('terms_agree');

    //Validation
    if(username === "" || email === "" || phone === "" || password === "" || confirm_pass === ""){
        alert("You have not filled a form box! Please fill all form boxes first.");
    }
    else if(username.length < 8){
        alert("Username must contain 8 characters or more!");
    }
    else if(email.search("@") === -1 || email.search(".com") === -1){
        alert("Email is not a real email!");
    }
    else if(phone.length > 15){ 
        alert("Phone number must be below 15 numbers (with no dashes)!");
    }
    else if(check_numeric(phone) === false){ 
        alert("Phone number must only contain numbers!");
    }
    else if(password.length < 8){
        alert("Password length must contain 8 characters!");
    }
    else if(check_alphanumeric(password) === false){
        alert("Password must contain at least a letter and a number!");
    }
    else if(password != confirm_pass){
        alert("Password and confirmation password are not the same!");
    }
    else if(!agreement.checked){
        alert("You have not agreed to the Terms and Services!");
    }
    else{
        alert("Registration successful, returning to main menu...");
        setTimeout(function(){
            console.log("Delay for 2 seconds, signup success.");
        },2000);
        window.location.href = "home.html";
    }
}

//Validates the Login Form
function validate_login(){
    //Assigning Variables to get the State of the Element
    let email = document.getElementById('email_login').value;
    let password = document.getElementById('password_login').value;

    //Validation
    if(email === "" || password === ""){
        alert("You have not filled a form box! Please fill all form boxes first.");
    }
    else if(email.search("@") === -1 || email.search(".com") === -1){
        alert("Email is not a real email!");
    }
    else if(password.length < 8){
        alert("Password length must contain 8 characters!");
    }
    else if(check_alphanumeric(password) === false){
        alert("Password must contain at least a letter and a number!");
    }
    // We don't actually check if there's a password before, since no database is actually implemented.
    else{
        alert("Login successful, returning to main menu...");
        setTimeout(function(){
            console.log("Delay for 2 seconds, login success");
        },2000);
        window.location.href = "home.html";
    }
}

//Checks if All Characters are Numbers
function check_numeric(phone){
    let numbers = true;
    for(let i = 0; i < phone.length; i++){
        if(isNaN(phone[i])){
            numbers = false;
        }
        if(numbers === false){
            return false;
        }
    }
    return true;
}

//Checks if All Characters Contain Numbers and Letters
function check_alphanumeric(password){
    let alphabet = false;
    let numbers = false;
    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            alphabet = true;
        }
        else{
            numbers = true;
        }
        if(alphabet === true && numbers === true){
            return true;
        }
    }
    return false;
}

//Checking for Button Clicks
let button_click = document.querySelector('button[type=button]');
button_click.addEventListener('click', function(){
    validate_form();
});

let login_click = document.querySelector('button[type=login]');
login_click.addEventListener('click', function(){
    validate_login();
});

//Checking for Switch Form Button Click
let switch_click = document.querySelector('button[type=switch]');
switch_click.addEventListener('click', function(){
    let reader = document.getElementById('active').className;
    // console.log(reader);

    if(reader === "signup_box"){
        console.log("Switch selected -> Login");
        document.querySelector('.title_form h1').textContent = "Log In";
        document.querySelector('.switcher h2').textContent = "Don't have an account?";
        document.querySelector('button[type="switch"]').textContent = "Sign Up";

        document.getElementById('active').id = "temp";
        document.getElementById('nonactive').id = "active";
        document.getElementById('temp').id = "nonactive";
        signup_visible.style.display = "none";
        login_visible.style.display = "flex";
    }
    else{
        console.log("Switch selected -> Sign Up");
        document.querySelector('.title_form h1').textContent = "Sign Up";
        document.querySelector('.switcher h2').textContent = "Already have an account?";
        document.querySelector('button[type="switch"]').textContent = "Log In";

        document.getElementById('active').id = "temp";
        document.getElementById('nonactive').id = "active";
        document.getElementById('temp').id = "nonactive";
        signup_visible.style.display = "flex";
        login_visible.style.display = "none";
    }
});

signup_visible.style.display = "flex";
login_visible.style.display = "none";