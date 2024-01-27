/*   const array = [1,2,3,4,7,8,15,20,69,70,76,80,555,799,1000]
   console.time('BuscaLinear'); 
function ProcurarNumeroLinear(procurar) {
    for (let i = 0; i < array.length; i++) {
        if (procurar === array[i]) {
            console.log(`posição ${i}`);
            return array[i]
        }
    }
}
 const inicio = performance.now();
ProcurarNumeroLinear(69);
const fim = performance.now();
console.log(`A operação Linear levou ${fim - inicio} milissegundos`); 


[1,2,3,4,7,8,15,20,69,70,76,80,555,799,1000]

function buscaBinaria(numeroProcurado, array) {
    let inicio = 0;//8
    let fim = array.length;//8

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);//8

        if (array[meio] === numeroProcurado) {
            console.log(`Posição ${meio}`);
            return numeroProcurado;
        } else if (array[meio] < numeroProcurado) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
} */
var naoOrdenado = [5, 2, 8, 1, 7]

function Ordenar() {
   
    for (let i = 0; i < naoOrdenado.length; i++) {
        for (let j = 1 ; j < naoOrdenado.length; j++) {
            var numeroMenor = 0
            if (naoOrdenado[i] > naoOrdenado[j]) {
                numeroMenor = naoOrdenado[j]
                naoOrdenado[j] = naoOrdenado[i]
                naoOrdenado[i] = numeroMenor
                console.log(naoOrdenado);
            }else if (naoOrdenado[i]) {
                numeroMenor = naoOrdenado[i]
            }
            
        }
       /*  if (naoOrdenado[i] > naoOrdenado[i + 1]) {
            numeroMenor = naoOrdenado[i + 1]
            naoOrdenado[i + 1] = naoOrdenado[i]
            naoOrdenado[i] = numeroMenor
            console.log(naoOrdenado);

        } */
        
    }
}

console.log(Ordenar());
/* function sortfunction(a, b){
    let res = a - b
    console.log(res);
    return res //faz com que o array seja ordenado numericamente e de ordem crescente.
    
  }
  var ordenado = naoOrdenado.sort(sortfunction)
  console.log(ordenado); */
 /*  console.log(sortfunction(10, 8)); */

/* const inicio2 = performance.now();
buscaBinaria(69, array);
const fim2 = performance.now();
console.log(`A operação Binaria levou ${fim2 - inicio2} milissegundos`); */

 //console.log(buscaBinaria(69, array)); 
 

/* const palavras = ['Sim','Não','Yes','No']

function ProcurarPalavra(procurar) {
    for (let i = 2; i < palavras.length; i++) {
        if (procurar === palavras[i]) {
            console.log(`posição ${i}`);
            return palavras[i]
        }
    }
}
console.log(ProcurarPalavra('No')); */

/* const pokemonArray = [
    { id: 1, nome: "Bulbasaur" },
    { id: 2, nome: "Ivysaur" },
    { id: 3, nome: "Venusaur" },
    { id: 52, nome: "Pikachu" },
    { id: 93, nome: "Umbreon" },
]
function buscaBinariaPokemon(idProcurado) {
    let inicio = 0;
    let fim = pokemonArray.length;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (pokemonArray[meio].id === idProcurado) {
            return `Posição ${meio} id do pokemon ${idProcurado}`
            
        } else if (pokemonArray[meio].id < idProcurado) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
}
console.log(buscaBinariaPokemon(93));
 */

/* function ProcurarNumeroLinearPokemon (id) {
    for (let i = 0; i < pokemonArray.length; i++) {
        if (pokemonArray[i].id === id) {
            return `id ${id} posição ${i}`
        }
        
    }
} 
console.log(ProcurarNumeroLinearPokemon(93)); */