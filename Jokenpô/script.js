const prompt = require("prompt-sync")({ sigint: true });


let Inicio = prompt("Bem-vindo, digite 1 para Papel 📜 , 2 Para Pedra 🌑  ou 3 para Tesoura ✂️  Para jogar: ");
var jogadas = (0)



if (Inicio == 1){
    console.log('Você usou Papel 📜 e');
}
if (Inicio == 2){
    console.log('Você usou Pedra 🌑 e');
}
if (Inicio == 3){
    console.log('Você usou Tesoura ✂️ e');
}


const bot = Math.floor(Math.random() * 3) + 1;

if(bot == 1){
    console.log('O bot usou Papel 📜');
}else if (bot == 2){
    console.log('O bot usou Pedra 🌑');
}else if(bot == 3){
    console.log('O bot usou Tesoura ✂️');
}

    if (bot == Inicio){
        console.log(`Deu empate! ➖`)
    } else if(bot == 2 && Inicio == 1){
        console.log(`Parabens você ganhou do bot! ✅ 🏆. Voce ganhou ${++jogadas} vezes`)
    } else if (bot == 1 && Inicio == 2){
        console.log('Você Perdeu do bot Tente novamente ❌')
    } else if (bot == 1 && Inicio == 3){
        console.log(`Parabens você ganhou do bot! ✅ 🏆. Voce ganhou ${++jogadas} vezes`)
    } else if (bot == 3 && Inicio == 1){
        console.log('Você Perdeu do bot Tente novamente ❌')
    } else if (bot == 2 && Inicio == 3){
        console.log('Você Perdeu do bot Tente novamente ❌')
    } else if (bot == 3 && Inicio == 2){
        console.log(`Parabens você ganhou!✅ 🏆. Voce ganhou ${++jogadas} vezes`)
    } 
    let voltar = prompt(`Quer jogar novamente? responda "Sim" ou "Não"`);

    if(voltar == 'Sim' || `sim`){
        
    }else if(voltar == `Não` || `não`) {
        
    }