let numeroProduto = 0;
let troco;
let totalCompra = 0;
let preco = parseFloat(prompt(`Digite o preço do Produto ${++numeroProduto} ou 0 para finalizar;`))
while (preco != 0){
    totalCompra += preco;
    preco = parseFloat(prompt(`Digite o preço do Produto ${++numeroProduto} ou 0 para finalizar;`))
}    
console.log (`O total da compra é ${totalCompra}`);
let pagar = prompt("Quanto você deseja dar para o pagamento?")
if (pagar < totalCompra){
    alert ("Não tem dinheiro suficiente.");
}
else{
    troco = pagar-totalCompra;
    alert (`Pegue ${troco} reais de troco.`);
}


