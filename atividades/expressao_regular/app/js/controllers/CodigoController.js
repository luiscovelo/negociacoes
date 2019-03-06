class CodigoController {
	
	constructor(){}

	informarCodigo(inputCodigo){
			
		this._Codigo(inputCodigo);

	}
	
	_Codigo(item){
		
		let codigo = new Codigo(item);
		console.log(codigo.validarCodigo());

	}
	
}