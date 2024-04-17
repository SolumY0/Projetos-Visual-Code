let area;
let numLados = prompt("Informe o número de lados de um Polígono:");
if (numLados < 3){
    alert ("Não é um polígono.");
}
else{
    if (numLados > 5){
        alert ("Polígono não identificado.");
    }
    else{
        let medidaLado = prompt ("Informe a medida do lado do polígono em centímestros:");
        if (numLados == 3){
            area = Math.sqrt(numLados*numLados)/4;
            alert (`Seu polígono é um TRIÂNGULO com área ${area}`);
        }
        else {
            if (numLados == 4){
                area = (numLados*numLados);
                alert (`Seu polígono é um QUADRADO com área ${area}`);
            }
            else{
                alert ("Seu polígono é um PENTÁGONO.")
            }
        }
    }
}