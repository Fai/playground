const n = parseInt(readline());
let S="0"
let R="";
for(let i=0 ; i<Math.sqrt(n) ; i++) {
    R = S.replace(/0/g,"X").replace(/1/g,"0").replace(/X/g,"1");
    S += R;
}
const A = S.split("").splice(0,n).join("");
console.log(A);
