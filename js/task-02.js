const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients');

const createIngredientsList = ingredients.map(element => {
  const ingredientItemEl = document.createElement('li');
ingredientItemEl.classList.add('item');
  ingredientItemEl.textContent = element;
  return ingredientItemEl;
})
  
listEl.append(...createIngredientsList);