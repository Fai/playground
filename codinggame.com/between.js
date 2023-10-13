/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const X = parseInt(readline());
const N = parseInt(readline());

const between = (num, min, max) => {
    return num >= min && num <= max;
}

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const F = parseInt(inputs[0]);
    const T = parseInt(inputs[1]);
    const category = inputs[2];
    if(between(X,F,T)) {
        console.log(category);
        return;
    }
}
