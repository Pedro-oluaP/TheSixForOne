const cores = ["red", "blue", "green", "yellow", "purple", "orange"];

const botao = document.getElementById("botao");

let indiceCor = 0;

function trocarCor() {
    botao.style.backgroundColor = cores[indiceCor];
    indiceCor = (indiceCor + 1) % cores.length;
}
setInterval(trocarCor, 1000);

let Nome = document.getElementById("nome");
let Email = document.getElementById("email");
let Mensagem = document.getElementById("mensagem");
function enviar() {
    if(Nome.value != "" && Email.value != "" && Mensagem.value != "") {
        alert("A mensagem foi enviada com sucesso!");
    }
}