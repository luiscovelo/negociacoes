class NegociacaoController {
	
	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
	}

	adiciona(event){
		
		event.preventDefault();
		
		let data = new Date(
			...this._inputData.value
				.split("-")
				.map((item, index) => item - index % 2)
		);

		let negociacao = new Negociacao(
			data,
			this._inputQuantidade.value,
			this._inputValor.value
		);
		
		this.limparFormulario();
		console.log(negociacao);
	}
	
	limparFormulario(){
		let $ = document.querySelector.bind(document);
		$("#data").value = '';
		$("#quantidade").value = 1;
		$("#valor").value = 0.0;

		$("#data").focus();
	}

}