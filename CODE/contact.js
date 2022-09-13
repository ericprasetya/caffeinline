var form = document.forms['contactUs']
var errorFname = document.getElementById('error-fname')
var errorLname =document.getElementById('error-lname')
var errorEmail = document.getElementById('error-email')
var errorMessage = document.getElementById('error-message')

function validateEmail(email){
  var at = email.indexOf("@");
  var dot = email.lastIndexOf(".");
  return email.length > 0 &&
    at > 0 &&
    dot > at + 1 &&
    dot < email.length &&
    email[at + 1] !== "." &&
    email.indexOf(" ") === -1 &&
    email.indexOf("..") === -1;
}

function validateForm(ev){
  var isValid = true
  if(form['fname'].value == ""){
    errorFname.innerText = "*Requiered Field";
    isValid = false;
  }else{
    errorFname.innerText = "";
  }
  if(form['lname'].value == ""){
    errorLname.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorLname.innerText = ""
  }
  if(form['email'].value == ""){
    errorEmail.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorEmail.innerText = ""
  }
  if(form['message'].value == ""){
    errorMessage.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorMessage.innerText = ""
  }
  var mail = form['email'].value
  if(validateEmail(mail) == false){
    errorEmail.innerText += "  Invalid Email"
    isValid = false
  }

  if(isValid == false){
    ev.preventDefault()
  }else if(isValid == true){
    var confirmed = confirm('Do you want to submit?')
    if(confirmed == true){
      alert('Thank you for contacting us')
    }
  }
}

