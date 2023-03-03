const prompt = require("prompt-sync")({ sigint: true });

var perguntas = ["Em que ano o Nintendo Switch foi lançado?", "Em que ano o Xbox 360 foi lançado?", "Em que ano o PlayStation 4 foi lançado?"];
var opcoes = [
  "a) 2014, b) 2019, c) 2017",
  "a) 2013, b) 2005, c) 2010",
  "a) 2013, b) 2011, c) 2009"
];

var respostas = ["c", "b", "a"];

let notaFinal = 0;
let tentativas = 0;



function perguntasErespostas() {
  const copiaDePerguntas = perguntas.slice();
  const copiaDeOpcoes = opcoes.slice();
  const copiaDeRespostas = respostas.slice(); 

  for (let i = 0; i < perguntas.length; i++) {
    const perguntaAleatoria = Math.floor(Math.random() * copiaDeOpcoes.length);

    console.log(copiaDePerguntas.length);
    console.log(perguntaAleatoria);

    console.log('Pergunta Aleatoria:',copiaDePerguntas[perguntaAleatoria]);
    console.log('Opçoes:',copiaDeOpcoes[perguntaAleatoria]);
    var suaResposta = prompt('Sua resposta: ');

    if (suaResposta == copiaDeRespostas[perguntaAleatoria]) {
      notaFinal += 1;
    }

    copiaDePerguntas.splice(perguntaAleatoria,1); 
    copiaDeOpcoes.splice(perguntaAleatoria, 1);
    copiaDeRespostas.splice(perguntaAleatoria, 1);
  }
}


function IniciarProva() {

  let iniciar = prompt("Deseja Iniciar a prova?(S/N):");

  while (tentativas <= 3) {

  if (iniciar.toUpperCase() === 'S' ) {
    perguntasErespostas();
    console.log(`Sua nota foi ${notaFinal} de ${perguntas.length}`);
    
    if (tentativas < 3) {
      let continuar = prompt(`Você tem mais ${3 - tentativas} tentativas. Deseja continuar? (S/N):`);
      if (continuar.toUpperCase() === 'N') {
        break;
      }
    }
  }
  tentativas++;
  
}
if (tentativas >= 3) {
  return console.log("Você excedeu o número máximo de tentativas.");
}
}

IniciarProva();
