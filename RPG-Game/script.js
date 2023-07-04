var prompt = require('prompt-sync')();
const fs = require('fs')
var colors = require('colors/safe');

console.log(colors.bold('Bem-vindo'));
console.log('Qual vai ser o nome do seu personagem?');
var name = prompt(': ')

console.log(`Vamos começar ${name}?`);

console.log(`${colors.bold('Escolha seu tipo de arma inicial')} \n ${colors.red('1.')} 👊 \n ${colors.yellow('2.')} 🏹 \n ${colors.cyan('3.')} 🔪 `);

var armaInicial= prompt('') 

if (armaInicial == 1) {
    armaInicial = '👊'
}else if(armaInicial == 2){
    armaInicial = '🏹'
}else{
    armaInicial = '🔪'
}

var nivelDoPersonagem = 1
var vidaDoPersonagem = 100
var ataqueDoPersonagem = 10
var staminaDoPersonagem = 5


if(nivelDoPersonagem == 1){
    vidaDoInimigo = Math.floor(Math.random() * 100) + 30
}

else if(nivelDoPersonagem == 2){
    vidaDoInimigo = Math.floor(Math.random() * 130) + 60
    ataqueDoInimigo = Math.floor(Math.random() * 10) + 3
}

var nomeDosInimigos = ['Porco','Abelha', 'Esqueleto','Fantasma']
var umDosInimigos = nomeDosInimigos[Math.floor(Math.random() * 4)]
var ataqueDoInimigo = Math.floor(Math.random() * 10) + 1

console.log(`Você encontrou um ${umDosInimigos} Ele tem ${vidaDoInimigo} de Vida`);

function mostrarOpcoes() {
    if (nivelDoPersonagem == 1) {
        return prompt(`${colors.green("Digite 1 para Atacar, 2 Para Defender ou 3 Para descansar: ")}`)
    }else if (nivelDoPersonagem == 2) {
        return prompt(`${colors.green("Digite 1 para Atacar, 2 Para Defender ou 3 Para descansar: ")}`)
    }
  }
  
function escolhaDeCombate(numero,nomes) {
    var opçoes = {
        1: `${nomes} usou Ataque 🗡️`,
        2: `${nomes} usou Defesa 🛡️`,
        3: `${nomes} está Descansando 💨`,
        //3: `${nomes} usou Counter 💨`,
    }

    if (nivelDoPersonagem == 2) {
        opçoes = {
            1: `${nomes} usou Ataque 🗡️`,
            2: `${nomes} usou Defesa 🛡️`,
            3: `${nomes} está Descansando 💨`,
        }
    }
    
    console.log(opçoes[numero]);
}
    var cansado = false
function Combate() {
    let escolhaDoInimigo = Math.floor(Math.random() * 2) + 1
    escolhaDeCombate(escolhaDoInimigo,umDosInimigos)
    
    if (staminaDoPersonagem <= 0) {
        cansado = true
        console.log(`${colors.yellow('\nVocê está muito cansado para atacar.. (Recupere sua Stamina!)\n')}`);
       }else if(staminaDoPersonagem > 0){
        cansado = false
       }
       
    if (escolhaDoJogador == 1 && escolhaDoInimigo == 1) {
        
        if (cansado == false) {
            vidaDoInimigo -= ataqueDoPersonagem 
            vidaDoPersonagem -= ataqueDoInimigo
            staminaDoPersonagem--

            console.log(`\nVocê causou ${armaInicial}  ${ataqueDoPersonagem} de Dano ao ${umDosInimigos}`)
            console.log(`${umDosInimigos} causou 🗡️  ${ataqueDoInimigo} de Dano ao ${name}`)

            console.log(`\nVida do ${umDosInimigos}: ❤️  ${colors.red(vidaDoInimigo)}`);
            console.log(`Vida do(a) ${name} ❤️  ${colors.red(vidaDoPersonagem)}`);
            
        }else{
     
            vidaDoPersonagem -= ataqueDoInimigo
            console.log(`${umDosInimigos} causou 🗡️  ${ataqueDoInimigo} de Dano ao ${name}`)

            console.log(`\nVida do ${umDosInimigos}: ❤️  ${vidaDoInimigo}`);
            console.log(`Vida do(a) ${name} ❤️  ${colors.red(vidaDoPersonagem)}`);
            
        }

        console.log(`Stamina do(a) ${name} ⚡  ${colors.blue(staminaDoPersonagem)}\n`);

    //------------------------------------------------------------------------

    }else if (escolhaDoJogador == 1 && escolhaDoInimigo == 2) {

        if (cansado == false) {
            vidaDoInimigo -= ataqueDoPersonagem / 2
            staminaDoPersonagem--
            console.log(`\nVocê causou ${armaInicial}  ${ataqueDoPersonagem / 2} de Dano ao ${umDosInimigos}`)
            console.log(`${umDosInimigos} Defendeu 🛡️ seu ataque`)

        }else{
            console.log(`${umDosInimigos} nem precisou defender seu ataque, já que o ${name} está muito cansado`)
        }
        console.log(`\nVida do ${umDosInimigos}: ❤️  ${colors.yellow(vidaDoInimigo)}`);
        console.log(`Vida do(a) ${name} ❤️  ${vidaDoPersonagem}`);
        console.log(`Stamina do(a) ${name} ⚡  ${colors.blue(staminaDoPersonagem)}\n`);
        
    //---------------------------------------------------------------

    }else if (escolhaDoJogador == 2 && escolhaDoInimigo == 1) {
        
        console.log(`\n${name} Defendeu 🛡️ o ataque de ${umDosInimigos}`)
        console.log(`${umDosInimigos} causou 🗡️  ${ataqueDoInimigo / 2} de Dano ao ${name}`)

        staminaDoPersonagem++
        console.log(`\nStamina ${colors.blue('+1')} do(a) ${name} ⚡  Total de Stamina: ⚡ ${colors.blue(staminaDoPersonagem)}`);

        vidaDoPersonagem -= ataqueDoInimigo / 2
        console.log(`\nVida do ${umDosInimigos}: ❤️  ${vidaDoInimigo}`);
        console.log(`Vida do(a) ${name} ❤️  ${colors.yellow(vidaDoPersonagem)}\n`);
        
    }
    //--------------------------------------------------------------------------
    else if (escolhaDoJogador == 2 && escolhaDoInimigo == 2) {

        staminaDoPersonagem++
        console.log(`\nStamina ${colors.blue('+1')} do(a) ${name} ⚡  Total de Stamina: ⚡ ${colors.blue(staminaDoPersonagem)}`);

        console.log(`\nVida do ${umDosInimigos}: ❤️  ${vidaDoInimigo}`);
        console.log(`Vida do(a) ${name} ❤️  ${vidaDoPersonagem}`);
        
    }
    //--------------------------------------------------------------------------
    else if (escolhaDoJogador == 3 && escolhaDoInimigo == 1) {

        staminaDoPersonagem += 2
        console.log(`\nStamina ${colors.blue('+2')} do(a) ${name} recuperada ⚡ Total de Stamina: ${colors.blue(staminaDoPersonagem)} ⚡\n`);

        console.log(colors.red(`Você ficou com a guarda baixa!`));
        vidaDoPersonagem -= ataqueDoInimigo * 2
        console.log(`${umDosInimigos} causou 🗡️  ${ataqueDoInimigo * 2} de Dano ao ${name} ${colors.rainbow('(O dobro do dano!)')}`)

        console.log(`\nVida do ${umDosInimigos}: ❤️  ${vidaDoInimigo}`);
        console.log(`Vida do(a) ${name} ❤️  ${colors.red(vidaDoPersonagem)}`);
        console.log(`Stamina do(a) ${name} ⚡  ${colors.blue(staminaDoPersonagem)}`);
    }
    //---------------------------------------------------------------------------
    else if (escolhaDoJogador == 3 && escolhaDoInimigo == 2) {

        staminaDoPersonagem += 2
        console.log(`\nStamina ${colors.blue('+2')} do(a) ${name} recuperada por descansar⚡ Total de Stamina: ${colors.blue(staminaDoPersonagem)} ⚡`);

        console.log(colors.red(`Você ficou com a guarda baixa!`));

        console.log(`\nVida do ${umDosInimigos}: ❤️  ${vidaDoInimigo}`);
        console.log(`Vida do(a) ${name} ❤️  ${vidaDoPersonagem}`);
        console.log(`Stamina do(a) ${name} ⚡  ${colors.blue(staminaDoPersonagem)}`);
    }

    if(vidaDoInimigo <= 0){
        console.log('Você matou seu Inimigo ☠️');
        nivelDoPersonagem += 1
        console.log(`Você agora é nivel ${nivelDoPersonagem} ⏫`);

    }
    
}

var mensagemFinal = `Nome: ${name} \n Morto por: ${umDosInimigos} \n Nivel: ${nivelDoPersonagem} \n Arma Usada: ${armaInicial} \n Status: Morto`

while (vidaDoInimigo >= 0 ) {
    escolhaDoJogador = mostrarOpcoes();
    escolhaDeCombate(escolhaDoJogador,name);
    Combate();
    
    if (vidaDoPersonagem <= 0) {
        console.log('Seu personagem morreu ☠️');
        fs.writeFile(`Registros-de-Personagens/${name}.txt`, mensagemFinal, function () {
            console.log('Game over.');
          });
        break
    }
    
  }
