const sort = numArray => {
    for (let last = numArray.length; last > 0 ; last--)
    {   
        let temp;
        for(let i=0; i < last; i++){
            if(numArray[i] > numArray[i+1]){
                temp = numArray[i];
                numArray[i] = numArray[i+1];
                numArray[i+1] = temp;
            }
        }
    }
    return numArray;
}

const findMedian = numArray => {
    let size = numArray.length;
    sort(numArray);
    if(size % 2) return numArray[Math.floor(size/2)];
    else {return (numArray[size/2]+numArray[(size/2)-1]) / 2};
}

const test1 = [9,5,3,1,4];
const test2 = [10,8,6,4,2,1];
console.log(findMedian(test1))
console.log(findMedian(test2))