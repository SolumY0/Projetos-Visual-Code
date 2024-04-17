let contador = 0;
let soma = 0;
while (contador < 6){
    let numero = parseInt(prompt("Informe um número:"));
    soma += numero;
    contador ++;
    if (contador == 5){
        break;
    }
}
media = soma/contador;
console.log(contador);
alert ("A soma dos números é " + soma + " e a média " + media);
