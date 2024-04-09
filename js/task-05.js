const handler = document.querySelector('#name-input');
handler.addEventListener("keyup", (ev) => {
    const userName = ev.target.value;
    const output = document.querySelector('#name-output');
    if (userName.length > 0) {
        output.innerHTML = userName;
    } else {
        output.innerHTML = "Anonymous";
    }
});