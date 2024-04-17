let tamanho = parseInt(prompt("Qual a área a ser pintada em metros quadrados?"));
let tintaUsada = tamanho/(18*3);
console.log (tintaUsada);
let pagar = Math.ceil(tintaUsada)*80;
alert (`A tinta usada para ${tamanho} mestros quadrados de área são ${tintaUsada.toFixed()} latas, portanto deve pagar ${pagar}.`);