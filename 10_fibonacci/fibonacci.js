const fibonacci = function(num) {
    let first = 0
    let second = 1
    let total = num == 1 ? 1 : 0;
    for (let i = 1; i < num; i++) {                
        total = first + second
        first = second
        second = total
    }
    console.log(total);
    return num < 0 ? "OOPS" : total;
};
console.log(fibonacci(1));

// Do not edit below this line
module.exports = fibonacci;
