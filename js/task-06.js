const textInput = document.querySelector('#validation-input');
textInput.addEventListener('blur', (event) => {
    const textLength = event.target.value.length;
    const dataLength = parseInt(event.target.dataset.length);
    if (textLength == dataLength) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid');
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
});