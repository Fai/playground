function findX(EQ) {
    console.log(EQ);
    let [e, a] = EQ.split('=');
    a = parseInt(a);
    let m = 1;
    for (let i = 1; i < e.length ; i ++) {
        let c = e[i];
        if (c == 'x') break;
        if (c == '-') m = 1;
        else if (c == '+') m = -1;
        else a += m * parseInt(c);
    }
    console.log('x:', a);
}
findX('x+2=5');
findX('x-2=5');
findX('x-2+3=5');