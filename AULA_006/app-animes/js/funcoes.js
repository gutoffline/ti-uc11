function ListarAnimes(){
    let nomeAnime = $("#anime").val();
    let imagem = "", titulo = "", avaliacao = 0, tipo = "";
    let url = "https://api.jikan.moe/v3/search/anime?q=" + nomeAnime;
    // let url = "https://api.jikan.moe/v3/season/2021/spring";
    let card = "";

    $("#lista-animes").html("");

    $.getJSON(url, function(dados){

        let resultados = dados.results;
        // let resultados = dados.anime;

        for(let i = 0 ; i < resultados.length; i++){
            card = "";

            imagem = resultados[i].image_url;
            titulo = resultados[i].title;
            avaliacao = resultados[i].score;
            tipo = resultados[i].type;

            // INICIO MONTAGEM DO CARD
            card += "<div class='col s12'>";
            card += '<div class="card">';
            card += '<div class="card-image">';
            card += '<img src="'+ imagem +'">';
            card += '</div>';
            card += '<div class="card-content">';
            card += '<span class="card-title">' + titulo + '</span>';
            card += '<p>';
            card += 'Avaliação: ' + CriarEstrelas(avaliacao) + '<br>';
            card += 'Tipo: ' + tipo;
            card += '</p>';
            card += '</div>';
            card += '</div>';
            card += '</div>';

            // FIM MONTAGEM DO CARD

            $("#lista-animes").append(card);
        }
    });
}

function CriarEstrelas(avaliacao){
    let estrelas = "";
    for(let i = 0 ; i < parseInt(avaliacao); i=i+2){
        estrelas += "&#x2B50;";
    }

    return estrelas;
}