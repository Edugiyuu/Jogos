/* function contar(numero){
  console.log(numero);
  contar(numero-1)
}
contar(3) */

/* function contar(numero){
  console.log(numero);

  let proximoNumero = numero - 1

  if (proximoNumero > 0) {
    contar(proximoNumero)
  }
}
contar(6) */
const toysToSeparate = [{ name: "car", color: "red" },
  { name: "yoyo", color: "green" },
  { name: "doll", color: "yellow" },
  { name: "bike", color: "green" },
  { name: "ball", color: "red" },
  { name: "house", color: "green" }];

function separateToys(toys,greenBox = [],redBox = [],yellowBox = []) {

  if (toys.length === 0) {
    console.log("redBox:",redBox);
    console.log("greenBox:",greenBox);
    console.log("yellowBox:",yellowBox);
    return;
  }
  if (toys[0].color == "red") {
    redBox.push(toys[0])
  }else if (toys[0].color == "green"){
    greenBox.push(toys[0])
  }else if (toys[0].color == "yellow"){
    yellowBox.push(toys[0])
  }
  
  separateToys(toys.splice(1),greenBox,redBox,yellowBox)
}
separateToys(toysToSeparate)

/* function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n-1);
  }
}
fatorial(1) */