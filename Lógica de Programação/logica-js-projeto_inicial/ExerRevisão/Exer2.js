let peso = parseInt(prompt("Quantos quilos de peixe você traz?"));
let excesso = peso-50;
let pagar;
if (peso<=50){
    alert (`Você não vai pagar multa por ${peso} quilos.`);
}
else{
    pagar = excesso*4;
    alert (`Você tem que pagar por ${excesso} quilos a mais, sendo assim, pague mais ${pagar} reias de multa.`);

}
