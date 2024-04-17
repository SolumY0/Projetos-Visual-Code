let resposta = parseInt(prompt ("Escolha o produto:\n 1-Alimento não-perecível.\n 2- Alimento perecível.\n 3- Vestuário.\n 4- Higiene pessoal.\n 5- Limpeza e utensílios domésticos.\n Qualquer outro código é inválido."));

switch (resposta){
    case 1:
        alert ("Você escolheu alimento não-perecível.");
        break;
    case 2:
        alert ("Você escolheu alimento perecível.");
        break;
    case 3:
        alert ("Você escolheu vestuário.");
        break;
    case 4:
        alert ("Você escolheu higiene pessoal.");
        break;
    case 5:
        alert ("Você escolheu limpeza e utensílios domésticos.");
        break;
    default:
        alert ("Inválido.");
}