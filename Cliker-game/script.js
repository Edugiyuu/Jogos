const NumerosDoContador = document.querySelector('#NumerosDoContador')
const DeterminacaoPng = document.querySelector('#DeterminacaoPng')
var valor = 0

function CadaClick() {
    NumerosDoContador.innerHTML = ++valor
}
DeterminacaoPng.addEventListener('click',CadaClick)
DeterminacaoPng.addEventListener('click',AudioSelect)
//----------------------------------------------------
function AudioSelect() {
    const AudioSelect = document.querySelector('#AudioSelect')
    AudioSelect.play()
}

//----------------------------------------------------
const PreçoPaciencia = document.querySelector('#PreçoPaciencia')
const Pacience = document.querySelector('#Pacience')
function CheckAndBuyPacience() {
    if (valor > 30) {
        alert('Paciencia Obtida');
        NumerosDoContador.innerHTML = valor -=30
        PreçoPaciencia.style.color = 'green'
        PreçoPaciencia.innerHTML = 'Paciencia Obtida'
    }else{
        alert('Sem Determinação Suficiente');
    }
}
Pacience.addEventListener('click', AudioSelect)
Pacience.addEventListener('click',CheckAndBuyPacience)
