let number1 = document.querySelector("#number1");
let number2 = document.querySelector("#number2");
let number3 = document.querySelector("#number3");
let btSomar = document.querySelector("#btSomar");
let ResultadoAritmetica = document.querySelector("#ResultadoAritmetica");
let ResultadoPonderada = document.querySelector("#ResultadoPonderada");
let ResultadoSomaMedia = document.querySelector("#ResultadoSomaMedia");
let ResultadoMediaMedia = document.querySelector("#ResultadoMediaMedia");

function multiplicarNumeros(){

    let num1 = Number(number1.value);
    let num2 = Number(number2.value);
    let num3 = Number(number3.value);

    let media = (num1 + num2 + num3 / 3);
    let mediaPonderada = (num1 * 3 + num2 * 2 + num3 * 5 / 10);
    let mediaMedia = (media/mediaPonderada)

    ResultadoAritmetica.textContent = "O valor da média aritmética é " + media;
    ResultadoPonderada.textContent = "O valor da média ponderada é " + mediaPonderada;
    ResultadoSomaMedia.textContent = "O valor da soma das médias é " + (media + mediaPonderada);
    ResultadoMediaMedia.textContent = "O valor da média das médias é " + mediaMedia;
}

btSomar.onclick = function(){
    multiplicarNumeros();
    
}