const prompt = require('prompt-sync')();
console.clear();

console.log('A jornada individual que todos nós invariavelmente temos que seguir é uma epopéia por si só. A importância de cuidar da saude fisica e mental do personagem principal da nossa história imprescindível.');
console.log('Vamos avaliar como estamos indo? \n\nResponda as cinco perguntas a seguir com sim ou não!');

let resp1 = '0';
let resp2 = '0';
let resp3 = '0';
let resp4 = '0';
let resp5 = '0';

while (resp1 != 'sim' && resp1 != 's' && resp1 != 'n' && resp1 != 'nao' && resp1 != 'não') {
  resp1 = prompt('Você tem tido tempo apropriado de descanso?').toLowerCase().trim();
  console.clear();
}

while (resp2 != 'sim' && resp2 != 's' && resp2 != 'n' && resp2 != 'nao' && resp2 != 'não') {
  resp2 = prompt('Já se hidratou hoje?').toLowerCase().trim();
  console.clear();
}

while (resp3 != 'sim' && resp3 != 's' && resp3 != 'n' && resp3 != 'nao' && resp3 != 'não') {
  resp3 = prompt('Costuma fazer pequenas pausas do seu trabalho/estudo para esticar ou tomar um ar?').toLowerCase().trim();
  console.clear();
}

while (resp4 != 'sim' && resp4 != 's' && resp4 != 'n' && resp4 != 'nao' && resp4 != 'não') {
  resp4 = prompt('Pratica exercícios regularmente?').toLowerCase().trim();
  console.clear();
}

while (resp5 != 'sim' && resp5 != 's' && resp5 != 'n' && resp5 != 'nao' && resp5 != 'não') {
  resp5 = prompt('Tem mantido uma alimentação saudável?').toLowerCase().trim();
  console.clear();
}

let cont = 0;

if (resp1 == 's' || resp1 == 'sim') {
  cont++;
}

if (resp2 == 's' || resp1 == 'sim') {
  cont++;
}

if (resp3 == 's' || resp1 == 'sim') {
  cont++;
}

if (resp4 == 's' || resp1 == 'sim') {
  cont++;
}

if (resp5 == 's' || resp1 == 'sim') {
  cont++;
}

if (cont == 5) {
  console.log('\nVocê está de parabens! \nCuidando muito bem do herói da sua história!');
} else if (cont == 4) {
  console.log('\nVocê está indo bem! \nCom pouca coisa a melhorar no cuidado do herói da sua história!');
} else if (cont == 3) {
  console.log('\nVocê está no caminho certo! \nFalta pouco para alcançar o objetivo de cuidar bem do herói da sua história!');
} else if (cont < 3 || cont >= 2) {
  console.log('\nVocê precisa tomar mais cuidado! \nVocê escapa por pouco mas precisa cuidar melhor do herói da sua história!');
} else if (cont == 0) {
  console.log('\nVocê está falhando na missão! \nPrecisa fazer mudanças drásticas para cuidar melhor do herói da sua história!');
}