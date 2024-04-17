let votosJair = 0;
let votosCarlos = 0;
let votosNeves = 0;
let votosNulos = 0;
let votosBrancos = 0;
let voto;
while (voto != 0) {
    voto = parseInt(prompt("As opções são:\n1. Candidato Jair Rodrigues\n2. Candidato Carlos Luz\n3. Candidato Neves Rocha\n4. Nulo\n5. Branco\nEntre com o seu voto:"));
     switch (voto) {
        case 1:
            votosJair++;
            break;
        case 2:
            votosCarlos++;
            break;
        case 3:
            votosNeves++;
            break;
        case 4:
            votosNulos++;
            break;
        case 5:
            votosBrancos++;
            break;
        case 6:
            let totalVotos = votosJair + votosCarlos + votosNeves + votosNulos + votosBrancos;
            let porcentagemNulos = (votosNulos / totalVotos) * 100;
            let porcentagemBrancos = (votosBrancos / totalVotos) * 100;
            let vencedor = "Nenhum candidato venceu";
            let maiorVotos = Math.max(votosJair, votosCarlos, votosNeves);
            if (maiorVotos === votosJair) {
                vencedor = "Candidato Jair Rodrigues";
            } else if (maiorVotos === votosCarlos) {
                vencedor = "Candidato Carlos Luz";
            } else if (maiorVotos === votosNeves) {
                vencedor = "Candidato Neves Rocha";
            }
            console.log("Número de votos de cada candidato:");
            console.log("Jair Rodrigues: " + votosJair);
            console.log("Carlos Luz: " + votosCarlos);
            console.log("Neves Rocha: " + votosNeves);
            console.log("Porcentagem de votos nulos: " + porcentagemNulos.toFixed(2) + "%");
            console.log("Porcentagem de votos brancos: " + porcentagemBrancos.toFixed(2) + "%");
            console.log("Candidato vencedor: " + vencedor);
            break;
        default:
            console.log("Opção inválida. Por favor, escolha um número de 1 a 6.");
            break;
    }
}
