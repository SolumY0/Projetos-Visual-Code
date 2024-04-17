let contador = 1;
let impar = 0;
let par = 0;
while (contador <= 10){
    let numero = parseInt(prompt("Informe um número:"));
    nun = numero%2;
    if (nun == 0){
        par += 1;
    }
    else{
        impar += 1;

    }
    contador ++;
}
alert ("Tem " + impar + " números impares e " + par + " pares.");