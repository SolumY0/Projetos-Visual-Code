let altura = prompt ("Informe a altura:");
let peso = prompt ("Informe o peso:");
imc =  (peso / (altura * altura));
if (imc <= 18.5){
    alert ("Abaixo do peso.");
}
else{
if (imc > 18.5 && imc < 25){
    alert ("Saudável.");
}
else{
if (imc => 25 && imc < 30){
    alert ("Sobrepeso.");
}
else{
if (imc => 30 && imc < 40){
    alert ("Obeso.");
}
else{
if (imc > 40){
    alert ("Extremo.");
}
}
}
}
}
