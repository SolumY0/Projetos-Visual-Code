let numero1 = parseFloat(prompt("Digite um número:"));
let numero2 = parseFloat(prompt("Digite um número:"));
let caractere = prompt("Escolha entre as operações +, -, * ou /:");
let resultado;

switch (caractere){
    case "+":
        resultado = numero1 + numero2;
        alert (`${numero1} + ${numero2} = ${resultado}`);
        break;
    case "-":
        resultado = numero1 - numero2;
        alert (`${numero1} - ${numero2} = ${resultado}`);
        break;
    case "*":
        resultado = numero1 * numero2;
        alert (`${numero1} * ${numero2} = ${resultado}`);
        break;
    case "/":
        resultado = numero1 / numero2;
        alert (`${numero1} / ${numero2} = ${resultado}`);
        break;
    default:
        alert ("Inválido.");
}