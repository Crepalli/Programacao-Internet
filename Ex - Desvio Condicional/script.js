let inputNota1 = document.querySelector("#inputNota1");
let inputNota2 = document.querySelector("#inputNota2");
let btcalcular = document.querySelector("#btcalcular");
let h3Resultado = document.querySelector("#h3Resultado");

function verificaAprovacao(){

let nota1 = Number(inputNota1.value);
let nota2 = Number(inputNota2.value);
let media = (nota1 + nota2) /2;

if (media >= 6.0) {
    h3Resultado.textContent = "Parabéns você está Aprovado!";
}
else{
    h3Resultado.textContent = "Você está Reprovado";
}

}

btcalcular.onclick = function(){
    verificaAprovacao();
}
