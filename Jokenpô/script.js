const prompt = require("prompt-sync")({ sigint: true });

var continuar = "1";
function EscolhaDoplayer(numero) {
    jokenpo = {
    1:'Você usou Papel 📜',
    2:'Você usou Pedra 🌑',
    3:'Você usou Tesoura ✂️'
}
console.log(jokenpo[numero]);
}

function EscolhaDoRobo(numero) {
    jokenpo = {
    1:'O Robo usou Papel 📜',
    2:'O Robo usou Pedra 🌑',
    3:'O Robo usou Tesoura ✂️'
}
console.log(jokenpo[numero]);
}

console.log('Bem vindo')

while (continuar === "1") {
  let Escolha = prompt(
    `Digite 1 para Papel 📜 , 2 Para Pedra 🌑  ou 3 para Tesoura ✂️  Para jogar: ` 
  );

  (EscolhaDoplayer(Escolha));
  
  const Robo = Math.floor(Math.random() * 3) + 1;
  (EscolhaDoRobo(Robo))

  if (Robo == Escolha) {
    console.log(`Deu empate! ➖`);
  } else if (Robo == 2 && Escolha == 1) {
    console.log(
      `Parabens você ganhou do Robo! ✅ 🏆. Voce ganhou  vezes`
    );
  } else if (Robo == 1 && Escolha == 2) {
    console.log("Você Perdeu do Robo Tente novamente ❌");
  }
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