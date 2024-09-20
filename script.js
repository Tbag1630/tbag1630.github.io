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

            // Accessibility
            const expanded = burger.getAttribute('aria-expanded') === 'true' || false;
            burger.setAttribute('aria-expanded', !expanded);
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
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            });
        });
    };

    // Form Submission and Validation
    const handleContactForm = () => {
        const form = document.getElementById('contact-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validateForm()) {
                // Here you would typically send the form data to a server
                // For this example, we'll just log it to the console
                const formData = new FormData(form);
                console.log('Form submitted with data:', Object.fromEntries(formData));
                form.reset();
                alert('Thank you for your message! I will get back to you soon.');
            }
        });
    };

    const validateForm = () => {
        const nameInput = document.querySelector('input[name="name"]');
        const emailInput = document.querySelector('input[name="email"]');
        const messageInput = document.querySelector('textarea[name="message"]');
        let isValid = true;

        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required');
            isValid = false;
        } else {
            removeError(nameInput);
        }

        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        } else {
            removeError(emailInput);
        }

        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required');
            isValid = false;
        } else {
            removeError(messageInput);
        }

        return isValid;
    };

    const showError = (input, message) => {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message') || document.createElement('small');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        if (!formControl.querySelector('.error-message')) {
            formControl.appendChild(errorElement);
        }
        input.classList.add('error');
    };

    const removeError = (input) => {
        const formControl = input.parentElement;
        const errorElement = formControl.querySelector('.error-message');
        if (errorElement) {
            formControl.removeChild(errorElement);
        }
        input.classList.remove('error');
    };

    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
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

    // Lazy Loading Images
    const lazyLoadImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    };

    // Scroll-to-Top Button
    const scrollToTop = () => {
        const scrollBtn = document.createElement('button');
        scrollBtn.innerHTML = '&uarr;';
        scrollBtn.className = 'scroll-to-top';
        document.body.appendChild(scrollBtn);

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    // Project Filtering
    const setupProjectFilter = () => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                projects.forEach(project => {
                    if (filter === 'all' || project.classList.contains(filter)) {
                        project.style.display = 'block';
                    } else {
                        project.style.display = 'none';
                    }
                });

                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
    };

    // Dark Mode Toggle
    const setupDarkMode = () => {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
        });

        // Check for saved dark mode preference
        if (localStorage.getItem('darkMode') === 'true') {
            body.classList.add('dark-mode');
        }
    };

    // Initialize all functions
    navSlide();
    smoothScroll();
    handleContactForm();
    highlightCode();
    observeSections();
    lazyLoadImages();
    scrollToTop();
    setupProjectFilter();
    setupDarkMode();
});
