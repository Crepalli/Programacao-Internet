let inputnum1 = document.querySelector("#inputnum1");   
let inputnum2 = document.querySelector("#inputnum2");
let btSomar = document.querySelector("#btSomar");
let resultado = document.querySelector("#resultado");

function somarNumeros(){

    let num1 = Number(inputnum1.value);
    let num2 = Number(inputnum2.value);

    resultado.textContent = (num1+num2);
}
btSomar.onclick = function(){
    somarNumeros();
}
