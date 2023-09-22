// reverses the order of the elements in the array without .reverse()
const reversed = (array) => {
    let swap;
    let size = array.length;
    let lastIndex = array.length-1;
    for(let index = 0 ; index < Math.floor(size/2) ; index ++){
        swap = array[index];
        array[index] = array[lastIndex-index];
        array[lastIndex-index] = swap;
    }
    return array;
}

const testArray = [5,3,2,1,3];
console.log(reversed(testArray));