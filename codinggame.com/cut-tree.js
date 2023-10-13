/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
/*
2 2
8
........
..+++...
++++++..
++#+++++
.++###++
..++#...
...#....
...#....
*/
/*
........
..+++...
--++++..
--#+++--
.-+###--
..++#...
...#....
...#....
*/

var inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const R = parseInt(inputs[1]);
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    let row = readline().split("");
    let left = row.splice(0,L).replace(/\+/g,'-');
    let middle = row.splice(L,row.length-R);
    let right = row.splice(row.length-R,R).replace(/\+/g,'-');
    row = left.concat(middle,right);
    console.log(row);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
/**
 * var inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const R = parseInt(inputs[1]);
const n = parseInt(readline());
for (let i = 0; i < n; i++) {
    const row = readline();
    console.log([...row].map((m,j) => {
        if (m === '+') {
            if (j < L || j >= n - R) {
                return '-'
            } else {
                return '+'
            }
        } else {
            return m
        }
    }).join(''))
}
 */