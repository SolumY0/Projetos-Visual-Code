let numero = parseInt(prompt("Escolha um número entre 1 e 10:"));
if (numero > 0 && numero <= 10){
    for (let i = 1; i <= 10; i++){
        let resultado = numero*i;
        console.log(`${numero} X ${i} = ${resultado}`);
    }
}
else{
    console.log ("Favor digitar um número entre 1 e 10.")
}
