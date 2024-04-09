const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elements = [];

ingredients.forEach(function (ingredient) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  elements.push(element);
});

const parent = document.getElementById("ingredients");
parent.append(...elements);
