class ArquivoController {

	constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        
        //Deixando o valor em caixa alta
		let inputArquivo = Helper.CaixaAlta(this._inputDados.value);
		//Separando as informações do input para array
		let arrayInputArquivo = Helper.textoParaArray(inputArquivo);
		
		//Criando uma instancia do arquivo passando as informações do mesmo
		let arquivo = new Arquivo(...arrayInputArquivo);
		
		//Mostro ao usuario as informações do arquivo
        this._mostrarInformacoes(arquivo);
		this._limpaFormulario();
    }
	
	_mostrarInformacoes(arquivo){
		alert(`Nome do arquivo: ${arquivo.nome} | Tipo: ${arquivo.tipo} | Tamanho: ${arquivo.tamanho}`);
	}

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }

}