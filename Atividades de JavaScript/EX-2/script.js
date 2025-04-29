let valorquilo = document.querySelector("#valorquilo");
let quantidade = document.querySelector("#quantidade");
let btSomar = document.querySelector("#btSomar");
let h2Resultado = document.querySelector("#h2Resultado");

function multiplicarNumeros(){

    let num1 = Number(valorquilo.value);
    let num2 = Number(quantidade.value);

    h2Resultado.textContent = "O valor final vai ser de "+(num1 / num2);
}

btSomar.onclick = function(){
    multiplicarNumeros();
}