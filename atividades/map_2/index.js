let funcionarios = [
    {
        "nome": "Douglas",
        "endereco" : "Rua da esquina, 123",
        "salario" : "4500"
    },
    {
        "nome": "Felipe",
        "endereco" : "Rua da virada, 456",
        "salario" : "5000"
    },
    {
        "nome": "Silvio",
        "endereco" : "Rua da aresta, 789",
        "salario" : "6000"
    }
];

let conteudo = funcionarios.map( fun => `
    <tr>
        <td>${fun.nome}</td>
        <td>${fun.endereco}</td>
        <td>R$ ${fun.salario}</td>
    </tr>
`).join('')

document.querySelector("#conteudo").innerHTML = conteudo