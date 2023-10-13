/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
    const word = [...magazine];
    for(let index = 0; index < ransomNote.length; index++){
        char = ransomNote[index];
        if(word.includes(char)){
            word.splice(word.indexOf(char),1);
        }
        else return false;
    }
    return true;
};