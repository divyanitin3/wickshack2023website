const foodOptions = [
  "Burgers",
  "Tacos",
  "Hot Dogs",
  "Fries",
  "Smoothies"
];

const list = document.querySelector("#food-options");

foodOptions.forEach(food => {
  const item = document.createElement("li");
  item.textContent = food;
  list.appendChild(item);
});