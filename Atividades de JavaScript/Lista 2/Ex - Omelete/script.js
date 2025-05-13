let pergunta = document.querySelector("#pergunta");
let btresposta = document.querySelector("#btresposta");
let resultadoomelete = document.querySelector("#resultadoomelete");

function omelete(){

    let omelete = Number(pergunta.value);
    resultadoomelete.textContent = "Será necessário de " + (omelete * 2) +  " ovos e de " + (omelete * 50) + " gramas" + " queijo para fazer a comida";
 
}

btresposta.onclick = function(){
    omelete();
}
