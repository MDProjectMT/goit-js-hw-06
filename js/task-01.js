// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.

const categoriesCount = document.querySelectorAll('#categories .item').length;

console.log("Number of categories: " + categoriesCount);

// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).

const categories = document.querySelectorAll('#categories .item');

categories.forEach(function (category) {
    const categoryName = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;
    console.log("Category: " + categoryName + ", Elements: " + itemsCount);
});

