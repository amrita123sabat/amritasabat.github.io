// Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });

        // Close the mobile menu after clicking a link
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu.classList.contains('show')) {
            mobileMenu.classList.remove('show');
        }
    });
});

// Animate Skill Bars
window.addEventListener('load', function() {
    const skillBars = document.querySelectorAll('.progress-bar');
    skillBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill');
        bar.style.width = skillValue;
    });
});

// Toggle Mobile Menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}


