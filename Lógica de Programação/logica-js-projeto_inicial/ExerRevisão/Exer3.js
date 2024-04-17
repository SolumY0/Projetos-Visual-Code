let salarioHora = parseInt(prompt("Quanto ganha por hora trabalhada?"));
let horaMes = parseInt(prompt("Quantas horas trabalha por mês?"));
let totalSalario = salarioHora*horaMes;
let descontoIR = (totalSalario*0.11);
let descontoINSS = (totalSalario*0.08);
let descontoSindicato = (totalSalario*0.05);
let salarioFinal;
salarioFinal = totalSalario-(descontoINSS+descontoIR+descontoSindicato);
alert (`Seu salário bruto é de ${totalSalario.toFixed(2)} reais, mas tem ${descontoINSS.toFixed(2)} de o desconto do INSS, ${descontoIR} de desconto pelo imposto e ${descontoSindicato.toFixed(2)} pelo Sindicato. No fim, seu salário líquido é de ${salarioFinal.toFixed(2)} reais.`);

