function ExibirMensagem(){
    alert("Cardápio Online");
}


let botao = document.getElementById("botao-mensagem");

botao.addEventListener("click",function(){
    ExibirMensagem();
});