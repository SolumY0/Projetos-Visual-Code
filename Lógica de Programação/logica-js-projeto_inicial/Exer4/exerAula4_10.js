let salarioMinimo = 1412;
let salarioUsuario = parseFloat(prompt("Qual o valor do seu salário?"));
let quantidadeSalario = salarioUsuario/salarioMinimo;
alert ("Voce ganha " + quantidadeSalario.toFixed(2) + " salários mínimos.");