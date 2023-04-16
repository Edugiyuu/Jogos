/* const prompt = require("prompt-sync")({ sigint: true });

setTimeout(function (){
        let resposta = prompt(console.log('Digite S para finalizar a prova'))
        if (resposta == 's') {
        console.log('Prova feita');
        }
},100)

setTimeout(function (){
        console.log('Tempo limite') 
},6000) */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const timeOut = 5000
const finished = () => console.log('\nTempo esgotado');

let timer = setTimeout(finished, timeOut);

rl.question('Digite S para finalizar a prova', () => {
  console.log('Finalizado');
  clearTimeout(timer)
});

//---------------------------------------------------
/* var readlineSync = require('readline-sync');

const timeOut = 5000
const finished = () => console.log('\nTempo esgotado');

let timer = setTimeout(finished, timeOut);


  
var digiteS = readlineSync.question('Digite S para finalizar a prova')
     
if (digiteS == 's') {
    console.log('feito');
    
  }  */
//---------------------------------
/* setTimeout(function (){
    let resposta = prompt(
        setTimeout(function (){
            console.log('Tempo limite') 
            },5000),
        console.log('Digite S para finalizar a prova'))
    if (resposta == 's') {
    console.log('Prova feita');
    }
},100) */
//----------------------------------
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

