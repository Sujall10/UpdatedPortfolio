
document.querySelector('.scroll-up').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// document.getElementById('contact').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Validate form values (basic validation)
//     if (name === '' || email === '' || message === '') {
//         displayStatusMessage('All fields are required.', 'error');
//         return;
//     }

//     // Simulate form submission (you can replace this with an actual form submission)
//     setTimeout(() => {
//         displayStatusMessage('Message sent successfully!', 'success');
//     }, 5000);
// });

// function displayStatusMessage(message, type) {
//     const statusMessage = document.getElementById('statusMessage');
//     statusMessage.textContent = message;
//     statusMessage.className = type;
// }