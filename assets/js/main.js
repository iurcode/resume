window.addEventListener('load', () => setTimeout(() => document.querySelector('.spinner-overlay').classList.add('hidden'), 1000));

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('menu');
const navToggle = document.getElementById('nav-open');
const navClose = document.getElementById('nav-close');

if(navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));

if(navClose) navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.menu__link')

navLink.forEach(elem => elem.addEventListener('click', () => navMenu.classList.remove('show-menu')));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelectorAll('.skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

skillsHeader.forEach(elem => elem.addEventListener('click', function() {
    if(this.parentNode.classList.contains('skills__close')) {
        this.parentNode.classList.add('skills__open');
        this.parentNode.classList.remove('skills__close');
    } else {
        this.parentNode.classList.remove('skills__open');
        this.parentNode.classList.add('skills__close');     
    }
}));

/*==================== ABOUT TABS ====================*/
const tabs = document.querySelectorAll('[data-target]');
const tabContent = document.querySelectorAll('[data-content]');

tabs.forEach(tab => tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach(content => content.classList.remove('about__active'));

    target.classList.add('about__active');

    tabs.forEach(tab => tab.classList.remove('about__active'));

    tab.classList.add('about__active');
}));

/*==================== ABOUT MODAL ====================*/
const modalViews = document.querySelectorAll('.modal');
const modalBtns = document.querySelectorAll('.modal-btn');
const modalCloses = document.querySelectorAll('.modal__close');

modalBtns.forEach((item, index) => item.addEventListener('click', () => modalViews[index].classList.add('active-modal')));

modalCloses.forEach((item) => item.addEventListener('click', () => modalViews.forEach(modal => modal.classList.remove('active-modal'))))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.add('menu__link--active')
        }else{
            document.querySelector('.menu a[href*=' + sectionId + ']').classList.remove('menu__link--active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 80 ? nav.classList.add('scroll-header') : nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scrollup');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll-top class
    (this.scrollY >= 560) ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-toggle')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
