
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "" || password === "") {
        return console.log("Please fill in all the fields!");
    }
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
}