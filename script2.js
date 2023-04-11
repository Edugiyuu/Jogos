const prompt = require("prompt-sync")({ sigint: true });

setTimeout(function (){
        let resposta = prompt(console.log('Digite S para finalizar a prova'))
        if (resposta == 's') {
        console.log('Prova feita');
        }else{
        console.log('Tempo limite');
}
},100)

setTimeout(function (){
        console.log('Tempo limite') 
},6000)
/* let finalizado = false

setTimeout(function (){
    if (!finalizado) {
        console.log('Tempo limite') 
    }
},3000)
var resposta = prompt('Digite S para finalizar a prova')

finalizado = true

if (resposta == 's') {
    console.log('Prova feita');
}else{
    console.log('Tempo limite');
} */

/* const timeOut = 10000
const tempoLimite = () => console.log('Tempo limite');

let interval = setInterval(tempoLimite, timeOut);

const IniciarTime = prompt('Deseja Iniciar o tempo?(S/N)')

if (IniciarTime === 'S') {
    setTimeout( () => clearInterval(interval),10000)
}

 const pararAntes = prompt('digite algo')

if (pararAntes == 'S') {
    clearTimeout(interval)
} */


