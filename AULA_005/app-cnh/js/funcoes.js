function Salvar(){
    let nome = $("#nome").val();
    let telefone = $("#telefone").val();
    let idade = $("#idade").val();

    if(idade < 18){
        alert("Você ainda não tem 18 anos. Espere um pouco.");
        return;
    }

    if(nome != "" && telefone != ""){
        $("#lista-espera").append("<li>" + nome + " - " + idade + " anos - " + telefone + "</li>");
        $("#nome").val("");
        $("#telefone").val("");
        $("#idade").val("");
        $("#nome").focus();
        localStorage.listaEspera = $("#lista-espera").html();
        alert("Lista salva");
    }else{
        alert("Os campos nome, idade e telefone são obrigatórios.");
    }
}

function CarregarEspera(){
    $("#lista-espera").html(localStorage.listaEspera);
}

function ExcluirTodas(){
    let confirmacao = confirm("Continuar com a exclusão?");
    if(confirmacao == true){
        $("#lista-espera").html("");
        localStorage.clear();
        alert("tudo apagado");
    }else{
        alert("exclusão cancelada");
    }
}