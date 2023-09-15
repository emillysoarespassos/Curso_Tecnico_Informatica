function Calcular(){
    nasc = window.prompt("Seu ano de nascimento: ");
    ano = window.prompt("Digite o ano atual: ");

    idade = ano - nasc

    document.getElementById('idade').innerHTML = idade;

}