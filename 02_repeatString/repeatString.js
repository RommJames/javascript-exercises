const repeatString = function(text, num) {
    let result = ""
    if(num < 0){
        result = "ERROR"
    }
    for(let ctr = 1; ctr <= num; ctr++){

        result += text
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
