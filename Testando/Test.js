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
} *///             1  2  8  5  7
/* var naoOrdenado = [5, 2, 8, 1, 7]

 function Ordenar() {
   
    for (let i = 0; i < naoOrdenado.length; i++) {
        for (let j = i + 1 ; j < naoOrdenado.length; j++) {
            var numeroMenor = 0
            if (naoOrdenado[i] > naoOrdenado[j]) {
                numeroMenor = naoOrdenado[j]
                naoOrdenado[j] = naoOrdenado[i]
                naoOrdenado[i] = numeroMenor
                
            }else if (naoOrdenado[i]) {
                numeroMenor = naoOrdenado[i]
            }
            
            
        }
        console.log(naoOrdenado);
    }
}


console.log( 'Primeira função',Ordenar());  */
//Selection sort

/* function selection_sort(A) {
    var len = A.length;
    for (var i = 0; i < len - 1; i = i + 1) {
        var j_min = i;
        for (var j = i + 1; j < len; j = j + 1) {
            if (A[j] < A[j_min]) {
                j_min = j;
            } else {}
            
        }
        if (j_min !== i) {
            swap(A, i, j_min);
        } else {}
        console.log(`Selection sort ${A}`);
    }
}

function swap(A, x, y) {
    var temp = A[x];
    A[x] = A[y];
    A[y] = temp;
}

console.log('Selection sort',selection_sort([5, 2, 8, 1, 7])); */
//Insertion sort:
/* function insertion_sort(A) {
    var len = A.length;
    var i = 1;
    while (i < len) {
        var x = A[i];
        var j = i - 1;
        while (j >= 0 && A[j] > x) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        A[j+1] = x;
        i = i + 1;
    }
    return A
}
console.log(insertion_sort([5, 2, 8, 1, 7])); */
 
//Merge Sort
/* const list = [5, 2, 7, 1, 8, 6, 4, 9]

const mergeSort = (list) =>{
  if(list.length <= 1) return list;
  const middle = list.length / 2 ;
  const left = list.slice(0, middle);
  const right = list.slice(middle, list.length);
  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
  var result = [];
  while(left.length || right.length) {
    if(left.length && right.length) {
      if(left[0] < right[0]) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    } else if(left.length) {
        result.push(left.shift())
      } else {
        result.push(right.shift())
      }
    }
  return result;
}

console.log(mergeSort(list))  */

//bubble sort
/*  let arr = [5, 2, 8, 1, 7]
    sorted = false;

while(!sorted) {
  sorted = true;
  for(var i=0; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) {
      let temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
      sorted = false;
    }
  }
  console.log('função bolha'+arr);
}  */

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

//O(1)
/* function meuNumero1(numero) {
    console.log(`Numero ${numero}`);
}

meuNumero1(5) */

//O(n)
/* function meuNumero2(numero) {
    for (let i = 1; i <= numero; i++) {
        console.log(`contador ${i}`);
        
    }
    console.log(`numero ${numero}`);
}
meuNumero2(30) */

//O(N^2)
/* function meuNumero3(numero) {
    for (let i = 1; i < numero; i++) { //O(n)
        linha = "";

        for (let i = 1; i <= numero; i++) { //O(n)
            linha = linha + '' + numero
            
        }
        console.log(`${linha}`);
    }
    console.log(`seu numero é ${numero}`);
}
meuNumero3(6)
 */



const arr = [6, 2, 5, 3, 8, 7, 1, 4];

const quickSort = (arr, start, end) => {

  if(start < end) {

    // Você pode aprender sobre como o valor do pivô é derivado nos comentários abaixo
    let pivot = partition(arr, start, end);

    // Certifique-se de ler os comentários abaixo para entender por que pivô - 1 e pivô + 1 são usados
    // Estas são as chamadas recursivas do quickSort
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  } 

}

/* const partition = (arr, start, end) => { 
  let pivot = end;
  // Defina i como start - 1 para que ele possa acessar o primeiro índice no caso de o valor em arr[0] ser maior que arr[pivot]
  // Os comentários abaixo explicarão o comentário acima
  let i = start - 1,
      j = start;

  // Incrementar j até o índice anterior ao pivô
  while (j < pivot) {

    // If the value is greater than the pivot increment j
    if (arr[j] > arr[pivot]) {
      j++;
    }

    // Quando o valor em arr[j] for menor que o pivô:
    // incremente i (arr[i] será um valor maior que arr[pivot]) e troque o valor em arr[i] e arr[j]
    else {
      i++;
      swap(arr, j, i);
      j++;
    }

  }

  //O valor em arr[i + 1] será maior que o valor de arr[pivot]
  swap(arr, i + 1, pivot);

  //Você retorna i + 1, pois os valores à esquerda dele são menores que arr[i+1], e os valores à direita são maiores que arr[i + 1]
  // Dessa forma, quando os quicksorts recursivos são chamados, os novos sub-arrays não incluirão este valor pivô usado anteriormente
  return i + 1;
}

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);
 */

/* function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[Math.floor(array.length / 2)];
    const menores = [];
    const iguais = [];
    const maiores = [];

    array.forEach(elemento => {
        if (elemento < pivot) {
            menores.push(elemento);
        } else if (elemento === pivot) {
            iguais.push(elemento);
        } else {
            maiores.push(elemento);
        }
    });

    return quickSort(menores).concat(iguais, quickSort(maiores));
}

// Exemplo de uso
const arrayDesordenado = [5, 2, 8, 1, 7];
const arrayOrdenado = quickSort(arrayDesordenado);

console.log("Array Desordenado:", arrayDesordenado);
console.log("Array Ordenado:", arrayOrdenado); */


/* const elementos = ['elemento1', 'elemento2', 'elemento3', 'elemento4'];

for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
} */
//--------------------------------------------------------



/* function ordenarFrutas(frutas) {
    frutas.sort();
    
    for (let i = 0; i < frutas.length; i++) {
       
            console.log(frutas[i]);

        
    }
}

 ordenarFrutas(['banana', 'maçã', 'morango', 'uva', 'maça verde']) */
/* ordenarFrutas(['a', 'c', 'b', 'e', 'd' ]) */

/* function comprarJogos(Jogos) {
    const inicio = performance.now();
    let seusJogos = [];
    
    for (let i = 0; i < Jogos.length; i++) {
        
        if (seusJogos.indexOf(Jogos[i]) === -1) { // O -1 é se o jogo atual (Jogos[i]) não estiver presente no array vazio
            seusJogos.push(Jogos[i]);
        }
        
    }
    seusJogos.sort();
    console.log(seusJogos);
    const fim = performance.now();
    console.log(`A função comprarJogos levou ${fim - inicio}`);
}


comprarJogos(['KOF','KOF','Tekken','Street fighter', 'KOF','Tekken']); */

/*  function ordenarNumeros(numeros) {
    const inicio = performance.now();
    
    
    numeros.sort((a,b)=> a-b);
    console.log(numeros);
    const fim = performance.now();
    console.log(`A função comprarJogos levou ${fim - inicio}`);
}


ordenarNumeros([
    798, 102,  53, 590,  95, 272, 580,  56, 762, 832, 377, 863,
    492, 426, 439, 683, 201, 716, 221, 789, 740, 912, 509, 393,
    658, 877, 607, 938,  70, 904, 796, 741, 888, 874, 928, 868,
    623, 619, 162, 912, 518, 712, 196, 506, 407, 133, 104, 661,
    750, 356,  73, 371, 863, 651, 549, 754, 224, 228, 553, 906,
    281, 624, 179, 251, 913,  30, 918, 920, 309, 421, 928, 748,
    600, 881, 628, 832, 273, 432, 750, 488, 195, 890, 585, 417,
    536, 575, 141, 212, 360, 182,  72, 969, 229, 722, 522, 407,
    830, 958, 194, 888,]);  */

/* function AcharJogo(Jogos,seuJogo) {
    for (let i = 0; i < Jogos.length; i++) {
        if (Jogos[i] === seuJogo) {
            console.log(`achei o ${seuJogo}`);
        }
        
    }
}

AcharJogo(['KOF XII','KOF','Tekken 8','Street fighter', 'KOF','Tekken 7'],'Tekken 8') */


/* const Jogos = [
    {
      "Jogo": "Street fighter",
      "preço": 80,
    },
    {
    "Jogo": "KOF",
    "preço": 50,
    },
    {
    "Jogo": "Tekken 7",
    "preço": 60,
    },
]
function ordenarJogosPorPreco(jogos) {
   const inicio = performance.now();
    for (let i = 0; i < jogos.length; i++) {
        for (let j = 0; j < jogos.length - 1; j++) {
            if (jogos[j] > jogos[j + 1]) {
                let jogoAtual = jogos[j];
                jogos[j] = jogos[j + 1];
                jogos[j + 1] = jogoAtual;
            }
        }
    }
    console.log(jogos);
    const fim = performance.now();
    console.log(`A função ordenarJogosPorPreco levou ${fim - inicio}`);
    return jogos;
    
}

ordenarJogosPorPreco([
    798, 102,  53, 590,  95, 272, 580,  56, 762, 832, 377, 863,
    492, 426, 439, 683, 201, 716, 221, 789, 740, 912, 509, 393,
    658, 877, 607, 938,  70, 904, 796, 741, 888, 874, 928, 868,
    623, 619, 162, 912, 518, 712, 196, 506, 407, 133, 104, 661,
    750, 356,  73, 371, 863, 651, 549, 754, 224, 228, 553, 906,
    281, 624, 179, 251, 913,  30, 918, 920, 309, 421, 928, 748,
    600, 881, 628, 832, 273, 432, 750, 488, 195, 890, 585, 417,
    536, 575, 141, 212, 360, 182,  72, 969, 229, 722, 522, 407,
    830, 958, 194, 888,]) */

   
   
  const fs = require('node:fs');
  var nomeDoJson = 'Numeros'
  let selected = document.getElementById("demoPickA").files[0];
  fs.readFile(`Nao_ordenado/${nomeDoJson}.json`, 'utf8', (err, data) => {

    const numeros = JSON.parse(data);
    
    function ordenarNumeros(numeros) {
    
        numeros.sort((a,b)=> a-b);
    
   
        const ListaOrdenada = JSON.stringify(numeros);
        fs.writeFile(`Ordenado/${nomeDoJson}_Ordenados.json`, ListaOrdenada, function () {
            console.log('ordenado na pasta Ordenado');
        });
    }
    ordenarNumeros(numeros);
  })
  
    
    /* fs.readFile('Nao_ordenado/Numeros.json', 'utf8', (err, data) => {
   
        
        const numeros = JSON.parse(data);

       
        function ordenarJogosPorPreco(numeros) {
            const inicio = performance.now();

            for (let i = 0; i < nuermos.length; i++) {
                for (let j = 0; j < nuermos.length - 1; j++) {
                    if (nuermos[j] > nuermos[j + 1]) {
                        let jogoAtual = nuermos[j];
                        nuermos[j] = nuermos[j + 1];
                        nuermos[j + 1] = jogoAtual;
                    }
                }
            }

            const fim = performance.now();
            console.log(`A função ordenarJogosPorPreco levou ${fim - inicio} milissegundos`);

           
            const ListaOrdenada = JSON.stringify(numeros);

            fs.writeFile('Ordenado/array.json', ListaOrdenada, function () {
                console.log('Arquivo de numeros ordenados criado com sucesso!');
            });
        }

        ordenarJogosPorPreco(numeros);
    
}); */