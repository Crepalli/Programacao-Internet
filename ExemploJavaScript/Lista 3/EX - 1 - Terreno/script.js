let altura = document.querySelector("#altura");
let largura = document.querySelector("#largura");
let btcalcular = document.querySelector("#btcalcular");
let resultado = document.querySelector("#resultado");


function calculcarterreno (){
    let alt = Number(altura.value);
    let larg = Number(largura.value);
    
    resultado.textContent = "A Área do terreno é " + alt*larg;

}
btcalcular.onclick = function(){
    calculcarterreno();
}
