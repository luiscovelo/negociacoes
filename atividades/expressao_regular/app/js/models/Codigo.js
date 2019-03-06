class Codigo {

	constructor(codigo){
		
		this._codigo = codigo;

	}
	
	validarCodigo(){

		let expressao = /\D{3}-\D{2}-\d{2}/;
		if(expressao.test(this._codigo)){
			return "Código válido";
		}else{
			return "Código inválido";
		}

	}

}