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

const arrayDeLetras = ["A.", "B.", "C.", "D."];


const perguntasComLetras = perguntas.map((pergunta) => {
  const opcoesComLetras = pergunta.opcoes.map((opcao, index) => `${arrayDeLetras[index]} ${opcao}`);
  return {
    opcoes: opcoesComLetras,
  }
});

console.log(perguntasComLetras);


const perguntasArray = ["pergunta 1", "pergunta 2", "pergunta 3", "pergunta 4"];
//const perguntasComLetras = perguntasArray.map((perguntas, index) => `${arrayDeLetras[index]} ${perguntas}`);
//console.log(perguntasComLetras);


