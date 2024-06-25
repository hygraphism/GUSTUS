/* menu burger*/
const menu =  document.querySelector('.mainMenu')
const burgerButton = document.querySelector('.hamburger')

burgerButton.addEventListener('click', function(){
  menu.classList.toggle('isVisible')
  burgerButton.classList.toggle('is-active')
})