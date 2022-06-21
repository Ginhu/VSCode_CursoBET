const prompt = require('prompt-sync')();
console.clear();

function escolha () {
  console.clear();
  exibirStatus();
  console.log('O que deseja fazer? \n[1]Descansar \n[2]Comer \n[3]Malhar \n[4]Estudar \n[5]Relaxar');
  let atividade = +prompt();
  horas = Math.ceil(Math.random()*4);
  
  while (atividade != 1 && atividade !=2 && atividade !=3 && atividade !=4 && atividade !=5) {
    console.log('Resposta inválida! \nPressione ENTER para tentar novamente');
    prompt();
    console.log('O que deseja fazer? \n[1]Descansar \n[2]Comer \n[3]Malhar \n[4]Estudar \n[5]Relaxar');
    atividade = +prompt();
  }  
  
  if (atividade == 1 && horasdoDia <= 18) {
    console.log(`Muito bem! Você descansou por ${horas} horas!`);
    return heroi.descansar(horas);
  } else if (atividade == 2) {
    horas = 1;
    console.log('Huuuum! Que refeição deliciosa!');
    return heroi.comer();
  } else if (atividade == 3) {
    console.log(`Excelente. Consegui me exercitar por ${horas} horas!`);
    return heroi.malhar(horas, mult);
  } else if (atividade == 4) {
    console.log(`Uau! Estudei por ${horas} horas! Já me sinto mais inteligente!`);
    return heroi.estudar(horas, mult);
  } else {
    console.log(`Nossa! Como o tempo passa quando estamos nos divertindo. Já se passaram ${horas} horas!`);
    return heroi.relaxar(horas, mult);
  }
}

function exibirStatus () {
  console.log(`Dia: ${dias} - Horas: ${horasdoDia} // Energia: ${heroi.energia}% // Fome: ${heroi.fome}%`);
  console.log(`Força: ${heroi.força} // Saúde Mental: ${heroi['saude mental']} // Conhecimento: ${heroi.conhecimento}`);
}

function verificaStatus (personagem) {
  
  if (heroi.força < 0 || heroi['saude mental'] < 0 || heroi.conhecimento < 0) {
    return 'Falhou';
  }

  if (heroi.energia <= 0) {
    console.log();
    console.log('Você está sem energia. \nÉ necessário comer ou descansar para continuar!');
    let escolher = +prompt();
    while (escolher != 1 && escolher != 2) {
      console.log('Escolha INVÁLIDA! \nDeseja [1]descansar ou [2]comer?');
      escolher = +prompt();
    }

    if (escolher == 1) {
      horas = 6;
      heroi.descansar(horas);
    } else {
      heroi.comer();
      horas = 1;
    }
  }

  if (heroi.fome >= 100) {
    console.log();
    console.log('Você está faminto.\nVamos parar e fazer uma refeição!');
    heroi.comer();
    heroi.comer();
    horas = 6;
  }
  horas = 0;
}

function score (personagem) {
  let pontuação = (personagem.força + personagem.conhecimento + personagem['saude mental']);
  return pontuação;
}

let nome = prompt('Digite seu nome: ');

let heroi = {
  nome: nome, 
  força: 10.00, 
  'saude mental': 10.00, 
  conhecimento: 10.00, 
  energia: 100, 
  fome: 0.00, 

  malhar: function (tempo, multiplicador) {
    this.força += tempo*(multiplicador+1);
    this.conhecimento -= parseFloat(tempo*multiplicador);

    if ((this.fome + tempo*20) <= 100) {
      this.fome += tempo*20;      
    } else {
      this.fome = this.fomeMax;
    }
    
    if ((this.energia - tempo*10) > this.energiaMin) {
      this.energia -= tempo*10;
    } else {
      this.energia = this.energiaMin;     
    }    
  },

  estudar: function (tempo, multiplicador) {
    this.conhecimento += tempo*(multiplicador+1);
    this['saude mental'] -= parseFloat(tempo*multiplicador);

    if ((this.fome + tempo*10) >= 100) {
      this.fome = this.fomeMax;
    } else {
      this.fome += tempo*10;
    }

    if ((this.energia - tempo*15) <= 0) {
      this.energia = this.energiaMin;
    } else {
      this.energia -= tempo*15;
    }    
  }, 

  relaxar: function (tempo, multiplicador) {
    this['saude mental'] += tempo*(multiplicador+1);
    this.força -= parseFloat(tempo*multiplicador);

    if ((this.fome + tempo*8) >= 100) {
      this.fome = this.fomeMax;
    } else {
      this.fome += tempo*8;
    }
    
    if ((this.energia - tempo*8) <= this.energiaMin) {
      this.energia = this.energiaMin;
    } else {
      this.energia -= tempo*8;
    }    
  }, 

  comer: function () {
    let random = Math.ceil(Math.random()*25+25);
    let random2 = Math.ceil(Math.random()*2);
    if ((this.energia + 20) <= this.energiaMax) {
      this.energia += 20;
    } else {
      this.energia = this.energiaMax;
    }

    if ((this.fome - random) <= this.fomeMin) {
      this.fome = this.fomeMin;
      this.força -= random2;
    } else {
      this.fome -= random;
      this.força -= random2;
    }
  },

  descansar: function (tempo) {
    if ((this.energia + (tempo*25)) <= this.energiaMax) {
      this.energia += ((tempo*25));
    } else {
      this.energia = this.energiaMax;
    }

    if ((this.fome + tempo*6) <= this.fomeMax) {
      this.fome += tempo*6;
    } else {
      this.fome = this.fomeMax;
    }
  },

  dormir: function(tempo) {
    if ((this.energia + (tempo*13)) <= this.energiaMax) {
      this.energia += tempo*(13);
    } else {
      this.energia = this.energiaMax;
    }
    

    if ((this.fome + (tempo*6))<= this.fomeMax) {
      this.fome += tempo*6;
    } else {
      this.fome = this.fomeMax;
    }
    
  },

  reiniciar: function() {
   this.força = 10;
   this.conhecimento = 10;
   this['saude mental'] = 10;
   this.fome = 0;
   this.energia = 100;
   dias = 1;
   horasdoDia = 6;
  },

  energiaMax: 100,
  energiaMin: 0,
  fomeMax: 100,
  fomeMin: 0
}


let horas = 0;
let horasdoDia = 6;
let dias = 1;
let mult = 0;

console.log(`Bem vindo ${nome} você é um magrelo desempregado e ansioso!`);
console.log(`Seu objetivo é realizar atividades durante o dia para melhorar seus status`);
console.log('Seus status não podem ser reduzidos para abaixo de 0, se isso acontecer você falha na sua missão!');
console.log(`É importante sempre estar de olho nos seus níveis de fome e energia`);
console.log(`Você tem quatro semanas para alcançar os maiores status possíveis! \nBoa sorte!`);

console.log();
prompt('Vamos começar? Pressione ENTER para continuar');




if (dias <= 30) {

  for (dias == 1; dias <= 7; dias++) {
    mult = 0.75;

  reboot: while (horasdoDia <= 22) {
      escolha();
      horasdoDia += horas;

      if ((verificaStatus(heroi)) != 'Falhou') {
        verificaStatus(heroi);
        horasdoDia += horas;

      } else {
        let pontos = score(heroi);
        console.log();
        console.log('Você Falhou!');
        console.log(`Sua pontuação foi de ${pontos}`);
        prompt('Pressione ENTER para continuar!');
        console.log('Deseja jogar novamente? sim ou não.');
        let jogardenovo = prompt();

        if (jogardenovo == 'sim') {
          heroi.reiniciar ();
          continue reboot;

        } else {
          break;

        }
      }      
      prompt('Pressione ENTER para continuar!');

    }
    console.log();
    heroi.dormir(parseInt(30-horasdoDia));
    console.log('Já está tarde! Hora de dormir!')
    horasdoDia = 6;
    console.log('O dia terminou!');
    prompt('Pressione ENTER para continuar!');

    }

    console.clear();
    console.log('Muito bem! Você sobreviveu a primeira semana! \nAgora vamos aumentar a dificuldade um pouco');
    prompt('Pressione ENTER para continuar!');

    for (dias == 8; dias <= 14; dias++) {
      mult = 1.5;

    reboot: while (horasdoDia <= 23) {
        escolha();
        horasdoDia += horas;

        if ((verificaStatus(heroi)) != 'Falhou') {
          verificaStatus(heroi);
          horasdoDia += horas;

        } else {
          let pontos = score(heroi);
          console.log();
          console.log('Você Falhou!');
          console.log(`Sua pontuação foi de ${pontos}`);
          prompt('Pressione ENTER para continuar!');
          console.log('Deseja jogar novamente? sim ou não.');
          let jogardenovo = prompt();

          if (jogardenovo == 'sim') {
            heroi.reiniciar ();
            continue reboot;

          } else {
            break;

          }
        }    
        prompt('Pressione ENTER para continuar!');

      }
      console.log();
      heroi.dormir(parseInt(30-horasdoDia));
      console.log('Já está tarde! Hora de dormir!')
      horasdoDia = 6;
      console.log('O dia terminou!');
      prompt('Pressione ENTER para continuar!');

    }

    console.clear();
    console.log('Parabens! Você sobreviveu a segunda semana! \nAgora vamos aumentar a dificuldade ainda mais um pouco');
    prompt('Pressione ENTER para continuar!');


    for (dias == 15; dias <= 21; dias++) {
      mult = 2.25;

    reboot: while (horasdoDia <= 23) {
        escolha();
        horasdoDia += horas;

        if ((verificaStatus(heroi)) != 'Falhou') {
          verificaStatus(heroi);
          horasdoDia += horas;

        } else {
          let pontos = score(heroi);
          console.log();
          console.log('Você Falhou!');
          console.log(`Sua pontuação foi de ${pontos}`);
          prompt('Pressione ENTER para continuar!');
          console.log('Deseja jogar novamente? sim ou não.');
          let jogardenovo = prompt();

          if (jogardenovo == 'sim') {
            heroi.reiniciar ();
            continue reboot;

          } else {
            break;

          }
        }    
        prompt('Pressione ENTER para continuar!');

      }
      console.log();
      heroi.dormir(parseInt(30-horasdoDia));
      console.log('Já está tarde! Hora de dormir!')
      horasdoDia = 6;
      console.log('O dia terminou!');
      prompt('Pressione ENTER para continuar!');
      
    }

    console.clear();
    console.log('Parabens! Você sobreviveu a terceira semana! \nAgora vamos ver se aguenta a última semana.');
    prompt('Pressione ENTER para continuar!');


    for (dias == 22; dias <= 28; dias++) {
      mult = 1;

    reboot: while (horasdoDia <= 23) {
        escolha();
        horasdoDia += horas;

        if ((verificaStatus(heroi)) != 'Falhou') {
          verificaStatus(heroi);
          horasdoDia += horas;

        } else {
          let pontos = score(heroi);
          console.log();
          console.log('Você Falhou!');
          console.log(`Sua pontuação foi de ${pontos}`);
          prompt('Pressione ENTER para continuar!');
          console.log('Deseja jogar novamente? sim ou não.');
          let jogardenovo = prompt();

          if (jogardenovo == 'sim') {
            heroi.reiniciar ();
            continue reboot;

          } else {
            break;

          }
        }    
        prompt('Pressione ENTER para continuar!');

      }
      if (dias < 28) {
      console.log();
      heroi.dormir(parseInt(30-horasdoDia));
      console.log('Já está tarde! Hora de dormir!')
      horasdoDia = 6;
      console.log('O dia terminou!');
      prompt('Pressione ENTER para continuar!');
      }       
    }

  console.log();
  console.log(`Parabéns! Você conseguiu finalizar o desafio com sucesso!`);
  let pontos = score(heroi);
  console.log(`Sua pontuação foi de ${pontos} pontos!`);

  let ranking = {
    nome: 'AAA',
    score: 0,
    mudarNome: function(novonome) {
      this.nome = novonome;
    },
    mudarScora: function(novoscore) {
      this.score = novoscore;
    }
  };

  let novoNome = prompt('Digite o seu nome: ');
  ranking.mudarNome(novoNome);
  ranking.mudarScora(pontos);
  console.log(`Parabens ${ranking.nome} seu score final foi de ${ranking.score}`);

} 