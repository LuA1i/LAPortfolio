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
    if (index === 0) {
      contents[0].classList.add('active-content') // Show the first content for "Skills"
    } else {
      contents[1].classList.add('active-content') // Show the second content for "Education"
    }
  })
})

function openmenu() {
  sidemenu.style.right = '0'
  
}
function closemenu() {
  sidemenu.style.right = '-200px'
}
