let salarioAtual = parseFloat(prompt("Qual o seu salário atual?"));
let aumento;
let diferenca;
if (salarioAtual <= 280){
    aumento = salarioAtual+(salarioAtual*0.20);
    diferenca = aumento-salarioAtual;
    alert (`Você teve um aumento de 20% no seu antigo salário de ${salarioAtual}, seu novo salário é ${aumento} reais, acrescimo de ${diferenca.toFixed(2)} reais.`);
}
else{
    if (salarioAtual > 280 && salarioAtual <= 700){
        aumento = salarioAtual+(salarioAtual*0.15);
        diferenca = aumento-salarioAtual;
        alert (`Você teve um aumento de 15% no seu antigo salário de ${salarioAtual}, seu novo salário é ${aumento} reais, acrescimo de ${diferenca.toFixed(2)} reais.`);
    }
    else{
        if(salarioAtual > 700 && salarioAtual <= 1500){
            aumento = salarioAtual+(salarioAtual*0.10);
            diferenca = aumento-salarioAtual;
            alert (`Você teve um aumento de 10% no seu antigo salário de ${salarioAtual}, seu novo salário é ${aumento} reais, acrescimo de ${diferenca.toFixed(2)} reais.`);
        }
        else{
            aumento = salarioAtual+(salarioAtual*0.05);
            diferenca = aumento-salarioAtual;
            alert (`Você teve um aumento de 5% no seu antigo salário de ${salarioAtual}, seu novo salário é ${aumento} reais, acrescimo de ${diferenca.toFixed(2)} reais.`);
        }
    }
}
