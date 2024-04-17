let fruta = prompt("Digite uma fruta:");

switch(fruta.toLowerCase()){
    case "Maça":
        console.log ("Não vendemos esta fruta aqui.");
        break;
    case "Kiwi":
        console.log ("Estamos com escassez de kiwis.");
        break;
    case "Melancia":
        console.log ("Aqui está, são 3 reais o quilo.");
        break;
    default:
        console.log("Inválido.");
}