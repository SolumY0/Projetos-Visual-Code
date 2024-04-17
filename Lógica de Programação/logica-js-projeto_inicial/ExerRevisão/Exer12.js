// let codigo;
// let altura;
// let peso;
// let baixo = 500;
// let alto = 0;
// let gordo = 0;
// let magro = 500;
// let mediaAltura;
// let mediaPeso;
// let somaPeso = 0;
// let qtdPeso = 0;
// let i = 0;
// while (codigo != 0){
//     codigo = parseInt(prompt("Qual seu código?\n (0 para finalizar)"));
//     if (codigo == 0){
//         break;
//     }
//     somaPeso += peso;
//     qtdPeso += 1;
//     altura = parseInt(prompt("Qual sua altura em cm?"));
//     peso = parseInt(prompt("Qual seu peso?"));
    
//     if (peso > gordo){
//         gordo = peso;
//     }
//     if (peso < magro){
//         magro = peso;
//     }
//     console.log(gordo);
//     console.log (`O código da pessoa mais gorda é ${codigo}`)
//     console.log(magro);
//     console.log (`O código da pessoa mais magra é ${codigo}`)

//     if (altura > alto){
//         alto = altura;
//     }
//     if (altura < baixo){
//         baixo = altura;
//     }
//     console.log(alto);
//     console.log (`O código da pessoa mais alta é ${codigo}`)
//     console.log(baixo);
//     console.log (`O código da pessoa mais baixa é ${codigo}`)
//     i++;
// }
// mediaPeso = somaPeso/qtdPeso;
let altura; 
let peso; 
let codigo; 
let maiorPeso = 300;
let menorPeso = 0;
let somaPeso = 0;
let quantidadePeso = 0;
let maiorAltura = 250;
let menorAltura = 10;
let somaAltura = 0;
let quantidadeAltura = 0;
let mediaPeso;
let mediaAltura;
while (codigo != 0 ) {
    codigo = parseInt(prompt("Qual seu código? Digite 0 para encerrar"));
    if(codigo == 0){
        break;
    }
    altura = parseFloat(prompt("Qual sua altura?"));
    peso = parseFloat(prompt("Qual seu peso?"));
    if (altura > maiorAltura){
    maiorAltura = altura;
    }
    if (altura < menorAltura){
    menorAltura = altura;
        mediaAltura = (somaAltura/quantidadeAltura);
        console.log(`A média das alturas é ${mediaAltura}`);
        console.log (`O código da maior altura é ${codigo} e a altura é ${maiorAltura} e o menor é ${menorAltura}`);
    }
    somaPeso += peso
    quantidadePeso += 1
    if (peso >= maiorPeso){
    maiorPeso = peso;
    }
    if (peso < menorPeso){
    menorPeso = peso;
    mediaPeso = (somaPeso/quantidadePeso);
    console.log(`A média dos pesos é ${mediaPeso}`);
    console.log (`O código do maior peso é ${codigo} e o  peso é ${maiorPeso} e o menor é ${menorPeso}`);
    }
}
