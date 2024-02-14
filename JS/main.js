document.addEventListener('DOMContentLoaded', function () {
    // Form submission handling
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Log form data to the console
        console.log('Form Data:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

    });
});
