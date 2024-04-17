let forma = prompt ("Quantos lados?");
let area = prompt("Medida em Cm por lado:");
if (forma == 3){
    valor3lados = (area*area*1.732/4);
    alert ("É um triângulo e sua área é: " + valor3lados);
}
else{
    if (forma == 4){
        valor4lados = (area*area);
        alert ("É um quadrado e sua área é: " + valor4lados);
    }
    else{
        if (forma == 5){
            apotema = (area/1.453);
            valor5lados = (5*area*apotema);
            alert ("É um pentâgono e sua área é: " + valor5lados);
        }
            else{
                if (forma < 3){
                    alert("Não é um polígono.");
                }
                    else{
                        if (forma > 5){
                        alert("Polígono não identificado.");
                    }
                }
    }
}
}
