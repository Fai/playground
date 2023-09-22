const divisibleSuffix = (divisible, suffix) => {
    const number = [];
    for (count = 1; count <= 100 ; count++){
        if(count % divisible === 0 && count % 10 === suffix) number.push(count)
    };
    return number;
}

console.log(divisibleSuffix(3,5));