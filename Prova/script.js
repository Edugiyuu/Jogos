const prompt = require("prompt-sync")({ sigint: true });



var perguntas = [
  {
    pergunta: "Em que ano o nintendo switch foi lançado?",
    opcoes: "a) 2014, b) 2019, c) 2017",
    resposta: "c"
  },
  {
    pergunta: "Em que ano o xbox 360 foi lançado?",
    opcoes: "a) 2013, b) 2005, c) 2010",
    resposta: "b"
  },
  {
    pergunta: "Em que ano o playstation 4 foi lançado?",
    opcoes: "a) 2013, b) 2011, c) 2009",
    resposta: "a"
  },
];


var notaFinal = 0

function perguntasErespostas() {
  for (let i = 0; i < perguntas.length; i++) {
    console.log(perguntas[i].pergunta);
    console.log(perguntas[i].opcoes);
    var SuaResposta = prompt('Sua resposta: ')

    if (SuaResposta == perguntas[i].resposta) {
      notaFinal += 1
    }
  }
}

function IniciarProva() {
  let Iniciar = prompt(
    "Deseja Iniciar a prova?(S/N):"
  );

  if (Iniciar === 's') {
    perguntasErespostas()
    console.log(`Sua nota foi ${notaFinal} de ${perguntas.length}`);
    
  }else{
    Iniciar = prompt('')
  }
}

IniciarProva();

