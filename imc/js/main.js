
const GREEN = "#66B032";
const RED = "#FE2712";
const YELLLOW = "#FEFE33";


var massa = 0;
var altura = 0;
var imc = 0;

function calcularIMC(){
    let massa = document.getElementById("massa").value;
    let altura = document.getElementById("altura").value;
    let imcresult = document.getElementById("imc-result");

    imc = massa / (altura*altura);
    imcresult.innerHTML = imc;


    console.log(imc);


    if(imc >= 20 && imc <= 25){
        document.getElementById("frase").innerHTML = "Você está dentro do peso";
        document.getElementById("caixa").style.backgroundColor = GREEN;
    }else if(imc < 20){
        document.getElementById("frase").innerHTML = "Você está abaixo do peso";
        document.getElementById("caixa").style.backgroundColor = YELLLOW;
    }else{
        document.getElementById("frase").innerHTML = "Você está acima do peso";
        document.getElementById("caixa").style.backgroundColor = RED;
    }

    
}

function limpar(){
    document.getElementById("imc-result").innerHTML = "";
    document.getElementById("frase").innerHTML = "";
    document.getElementById("caixa").style.backgroundColor = "cadetblue";
}