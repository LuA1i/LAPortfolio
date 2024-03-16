const navLinks = document.querySelectorAll('.links')
const contents = document.querySelectorAll('.contents')
var sidemenu = document.getElementById('menuSide')

navLinks.forEach((navLink, index) => {
  navLink.addEventListener('click', () => {
    // Remove 'active' class from all links and contents
    navLinks.forEach((link) => link.classList.remove('active'))
    contents.forEach((content) => content.classList.remove('active-content'))

    // Add 'active' class to the clicked link
    navLink.classList.add('active')

    // Show the corresponding content based on the clicked link
    contents[index].classList.add('active-content')
  })
})

function openmenu() {
  sidemenu.style.right = '0'
}

function closemenu() {
  sidemenu.style.right = '-200px'
}
