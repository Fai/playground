/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const num = parseInt(readline());
let location = "";
for (let i = 0; i < num; i++) {
    const folder = readline();
    location += folder + '/';
}
const filename = readline();
location += filename;
const extension = readline();
location += '.'+extension;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(location);
