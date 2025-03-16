// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');

mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Testimonial Slider
const testimonialContainer = document.querySelector('.testimonial-container');
const dots = document.querySelectorAll('.slider-dot');
let currentSlide = 0;

function showSlide(index) {
    testimonialContainer.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentSlide = index;
}

// Set up click events for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto slide
setInterval(() => {
    let nextSlide = (currentSlide + 1) % dots.length;
    showSlide(nextSlide);
}, 5000);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// Form submission
const form = document.getElementById('appointment-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would normally send the form data to a server
    alert('La tua richiesta è stata inviata! Ti contatteremo presto.');
    form.reset();
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'white';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});