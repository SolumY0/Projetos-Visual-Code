let mes = parseInt(prompt("Digite o mês por seu respectivo número:"));

switch (mes){
    case 4:
    case 6:
    case 9:
    case 8:
        alert ("O mês tem 30 dias.");
        break;
    case 2:
        alert ("O mês tem 28 dias");
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert ("O mês tem 31 dias.");
        break;
    default:
        alert ("Inválido.");

}