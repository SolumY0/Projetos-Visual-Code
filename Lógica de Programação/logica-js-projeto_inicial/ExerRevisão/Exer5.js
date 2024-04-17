let sexo = prompt("Digite o sexo como F ou M:");
switch (sexo.toUpperCase()){
    case "F":
        alert ("Feminino");
        break;
    case "M":
        alert ("Masculino");
        break;
    default:
        alert ("Sexo inválido")
}