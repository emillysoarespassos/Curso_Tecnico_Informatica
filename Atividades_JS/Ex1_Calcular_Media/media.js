function Calcular(){
    nome = window.prompt("Digite seu nome: ");
    nota1 = window.prompt("Digite a nota 1: ");
    nota2 = window.prompt("Digite a nota 2: ");
    nota3 = window.prompt("Digite a nota 3: ");

    media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;


    document.getElementById('nome').innerHTML = nome;
    document.getElementById('notas').innerHTML = nota1+', '+nota2+', '+nota3;
    document.getElementById('media').innerHTML = media;


    if(media>=6){
        document.getElementById('mensagem').innerHTML = 'Meus parabéns!';
    }else{
        document.getElementById('mensagem').innerHTML = 'Que pena, média não alcançada!';

    }
}