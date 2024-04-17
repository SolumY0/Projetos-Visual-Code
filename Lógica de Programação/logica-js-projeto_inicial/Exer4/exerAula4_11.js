let valorProduto = parseInt(prompt ("Qual o valor do produto?"));
let formaPagar = prompt ("Qual a forma de pagamento? Digite:\n 1 para à vista dinheiro ou pix;\n 2 para à vista cartão de crédit;\n 3 para parcelamento em duas vezes;\n 4 para mais de dois parcelamentos.\n");
if (formaPagar == 1){
    valorPagar = valorProduto - (valorProduto * 0.15);
}
else{
    if (formaPagar == 2){
        valorPagar = valorProduto - (valorProduto * 0.10);
    }
    else{
        if(formaPagar == 3){
            valorPagar = valorProduto
        }
        else{
            valorPagar = valorProduto + (valorProduto * 0.10);
        }
    }
}
alert ("Pagamento dará em reais: " + valorPagar);