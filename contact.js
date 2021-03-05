const navSlide=()=>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');

  burger.addEventListener('click',()=>{
nav.classList.toggle('nav-active');

  //animate Links
  navLinks.forEach((link,index)=>{
if (link.style.animation){link.style.animation='';}else{
    link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 +.75}s`;
   }
  });
//Burger Animation
burger.classList.toggle('toggle');
  });
} 
navSlide();



//listen for form submit



// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();
console.log(123);
  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  console.log(name);
}