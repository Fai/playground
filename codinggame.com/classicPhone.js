/**
 Older phones didn't have touchscreens, so writing messages was done on a keypad.
Today, this system is but a relic of the past, but let's use it once more to encode small messages!

The keypad we will be using is the following:
- '2' for ABC
- '3' for DEF
- '4' for GHI
- '5' for JKL
- '6' for MNO
- '7' for PQRS
- '8' for TUV
- '9' for WXYZ

We don't want the digits in the original message to be mixed up with the digits we use to represent the letters.
As such, the digits already used in our system will all be replaced by '_' (underscore).
We don't use '0' and '1' so these two don't need to be changed.
All the other characters (spaces, punctuation, etc) must remain unchanged.
Uppercase and lowercase letters are treated the same.

You'll receive a message as a string S and will need to print out its encoded version.
 */

const S = readline();
let R="";
for (let i = 0 ; i<S.length ; i++) {
    let c = S[i];
    if(c.match(/[ABCabc]/)) R+= '2';
    else if(c.match(/[DEFdef]/)) R+='3';
    else if(c.match(/[GHIghi]/)) R+='4';
    else if(c.match(/[JKLjkl]/)) R+='5';
    else if(c.match(/[MNOmno]/)) R+='6';
    else if(c.match(/[PQRSpqrs]/)) R+='7';
    else if(c.match(/[TUVtuv]/)) R+='8';
    else if(c.match(/[WXYZwyz]/)) R+='9';
    else if(c.match(/[0123456789]/)) R+='_';
    else if(c.match(/_/)) R+='0';
    else R+= c;
    console.error(c, R);
}

console.log(R);
