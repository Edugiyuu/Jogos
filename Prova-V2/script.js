const prompt = require("prompt-sync")({ sigint: true });
const cfonts = require('cfonts');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

cfonts.say('Provinha', {
	font: 'block',              // define the font face
	align: 'left',              // define text alignment
	colors: ['system'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 0,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment cfonts is being executed in
});

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


  function mostrarPerguntas(exemploPerguntas,notaAtual,respostasErradas){

    const copiaDeTudo = Array.from(exemploPerguntas)
    

    for (let i = 0; i < perguntas.length;i++){
      const perguntaAleatoria = Math.floor(Math.random() * copiaDeTudo.length);
        
      const arrayDeLetras = ["A", "B", "C"];

        console.log(copiaDeTudo[perguntaAleatoria].pergunta);
        //console.log(selecionarPerguntas[perguntaAleatoria].opcoes.toString().replaceAll(',','\n'));
        console.log(copiaDeTudo[perguntaAleatoria].opcoes.map((opcao, index) => `${arrayDeLetras[index]} - ${opcao}`).toString().replaceAll(',','\n'));
        
        let suaResposta = prompt('Sua resposta: ');

        suaResposta = suaResposta.charAt(0)
        var indexDaResposta = arrayDeLetras.indexOf(suaResposta.toUpperCase())
        if (indexDaResposta == -1) {
          console.log('Opção invalida');
          break;
        }
        console.log(indexDaResposta);
        

        if ( copiaDeTudo[perguntaAleatoria].opcoes[indexDaResposta] == copiaDeTudo[perguntaAleatoria].resposta) {
            notaAtual++
        }
        else{
          respostasErradas.push({
            pergunta: copiaDeTudo[perguntaAleatoria].pergunta,
            resposta: suaResposta
          })
        }
        copiaDeTudo.splice(perguntaAleatoria,1); 
    }

    return notaAtual
}

function validaTentativas(exemploPerguntas,iniciar,tentativas = 0,notaAtual = 0,respostasErradas = [],notaMaior = 0) {
  if (tentativas <= 3) {
  if (iniciar.toUpperCase() === 'S' ) {
    notaAtual = mostrarPerguntas(exemploPerguntas,notaAtual,respostasErradas)


    console.log(`Sua nota foi ${notaAtual} de ${perguntas.length}`);
    console.log(`Porcentagem: ${Math.floor((notaAtual / perguntas.length) * 100)}%`);

    let verRespostasErradas = prompt('Você quer ver suas respostas erradas? (S/N): ');
    if (verRespostasErradas.toUpperCase() === 'S') {
      respostasErradas.forEach(questao => {
        console.log(`Questão: ${questao.pergunta}\nSua resposta: ${questao.resposta}`);
        respostasErradas = []
        
        if (tentativas >= 3) {
        console.log("Você excedeu o número máximo de tentativas.");
      }
        
      });
    }

    if (notaAtual > notaMaior) {
      notaMaior = notaAtual
    }
    if (tentativas < 3) {
      notaAtual = 0

      let continuar = prompt(`Você tem mais ${ 3 - tentativas} tentativas. Deseja continuar? (S/N):`);
      if (continuar.toUpperCase() === 'N'){
        notaMaxima()
        return
      }
    }
  }
  tentativas++
  validaTentativas(exemploPerguntas,iniciar,tentativas,notaAtual,respostasErradas,notaMaior)
  }
  function notaMaxima() {
    
    console.log(`Sua pontuação maxima foi de ${notaMaior} de ${perguntas.length}`);
    console.log(`A Maior Porcentagem: ${Math.floor((notaMaior / perguntas.length) * 100)}%`);
  }
  
  
}



function IniciarProva(exemploPerguntas) {
    
    let iniciar = prompt("Deseja Iniciar a prova?(S/N):");
    


    validaTentativas(exemploPerguntas,iniciar)

  }
  IniciarProva(perguntas);
