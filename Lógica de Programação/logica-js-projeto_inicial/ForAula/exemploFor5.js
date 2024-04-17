let numero;
let contaPar = 0;
let contaImpar = 0;
for (let i = 1; i <= 10; i++){
    numero = parseInt(prompt("Escolha um número."));
    if (numero%2 == 0){
        contaPar++;
    }
    else{
        contaImpar++;
    }
}
alert (`A quantidade de números pares é ${contaPar} e a de ímpares é ${contaImpar}`);