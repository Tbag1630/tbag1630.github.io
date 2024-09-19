document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });

    // Dynamically update years of experience
    const currentYear = new Date().getFullYear();
    const yearsSincePhD = currentYear - 2018; // Assuming PhD was completed in 2018
    const heroSubtitle = document.querySelector('.hero h2');
    heroSubtitle.textContent += ` | ${yearsSincePhD}+ Years Experience`;

    // Add a simple animation to reveal skills
    const skillCategories = document.querySelectorAll('.skill-category');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillCategories.forEach(category => {
        category.style.opacity = 0;
        category.style.transform = 'translateY(20px)';
        category.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(category);
    });
});