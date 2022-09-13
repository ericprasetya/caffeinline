var form = document.forms['payment']
var errorName = document.getElementById('error-name')
var errorCity = document.getElementById('error-city')
var errorEmail = document.getElementById('error-email')
var errorAddress = document.getElementById('error-address')
var errorMethod = document.getElementById('error-method')
var errorCardNumber = document.getElementById('error-card-number')
var errorValidity = document.getElementById('error-validity')
var errorCVV = document.getElementById('error-CVV')
var errorAgree = document.getElementById('error-agree')


const visa = document.querySelector(".visaButton")
const paypal = document.querySelector(".paypalButton")
const hidden = document.querySelector('.visa')

visa.addEventListener('click', function(){
  hidden.classList.remove('hide')
  document.getElementById('visaBtn').checked = true
})

paypal.addEventListener('click', function(){
  hidden.classList.add('hide')
  document.getElementById('paypalBtn').checked = true
})

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
  if(form['name'].value == ""){
    errorName.innerText = "*Requiered Field";
    isValid = false;
  }else{
    errorName.innerText = "";
  }
  if(form['city'].value == ""){
    errorCity.innerText = "*Requiered Field";
    isValid = false;
  }else{
    errorCity.innerText = "";
  }
  if(form['email'].value == ""){
    errorEmail.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorEmail.innerText = ""
  }
  if(form['address'].value == ""){
    errorAddress.innerText = "*Requiered Field"
    isValid = false
  }else{
    errorAddress.innerText = ""
  }
  if(form['method'].value == ""){
    errorMethod.innerText = "*Choose 1"
    isValid = false
  }else if(form['method'].value == "visa"){
    if(form['card-number'].value == ""){
      errorCardNumber.innerText = "*Required Field"
      isValid = false
    }else{
      errorCardNumber.innerText = ""
    }
    if(form['CVV'].value == ""){
      errorCVV.innerText = "*Required Field"
      isValid = false
    }else{
      errorCVV.innerText = ""
    }
    if(form['validity'].value == ""){
      errorValidity.innerText = "*Required Field"
      isValid = false
    }else{
      errorValidity.innerText = ""
    }
    var cvvNumber = form['CVV'].value
    if(cvvNumber.length > 0){
      if(cvvNumber.length != 3 || isNaN(cvvNumber) == true){
        errorCVV.innerText += " wrong format"
        isValid = false
      }
    }
    
    var card = form['card-number'].value
    if(card.length> 0){
      if(card.length != 12 || isNaN(card) == true){
        errorCardNumber.innerText += " wrong format"
        isValid = false
      }
    }
    var date = form['validity'].value
    if(date.length == 5){
      var date2 = date.split('/')
      if(date2[0].length !=2  || isNaN(date2[0]) == true || isNaN(date2[1])==true){
        errorValidity.innerText += (" wrong format")
        isValid = false
      }
    }else{
      errorValidity.innerText += (" wrong format")
      isValid = false
    }
  }
  else if(form['method'].value == "paypal"){
    errorMethod.innerText = ""
  }

  if(form['agree'].checked == false){
    errorAgree.innerText = "*Must be checked"
    isValid = false
  }
  var mail = form['email'].value
  if(validateEmail(mail) == false){
    errorEmail.innerText += "  Invalid Email"
    isValid = false
  }

  if(isValid == false){
    ev.preventDefault()
  }else if(isValid == true){
    var confirmed = confirm('Do you want to confirm your payment?')
    if(confirmed == true){
      alert('Thank you for your payment')
    }
  }
}

