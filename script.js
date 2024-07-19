document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = `Thank you, ${name}! We will get back to you at ${email}.`;
    document.getElementById('form-message').innerText = message;
});
