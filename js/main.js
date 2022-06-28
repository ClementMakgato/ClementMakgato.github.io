const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId)
    nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle-id', 'nav-menu-id')

const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav-menu-id')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener(`click`, linkAction))

//Scroll animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//Hero section scroll
sr.reveal('.hero-title', {})
sr.reveal('.button', { delay: 200 })
sr.reveal('.hero-img', { delay: 400 })
sr.reveal('.hero-social-icon', { interval: 200 })

//About section scroll
sr.reveal('.about-img', {})
sr.reveal('.about-subtitle', { delay: 200 })
sr.reveal('.about-text', { delay: 400 })

//Skills section scroll
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-text', { delay: 200 })
sr.reveal('.skills-data', { interval: 200 })
sr.reveal('.skills-img', { delay: 400 })

//Work section scroll
sr.reveal('.work-img', { interval: 200 })

//Contact section scroll
sr.reveal('.contact-input', { interval: 200 })