class Helper {

	CaixaAlta(texto){
		return String(texto).toUpperCase();
	}
	
	textoParaArray(texto){
		return texto.split("/").map( (item) => item );
	}

}