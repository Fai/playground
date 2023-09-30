// const metals = readline();
// const m = metals.split(' ')
// let Ag = parseInt(m[1]);
// let Pb = parseInt(m[3]);
// let Au = parseInt(m[5]);

function sellMetals(Ag,Pb,Au) {
    console.log(Ag,Pb,Au)
    let value = (Ag * 10) + (Au * 100);
    let Gold = (Math.round(Au/2));
    let Fake = 0;
    while (Fake < (Fake+Gold)/2) {
        value += 100;
        Fake += 1;
    }
    value += (Pb - Fake);
    console.log(`Sell ${Au} Gold, ${Ag} Silver, ${Fake} fake gold and ${Pb-Fake} lead`);
    console.log(`Make ${value} coins today`);
}

// sellMetals(27,20,30);