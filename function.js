'use strict';


function logger () { // first function that show output of this sentence.
    console.log("My name is Ash");
}


// callilng // running// invoking function
logger();
logger();
logger();


 function fruitProcessor(apples, oranges) {// function taking with arguments and then return the value to function .
     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

     return juice;
 }


 const appleJuice = fruitProcessor(3, 5);
 console.log(appleJuice);

 const appleOrangeJuice = fruitProcessor(2, 4);
 console.log(appleOrangeJuice);