const palindromes = function (word) {
    let validChar = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
    let splitWord = word.toLowerCase().split("");
    let checkValidChar = splitWord.filter((char) => validChar.includes(char));
    let origWord = checkValidChar.join("");
    let reverse = checkValidChar.reverse().join("");
    
    console.log(origWord, "------", reverse);
    return origWord === reverse;
    console.log(checkValidChar);
};
console.log(palindromes("r3ace3car"));

// Do not edit below this line
module.exports = palindromes;
