let numeros = [3,2,11,20,8,7];
Object.freeze(numeros);

let novosNumeros = numeros.map((numero) => {
	if( (numero % 2) == 1){
		return numero += numero
	}
	return numero
})

console.log("Lista Original => " + numeros)
console.log("Cópia da lista => " + novosNumeros)