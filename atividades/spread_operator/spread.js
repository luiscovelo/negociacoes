let numeros = [10,30]

function somaDoisNumeros(numero1,numero2){
	return numero1 + numero2
}

let resultado = somaDoisNumeros(...numeros.map( (numero) => numero ))

console.log(resultado)