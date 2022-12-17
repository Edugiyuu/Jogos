const NumerosDoContador = document.querySelector('#NumerosDoContador')
const DeterminacaoPng = document.querySelector('#DeterminacaoPng')
var valor = 0

function CadaClick() {

    NumerosDoContador.innerHTML = ++valor
}


DeterminacaoPng.addEventListener('click',CadaClick)


