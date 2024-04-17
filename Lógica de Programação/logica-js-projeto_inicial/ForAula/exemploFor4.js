let idade;
let somaIdade = 0;
let media;
for (let i = 1; i <= 5; i++){
    idade = parseInt(prompt("Digite a sua idade:"));
    somaIdade += idade;
}
media = somaIdade/5;
alert (`A média das idades é ${media.toFixed(2)}`);