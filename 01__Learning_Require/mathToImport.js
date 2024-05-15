
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

// The below method should not be used as add will be overwritten the only subtract will get export ___
// module.exports = add;                                                                               |
// module.exports = subtract;                                                                          |
// ____________________________________________________________________________________________________|

// _____  01 _______________________
// module.exports = {               //|           
    // add,                         //|           
    // subtract                     //|       
// }                                //|       
// ________________________________|


// _____  02  _______________________
module.exports = {               //|           
    myyAdd: add,                 //|           
    myySub: subtract             //|       
}                                //|       
// ________________________________|

module.exports.multiply = (a,b) => a*b;