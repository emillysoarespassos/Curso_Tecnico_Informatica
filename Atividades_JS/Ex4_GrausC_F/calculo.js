function Calcular(){

    var temperatura = parseFloat(document.getElementById('temperatura').value);
    var resultado = parseFloat(document.getElementById('resultado').value);

    resultado = temperatura*1.8+32;

    document.getElementById('resultado').innerHTML = resultado;
}