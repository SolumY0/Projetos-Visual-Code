let diaSemana = parseInt(prompt("Informe o dia da semana pelo número:"));

switch(diaSemana){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert ("É um dia de semana útil.");
        break;
    case 7:
    case 1:
        alert ("É um final de semana.");
        break;
    default:
        alert ("Inválido.")
}