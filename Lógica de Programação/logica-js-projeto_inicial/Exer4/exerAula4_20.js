let temperatura;
let somaTemperatura = 0;
let qtdTemperatura = 0;
let mediaTemperatura;
let menorTemperatura = 100;
let maiorTemperatura = -100;
while (temperatura != 0){
    temperatura = parseInt(prompt("Digite a temperatura ou 0 para finalizar."));
    if (temperatura == 0){
        break;
    }
    somaTemperatura += temperatura;
    qtdTemperatura += 1;
    if (temperatura >= maiorTemperatura){
        maiorTemperatura = temperatura;
    }
    if (temperatura <= menorTemperatura){
        menorTemperatura = temperatura;
    }
    console.log(maiorTemperatura);
    console.log(menorTemperatura);
}
mediaTemperatura = somaTemperatura/qtdTemperatura;
alert (`A média das temperaturas é ${mediaTemperatura.toFixed(2)}.`);
alert (`A maior temperatura é ${maiorTemperatura.toFixed(2)} e a menor temperatura é ${menorTemperatura.toFixed(2)}.`);