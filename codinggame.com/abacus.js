let result = 0;
for (let i = 0; i < 9; i++) {
    const ROW = readline();
    const x = 10 - ROW.indexOf('-');
    console.error(x);
    const n = 6 - i;
    console.error(n)
    result += x * Math.pow(10, n);
    console.error(result)
}
console.log(result.toFixed(2));