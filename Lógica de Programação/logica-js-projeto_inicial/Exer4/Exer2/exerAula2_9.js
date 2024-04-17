let altura = prompt ("Informe altura:");
let sexo = prompt ("Informe seu sexo:");
if (sexo = "Feminino"){
    idealMulher = (62.1*altura)-44.7;
    alert ("Seu peso ideal é de: " + idealMulher);
}
else{
    if (sexo = "Masculino"){
        idealHomem = (72.7*altura)-58;
        alert ("Seu peso ideal é de: " + idealHomem);
    }
}