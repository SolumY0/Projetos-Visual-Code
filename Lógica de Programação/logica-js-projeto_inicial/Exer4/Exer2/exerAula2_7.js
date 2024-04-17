let maca = prompt ("Quantas maças você comprou?");
if (maca <= 12){
    valor = (maca*0.30);
    alert("Valor total a pagar: " + valor);
}
else{
    valorDois = (maca*0.25);
    alert ("Valor total a pagar: " + valorDois);
}