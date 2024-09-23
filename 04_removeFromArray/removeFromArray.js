const removeFromArray = function(array, ...remove) {
    let result = [...new Set(array)] 
    for(removeValue of remove){
        if(result.includes(removeValue)){
            let removeIt = result.indexOf(removeValue)
            result.splice(removeIt,1)            
        }
        
    }
    

    return result    
};

console.log(removeFromArray([1,2,3,4],1, 2 , 3, 4))

// Do not edit below this line
module.exports = removeFromArray;
