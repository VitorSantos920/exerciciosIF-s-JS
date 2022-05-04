var nota1 = parseFloat(prompt("Digite a 1ª nota!"));

var nota2 = parseFloat(prompt("Digite a 2ª nota!"));

var nota3 = parseFloat(prompt("Digite a 3ª nota!"));

var nota4 = parseFloat(prompt("Digite a 4ª nota!"));


var media = (nota1 + nota2 + nota3 + nota4)/4;
window.alert("Sua média foi: " + media);

if(media >= 7) {
    window.alert("Parabéns, você foi aprovado!");
} else { 
    window.alert("Infelizmente você está reprovado!");
}