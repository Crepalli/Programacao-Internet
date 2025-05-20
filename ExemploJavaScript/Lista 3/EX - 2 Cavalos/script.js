let cavalo = document.querySelector ("#cavalo");
let btcalcular = document.querySelector ("#btcalcular");
let h2resultado = document.querySelector ("#h2resultado");

function calcularferraduras(){
    let cav = Number(cavalo.value);
    h2resultado.textContent = "Serão necessários comprar " + (cav*4);
}
btcalcular.onclick = function (){
    calcularferraduras();
}