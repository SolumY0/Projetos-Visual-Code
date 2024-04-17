let peso = parseFloat(prompt("Qual o seu peso?"));
let sexo = prompt("Defina seu sexo: \n F para feminino. \n M para masculino.");
let resultado;

switch (sexo.toUpperCase){
    case "F":
        resultado = (peso-100)*0.9;
        alert (resultado);
        break;
    case "M":
        resultado = (peso-100)+0.85;
        alert (resultado);
        break;
    default:
        alert ("Inválido.");
}
