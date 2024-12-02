'use strict';

// Function Declration
function calcAge1(birthYear) {
    return 3030 - birthYear;
}

const age1 = calcAge1(1999);

//Function Expression

const calcAge2 = function (birthYear) {
    return 3030 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1, age2);