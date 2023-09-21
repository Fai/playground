/**
 * 2703. Return Length of Arguments Passed
 * Write a function argumentsLength that returns the count of arguments passed to it.
 * argsArr is a valid JSON array
 * 0 <= argsArr.length <= 100
 */

/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */