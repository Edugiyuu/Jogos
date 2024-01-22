/*  const array = [1,2,3,4,7,8,15,20,69,70,76,80,555,799,1000]

function ProcurarNumeroLinear(procurar) {
    for (let i = 0; i < array.length; i++) {
        if (procurar === array[i]) {
            console.log(`posição ${i}`);
            return array[i]
        }
    }
}
console.log(ProcurarNumeroLinear(1000));

function ProcurarNumeroLinear2(numeroProcurado, array) {
    let posição = 0;
    while (posição < array.length) {
        if (numeroProcurado === array[posição]) {
            console.log(`Posição ${posição}`);
            return numeroProcurado;
        }
        posição++;
    }
    
}

console.log(ProcurarNumeroLinear2(80, array));

[1,2,3,4,7,8,15,20,69,70,76,80,555,799,1000]

function buscaBinaria(numeroProcurado, array) {
    let inicio = 0;
    let fim = array.length;

    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);

        if (array[meio] === numeroProcurado) {
            console.log(`Posição ${meio}`);
            return numeroProcurado;
        } else if (array[meio] < numeroProcurado) {
            inicio = meio + 1;
        } else {
            fim = meio - 1;
        }
    }
} 
console.log(buscaBinaria(3, array));
 */

const palavras = ['Sim','Não','Yes','No']

function ProcurarPalavra(procurar) {
    for (let i = 2; i < palavras.length; i++) {
        if (procurar === palavras[i]) {
            console.log(`posição ${i}`);
            return palavras[i]
        }
    }
}
console.log(ProcurarPalavra('No'));

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