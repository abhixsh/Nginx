document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('testButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'This web page runs on Nginx!';
    });
});