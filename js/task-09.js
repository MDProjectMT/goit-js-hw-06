function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const handlerBody = document.querySelector("body");
const changeColor = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

changeColor.addEventListener("click", backgroudColor);
function backgroudColor(event) {
  const newColor = getRandomHexColor();
  spanColor.innerHTML = newColor;
  handlerBody.style.backgroundColor = `${newColor}`;
}