/**
 * Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
 * The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 * Constraints:
 * fn is a functio
 * args is a valid JSON array
 * 1 <= args.length <= 10
 * 30 <= t <= 100
 * 10 <= cancelT <= 500
 */
const cancellable = function(fn, args, t) {
    // called with args immediately
    fn(...args); 
    let time = 0;
    // called again every t milliseconds
    let interval = setInterval(() => {
        time += t;
        fn(...args);
    }, t);
    return function(cancelT) {
        clearInterval(interval);
    };
};
// Runtime : Beats 95.36% of users with JavaScript
// Memory : Beats 97.15% of users with JavaScript
/**
 *  const result = []
 *
 *  const fn = (x) => x * 2
 *  const args = [4], t = 35, cancelT = 190
 *
 *  const start = performance.now()
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start)
 *      result.push({"time": diff, "returned": fn(...argsArr)})
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *   
 *  setTimeout(() => {
 *    console.log(result)  // [
 *                         //      {"time":0,"returned":8},
 *                         //      {"time":35,"returned":8},
 *                         //      {"time":70,"returned":8},           
 *                         //      {"time":105,"returned":8},
 *                         //      {"time":140,"returned":8},
 *                         //      {"time":175,"returned":8}
 *                         //  ]
 *  }, cancelT + t + 15)    
 */