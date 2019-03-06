class Helper {
	
	constructor(){
		throw new Error("Esta classe não pode ser instancia devido aos seus metodos serem estáticos.");
	}

	static CaixaAlta(texto){
		return String(texto).toUpperCase();
	}
	
	static textoParaArray(texto){
		return texto.split("/").map( (item) => item );
	}

}