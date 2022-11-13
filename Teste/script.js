function iparOuPar(num) {
    var pares = []
    for (var index =0; index < num.length; index++) {
        if (num[index]% 2 !== 0) {
            pares.push(num[index])
        }
    }
    return console.log(pares);
}
// var array = [1,3,6,4]
iparOuPar([1,3,6,4])