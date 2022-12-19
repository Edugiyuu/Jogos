const InfoPaciencia = document.querySelector('#InfoPaciencia')
const InfoBondade = document.querySelector('#InfoBondade')
const InfoBravura = document.querySelector('#InfoBravura')
const InfoJustice = document.querySelector('#InfoJustice')

InfoPaciencia.style.display = 'none'
InfoBondade.style.display = 'none'
InfoBravura.style.display = 'none'
InfoJustice.style.display = 'none'

//--------------------------------------------------------------
const Info = document.querySelector('#Info')
const NumerosDoContador = document.querySelector('#NumerosDoContador')
const DeterminacaoPng = document.querySelector('#DeterminacaoPng')
var valor = 0

function CadaClick() {
    NumerosDoContador.innerHTML = ++valor

    if (verificarPaciencia == true) {
        NumerosDoContador.innerHTML = valor += 1
        Info.innerHTML = "2"
    }else if(verificarBondade == true){
        NumerosDoContador.innerHTML = valor += 2
        Info.innerHTML = "3"
    }else if(verificarBravura == true){
        NumerosDoContador.innerHTML = valor += 4
        Info.innerHTML = "5"
    }else if(verificarJustice == true){
        NumerosDoContador.innerHTML = valor += 6
        Info.innerHTML = "7"
    }
}
DeterminacaoPng.addEventListener('click',CadaClick)
DeterminacaoPng.addEventListener('click',AudioSelect)
//------------------------------------------------------------- Paciencia

const PreçoPaciencia = document.querySelector('#PreçoPaciencia')
const Pacience = document.querySelector('#Pacience')
function CheckAndBuyPacience() {
    if (valor > 30) {
        alert('Paciencia Obtida');
        NumerosDoContador.innerHTML = valor -=30
        PreçoPaciencia.style.color = 'green'
        PreçoPaciencia.innerHTML = 'Paciencia Obtida'
        Pacience.style.display = 'none'
        InfoPaciencia.style.display = 'block'
        verificarPaciencia = true
        
    }else{
        alert('Sem Determinação Suficiente');
    }
}
Pacience.addEventListener('click', AudioSelect)
Pacience.addEventListener('click',CheckAndBuyPacience)
//------------------------------------------------------------ Bondade
const PreçoBondade = document.querySelector('#PreçoBondade')
const Bondade = document.querySelector('#Bondade')
function CheckAndBuyBondade() {
    if (valor > 170) {
        alert('Bondade Obtida');
        NumerosDoContador.innerHTML = valor -=140
        PreçoBondade.style.color = 'green'
        PreçoBondade.innerHTML = 'Bondade Obtida'
        Bondade.style.display = 'none'
        InfoBondade.style.display = 'block'
        verificarBondade = true
        verificarPaciencia = false

    }else{
        alert('Sem Determinação Suficiente');
    }
}
Bondade.addEventListener('click', AudioSelect)
Bondade.addEventListener('click',CheckAndBuyBondade)
//------------------------------------------------------------ Bravura
const PreçoBravura = document.querySelector('#PreçoBravura')
const Bravura = document.querySelector('#Bravura')
function CheckAndBuyBravura() {
    if (valor > 280) {
        alert('Bravura Obtida');
        NumerosDoContador.innerHTML = valor -=280
        PreçoBravura.style.color = 'green'
        PreçoBravura.innerHTML = 'Bravura Obtida'
        Bravura.style.display = 'none'
        InfoBravura.style.display = 'block'
        verificarBravura = true
        verificarBondade = false
        verificarPaciencia = false
        

    }else{
        alert('Sem Determinação Suficiente');
    }
}
Bravura.addEventListener('click', AudioSelect)
Bravura.addEventListener('click',CheckAndBuyBravura)

//------------------------------------------------------------ Justiça
const PreçoJustice = document.querySelector('#PreçoJustice')
const Justice = document.querySelector('#Justice')
function CheckAndBuyJustice() {
    if (valor > 490) {
        alert('Justiça Obtida');
        NumerosDoContador.innerHTML = valor -=490
        PreçoJustice.style.color = 'green'
        PreçoJustice.innerHTML = 'Justiça Obtida'
        Justice.style.display = 'none'
        InfoJustice.style.display = 'block'
        verificarJustice = true
        verificarBravura = false
        verificarBondade = false
        verificarPaciencia = false
        

    }else{
        alert('Sem Determinação Suficiente');
    }
}
Justice.addEventListener('click', AudioSelect)
Justice.addEventListener('click',CheckAndBuyJustice)
//------------------------------------------------------------ Perseverança




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
