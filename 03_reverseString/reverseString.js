const reverseString = function(word) {
    let result = []
    let wordArray = word.split("")    
    
    for(let ctr = wordArray.length - 1; ctr >= 0;ctr--){

        result.push(wordArray[ctr])        
    }
    

    return result.join("")
};

console.log(reverseString("sample"))

// Do not edit below this line
module.exports = reverseString;
