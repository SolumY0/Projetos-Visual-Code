let nota1 = parseFloat(prompt("Qual sua nota?"));
let nota2 = parseFloat(prompt("Qual sua nota?"));
let media;
media = (nota1+nota2)/2;
if (media >= 9 && media <= 10){
    alert ("Você tirou A, está aprovado!");
}
else{
    if (media >= 7.5 && media < 9){
        alert ("Você tirou B, está aprovado!");
    }
    else{
        if (media >= 6 && media < 7.5){
            alert ("Você tirou C, está aprovado!");
        }
        else{
            if (media >= 4 && media < 6){
                alert ("Você tirou D, está reprovado!");
            }
            else{
                if (media >= 0 && media < 4){
                    alert ("Você tirou E, está reprovado!");
                }
            }
        }
    }
}
