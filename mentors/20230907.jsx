//  finds the missing numbers in an array of integers with a length of N and all integers from 1 to N present except for K missing integers. The program should return a list of the missing integers in ascending order.

const findMissingNumbers= (numArray) => {
    const missing = Array.from(Array(numArray.length).keys())
    numArray.forEach(element => {
        missing[element-1] = 0;
    });
    return missing.filter(e => e!=0).map(e => e+1);
}

console.log(findMissingNumbers([1,2,3,3])); 
console.log(findMissingNumbers([3,3,1,3])); 

// Given two arrays, write a program that checks if they contain any duplicate elements. 

const isDuplicate = (object1, object2) => {
    for (let element1 in object1){
        for (let element2 in object2)
        if(element1 === element2) return true;
    }
    return false;
}

const isDuplicate2 = (object1, object2) => {
    const element1 = Object.values(object1);
    const element2 = Object.values(object2);
    const combined = new Set([...element1, ...element2]);
    return combined.size < (element1.length + element2.length);
}

const animal1 = {cat: 'meow', dog: 'woof', snake: 'hiss'}
const animal2 = {cat: 'meowmeow', dog: 'woofwoof', snake: 'hiss'}

console.log(isDuplicate(animal1, animal2));
console.log(isDuplicate2(animal1, animal2));