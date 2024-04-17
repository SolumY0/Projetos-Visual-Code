let numero1 = parseInt(prompt("Informe o número:"));
let numero2 = parseInt(prompt("Informe o número:"));
let caractere = parseInt(prompt("Digite 1, 2, 3 ou 4:"));
let resultado;

switch (caractere){
    case 1:
        resultado = (numero1+numero2)/2;
        alert (`A média dos números é ${resultado}.`);
        break;
    case 2:
        resultado = numero1-numero2;
        alert (`A diferença dos números é ${resultado}.`);
        break;
    case 3:
        resultado = numero1*numero2;
        alert (`A multiplicação dos números é ${resultado}.`);
        break;
    case 4:
        resultado = numero1/numero2;
        alert (`A divisão dos números é ${resultado}.`);
        break;
    default:
        alert ("Inválido.")
}