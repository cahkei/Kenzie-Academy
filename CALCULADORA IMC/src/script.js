let botaoCalcular = document.getElementById('btnCalcular');

function calculandoIMC(){
  let peso = document.getElementById("peso").value;
  let altura = document.getElementById("altura").value/100;
  let resultado = document.getElementById("resultado");
  
  if(altura !=="" && peso !== "") {
  
  let imc = (peso / (altura * altura)).toFixed(1);
  let mensagem = "";
  
  if(imc < 18.5){
    mensagem = "Abaixo do peso"
  }else if(imc < 25){
    mensagem = "Você possui o peso ideal"
  }else if( imc < 30){
    mensagem = "Você está acima do peso ideal"
  }else if( imc < 35){
        mensagem = "Cuidado! Obesidade grau I"
    }else if( imc < 40){
        mensagem = "Cuidado! Obesidade grau II"
    }else {
        mensagem = "Cuidado! Obesidade grau III"
    }
  
    resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`;
} else {
resultado.textContent = "Por favor, preencha todos os campos"
}
}
botaoCalcular.addEventListener('click', calculandoIMC);