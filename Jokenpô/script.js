const prompt = require("prompt-sync")({ sigint: true });

var continuar = "1";
function printEscolhaDoPlayer(numero) {
    jokenpo = {
    1:'Você usou Papel 📜',
    2:'Você usou Pedra 🌑',
    3:'Você usou Tesoura ✂️'
}
console.log(jokenpo[numero]);
}

function printEscolhaDoRobo(numero) {
    jokenpo = {
    1:'O Robo usou Papel 📜',
    2:'O Robo usou Pedra 🌑',
    3:'O Robo usou Tesoura ✂️'
}
console.log(jokenpo[numero]);
}

console.log('Bem vindo')

while (continuar === "1") {
  let escolhaDoJogador = prompt(
    `Digite 1 para Papel 📜 , 2 Para Pedra 🌑  ou 3 para Tesoura ✂️  Para jogar: ` 
  );

  (printEscolhaDoPlayer(escolhaDoJogador));
  
  const escolhaDoRobo = Math.floor(Math.random() * 3) + 1;
  (printEscolhaDoRobo(escolhaDoRobo))

  
  continuar = prompt(
    `Quer jogar novamente? responda "1" para Sim ou "2" Para Não `
  );
}
// Evitar a repetição da menssagem de vitoria
// Evitar a repetição da menssagem de derrota
// Criar Tratativa para a palavra vezes para quando for no plural e vez quando for singular
// Alterar o nome da variavel Inicio, jogadas, bot. Feito
// Criar Validação do que o usuario digitar
// Utilizar objeto para substituição para os if
// Criar função que mostra quem ganhou 'Dentro da função tera uma regra de como funciona o jogo essa função retornara quem ganhou'