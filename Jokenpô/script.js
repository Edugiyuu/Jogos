const prompt = require("prompt-sync")({ sigint: true });

let qtdeVitorias = 0;
let qtdeVitoriasPlayer2 = 0;
function IniciarJogo() {
  let modoDeJogo = prompt(
    "Digite seu modo de jogo, para ir Player Vs bot digite '1' e para Player vs Player digite '2'"
  );
  var continuar = "1";

  modoDeJogo == 1 ? PvB(continuar) : PvP(continuar)
} 


function PvP(continuar) {
  var nomeDoJogador1 = prompt ("Escreva do jogador 1: ")
  var nomeDoJogador2 = prompt ("Escreva do jogador 2: ")

  while (continuar === "1") {
      let escolhaDoJogador1 = mostraOpcoes()
      let escolhaDoJogador2 = mostraOpcoes()
      
      defineVencedor(escolhaDoJogador1, escolhaDoJogador2, true)
      mostrarResumoDeVitorias (nomeDoJogador1, nomeDoJogador2)
      
      continuar = prompt(
        `Quer jogar novamente? responda "1" para Sim ou "2" Para Não `
      );
  }


}
function PvB(continuar) {
  let nomeDoJogador = prompt (`Qual é seu nome: `)
  while (continuar === "1") {

    let escolhaDoJogador = mostraOpcoes()

    printaEscolha(escolhaDoJogador, nomeDoJogador);

    const escolhaDoRobo = Math.floor(Math.random() * 3) + 1;

    printaEscolha(escolhaDoRobo, "Robô");

    defineVencedor(escolhaDoJogador, escolhaDoRobo);

    continuar = prompt(
      `Quer jogar novamente? responda "1" para Sim ou "2" Para Não `
    );
  }
}

function mostraOpcoes() {
  return prompt(`Digite 1 para Papel 📜 , 2 Para Pedra 🌑 ou 3 para Tesoura ✂️  Para jogar : `)
}



function defineVencedor(jogador1, jogador2, pvp = false) {
  if (jogador1 == jogador2) {
    printaEmpate();
  } else if (jogador1 == 1 && jogador2 == 2) {
    printaVitoria(pvp);
  } else if (jogador1 == 2 && jogador2 == 3) {
    printaVitoria(pvp);
  } else if (jogador1 == 3 && jogador2 == 1) {
    printaVitoria(pvp);
  } else {
    printaDerrota(pvp);
  }
}
function mostrarResumoDeVitorias(p1,p2) {
  console.log(
    `${p1} ganhou ${qtdeVitorias} ${transformaEmPlural(
      "vez", qtdeVitorias
    )}`
  );
  console.log(
    `${p2} ganhou ${qtdeVitoriasPlayer2} ${transformaEmPlural(
      "vez", qtdeVitoriasPlayer2
    )}`
  )

}

function printaEmpate() {
  console.log("Deu empate! ➖");
}

function printaDerrota(isPvp) {
  if(isPvp){
    ++qtdeVitoriasPlayer2;
    console.log(
      `Parabens jogador n-2 ✅ 🏆. Voce ganhou ${qtdeVitoriasPlayer2} ${transformaEmPlural(
        "vez"
      )}`
    )
  }else{
    console.log("Você Perdeu Tente novamente ❌");
  }
  
}
function printaVitoria(isPvp) {
  if(isPvp){
    ++qtdeVitorias;
    console.log(
      `Parabens jogador n-1 ✅ 🏆. Voce ganhou ${qtdeVitorias} ${transformaEmPlural(
        "vez"
      )}`
    )
  }else{
  ++qtdeVitorias;
  console.log(
    `Parabens você ganhou do Robo! ✅ 🏆. Voce ganhou ${qtdeVitorias} ${transformaEmPlural(
      "vez"
    )}`
  );}
  
}

function transformaEmPlural(texto,numero) {
  return verificaSePlural(numero) ? texto.concat("es") : texto;
}

function verificaSePlural(numero) {
  return numero > 1;
}

function printaEscolha(numero, Jogador) {
  jokenpo = {
    1: `${Jogador} usou Papel 📜`,
    2: `${Jogador} usou Pedra 🌑`,
    3: `${Jogador} usou Tesoura ✂️`,
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
