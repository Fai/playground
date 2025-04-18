// you can write to stderr for debugging purposes, e.g.
// process.stderr.write('this is a debug message');

function solution(N) {
    // Implement your solution here
    for(let index = 1; index <= N; index ++) {
        let powerOfTwo = 1
        let isPowerOfTwo = false;
        while (powerOfTwo <= index) {
            if (powerOfTwo === index) isPowerOfTwo = true;
            powerOfTwo *= 2;
        }
        if (isPowerOfTwo === true) {
        console.log('POWER');
        } else {
        console.log(index);
        }
    }
}


solution(7);
solution(16);