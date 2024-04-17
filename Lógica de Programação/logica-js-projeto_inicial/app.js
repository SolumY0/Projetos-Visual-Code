alert("Bem-vindo ao jogo do número secreto!");
let valorMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
let chute;
let contador = 1;
//enquanto a condição for diferente do número secreto vai continuar o jogo
while (chute != numeroSecreto){
    chute = prompt ("Informe um número entre 1 a " + valorMaximo);
    //se chute for igual o número secreto
    if (chute == numeroSecreto){
        break;
    }
    //senão
    else{
        let menorMaior = chute < numeroSecreto ? "maior" : "menor";
        alert ("O número secreto é " + menorMaior + " que " + chute);
    contador ++;
    }
}
let palavraTentativa = contador == 1 ? "tentativa" : "tentativas";
alert("Você acertou o número secreto, " + numeroSecreto + " com " + contador + " " + palavraTentativa);
