function calcularIMC() {
    // Obter os valores de idade, peso e altura inseridos pelo usuário
    var idade = parseFloat(document.getElementById('idade').value);
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcular o IMC
    var imc = peso / (altura * altura);

    // Exibir o resultado na página
    document.getElementById('resultado').textContent = imc.toFixed(2);

    // Determinar a classificação do IMC
    var classificacao = "";
    if (imc < 18.5) {
        classificacao = "Magreza";
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade Grau 1";
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade Grau 2";
    } else {
        classificacao = "Obesidade Grau 3";
    }

    // Exibir a classificação na página
    document.getElementById('classificacao').textContent = classificacao;
}
    