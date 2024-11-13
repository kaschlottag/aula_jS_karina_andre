var peso;
var altura;
var imc;
var resultado;

// 1 Recebendo o event
function calcular(event) {
    // 1.1 Refresh dos inputs
    event.preventDefault();

    // 1.2 Recebendo os dados digitados pelo user e convertendo para float
    peso = parseFloat(document.getElementById('peso').value);
    altura = parseFloat(document.getElementById('altura').value);

    // Validação
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Por favor, insira valores válidos.';
        return;
    }

    // 1.3 Cálculo do IMC
    imc = peso / (altura * altura);

    // 1.4 Testando a recepção de valores e o cálculo
    console.log(peso);
    console.log(altura);
    console.log(imc);

    resultado = document.getElementById('resultado');
    if (imc < 17) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Cuidado! Você está muito abaixo do peso.';
    } else if (imc >= 17 && imc < 18.5) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Opa! Você está abaixo do peso.';
    } else if (imc >= 18.5 && imc < 25) {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Parabéns! Você está com peso normal.';
    } else {
        resultado.innerHTML = '<br>Seu resultado foi: ' + imc.toFixed(2) + '<br> Atenção! Você está acima do peso.';
    }
}
