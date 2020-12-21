/*
JSON e o XML trocar informações entre sistemas

https://viacep.com.br/ws/13455186/json

{
  "cep": "13455-186",
  "logradouro": "Rua Noruega",
  "complemento": "de 1/2 a 99998/99999",
  "bairro": "Jardim Cândido Bertini",
  "localidade": "Santa Bárbara D'Oeste",
  "uf": "SP",
  "ibge": "3545803",
  "gia": "6063",
  "ddd": "19",
  "siafi": "7017"
}

JSON --> Javascript Object Notation

*/

function PesquisarCep(){
    let cep = $("#cep").val();
    let url = "https://viacep.com.br/ws/" + cep + "/json";
    console.log(url);

    $.getJSON(url, function(dados){
        console.dir(dados);
        
        $("#endereco").html("");
        $("#endereco").append("Endereço: " + dados.logradouro + "<br>");
        $("#endereco").append("Bairro: " + dados.bairro + "<br>");
        $("#endereco").append("Cidade: " + dados.localidade + "<br>");
        $("#endereco").append("Estado: " + dados.uf + "<br>");
    });
}