//Criando a lista do tipo array com os campos disponíveis no formulario
var campos = [
	document.querySelector("#data"),
	document.querySelector("#quantidade"),
	document.querySelector("#valor")
];

//Pego o valor do tbody
var tbody = document.querySelector("table tbody");

//Acrescento uma função submit ao formulario
document.querySelector('.form').addEventListener('submit', function(event){
	
	event.preventDefault();

	//Crio uma coluna para vincular as tds abaixo
	var tr = document.createElement("tr");

	//Faço um foreach dentro de campos para listar
	campos.forEach(function(campo){
		var td = document.createElement("td");
		td.textContent = campo.value;
		tr.appendChild(td);
	})
	
	var tdVolume = document.createElement("td");
	tdVolume.textContent = campos[1].value * campos[2].value;
	
	tr.appendChild(tdVolume);
	tbody.appendChild(tr);

	campos[0].value = "";
	campos[1].value = 1;
	campos[2].value = 0;

	campos[0].focus();

});

