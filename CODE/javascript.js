// INI BUAT FREE DELIVERY WARNA ITEM ATAS
var closebtns = document.getElementsByClassName("close");
var i;


for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
});}

const menuToggle = document.getElementById('checkbox')
const nav = document.querySelector('nav .menu')

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide')
})

