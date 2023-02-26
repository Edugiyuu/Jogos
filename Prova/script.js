const prompt = require("prompt-sync")({ sigint: true });


var perguntas = [
  "Em que ano o nintendo switch foi lançado?",  "Em que ano o xbox 360 foi lançado?",  "Em que ano o playstation 4 foi lançado?"
];
var opcoes = [
  "a) 2014, b) 2019, c) 2017",
  "a) 2013, b) 2005, c) 2010",
  "a) 2013, b) 2011, c) 2009"
];

var respostas = ["c", "b", "a"];


var notaFinal = 0

function perguntasErespostas() {
  for (let i = 0; i < perguntas.length; i++) {
    console.log(perguntas[i]);
    console.log(opcoes[i]);
    var suaResposta = prompt('Sua resposta: ')

    if (suaResposta == respostas[i]) {
      notaFinal += 1
    }
  }
}

function IniciarProva() {
  let iniciar = prompt(
    "Deseja Iniciar a prova?(S/N):"
  );

  if (iniciar.toUpperCase() === 'S') {
    perguntasErespostas()
    console.log(`Sua nota foi ${notaFinal} de ${perguntas.length}`);
    
  }else{
    iniciar = prompt('')
  }
}

IniciarProva();

