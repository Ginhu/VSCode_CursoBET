const prompt = require('prompt-sync')();
console.clear();

function vencedor(tabela) {
  let vencedor1 = false;
  let vencedor2 = false;
  if ((tabela[0][0] == 'X' && tabela[0][1] == 'X' && tabela[0][2] == 'X') 
   || (tabela[1][0] == 'X' && tabela[1][1] == 'X' && tabela[1][2] == 'X') 
   || (tabela[2][0] == 'X' && tabela[2][1] == 'X' && tabela[2][2] == 'X') 
   || (tabela[0][0] == 'X' && tabela[1][0] == 'X' && tabela[2][0] == 'X') 
   || (tabela[0][1] == 'X' && tabela[1][1] == 'X' && tabela[2][1] == 'X') 
   || (tabela[0][2] == 'X' && tabela[1][2] == 'X' && tabela[2][2] == 'X') 
   || (tabela[0][0] == 'X' && tabela[1][1] == 'X' && tabela[2][2] == 'X') 
   || (tabela[0][2] == 'X' && tabela[1][1] == 'X' && tabela[2][0] == 'X')) {
     vencedor1 = true;
  }

  if ((tabela[0][0] == 'O' && tabela[0][1] == 'O' && tabela[0][2] == 'O') 
   || (tabela[1][0] == 'O' && tabela[1][1] == 'O' && tabela[1][2] == 'O') 
   || (tabela[2][0] == 'O' && tabela[2][1] == 'O' && tabela[2][2] == 'O') 
   || (tabela[0][0] == 'O' && tabela[1][0] == 'O' && tabela[2][0] == 'O') 
   || (tabela[0][1] == 'O' && tabela[1][1] == 'O' && tabela[2][1] == 'O') 
   || (tabela[0][2] == 'O' && tabela[1][2] == 'O' && tabela[2][2] == 'O') 
   || (tabela[0][0] == 'O' && tabela[1][1] == 'O' && tabela[2][2] == 'O') 
   || (tabela[0][2] == 'O' && tabela[1][1] == 'O' && tabela[2][0] == 'O')) {
     vencedor2 = true;
  }

let vitoriaJogador1 = 'V1';
let vitoriaJogador2 = 'V2';

  if (vencedor1 == true) {
    return vitoriaJogador1;
  } else if (vencedor2 == true) {
    return vitoriaJogador2;
  }
}

let tabuleiro = [['A1', 'A2', 'A3'],['B1', 'B2', 'B3'],['C1', 'C2', 'C3']];

console.log('Esse é o jogo da velha! \nPara ganhar você deve colocar três marcações adjacentes (que se conectem) \nChame um amigo e comece a jogar!');
console.log();
prompt('Pressione ENTER para continuar!');

let linha;
let coluna;
let arrayLinha = ['A', 'B', 'C'];
let arrayColuna = ['1', '2', '3'];
let vitoriaJogador1 = 0;
let vitoriaJogador2 = 0;
let grandeGanhador;

for (let i = 0; i<tabuleiro.length; i++) {
  console.log(tabuleiro[i]);
}

for (let i = 0; i <= 9; i++) {
  linha = 'k';
  coluna = 'k';
  let ganhador = vencedor(tabuleiro);

  if (ganhador == 'V1') {
    console.log('O jogador 1 VENCEU esta partida!');
    vitoriaJogador1++;
    if (prompt('Deseja Jogar novamente? (sim) ou (não)') == 'sim') {
      i = 0;
      tabuleiro = [['A1', 'A2', 'A3'],['B1', 'B2', 'B3'],['C1', 'C2', 'C3']];
      console.log(tabuleiro[0]);
      console.log(tabuleiro[1]);
      console.log(tabuleiro[2]);

    } else {
      if (vitoriaJogador1>vitoriaJogador2) {
        grandeGanhador = 'JOGADOR1';
        console.log();
        console.log(`O grande VENCEDOR é o ${grandeGanhador} com um placar de ${vitoriaJogador1} VS ${vitoriaJogador2}`);
        break;
      } else if (vitoriaJogador1<vitoriaJogador2) {
        grandeGanhador = 'JOGADOR2';
        console.log();
        console.log(`O grande VENCEDOR é o ${grandeGanhador} com um placar de ${vitoriaJogador2} VS ${vitoriaJogador1}`);
        break;
      } else {
        console.log();
        console.log(`Não houve vencedor nessa partida! o placar foi ${vitoriaJogador1} VS ${vitoriaJogador2}`);
        break;
      }
    }
  } else if (ganhador == 'V2') {
    console.log('O jogador 2 VENCEU esta partida!');
    vitoriaJogador2++;
    if (prompt('Deseja Jogar novamente? (sim) ou (não)') == 'sim') {
      i = 0;   
      tabuleiro = [['A1', 'A2', 'A3'],['B1', 'B2', 'B3'],['C1', 'C2', 'C3']];  
      console.log(tabuleiro[0]);
      console.log(tabuleiro[1]);
      console.log(tabuleiro[2]);  

      } else {
        if (vitoriaJogador1>vitoriaJogador2) {
          grandeGanhador = 'JOGADOR1';
          console.log();
          console.log(`O grande VENCEDOR é o ${grandeGanhador} com um placar de ${vitoriaJogador1} VS ${vitoriaJogador2}`);
          break;
        } else if (vitoriaJogador1<vitoriaJogador2) {
          grandeGanhador = 'JOGADOR2';
          console.log();
          console.log(`O grande VENCEDOR é o ${grandeGanhador} com um placar de ${vitoriaJogador2} VS ${vitoriaJogador1}`);
          break;
        } else {
          console.log();
          console.log(`Não houve vencedor nessa partida! o placar foi ${vitoriaJogador1} VS ${vitoriaJogador2}`);
          break;
        }
      }
  }

  if (i%2 == 0) {
    while (linha != 'A' && linha != 'B' && linha != 'C') {
      linha = prompt('Escolha a coordenada da linha (A, B, C) - Jogador1: ');      
    }
    while(coluna != 1 && coluna != 2 && coluna != 3) {
      coluna = prompt('Escolha a coordenada da coluna (0, 1, 2) - Jogador1: ');
    }

    if ((tabuleiro[arrayLinha.indexOf(linha)][arrayColuna.indexOf(coluna)] != 'X') && (tabuleiro[arrayLinha.indexOf(linha)][arrayColuna.indexOf(coluna)] != 'O')) {
      tabuleiro[arrayLinha.indexOf(linha)].splice(arrayColuna.indexOf(coluna), 1, 'X');
    } else {
      console.log('Jogada INVÁLIDA! \nTente novamente!');
      i--;
      prompt('Digite ENTER para continuar!');
    }

  } else {
    while (linha != 'A' && linha != 'B' && linha != 'C') {
      linha = prompt('Escolha a coordenada da linha (A, B, C) - Jogador2: ');      
    }
    while(coluna != 1 && coluna != 2 && coluna != 3) {
      coluna = prompt('Escolha a coordenada da coluna (0, 1, 2) - Jogador2: ');
    }

    if ((tabuleiro[arrayLinha.indexOf(linha)][arrayColuna.indexOf(coluna)] != 'X') && (tabuleiro[arrayLinha.indexOf(linha)][arrayColuna.indexOf(coluna)] != 'O')) {
      tabuleiro[arrayLinha.indexOf(linha)].splice(arrayColuna.indexOf(coluna), 1, 'O');
    } else {
      console.log('Jogada INVÁLIDA! \nTente novamente!');
      i--;
      prompt('Digite ENTER para continuar!');
    }
  }
  console.clear();
  console.log(tabuleiro[0]);
  console.log(tabuleiro[1]);
  console.log(tabuleiro[2]);

  if (i == 8) {
    let ganhador = vencedor(tabuleiro);
     if(ganhador != 'V1' && ganhador != 'V2') {
       console.log('Vocês EMPATARAM!');
       if (prompt('Deseja Jogar novamente? (sim) ou (não)') == 'sim') {
        i=-1;
        tabuleiro = [['A1', 'A2', 'A3'],['B1', 'B2', 'B3'],['C1', 'C2', 'C3']];  
        console.log(tabuleiro[0]);
        console.log(tabuleiro[1]);
        console.log(tabuleiro[2]); 
       } else {
        if (vitoriaJogador1>vitoriaJogador2) {
          grandeGanhador = 'JOGADOR1';
          console.log();
          console.log(`O grande VENCEDOR é o ${grandeGanhador} com um placar de ${vitoriaJogador1} VS ${vitoriaJogador2}`);
          break;
        } else if (vitoriaJogador1<vitoriaJogador2) {
          grandeGanhador = 'JOGADOR2';
          console.log();
          console.log(`O grande VENCEDOR é o ${grandeGanhador} com um placar de ${vitoriaJogador2} VS ${vitoriaJogador1}`);
          break;
        } else {
          console.log();
          console.log(`Não houve vencedor nessa partida! o placar foi ${vitoriaJogador1} VS ${vitoriaJogador2}`);
          break;
        }
       }
     } 
  }
}