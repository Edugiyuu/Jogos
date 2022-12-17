const NumerosDoContador = document.querySelector('#NumerosDoContador')
const DeterminacaoPng = document.querySelector('#DeterminacaoPng')
var valor = 0

function CadaClick() {
    NumerosDoContador.innerHTML = ++valor
}
DeterminacaoPng.addEventListener('click',CadaClick)
DeterminacaoPng.addEventListener('click',AudioSelect)
//-------------------------------------------------------------

const PreçoPaciencia = document.querySelector('#PreçoPaciencia')
const Pacience = document.querySelector('#Pacience')
function CheckAndBuyPacience() {
    if (valor > 30) {
        const alerta = alert('Paciencia Obtida');
        NumerosDoContador.innerHTML = valor -=30
        PreçoPaciencia.style.color = 'green'
        PreçoPaciencia.innerHTML = 'Paciencia Obtida'
        Pacience.style.display = 'none'
    }else{
        alert('Sem Determinação Suficiente');
    }
}
Pacience.addEventListener('click', AudioSelect)
Pacience.addEventListener('click',CheckAndBuyPacience)
//------------------------------------------------------------
const PreçoBondade = document.querySelector('#PreçoBondade')
const Bondade = document.querySelector('#Bondade')
function CheckAndBuyBondade() {
    if (valor > 110) {
        const alerta = alert('Bondade Obtida');
        NumerosDoContador.innerHTML = valor -=110
        PreçoBondade.style.color = 'green'
        PreçoBondade.innerHTML = 'Bondade Obtida'
        Bondade.style.display = 'none'
    }else{
        alert('Sem Determinação Suficiente');
    }
}
Bondade.addEventListener('click', AudioSelect)
Bondade.addEventListener('click',CheckAndBuyBondade)
//------------------------------------------------------------

function AudioSelect() {
    const AudioSelect = document.querySelector('#AudioSelect')
    AudioSelect.play()
}
function AudioCredit() {
    const AudioCredit = document.querySelector('#AudioCredit')
    AudioCredit.play()
}
const TituloUpgrade = document.querySelector('#TituloUpgrade')
TituloUpgrade.addEventListener('click',AudioCredit)
