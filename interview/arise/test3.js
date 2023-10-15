// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // Implement your solution here
    let lovely = 0;
    for(let index = A; index <= B; index ++) {
        const isLovely = new Array(10).fill(0);
        
        isLovely[Math.floor((index % 10)+1)] += 1;
        if ( index > 9 ) 
            isLovely[Math.floor((index % 100)/10)] +=1;
        if ( index > 99 )  
            isLovely[Math.floor((index % 1000)/100)] += 1;
        if ( index > 999 )
            isLovely[Math.floor((index % 10000)/1000)] += 1;
        if ( index > 9999)
            isLovely[Math.floor((index % 100000)/10000)] += 1;
        if ( index > 99999)
            isLovely[Math.floor((index % 1000000)/100000)] += 1;
        
        let notlovely = false;
        for (let i = 0 ; i < 10 ; i++){
            if(isLovely[i]>=3) {
                notlovely = true;
            }
        }
        if(notlovely === false) lovely += 1; 
    }
    return lovely;
}
