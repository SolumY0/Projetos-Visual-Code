let idade = prompt ("Qual sua idade?");
if (idade < 16){
    alert ("Você não pode votar e nem dirigir.");
}
    else{
        if (idade >= 16 && idade < 18){
        alert ("Você pode votar, mas não pode dirigir.");
        }
        else{
        if (idade => 18){
        alert ("Pode votar e dirigir.");
        }  
    }
    
}