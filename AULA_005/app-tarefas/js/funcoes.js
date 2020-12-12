function AdicionarTarefa(){
    // 1 - pegar a tarefa que está no campo
    let minhaTarefa = $("#tarefa").val();

    // 2 - verificar se a tarefa não é vazia
    if(minhaTarefa != ""){
        // 2.1 - se a tarefa não for vazia, adicionar à lista de tarefas
        $("#lista-de-tarefas").append("<li>" + minhaTarefa + "</li>");
        $("#tarefa").val("");
        $("#tarefa").focus();
    }else{
        // 2.2 - se a tarefa for vazia, falar que a tarefa não pode ser vazia
        $("#modal-erro-formulario").modal("open");
    }
}

function SalvarTarefas(){
    localStorage.listaDeTarefas = $("#lista-de-tarefas").html();
    alert("Tarefas foram salvas");
}

function CarregarTarefas(){
    $("#lista-de-tarefas").html(localStorage.listaDeTarefas);
}



$("#modal-erro-formulario").modal();