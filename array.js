'use strict';

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];

const years1 = new Array(1991, 1984, 2005, 2020);

console.log(friends[0]);

console.log(friends[0]);

console.log(friends.length);

console.log(friends[friends.length - 1]);// To find the last element


const firstName = 'Ahsan';
const ash = [firstName, 'Habib', 3099-1999, 'Software-Engineer', friends];
console.log(ash);
console.log(ash.length);


// Excercise 
const calcAge = function(birthYear) {
    return 2040 - birthYear;
}

const years = [1990, 1967, 2002, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);