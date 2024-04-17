let codigo;
let valor;
codigo = parseInt(prompt("Escolha no cardápio a partir do código:\n 100- Cachorro quente.\n 101- Buaru Simples.\n 102- Bauru com ovo.\n 103- Hamburguer.\n 104- Cheesenurguer.\n 105- Refrigerante."));
let qtdAlimento = parseInt(prompt("Quantos você quer?"));
switch (codigo){
case 100:
    valor = qtdAlimento*1.70;
    alert (`Você selecionou ${qtdAlimento} de cachorro quente, pague ${valor.toFixed(2)}`);
    break;
case 101:
    valor = qtdAlimento*2.30;
    alert (`Você selecionou ${qtdAlimento} de bauru simples, pague ${valor.toFixed(2)}`);
    break;
case 102:
    valor = qtdAlimento*2.60;
    alert (`Você selecionou ${qtdAlimento} de bauru com ovo, pague ${valor.toFixed(2)}`);
    break;
case 103:
    valor = qtdAlimento;
    alert (`Você selecionou ${qtdAlimento} de humburguer, pague ${valor.toFixed(2)}`);
    break;
case 104:
    valor = qtdAlimento*2.50;
    alert (`Você selecionou ${qtdAlimento} de cheeseburguer, pague ${valor.toFixed(2)}`);
    break;
case 105:
    valor = qtdAlimento*1;
    alert (`Você selecionou ${qtdAlimento} de refrigerante, pague ${valor.toFixed(2)}`);
    break;
default:
    alert ("Inválido.");   
}
