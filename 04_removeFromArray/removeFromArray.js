const removeFromArray = function(array, ...args) {
    
    for(const argument of args){
        for(let i = 0; i < array.length; i++){
            if(array[i] === argument){
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
