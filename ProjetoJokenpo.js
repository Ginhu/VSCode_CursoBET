const prompt = require('prompt-sync')();
console.clear();

let rodadas = 'quantide de rodadas';
let jogadaPlayer = 'escolha do jogador';
let jogadas = ['ERRO', 'Pedra', 'Papel', 'Tesoura'];
let jogadaComp = 0;
let vitoria = 0;
let empate = 0;
let derrota = 0;
let jogar = 'sim'

while (jogar == 'sim') {
vitoria = 0;
empate = 0;
derrota = 0;
rodadas = 'quantide de rodadas'
console.clear();

while (isNaN(rodadas)) {
  rodadas = Math.floor(+prompt('Por favor digite a quantidade de rodadas: '));
}

for (let i = 0; i<rodadas; i++) {
  jogadaPlayer = +prompt('Escolha entre Pedra(1) - Papel(2) - Tesoura(3): ');
  jogadaComp = Math.floor(Math.random()*3+1);
  if ((jogadaPlayer == 1 && jogadaComp ==1) || (jogadaPlayer == 2 && jogadaComp == 2) || (jogadaPlayer == 3 && jogadaComp ==3)) {
    empate++
    console.log(`Você EMPATOU! Jogador:${jogadas[jogadaPlayer]} VS ${jogadas[jogadaComp]}:Computador`);
    console.log();
    console.log();
  } else if ((jogadaPlayer == 1 && jogadaComp == 3) || (jogadaPlayer == 2 && jogadaComp == 1) || (jogadaPlayer == 3 && jogadaComp == 2)) {
    vitoria++
     console.log(`Você GANHOU! Jogador:${jogadas[jogadaPlayer]} VS ${jogadas[jogadaComp]}:Computador`);
     console.log();
     console.log();
  } else if ((jogadaPlayer == 1 && jogadaComp == 2) || (jogadaPlayer == 2 && jogadaComp == 3) || (jogadaPlayer ==3 && jogadaComp == 1)) {
    derrota++
    console.log(`Você PERDEU! Jogador:${jogadas[jogadaPlayer]} VS ${jogadas[jogadaComp]}:Computador`);
    console.log();
    console.log();
  } else {
    derrota++
    console.log(`Você PERDEU! Jogador:${jogadas[jogadaPlayer]} VS ${jogadas[jogadaComp]}:Computador`);
    console.log();
    console.log();
  }
}
  
  if (vitoria > derrota) {
    console.log(`Você VENCEU! Com o placar de ${vitoria} a ${derrota} com ${empate} empates`);
    console.log();
    console.log();
  } else if (vitoria < derrota) {
    console.log(`Você PERDEU! Com o placar de ${vitoria} a ${derrota} com ${empate} empates`);
    console.log();
    console.log();
  } else if (vitoria == derrota) {
    console.log(`Você EMPATOU! Com o placar de ${vitoria} a ${derrota} com ${empate} empates`);
    console.log();
    console.log();
  }
  jogar = prompt('Deseja jogar novamente? (sim) ou (não): ');
}