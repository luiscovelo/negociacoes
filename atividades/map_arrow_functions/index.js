/*
let dobro = numeros.map(function(num) {
    return num * 2;
});
let metade = numeros.map(function(num) {
    return num/2;
});
let raiz = numeros.map(function(num) {
    return Math.sqrt(num);
});
*/

let numeros = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121];

let dobro = numeros.map( num => num * 2 );
let metade = numeros.map( num => num/2 );
let raiz = numeros.map( num => Math.sqrt(num) );

console.log("Original: " + numeros);

console.log("Dobro: " + dobro);
console.log("Metade: " + metade);
console.log("Raiz: " + raiz);