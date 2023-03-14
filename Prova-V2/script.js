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
  ];


  function mostrarPerguntas(exemploPerguntas,notaAtual){

    for (let i = 0; i < perguntas.length;i++){
      const perguntaAleatoria = Math.floor(Math.random() * perguntas.length);
        
        console.log(exemploPerguntas[perguntaAleatoria].pergunta);
        console.log(exemploPerguntas[perguntaAleatoria].opcoes.join(', '));
        let suaResposta = prompt('Sua resposta: ');

        if (suaResposta == exemploPerguntas[perguntaAleatoria].resposta) {
            notaAtual++
        }
    }
    return notaAtual
}


function IniciarProva(exemploPerguntas) {
    let notaAtual = 0
    let tentativas = 0
    let notaMaior = 0
    let iniciar = prompt("Deseja Iniciar a prova?(S/N):");

    while (tentativas <= 3) {
    if (iniciar.toUpperCase() === 'S' ) {
        notaAtual = mostrarPerguntas(exemploPerguntas,notaAtual)
        
        console.log(`Sua nota foi ${notaAtual} de ${perguntas.length}`);
        console.log(`Porcentagem: ${Math.floor((notaAtual / perguntas.length) * 100)}%`);

        if (notaAtual > notaMaior) {
          notaMaior = notaAtual
        }
        if (tentativas < 3) {
          notaAtual = 0
          let continuar = prompt(`Você tem mais ${ 3 - tentativas} tentativas. Deseja continuar? (S/N):`);
          if (continuar.toUpperCase() === 'N'){
            notaMaxima()
            break;
          }
        }
      }
    
    tentativas++
  }
  if (tentativas >= 3) {
    console.log("Você excedeu o número máximo de tentativas.");
    notaMaxima()
  }
  function notaMaxima() {
    console.log(`Sua pontuação maxima foi de ${notaMaior} de ${perguntas.length}`);
    console.log(`A Maior Porcentagem: ${Math.floor((notaMaior / perguntas.length) * 100)}%`);
  }
  }
  IniciarProva(perguntas);
