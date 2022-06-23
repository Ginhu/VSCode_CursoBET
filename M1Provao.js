const prompt = require('prompt-sync')();
console.clear();

// Exercicios 1

/* let num1 = 'a';
let num2 = 'a';
let duracao = 0;

while (isNaN(num1)) {
  num1 = +prompt('Digite a hora que iniciou o jogo: ');
}

while (isNaN(num2)) {
  num2 = +prompt('Digite a hora que terminou o jogo: ');
} 

duracao = (num2+24) - num1;

console.log(`O JOGO DUROU ${duracao} HORA(S)`); */


// -------------------------------------------------------------------------------------------------//
// Exercicios 2 

/* let idade = 'a';
let anos = 0;
let meses = 0;
let dias = 0;


while (isNaN(idade)) {
  idade = parseInt(+prompt('Digite a sua idade em dias: '));
}

anos = parseInt(idade/365);
meses = parseInt((idade%365)/30);
dias = parseInt((idade%365)%30);

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`); */


// -------------------------------------------------------------------------------------------------//
// Exercicios 3

/* let salario = 'a';
let reajuste = 0;
let ganho = 0;

while(isNaN(salario)) {
  salario = (parseFloat(+prompt('Digite o valor do seu salário: '))).toFixed(2);
}

if (salario <= 400) {
  reajuste = (salario*1.15).toFixed(2);
  ganho = reajuste - salario;
  console.log(`Novo salário: ${reajuste}`);
  console.log(`Reajuste Ganho: ${ganho}`);
  console.log(`Em percentual: 15%`);
} else if (salario <= 800) {
  reajuste = (salario*1.12).toFixed(2);
  ganho = (reajuste - salario).toFixed(2);
  console.log(`Novo salário: ${reajuste}`);
  console.log(`Reajuste Ganho: ${ganho}`);
  console.log(`Em percentual: 12%`);
} else if (salario <= 1200) {
  reajuste = (salario*1.10).toFixed(2);
  ganho = reajuste - salario;
  console.log(`Novo salário: ${reajuste}`);
  console.log(`Reajuste Ganho: ${ganho}`);
  console.log(`Em percentual: 10%`);
} else if (salario <= 2000) {
  reajuste = (salario*1.07).toFixed(2);
  ganho = reajuste - salario;
  console.log(`Novo salário: ${reajuste}`);
  console.log(`Reajuste Ganho: ${ganho}`);
  console.log(`Em percentual: 7%`);
} else {
  reajuste = (salario*1.04).toFixed(2);
  ganho = reajuste - salario;
  console.log(`Novo salário: ${reajuste}`);
  console.log(`Reajuste Ganho: ${ganho}`);
  console.log(`Em percentual: 4%`);
} */


// -------------------------------------------------------------------------------------------------//
// Exercicios 4

/* let T = 0;
let PA = 0;
let PB = 0;
let G1 = 0;
let G2 = -1;

while (T < 1 || T > 3000) {
  T = parseInt(+prompt('Digite a quantiadade de casos a serem testados: '));
}


for (let i = 0; i < T; i++) {
  while (PA < 100 || PA >= 1000000) {
    PA = parseInt(+prompt('Digite o valor da população A: '));
  }

  while (PB <= PA || PB >= 1000000) {
    PB = parseInt(+prompt('Digite o valor da população B: '));
  }

  while (G1 < 0.1 || G1 > 10.0) {
    G1 = (parseFloat(+prompt('Digite o valor do crescimento populacional de A: '))).toFixed(1);
  }

  while (G2 > 10.0 || G2 < 0 || G2 > G1) {
    G2 = (parseFloat(+prompt('Digite o valor do crescimento populacional de B: '))).toFixed(1);
  }

  let cont = 0;
while(PA<=PB) {
  PA += Math.floor(PA*(G1/100));
  PB += Math.floor(PB*(G2/100));
  cont++;

  if (cont >= 100) {
    break;
    console.log('Mais de 1 século!');
  }
  
}
console.log(`${cont} anos.`);
PA = 0;
PB = 0;
G1 = 0;
G2 = -1
} */


// -------------------------------------------------------------------------------------------------//
// Exercicios 5

/* let n = 1;
let x = 0;
let cont = 0;
let a = 0;

n = parseInt(+prompt('Digite quantas análises deseja fazer: '));

while(a < n) {

  while (n < 1 || n > 100) {
    n = parseInt(+prompt('Digite quantas análises deseja fazer: '));
  }
  
  while (x <= 1 || x > 10000000) {
    x = parseInt(+prompt('Digite um número inteiro: '));
  }

  for (let i = 2; i < x; i++) {
    if (x%i === 0) {
      console.log(`O numero ${x} não é primo pois é divisivel por ${i}`);
      break;
    } else if (x%i !== 0) {
      cont++;
    }

    if (cont + 2 === x) {
      console.log(`O número ${x} é primo`);
    }
  }

  a++;
  x = 0;
  cont = 0;
} */


// -------------------------------------------------------------------------------------------------//
// Exercicios 6

/* let n = 0;

while(n<=0 || isNaN(n)) {
  n = parseInt(+prompt('Digite um número inteiro: '));
}

for (let i = 0; i < n; i++) {
  console.log(`${(4*i)+1} ${(4*i)+2} ${(4*i)+3} PUM`);
} */


// -------------------------------------------------------------------------------------------------//
// Exercicios 7

/* let n = 0;
let x = 'a';
let intervalo = [10, 20];
let dentro = 0;
let fora = 0;

while (n <= 0 || n >= 10000 || isNaN(n)) {
  n = parseInt(+prompt('Digite quantas valores serão inseridos: '));
}



for (let i = 0; i < n; i++) {

  while (x <= -10000000 || x >= 10000000 || isNaN(x)) {
    x = parseInt(+prompt('Digite o valor a ser analisado: '));
  }

  if (x >= intervalo[0] && x <= intervalo[1]) {
    dentro++;
  } else {
    fora++
  }

  x='a'
}

console.log(`${dentro} in`);
console.log(`${fora} out`); */


// -------------------------------------------------------------------------------------------------//
// Exercicios 8

/* let x = 'a';
let y = 'b';
let soma = 0;

while (isNaN(x)) {
  x = parseInt(+prompt('Digite um número inteiro: '));
}

while (isNaN(y)) {
  y = parseInt(+prompt('Digite um número inteiro: '));
}

if ((x > y) && (y%2 === 0)) {
  for (let i = 0; (((2*i)+1)+y) < x ; i++) {
    soma += ((2*i)+1)+y;
  }
  console.log(`${soma}`);
} else if ((x > y) && (y%2 !== 0)) {
  for (let i = 0; (((2*i)+2)+y) < x; i++) {
    soma += ((2*i)+2)+y;
  }
  console.log(`${soma}`);
} else if ((x < y) && (x%2 === 0)) {
  for (let i = 0; (((2*i)+1)+x) < y ; i++) {
    soma += ((2*i)+1)+x;
  }
  console.log(`${soma}`);
} else if ((x < y) && (x%2 !== 0)) {
  for (let i = 0; (((2*i)+2)+x) < y; i++) {
    soma += ((2*i)+2)+x;
  }
  console.log(`${soma}`);
} else {
  console.log('0')
} */


// -------------------------------------------------------------------------------------------------//
// Exercicios 9

/* let A = [];

for (let i = 0; i < 100; i++) {
  let num = (Math.floor(Math.random()*100)-50);
  A.push(num);
}

console.log(A);

for (i in A) {
  if (A[i] <= 10) {
    console.log(`A[${i}] = ${A[i]}`);
  }
} */


// -------------------------------------------------------------------------------------------------//
// Exercicios 10

let x = [];
let n = 0;
let valores = 0;
let menor;

while (n <= 0 || isNaN(n)) {
  n = parseInt(+prompt('Digite a quantidade de valores a serem inseridos no vetor: '));
}

valores = prompt('Digite os valores que serão analisados separados por um espaço: ');
x = valores.split(" ");

for (let i = 0; i< n; i++) {
  x[i] = Number(x[i]);
}

menor = Math.min(...x);

let pos = x.indexOf(menor);

console.log(`Menor valor: ${menor}`);
console.log(`Posição: ${pos}`);