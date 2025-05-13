let resultadoA = document.querySelector("#resultadoA")
let resultadoB = document.querySelector("#resultadoB")
let resultadoC = document.querySelector("#resultadoC")
let resultadoD = document.querySelector("#resultadoD")
let dolar = document.querySelector("#dolar")
let btcotacao = document.querySelector("#btcotacao")

function calcularDolar(){

    let resposta = Number(dolar.value);
    resultadoA.textContent = "O valor do dolar mais o acrescimo de 1%: " + (1.01 * resposta);
    resultadoB.textContent = "O valor do dolar mais o acrescimo de 2%: " + (1.02 * resposta);
    resultadoC.textContent = "O valor do dolar mais o acrescimo de 5%: " + (1.05 * resposta);
    resultadoD.textContent = "O valor do dolar mais o acrescimo de 10%: " + (1.10 * resposta);
}

btcotacao.onclick = function(){
    calcularDolar();
}
