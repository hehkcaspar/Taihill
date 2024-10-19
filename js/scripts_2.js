// Sticky Navigation and Responsive Menu

document.addEventListener('DOMContentLoaded', function () {
    // Sticky Navigation
    const mainMenu = document.querySelector('.main-menu-container');
    const homeSection = document.querySelector('#home');

    window.addEventListener('scroll', function () {
        if (window.scrollY > homeSection.offsetHeight) {
            mainMenu.classList.add('sticky-top');
            mainMenu.style.transition = 'top 0.4s ease-in-out';
        } else {
            mainMenu.classList.remove('sticky-top');
        }
    });

    // Navigation Highlight on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    function setActiveNav() {
        let index = sections.length;
        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
        navLinks.forEach((link) => link.classList.remove('active'));
        if (navLinks[index]) {
            navLinks[index].classList.add('active');
        }
    }

    setActiveNav();
    window.addEventListener('scroll', setActiveNav);

    // Responsive Nav Toggle for Submenus
    const toggleNavButtons = document.querySelectorAll('.toggle_nav_button');
    toggleNavButtons.forEach(button => {
        button.addEventListener('click', function () {
            const subMenu = this.previousElementSibling;
            if (subMenu && subMenu.classList.contains('sub-menu')) {
                subMenu.classList.toggle('show');
                this.textContent = subMenu.classList.contains('show') ? '-' : '+';
            }
        });
    });

    // Collapse mobile menu on link click
    const navLinksCollapse = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navLinksCollapse.forEach((link) => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});