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
var naoOrdenado = [5, 2, 8, 1, 7]

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


console.log( 'Primeira função',Ordenar()); 
//Selection sort

function selection_sort(A) {
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

console.log('Selection sort',selection_sort([5, 2, 8, 1, 7]));
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