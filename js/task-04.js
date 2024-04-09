let counterValue = 0;

const container = document.getElementById("counter");
container.addEventListener("click", (event) => {
    const action = event.target.dataset.action;
    if (action === "decrement") {
        counterValue--;
    } else if (action === "increment") {
        counterValue++;
    }
    document.getElementById("value").innerHTML = counterValue;
})
