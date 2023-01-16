const InfoPaciencia = document.querySelector('#InfoPaciencia')
const InfoBondade = document.querySelector('#InfoBondade')
const InfoBravura = document.querySelector('#InfoBravura')
const InfoJustice = document.querySelector('#InfoJustice')
const InfoPerseverança = document.querySelector('#InfoPerseverança')

const TituloUpgrade = document.querySelector('#TituloUpgrade')


InfoPaciencia.style.display = 'none'
InfoBondade.style.display = 'none'
InfoBravura.style.display = 'none'
InfoJustice.style.display = 'none'
InfoPerseverança.style.display='none'

//--------------------------------------------------------------
const Info = document.querySelector('#Info')
const NumerosDoContador = document.querySelector('#NumerosDoContador')
const DeterminacaoPng = document.querySelector('#DeterminacaoPng')
const MostreNumero = document.querySelector('.ShowClick')
var valor = 0
var valorDoClick = 1

function CadaClick() {
    NumerosDoContador.innerHTML = ++valor

    if (verificarPaciencia == true) {
        NumerosDoContador.innerHTML = valor += 1
        
    }
    if(verificarBondade == true){
        NumerosDoContador.innerHTML = valor += 1
    }
    if(verificarBravura == true){
        NumerosDoContador.innerHTML = valor += 2
    }
    if(verificarJustice == true){
        NumerosDoContador.innerHTML = valor += 2
    }
    if(verificarPerseverança == true){
        NumerosDoContador.innerHTML = valor += 3
    }
}
function AnimaçãoClick() {
        MostreNumero.style.animation = "";
        setTimeout(() => MostreNumero.style.animation = " AnimationClickNumber .8s forwards", 5);
        MostreNumero.innerHTML = `${valorDoClick + 0}+`

        DeterminacaoPng.style.animation = ""
        setTimeout(() => DeterminacaoPng.style.animation = " AnimationClickCoracao .1s forwards", 5);

        NumerosDoContador.style.animation = ""
        setTimeout(() => NumerosDoContador.style.animation = " AnimationContador .2s forwards", 5);
}

    verificarPaciencia = false
    verificarJustice = false
    verificarBravura = false
    verificarBondade = false
    verificarPerseverança = false
DeterminacaoPng.addEventListener('click',CadaClick)
DeterminacaoPng.addEventListener('click',AudioSelect)
DeterminacaoPng.addEventListener('click',AnimaçãoClick)
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
        Info.innerHTML = `${valorDoClick += 1}`
        MostreNumero.innerHTML = `${valorDoClick + 1}`
        
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
        Info.innerHTML = `${valorDoClick += 1}`
        MostreNumero.innerHTML = `${valorDoClick + 1}`

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
        Info.innerHTML = `${valorDoClick += 2}`
        MostreNumero.innerHTML = `${valorDoClick + 2}`

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
        Info.innerHTML = `${valorDoClick += 2}`
        MostreNumero.innerHTML = `${valorDoClick + 2}`

    }else{
        alert('Sem Determinação Suficiente');
    }
}
Justice.addEventListener('click', AudioSelect)
Justice.addEventListener('click',CheckAndBuyJustice)
//------------------------------------------------------------ Perseverança
const PreçoPerseverança = document.querySelector('#PreçoPerseverança')
const Perseverança = document.querySelector('#Perseverança')
function CheckAndBuyPerseverança() {
    if (valor > 490) {
        alert('Perseverança Obtida');
        NumerosDoContador.innerHTML = valor -=490
        PreçoPerseverança.style.color = 'green'
        PreçoPerseverança.innerHTML = 'Perseverança Obtida'
        Perseverança.style.display = 'none'
        InfoPerseverança.style.display = 'block'
        verificarPerseverança = true
        Info.innerHTML = `${valorDoClick += 3}`
        MostreNumero.innerHTML = `${valorDoClick + 3}`

    }else{
        alert('Sem Determinação Suficiente');
    }
}

Perseverança.addEventListener('click', AudioSelect)
Perseverança.addEventListener('click',CheckAndBuyPerseverança)
//---------------------------------------------------------



function AudioSelect() {
    const AudioSelect = document.querySelector('#AudioSelect')
    AudioSelect.play()
}
function AudioCredit() {
    const AudioCredit = document.querySelector('#AudioCredit')
    AudioCredit.play()
}

const CaixaPaciencia = document.querySelector('#CaixaPaciencia')

function Esconder() {
    CaixaPaciencia.style.display = 'none'
}


TituloUpgrade.addEventListener('click',AudioCredit)
TituloUpgrade.addEventListener('click',Esconder)
