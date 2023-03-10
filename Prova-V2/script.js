const prompt = require("prompt-sync")({ sigint: true });

var perguntas = [
    {
      pergunta: "Em que ano o nintendo switch foi lançado?",
      opcoes: ["2014", "2019", "2017"],
      resposta: "2017"
    },
    {
      pergunta: "Em que ano o xbox 360 foi lançado?",
      opcoes: ["2013", "2005", "2010"],
      resposta: "2005"
    },
    {
      pergunta: "Em que ano o playstation 4 foi lançado?",
      opcoes: ["2013", "2011", "2009"],
      resposta: "2013"
    },
  ]


  function mostrarPerguntas(exemploPerguntas,notaAtual){
    for (let i = 0; i < perguntas.length;i++){
        
        console.log(exemploPerguntas[i].pergunta);
        console.log(exemploPerguntas[i].opcoes.join(', '));
        let suaResposta = prompt('Sua resposta: ');

        if (suaResposta == exemploPerguntas[i].resposta) {
            notaAtual++
        }
    }
    return notaAtual
}


function IniciarProva(exemploPerguntas) {
    let notaAtual = 0
    let iniciar = prompt("Deseja Iniciar a prova?(S/N):");
    if (iniciar.toUpperCase() === 'S' ) {
        notaAtual = mostrarPerguntas(exemploPerguntas,notaAtual)
        
        console.log(notaAtual);
    }

  }
  IniciarProva(perguntas);
