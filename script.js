const navLinks = document.querySelectorAll('.links')
const contents = document.querySelectorAll('.contents')
var sidemenu = document.getElementById('menuSide')

navLinks.forEach((navLink, index) => {
  navLink.addEventListener('click', () => {
    navLinks.forEach((link) => link.classList.remove('active'))
    contents.forEach((content) => content.classList.remove('active-content'))

    navLink.classList.add('active')
    contents[index].classList.add('active-content')
  })
})

function openmenu() {
  sidemenu.style.right = '0'
}

function closemenu() {
  sidemenu.style.right = '-200px'
}
