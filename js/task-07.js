const handlerInput = document.querySelector('#font-size-control');
const handlerSpan = document.querySelector('#text');

handlerInput.addEventListener('input', (event) => {
    const inputValue = event.target.value;
    handlerSpan.style.fontSize = `${inputValue}px`;
});