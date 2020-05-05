let fruits = ['Pomme','Banane','Poire','Orange'];
let myArray = [[1,2],[7,8,9],[13,14]]; // Définir un array

for(let i = 0 ; i < fruits.length ; i++ ){ // Boucle for

    console.log(fruits[i])
};


let agrumes = fruits.slice(2,4);

fruits.push('Kiwwi');

console.log(fruits);
console.log(agrumes);
console.log(myArray[1][2]);