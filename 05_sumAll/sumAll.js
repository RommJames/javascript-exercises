const sumAll = function(first, last) {
    let sum = 0
    let holder
    let lessZero = first < 0 || last < 0
    let checkInt = !Number.isInteger(first) || !Number.isInteger(last) || Array.isArray(first) || Array.isArray(last)

    if(last < first){
        holder = first
        first = last
        last = holder
    }    
    if(lessZero || checkInt){        
        console.log(checkInt)
        return "ERROR"
    }

    for(let ctr = first; ctr <= last; ctr++){
        sum += ctr;
    }

    return sum
};

console.log(sumAll(123, 1))

// Do not edit below this line
module.exports = sumAll;
