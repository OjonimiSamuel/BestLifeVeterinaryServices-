// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Form Validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            const inputs = form.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(input => {
                if (input.required && !input.value.trim()) {
                    input.classList.add('is-invalid');
                    valid = false;
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (!valid) {
                event.preventDefault(); // Prevent form submission if validation fails
                alert('Please fill in all required fields.');
            }
        });
    }

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Navigation Toggle
    const navbarToggle = document.querySelector('.navbar-toggler');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', () => {
            const navbarMenu = document.querySelector('.navbar-collapse');
            navbarMenu.classList.toggle('show');
        });
    }

    // Back to Top Button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = 'Back to Top';
    backToTopBtn.className = 'btn btn-primary btn-back-to-top';
    document.body.appendChild(backToTopBtn);

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    // Dynamic Content for Home Page
    const homeSection = document.querySelector('.home');
    if (homeSection) {
        const content = `
            <h2>Welcome to Our Veterinary Clinic</h2>
            <p>We are passionate about providing the best care for your furry friends. Your support will help us open our doors and offer top-notch veterinary services.</p>
            <p>Our mission is to enhance the well-being of animals through compassionate care and expert services. Please help us by spreading the word and encouraging others to contribute.</p>
            <ul>
                <li><strong>Why Donate?</strong> Your contribution helps us with essential startup costs, including facility rental and medical supplies.</li>
                <li><strong>How You Can Help:</strong> Share our mission with friends and family and encourage them to support our cause.</li>
            </ul>
        `;
        homeSection.innerHTML += content;
    }
});
