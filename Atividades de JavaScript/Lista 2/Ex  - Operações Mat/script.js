let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let btresposta = document.querySelector("#btresposta");
let somar = document.querySelector("#somar");
let subtracao = document.querySelector("#subtracao");
let mutiplicar = document.querySelector("#mutiplicar");
let divisao = document.querySelector("#divisao");

function calculcaroperacoes (){
    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    somar.textContent = "A soma entre os números é de " + (num1+num2);
    subtracao.textContent = "A subtracao entre os números é de " + (num1-num2);
    multiplicar.textContent = "A multiplicação entre os números é de " + (num1*num2);
    divisao.textContent = "A divisão entre os números é de " + (num1/num2);
}

btresposta.onclick = function(){
    calculcaroperacoes();
}
