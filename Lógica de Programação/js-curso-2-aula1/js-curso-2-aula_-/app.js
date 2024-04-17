// let titulo = document.querySelector('h1');
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = "Insira um número de 1 a 10:";
let numeroAleatorio = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    //Fazendo a chamada da função
    exibirTexto('h1', 'Jogo do Número Secreto');
    exibirTexto('p', 'Insira um número de 1 a 10:');
}
exibirTextoInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroAleatorio){
        let palavraTentativa = tentativa > 1 ? "tentavivas" : "tentativa";
        let mensagemTentativa = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTexto('h1', 'Parabéns!');
        exibirTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        alterarImagem('img', './img/aranhag.png');
    }
    else{
        if (chute > numeroAleatorio){
            exibirTexto('p', 'O número secreto é menor');
        
        }
        else{
            exibirTexto('p', 'O número secreto é maior');
        }
    }
    tentativa++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random()*10 + 1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirTextoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    alterarImagem('img','./img/miranha.gif');
}

function alterarImagem(objeto, caminhoImagem){
    document.getElementById(objeto).src = caminhoImagem;
}
