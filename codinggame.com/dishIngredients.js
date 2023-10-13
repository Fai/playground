/**
 * const data = readline();
 * "CaKe;102,108,111,117,114+101,103,103,115+109,105,108,107" => "Cake ingredients are flour, eggs, milk"
 **/
const data = "CaKe;102,108,111,117,114+101,103,103,115+109,105,108,107";
// Write an answer using console.log()
// To debug: console.error('Debug messages...');
// console.log('🍰'); NEVER GIVEUP :)

const [dish, raw] = data.split(';')
let ingredients = '';
raw.split('+').forEach(ingredient => 
    ingredients += ingredient.split(',').map(code => String.fromCharCode(code)).join('') + ', '
);
// remove the last character
ingredients = ingredients.slice(0, -2);
console.log(`${dish} ingredients are ${ingredients}.`)