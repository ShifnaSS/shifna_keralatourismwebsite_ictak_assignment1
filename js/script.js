//email validation
//let phcheck = /^(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
let email = document.getElementById("email");
let ph = document.getElementById("ph");
let error =  document.getElementById("error");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let firstn = document.getElementById("firstn");
let lastn = document.getElementById("lastn");
let checkbox = document.getElementById("checkbox");
let regexp = /^([\w\._-]+)@([A-Za-z0-9\-]+)[.]([a-z]{2,3})(.[a-z]{2,3})?$/;
let number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,20}$/;
function validation()
{ 
    if(email.value.trim()==""||ph.value.trim()==""||pass1.value.trim()==""||pass2.value.trim()==""||firstn.value.trim()==""||lastn.value.trim()=="")
    {
        error.innerHTML= "Fields cannot be empty";
        error.style.color = "red";
        if(email.value.trim()==""){
            email.style.border = "1px solid red"; 
        }
        else{
            email.style.border = ""; 
        }
        if(ph.value.trim()==""){
            ph.style.border = "1px solid red";
        }
        else{
            ph.style.border = "";
        }
        if(pass1.value.trim()==""){
            pass1.style.border = "1px solid red";
        }
        else{
            pass1.style.border = "";
        }
        if(pass2.value.trim()==""){
            pass2.style.border = "1px solid red";
        }
        else{
            pass2.style.border = "";
        }
        if(firstn.value.trim()==""){
            firstn.style.border = "1px solid red";
        }
        else{
            firstn.style.border = "";
        }
        if(lastn.value.trim()==""){
            lastn.style.border = "1px solid red";
        }
        else{
            lastn.style.border = "";
        }
        return false;
    }
    else if(pass1.value.trim()==pass2.value.trim())
    {
        if(regexp.test(email.value)&&number.test(ph.value)&&passcheck.test(pass1.value.trim()))
        {
            if(!checkbox.checked)
            {
                alert('You must agree to the terms first.');
                return false;
            }
            else
            {
                return true;
            }
            
        }
        else if(regexp.test(email.value)&&number.test(ph.value))
        {
            if(pass1.value.trim().length<8)
            {
                error.innerHTML = "password too short";
                error.style.color = "red";
                pass1.style.border = "1px solid red";
                return false;
            }
            else
            {
            error.innerHTML = "password should contain  atleast 1 lowercase, 1 uppercase,1 number  and atleast one special character";
            error.style.color = "red";
            pass1.style.border = "1px solid red";
            pass2.style.border = "1px solid red";
            return false;
            }
        }
        else if(regexp.test(email.value))
        {
            error.innerHTML = "phone number not in correct format";
            error.style.color = "red";
            ph.style.border = "1px solid red";
            return false;
        }
        else
        {
            error.innerHTML = "invalid email Id";
            error.style.color = "red";
            email.style.border = "1px solid red";
            return false;
        }
    }
    else
    {
        pass2.style.border="1px orange solid";
        error.innerHTML = "password mismatching";
        error.style.color = "red";
        return false;
    }
}


//checking the strength of password





//login page validation

function validation1()
{
    if(email.value.trim()==""||pass1.value.trim()=="")
    {
        error.innerHTML = "Fields Cannot be empty";
        error.style.color = "red";
        return false;
    }
    else if(regexp.test(email.value)&&passcheck.test(pass1.value.trim()))
        {
            return true;
        }
    else if(regexp.test(email.value))
        {
            error.innerHTML = "password incorrect";
            error.style.color = "red";
            return false;
        }
    else
        {
            error.innerHTML = "Invalid Email-Id";
            error.style.color = "red";
            return false;
        }
    
}



//strength Check

    function checkStrength(password) {
        var strength = 0;


        //If password contains both lower and uppercase characters, increase strength value.
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
            strength += 1;
            $('.low-upper-case').addClass('text-success');
            $('.low-upper-case i').removeClass('fa-file-text').addClass('fa-check');
            $('#popover-password-top').addClass('hide');


        } else {
            $('.low-upper-case').removeClass('text-success');
            $('.low-upper-case i').addClass('fa-file-text').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }

        //If it has numbers ,increase strength value. 
        if (password.match(/([0-9])/)) {
            strength += 1;
            $('.one-number').addClass('text-success');
            $('.one-number i').removeClass('fa-file-text').addClass('fa-check');
            $('#popover-password-top').addClass('hide');

        } else {
            $('.one-number').removeClass('text-success');
            $('.one-number i').addClass('fa-file-text').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }

        //If it has one special character, increase strength value.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1;
            $('.one-special-char').addClass('text-success');
            $('.one-special-char i').removeClass('fa-file-text').addClass('fa-check');
            $('#popover-password-top').addClass('hide');

        } else {
            $('.one-special-char').removeClass('text-success');
            $('.one-special-char i').addClass('fa-file-text').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }

        if (password.trim().length > 7) {
            strength += 1;
            $('.eight-character').addClass('text-success');
            $('.eight-character i').removeClass('fa-file-text').addClass('fa-check');
            $('#popover-password-top').addClass('hide');

        } else {
            $('.eight-character').removeClass('text-success');
            $('.eight-character i').addClass('fa-file-text').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }




        // If value is less than 2

        if (strength < 2) {
            $('#result').removeClass()
            $('#password-strength').addClass('progress-bar-danger');
            $('#result').addClass('text-danger').text('Poor');
            $('#password-strength').css('width', '10%').css('background-color','red');
        } else if (strength == 2) {
            $('#result').addClass('good');
            $('#password-strength').removeClass('progress-bar-danger');
            $('#password-strength').addClass('progress-bar-warning');
            $('#result').addClass('text-warning').text('Medium')
            $('#password-strength').css('width', '55%').css('background-color','orange');
            return 'Week'
        } else if (strength == 4) {
            $('#result').removeClass()
            $('#result').addClass('strong');
            $('#password-strength').removeClass('progress-bar-warning');
            $('#password-strength').addClass('progress-bar-success');
            $('#result').addClass('text-success').text('Strong');
            $('#password-strength').css('width', '100%').css('background-color','green');

            return 'Strong'
        }

    }

