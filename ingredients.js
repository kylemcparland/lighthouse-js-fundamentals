const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

// Problem #1: Write a while loop that prints out the contents of ingredients:

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Problem #2: Write a for loop that prints out the contents of ingredients:

for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Problem #3: Write any loop (while or for) that prints out the contents of ingredients backwards:

console.log("---break---");

for (let i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}

console.log("---break---");

i = ingredients.length - 1;
while (i > 0) {
  i--;
  console.log(ingredients[i]);
}