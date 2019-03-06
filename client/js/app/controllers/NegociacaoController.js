class NegociacaoController {
	
	constructor(){
		let $ = document.querySelector.bind(document);
		this._inputData = $("#data");
		this._inputQuantidade = $("#quantidade");
		this._inputValor = $("#valor");
		this._listaNegociacoes = new ListaNegociacoes();
	}

	adiciona(event){
		
		event.preventDefault();
				
		this._listaNegociacoes.adiciona( this._criaNegociacao() );
		this._limparFormulario();

		console.log(this._listaNegociacoes.negociacoes);		
	}
	
	/* Metódo auxiliar => Por padrão não deve ser chamado fora da classe */
	_criaNegociacao(){
		return new Negociacao(
			DateHelper.textoParaData(this._inputData.value),
			this._inputQuantidade.value,
			this._inputValor.value
		);
	}
	
	/* Metódo auxiliar => Por padrão não deve ser chamado fora da classe */
	_limparFormulario(){
		this._inputData.value = '';
		this._inputQuantidade.value = 1;
		this._inputValor.value = 0.0;

		this._inputData.focus();
	}

}