const prompt = require("prompt-sync")({ sigint: true });

let qtdeVitorias = 0;
function IniciarJogo() {
  let modoDeJogo = prompt(
    "Digite seu modo de jogo, para ir Player Vs bot digite '1' e para Player vs Player digite '2'"
  );
  if (modoDeJogo == 1){
  var continuar = "1";

  console.log("Bem vindo");
  let nomeDoJogador = prompt("Digite seu nome: ");

  while (continuar === "1") {
    let escolhaDoJogador = prompt(
      `Digite 1 para Papel 📜 , 2 Para Pedra 🌑  ou 3 para Tesoura ✂️  Para jogar: `
    );

    printaEscolha(escolhaDoJogador, nomeDoJogador);

    const escolhaDoRobo = Math.floor(Math.random() * 3) + 1;

    printaEscolha(escolhaDoRobo, "Robô");

    defineVencedor(escolhaDoJogador, escolhaDoRobo);

    continuar = prompt(
      `Quer jogar novamente? responda "1" para Sim ou "2" Para Não `
    );
  }
}else{
  var nomeDoJogador1 = prompt('Escreva seu nome aqui Jogador 1: ')
  var nomeDoJogador2 = prompt('Escreva seu nome aqui Jogador 2: ')
  
  PrintaEscolhaDoJogador1(nomeDoJogador1)
  PrintaEscolhaDoJogador2(nomeDoJogador2)

  defineVencedor2(nomeDoJogador1,nomeDoJogador2)

} 
}
function PrintaEscolhaDoJogador1() {
  return prompt(`Digite 1 para Papel 📜 , 2 Para Pedra 🌑 ou 3 para Tesoura ✂️  Para jogar : `)
}

function PrintaEscolhaDoJogador2() {
  return prompt(`Digite 1 para Papel 📜 , 2 Para Pedra 🌑 ou 3 para Tesoura ✂️  Para jogar : `)
}

function defineVencedor2(nomeDoJogador1, nomeDoJogador2) {
  if (nomeDoJogador1 == nomeDoJogador2) {
    printaEmpate();
  } else if (nomeDoJogador1 == 1 && nomeDoJogador2 == 2) {
    printaVitoria();
  } else if (nomeDoJogador1 == 2 && nomeDoJogador2 == 3) {
    printaVitoria();
  } else if (nomeDoJogador1 == 3 && nomeDoJogador2 == 1) {
    printaVitoria();
  } else {
    printaDerrota();
  }
}


function defineVencedor(escolhaDoJogador, escolhaDoRobo) {
  if (escolhaDoJogador == escolhaDoRobo) {
    printaEmpate();
  } else if (escolhaDoJogador == 1 && escolhaDoRobo == 2) {
    printaVitoria();
  } else if (escolhaDoJogador == 2 && escolhaDoRobo == 3) {
    printaVitoria();
  } else if (escolhaDoJogador == 3 && escolhaDoRobo == 1) {
    printaVitoria();
  } else {
    printaDerrota();
  }
}

function printaEmpate() {
  console.log("Deu empate! ➖");
}

function printaDerrota() {
  console.log("Você Perdeu Tente novamente ❌");
}

function printaVitoria() {
  ++qtdeVitorias;
  console.log(
    `Parabens você ganhou do Robo! ✅ 🏆. Voce ganhou ${qtdeVitorias} ${transformaEmPlural}(
      "vez"
    )}`
  );
}

function transformaEmPlural(texto) {
  return verificaSePlural(qtdeVitorias) ? texto.concat("es") : texto;
}

function verificaSePlural(numero) {
  return numero > 1;
}

function printaEscolha(numero, jogador) {
  jokenpo = {
    1: `${jogador} usou Papel 📜`,
    2: `${jogador} usou Pedra 🌑`,
    3: `${jogador} usou Tesoura ✂️`,
  };
  console.log(jokenpo[numero]);
}

IniciarJogo();

// Evitar a repetição da menssagem de vitoria
// Evitar a repetição da menssagem de derrota
// Criar Tratativa para a palavra vezes para quando for no plural e vez quando for singular
// Alterar o nome da variavel Inicio, jogadas, bot.
// Criar Validação do que o usuario digitar
// Utilizar objeto para substituição para os if
// Criar função que mostra quem ganhou 'Dentro da função tera uma regra de como funciona o jogo essa função retornara quem ganhou'
