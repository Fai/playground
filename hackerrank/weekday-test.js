'user strict';

function weekdayText(weekdays) {
    /**
     * @param {Array} weekdays which is an array of strings
     * return a function that take a single integer as an argument and return a string
     */

    return function getText(num) {
        /**
         * @param {number} num which is an integer
         * return the value that from the weekdays array
         * if number is out of range throws and Error message
         */
        if (num < 0 || num >= weekdays.length) {
            throw new Error('Invalid day');
        }
        else {
            return weekdays[num];
        }
    }
}