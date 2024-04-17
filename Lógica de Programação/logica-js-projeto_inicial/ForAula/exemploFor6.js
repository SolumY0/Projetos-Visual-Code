let numero;
let fora = 0;
let dentro = 0;
for (let i = 1; i <= 10; i++){
    numero = parseInt(prompt("Informe o número:"));
    if (numero <= 20 && numero >= 10){
        dentro++
    }    
    else{
        fora++
    }
}
alert (`Há ${dentro} números entre dez e vinte enquanto tem ${fora} fora.`);