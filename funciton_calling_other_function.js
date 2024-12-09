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