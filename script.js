// Select the contact form
const form = document.querySelector('form');

// Add an event listener to handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page
    
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;

    // Basic validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        form.reset(); // Clear the form after submission
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
