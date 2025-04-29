let pago = document.querySelector("#pago");
let preco = document.querySelector("#preco");
let btSomar = document.querySelector("#btSomar");
let h3Resultado = document.querySelector("#h3Resultado");

function somarNumeros(){

    let num1 = Number(pago.value);
    let num2 = Number(preco.value);

    h2Resultado.textContent = "Opa seu troco foi de "+(num1 - num2);
}

btSomar.onclick = function(){
    somarNumeros();
}