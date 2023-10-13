// Given two strings, write a program to check if they are anagrams of each other.

const charCount = (str) =>{
    const sortString = [...str].sort().join("")
    const wordCount = {};
    for(let index = 0; index < sortString.length ; index ++){
        if(!wordCount[sortString[index]]) wordCount[sortString[index]] = 1;
        else wordCount[sortString[index]]++;
    }
    return wordCount;
}

const isAnagram = (str1,str2) => {
    if(JSON.stringify(charCount(str1)) === JSON.stringify(charCount(str2))) return true;
    else return false;
}

console.log(isAnagram('silent','listen'));