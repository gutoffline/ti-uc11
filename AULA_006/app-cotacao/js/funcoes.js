$(".tabs").tabs();

function Cotacao(){
    let moeda = $("#moeda").val();
    let url = "https://economia.awesomeapi.com.br/json/list/" + moeda;
    $.getJSON(url , function(dados){
        $("#cotacao").val(dados[0].high);
    });
}

function Converter(){
    let moedaConverter = $("#moeda-converter").val();
    let valorReais = $("#valor-reais").val();
    let url = "https://economia.awesomeapi.com.br/json/list/" + moedaConverter;
    let cotacao = 0;
    $.getJSON(url, function(dados){
        cotacao = dados[0].high;
        let total = valorReais / cotacao;
        $("#valor-convertido").val(total.toFixed(2));
    });
}