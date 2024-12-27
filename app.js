const navbar = document.querySelector('.navbar')
const navToggles = document.querySelectorAll('#nav-toggle')
const links = document.querySelectorAll('.link')
const overlay = document.querySelector('.overlay')

const toggleMenu = function(){
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
}

navToggles.forEach((navToggle)=>{
    navToggle.addEventListener('click',toggleMenu)
})

links.forEach((link)=>{
    link.addEventListener('click',toggleMenu)
})