let valor = parseFloat(prompt("Informe o valor da compra:"));
let codigo = parseInt(prompt("Informe seu código 1, 2, ou 3:"));
let desconto;

switch(codigo){
    case 1:
        alert (`Pague ${valor} reais, você não tem desconto.`);
        break;
    case 2:
        desconto = valor*0.10;
        alert (`Você tem ${desconto} reais de desconto.`);
        break;
    case 3:
        desconto = valor*0.05;
        alert (`Você tem ${desconto} reais de desconto.`);
        break;
    default:
        alert ("Inválido.")
}