var btn_m = document.getElementById("btn-m")
var btn_d = document.getElementById("btn-d")
var btn_r = document.getElementById("btn-r")
var btn_s = document.getElementById("btn-s")


function multiplicar (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var txt_resultado = document.getElementById("txt-resultado")
    
    txt_resultado.textContent = num1*num2
}

function dividir (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var txt_resultado = document.getElementById("txt-resultado")
    
    txt_resultado.textContent = num1/num2
    
}

function resta (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var txt_resultado = document.getElementById("txt-resultado")
    
    txt_resultado.textContent = num1-num2
}

function suma (){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var txt_resultado = document.getElementById("txt-resultado")
    
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    
    txt_resultado.textContent = num1+num2
}

btn_m.addEventListener('click' , multiplicar)
btn_d.addEventListener('click' , dividir)
btn_r.addEventListener('click' , resta)
btn_s.addEventListener('click' , suma)
