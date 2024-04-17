let horas = parseFloat(prompt("Quanto voce ganha por hora?"));
let mes = parseInt(prompt("Quantas horas voce trabalhou no mes?"));
let salario = horas*mes;
let ir;
let inss = salario*0.10;
let fgts = salario*0.11;
let descontos;
let salarioLiquido;
if (salario <= 900){
    descontos = inss+fgts;
    salarioLiquido = salario-inss;
    alert(`O salário bruto é R$ ${salario} \n (-) IR : está isento  \n (-) INSS ( 10%) é R$ ${inss} \n  FGTS (11%) é R$ ${fgts} \n Total de descontos R$ ${descontos} \n Salário Liquido R$ ${salarioLiquido}`);
}
else{

if (salario > 900 && salario <= 1500){
   ir = salario*0.05;
   descontos = ir+inss+fgts;
   salarioLiquido = salario-(ir+inss);
}else if (salario > 1500 && salario <= 2500){
    ir = salario*0.10;
    descontos = ir+inss+fgts;
    salarioLiquido = salario-(ir+inss);
} else{
    ir = salario*0.20;
    descontos = ir+inss+fgts;
   salarioLiquido = salario-(ir+inss);
}
}
alert(`O salário bruto é R$ ${salario} \n (-) IR  R$ ${ir}  \n (-) INSS ( 10%) é R$ ${inss} \n  FGTS (11%) é R$ ${fgts} \n Total de descontos R$ ${descontos} \n Salário Liquido R$ ${salarioLiquido}`);
