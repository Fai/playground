const isSorted = numberArray => {
    for(i=0 ; i < numberArray.length - 1 ; i++){
        if(numberArray[i] > numberArray[i+1]) return false;
    }
    return true;
}
const testArray = [4,5,6,1];
console.log(isSorted(testArray));

export default isSorted;