//email validation
//let phcheck = /^(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
let email = document.getElementById("email");
let ph = document.getElementById("ph");
let error =  document.getElementById("error");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let regexp = /^([\w\._-]+)@([A-Za-z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
let number = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
function validation()
{
    if(pass1.value==pass2.value)
    {
        if(regexp.test(email.value)&&number.test(ph.value)&&passcheck.test(pass1.value))
        {
            return true;
        }
        else if(regexp.test(email.value)&&number.test(ph.value))
        {
            if(pass1.value.length<8)
            {
                error.innerHTML = "password too short";
                error.style.color = "red";
                return false;
            }
            else
            {
            error.innerHTML = "password should contain  atleast 1 lowercase 1 uppercase and 1 number";
            error.style.color = "red";
            return false;
            }
        }
        else if(regexp.test(email.value))
        {
            error.innerHTML = "phone number not in correct format";
            error.style.color = "red";
            return false;
        }
        else
        {
            error.innerHTML = "invalid email Id";
            error.style.color = "red";
            return false;
        }
    }
    else
    {
        pass2.style.border="1px red solid";
        error.innerHTML = "password mismatching";
        error.style.color = "red";
        return false;
    }
}


//checking the strength of password

var strength = {
    0: "poor",
    1: "medium",
    2: "Strong",
  }


  var meter = document.getElementById('password-strength-meter');
var text = document.getElementById('password-strength-text');

pass1.addEventListener('input', function() {
  var val = pass1.value;
  var result = zxcvbn(val);

  // Update the password strength meter
  meter.value = result.score;

  // Update the text indicator
  if (val !== "") {
    text.innerHTML = "Strength: " + strength[result.score]; 
  } else {
    text.innerHTML = "";
  }
});




//modal 
var modal = document.getElementById('id01');
        
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//login page validation

function validation1(){
    if(regexp.test(email.value)&&passcheck.test(pass1.value))
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




