const InfoPaciencia = document.querySelector('#InfoPaciencia')
const InfoBondade = document.querySelector('#InfoBondade')
const InfoBravura = document.querySelector('#InfoBravura')
const InfoJustice = document.querySelector('#InfoJustice')
const InfoPerseverança = document.querySelector('#InfoPerseverança')
const InfoIntegridade = document.querySelector('#InfoIntegridade')

const TituloUpgrade = document.querySelector('#TituloUpgrade')


InfoPaciencia.style.display = 'none'
InfoBondade.style.display = 'none'
InfoBravura.style.display = 'none'
InfoJustice.style.display = 'none'
InfoPerseverança.style.display='none'
InfoIntegridade.style.display='none'

//--------------------------------------------------------------
const Info = document.querySelector('#Info')
const NumerosDoContador = document.querySelector('#NumerosDoContador')
const DeterminacaoPng = document.querySelector('#DeterminacaoPng')
const MostreNumero = document.querySelector('.ShowClick')
var valor = 9000
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
    if (verificarIntegridade == true) {
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
    verificarIntegridade = false
    
DeterminacaoPng.addEventListener('click',CadaClick)
DeterminacaoPng.addEventListener('click',AudioSelect)
DeterminacaoPng.addEventListener('click',AnimaçãoClick)

DeterminacaoPng.style.animation = " IdleCoracao .8s infinite ease-in-out", 5;

//------------------------------------------------------------- Paciencia

const PreçoPaciencia = document.querySelector('#PreçoPaciencia')
const PacienceComprada = document.querySelector('#PacienceComprada')
const Pacience = document.querySelector('#Pacience')
Pacience.style.animation = " IdleCaixa .9s infinite linear", 5;
function CheckAndBuyPacience() {
    if (valor > 30) {
        alert('Paciencia Obtida');
        NumerosDoContador.innerHTML = valor -=30
        PreçoPaciencia.style.color = 'green'
        PreçoPaciencia.innerHTML = 'Paciencia Obtida'
        Pacience.style.display = 'none'
        InfoPaciencia.style.display = 'block'
        PacienceComprada.style.display = `block`
        PacienceComprada.style.animation = " IdleCoracao .8s infinite ease-in-out", 5;
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
const BondadeComprada = document.querySelector('#BondadeComprada')
const Bondade = document.querySelector('#Bondade')
Bondade.style.animation = " IdleCaixa .9s infinite linear", 5;
function CheckAndBuyBondade() {
    if (valor > 170) {
        alert('Bondade Obtida');
        NumerosDoContador.innerHTML = valor -=170
        PreçoBondade.style.color = 'green'
        PreçoBondade.innerHTML = 'Bondade Obtida'
        Bondade.style.display = 'none'
        InfoBondade.style.display = 'block'
        BondadeComprada.style.display = `block`
        BondadeComprada.style.animation = " IdleCoracao .8s infinite ease-in-out", 5;
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
const BravuraComprada = document.querySelector('#BravuraComprada')
const Bravura = document.querySelector('#Bravura')
Bravura.style.animation = " IdleCaixa .9s infinite linear", 5;
function CheckAndBuyBravura() {
    if (valor > 280) {
        alert('Bravura Obtida');
        NumerosDoContador.innerHTML = valor -=280
        PreçoBravura.style.color = 'green'
        PreçoBravura.innerHTML = 'Bravura Obtida'
        Bravura.style.display = 'none'
        InfoBravura.style.display = 'block'
        BravuraComprada.style.display = `block`
        BravuraComprada.style.animation = " IdleCoracao .8s infinite ease-in-out", 5;
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
const JusticeComprada = document.querySelector('#JusticeComprada')
const Justice = document.querySelector('#Justice')
Justice.style.animation = " IdleCaixa .9s infinite linear", 5;
function CheckAndBuyJustice() {
    if (valor > 490) {
        alert('Justiça Obtida');
        NumerosDoContador.innerHTML = valor -=490
        PreçoJustice.style.color = 'green'
        PreçoJustice.innerHTML = 'Justiça Obtida'
        Justice.style.display = 'none'
        InfoJustice.style.display = 'block'
        JusticeComprada.style.display = `block`
        JusticeComprada.style.animation = " IdleCoracao .8s infinite ease-in-out", 5;
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
const PerseverançaComprada = document.querySelector('#PerseverançaComprada')
const Perseverança = document.querySelector('#Perseverança')
Perseverança.style.animation = " IdleCaixa .9s infinite linear", 5;
function CheckAndBuyPerseverança() {
    if (valor > 680) {
        alert('Perseverança Obtida');
        NumerosDoContador.innerHTML = valor -=680
        PreçoPerseverança.style.color = 'green'
        PreçoPerseverança.innerHTML = 'Perseverança Obtida'
        Perseverança.style.display = 'none'
        InfoPerseverança.style.display = 'block'
        PerseverançaComprada.style.display = `block`
        PerseverançaComprada.style.animation = " IdleCoracao .8s infinite ease-in-out", 5;
        verificarPerseverança = true
        Info.innerHTML = `${valorDoClick += 3}`
        MostreNumero.innerHTML = `${valorDoClick + 3}`

    }else{
        alert('Sem Determinação Suficiente');
    }
}

Perseverança.addEventListener('click', AudioSelect)
Perseverança.addEventListener('click',CheckAndBuyPerseverança)
//------------------------------------------------------------ Integridade
const PreçoIntegridade = document.querySelector('#PreçoIntegridade')
const IntegridadeComprada = document.querySelector('#IntegridadeComprada')
const Integridade = document.querySelector('#Integridade')
Integridade.style.animation = " IdleCaixa .9s infinite linear", 5;
function CheckAndBuyIntegridade() {
    if (valor > 800) {
        alert('Integridade Obtida');
        NumerosDoContador.innerHTML = valor -=800
        PreçoIntegridade.style.color = 'green'
        PreçoIntegridade.innerHTML = 'Perseverança Obtida'
        Integridade.style.display = 'none'
        InfoIntegridade.style.display = 'block'
        IntegridadeComprada.style.display = `block`
        IntegridadeComprada.style.animation = " IdleCoracao .8s infinite ease-in-out", 5;
        verificarIntegridade = true
        Info.innerHTML = `${valorDoClick += 3}`
        MostreNumero.innerHTML = `${valorDoClick + 3}`

    }else{
        alert('Sem Determinação Suficiente');
    }
}

Integridade.addEventListener('click', AudioSelect)
Integridade.addEventListener('click',CheckAndBuyIntegridade)


//------------------------------------------------------------

const Upgrades = document.querySelector('#Upgrades')
const Reset = document.querySelector('#Reset')
const ClickInfo = document.querySelector('#ClickInfo')
const Contador = document.querySelector('#Contador')

function reset() {
    if (valorDoClick === 13) {
        Reset.addEventListener('click',SavePoint)
        Upgrades.style.animation = " ResetAnimation 3s forwards", 5;
        ClickInfo.style.animation = " ResetAnimation 3s forwards", 5;
        Contador.style.animation = " ResetAnimation 3s forwards", 5;
        Upgrades.style.display = 'none'
        ClickInfo.style.display = 'none'
        Contador.style.display = 'none'
    }else{
        Reset.addEventListener('click',AudioCredit)
    }
}
Reset.addEventListener('click',reset)
//---------------------------------------------------------------
function AudioSelect() {
    const AudioSelect = document.querySelector('#AudioSelect')
    AudioSelect.play()
}
function AudioCredit() {
    const AudioCredit = document.querySelector('#AudioCredit')
    AudioCredit.play()
}
function SavePoint() {
    const SavePoint = document.querySelector('#SavePoint')
    SavePoint.play()
}



TituloUpgrade.addEventListener('click',AudioCredit)