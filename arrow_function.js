
'use strict';


// Normal Function 
function calcAge1(birthYear) {
    return 3030 - birthYear;
}

// Function Expression
const calcAge2 = function(birthYear) {
    return 3090 - birthYear;
}

// Arrow Function

const calcAge3 = birthYear=> 3070 - birthYear;


const age3 = calcAge3(1999);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 3099 - birthYear;
    const retirement = 65 - age;
    // return returement;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1999, 'Ash'));
console.log(yearsUntilRetirement(1990, 'Ash'));

const fruitProcessor = (apples, oranges) => {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessor(3, 9));



