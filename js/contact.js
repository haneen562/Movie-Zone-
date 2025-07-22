// js/contact.js
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show success message
    const alertDiv = document.getElementById('alert-message');
    alertDiv.textContent = 'Your message has been sent successfully! Thank you for contacting us.';
    alertDiv.className = 'alert success';
    alertDiv.classList.remove('hidden');

    // Hide message after 5 seconds
    setTimeout(() => {
        alertDiv.classList.add('hidden');
    }, 5000);

    // Reset form
    this.reset();
});