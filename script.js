const menuIcon = document.querySelector('#menu-icon')
const closeIcon = document.querySelector('#close-icon')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const nav = document.querySelector('nav')
const items = document.querySelectorAll('.item')
hamburger.addEventListener('click', mobileNav)
function mobileNav(){
  if(nav.classList.contains('showNav')){
  nav.classList.remove('showNav')
  menu.style.display = "none"
  closeIcon.style.display = "none"
  menuIcon.style.display = "block"
  }
  else{
    nav.classList.add('showNav')
    menu.style.display = "block"
    closeIcon.style.display = "block"
  menuIcon.style.display = "none"
  }
}
items.forEach( item =>{
  item.addEventListener('click', mobileNav)
})
