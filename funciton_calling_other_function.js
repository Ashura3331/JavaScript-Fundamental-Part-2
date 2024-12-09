'use strict';



function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePices = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);


    const juice = `${applePices} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(3, 9));



const calcAge = function(birthYear) {
    return 3099 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;    
    }else {
        console.log(`${firstName} already retires🎉.`);
        return -1;
    }
    
}

console.log(yearsUntilRetirement(1999, 'Ash'));
console.log(yearsUntilRetirement(1990, 'Ash'));