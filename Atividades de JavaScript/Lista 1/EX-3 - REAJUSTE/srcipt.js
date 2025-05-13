let reajuste = document.querySelector("#reajuste");
let btSomar = document.querySelector("#btSomar");
let h2Resultado = document.querySelector("#h2Resultado");

function multiplicarNumeros(){

    let num1 = Number(reajuste.value);

    h2Resultado.textContent = "O valor final vai ser de " + (num1 + (num1 * (1/100)));
}

btSomar.onclick = function(){
    multiplicarNumeros();
}