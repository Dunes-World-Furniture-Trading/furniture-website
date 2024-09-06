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

    // Simple cart functionality
    const addToCartButtons = document.querySelectorAll('.product-card button');
    let cartItems = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItems++;
            alert(`Item added to cart. You have ${cartItems} item(s) in your cart.`);
        });
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });
});
