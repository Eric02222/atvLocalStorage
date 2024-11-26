document.addEventListener('DOMContentLoaded', (event) => {
    // Código para carregar dados na tabela
    let dados = JSON.parse(localStorage.getItem('garagem')) || [];
    let tabela = document.getElementById('tabelaDados').getElementsByTagName('tbody')[0];
    for (let dado of dados) {
        let linha = tabela.insertRow();
        let celulaNome = linha.insertCell(0);
        let celulaMarca = linha.insertCell(1);
        let celulaAno = linha.insertCell(2);
        let celulaPlaca = linha.insertCell(3);
        celulaNome.innerHTML = dado.nome;
        celulaMarca.innerHTML = dado.marca;
        celulaAno.innerHTML = dado.ano;
        celulaPlaca.innerHTML = dado.placa;
    }

});
