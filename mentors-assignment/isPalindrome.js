// Given a string, write a program that checks if it is a palindrome.

const isPalindrome = (str) => {
    const reverseStr = [...str].reverse().join("")
    if(str === reverseStr) return true;
    else return false;
}

console.log(isPalindrome('racecar'));