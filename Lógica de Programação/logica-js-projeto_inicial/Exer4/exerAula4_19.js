let idade;
let somaIdade = 0;
let qtdIdade = 0;
let mediaIdade;
while(idade != 0){
    idade = parseInt(prompt ("Digite uma idade ou 0 para finalizar."));
    if (idade == 0){
        break;
    }
    somaIdade += idade;
    qtdIdade += 1;
}
mediaIdade = (somaIdade/qtdIdade);
alert (`A média das idades é: ${mediaIdade.toFixed(2)}.`);
if (mediaIdade < 26){
    alert ("Turma jovem.");
}
else{
    if(mediaIdade >= 26 && mediaIdade <= 60){
        alert ("Turma adulta.");
    }
    else {
        alert ("Turma idosa.");
    }
}
