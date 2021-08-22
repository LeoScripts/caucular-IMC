//elementos html1
const calcular = document.getElementById('calcular');


function imc (){
  //elementos do html no escopo da função pegando o valor de dentro do elemento
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const resultado = document.getElementById('resultado');

  //validação de campos em javascript
  // nome for dirferente  de vazio e etc.
  if (nome !== "" && altura !== "" && peso !== ""){
    const valorIMC = (peso / (altura * altura)).toFixed(2);
    let classificacao = '';
    if(valorIMC < 18.5){
      classificacao = 'abaixo do peso';
    }else if(valorIMC < 25){
      classificacao = 'no peso certo';
    }else if(valorIMC < 30){
      classificacao = 'um pouco acima do peso!';
    }else if(valorIMC < 35){
      classificacao = 'acima do peso! Faça uma dieta'
    }else if(valorIMC < 40){
      classificacao = 'acima do peso! Faça dieta e exercicios fisicos'
    }else{
      classificacao = 'muito acima do peso! Procure um medico!'
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`
  }else{

   resultado.textContent = 'preencha todos os campos' 
  }

}

//quando alguem clicar ele vai executar a função imc
calcular.addEventListener('click', imc);