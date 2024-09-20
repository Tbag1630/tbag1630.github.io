document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');

            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });

            // Burger Animation
            burger.classList.toggle('toggle');
        });
    };

    // Smooth Scrolling
    const smoothScroll = () => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                const offsetTop = document.querySelector(href).offsetTop - 80; // Adjust for fixed header

                scroll({
                    top: offsetTop,
                    behavior: "smooth"
                });
            });
        });
    };

    // Form Submission
    const handleContactForm = () => {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            const formData = new FormData(form);
            console.log('Form submitted with data:', Object.fromEntries(formData));
            form.reset();
            alert('Thank you for your message! I will get back to you soon.');
        });
    };

    // Syntax Highlighting for Code Samples
    const highlightCode = () => {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    };

    // Intersection Observer for Animations
    const observeSections = () => {
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });
    };

    // Initialize all functions
    navSlide();
    smoothScroll();
    handleContactForm();
    highlightCode();
    observeSections();
});
