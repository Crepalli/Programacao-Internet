let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let refrigerante = document.querySelector("#refrigerante");

let respostaSabor1 = document.querySelector("#respostaSabor1");
let respostaSabor2 = document.querySelector("#respostaSabor2");
let respostaSabor3 = document.querySelector("#respostaSabor3");
let respostaSabor4 = document.querySelector("#respostaSabor4");
let respostaRefrigerante = document.querySelector("#respostaRefrigerante");
let btPedido = document.querySelector("#btPedido");


function pedidoPizza(){

    let sab1 = (sabor1.value);
    let sab2 = (sabor2.value);
    let sab3 = (sabor3.value);
    let sab4 = (sabor4.value);
    let refri = Number(refrigerante.value);

    respostaSabor1.textContent = "O primeiro sabor é " + (sab1);
    respostaSabor2.textContent = "O segundo sabor é " + (sab2);
    respostaSabor3.textContent = "O terceiro sabor é " + (sab3);
    respostaSabor4.textContent = "O quarto sabor é " + (sab4);
    respostaRefrigerante.textContent = "O valor total do pedido será " + (4*12 + refri * 7).toFixed(2);
 
}

btPedido.onclick = function(){
    pedidoPizza();
}