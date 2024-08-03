let blue;
let red;
let yellow;

// solution 1 nested loop
const calculateCheck = () => {
    for (blue = 0 ; blue <= 9 ; blue ++) {
        for(red = 0 ; red <= 9 ; red ++) {
            for (yellow = 0 ; yellow <= 9 ; yellow ++){
                if (blue == red || blue == yellow || red == yellow) {
                    continue;
                } else {
                    let calNum = 3 * ( 100 * blue + 10 * red + yellow );
                    let expectNum = 100 * red + 10 * red + red ;
                    if(calNum == expectNum){
                        return true;
                    }
                }
            }
        }
    }
}
// solution 2

calculateCheck();

// answer 

let green = blue * red * yellow;

console.log(`${blue} ${red} ${yellow} +`);
console.log(`${blue} ${red} ${yellow} +`);
console.log(`${blue} ${red} ${yellow} =`);
console.log(`${red} ${red} ${red}`);

console.log(`${blue} + ${red} + ${yellow} = ${green}`);