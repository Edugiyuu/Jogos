const buttonpvp = document.getElementById("pvpButton")
const buttonpvb = document.getElementById("pvbButton")
const nomeDosJogadores = document.getElementById("nomeDosJogadores");
const op = document.getElementById("opções");

const buttonVoltar = document.getElementById("pgInicial");
const Logo = document.getElementById("logo");
const JogarPvb = document.getElementById("JogarPvb");
const JogarPvp = document.getElementById("JogarPvp");
const resutadoFinalPvb = document.getElementById("resutadoFinalPvb");
let nomeDoJogador1

console.log(opções);
function PvpDisappear() {
    Logo.style.display = "none";
    buttonpvp.style.display = "none";
    buttonpvb.style.display = "none";
    nomeDosJogadores.style.display = 'block';
    op.style.display = 'block';
    buttonVoltar.style.display = 'block';
    JogarPvb.style.display = 'block';
    
}
function PvbDisappear() {
    Logo.style.display = "none";
    buttonpvb.style.display = "none";
    buttonpvp.style.display = "none";
    buttonVoltar.style.display = 'block';
    op.style.display = 'block';
    nomeDosJogadores.style.display = 'block';
    JogarPvb.style.display = "block"
}

function JogarButtonPvb() {
  buttonVoltar.style.display = 'block';
    op.style.display = 'none';
    nomeDosJogadores.style.display = 'none';
    JogarPvb.style.display = "none"
  resutadoFinalPvb.style.display= "block"
}


function ArmazenarNome() {
    nomeDoJogador1 = document.getElementById("colocarNome").value;
    alert(nomeDoJogador1);
}

function AtualizarPagina() {
    location.reload(true);
}

const escolhaDoBotMostrar = document.getElementById('escolhaDoBot')
const EscolhaDoPlayer = document.getElementById('escolhaDoPlayer')
const resultadoFinal = document.getElementById('resultado')
const escolhasPossiveis = document.querySelectorAll('#Tesoura, #Pedra, #Papel')

escolhasPossiveis.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  escolhaDoJogador = e.target.id
  
  GerarEscolhaDoRobo()
  pegarResultado()
  alertselect()
  ArmazenarNome()
  mudarNome(nomeDoJogador1, escolhaDoJogador)
  
}))

function GerarEscolhaDoRobo() {
  const NumeroAleatorio = Math.floor(Math.random() * 3) + 1;
  
  if (NumeroAleatorio === 1) {
    escolhaDoBot = 'Pedra'
  }
  if (NumeroAleatorio === 2) {
    escolhaDoBot = 'Tesoura'
  }
  if (NumeroAleatorio === 3) {
    escolhaDoBot = 'Papel'
  }
  escolhaDoBotMostrar.innerHTML = escolhaDoBot
}

function pegarResultado() {
  if (escolhaDoBot === escolhaDoJogador) {
    resultado = 'Empate'
  }
  if (escolhaDoBot === 'Pedra' && escolhaDoJogador === "Papel") {
    resultado = `${nomeDoJogador1} Ganhou`
  }
  if (escolhaDoBot === 'Pedra' && escolhaDoJogador === "Tesoura") {
    resultado = 'Player1 Perdeu'
  }
  if (escolhaDoBot === 'Papel' && escolhaDoJogador === "Tesoura") {
    resultado = 'Player1 Ganhou'
  }
  if (escolhaDoBot === 'Papel' && escolhaDoJogador === "Pedra") {
    resultado = 'Player1 Perdeu'
  }
  if (escolhaDoBot === 'Tesoura' && escolhaDoJogador === "Pedra") {
    resultado = 'Player1 Ganhou'
  }
  if (escolhaDoBot === 'Tesoura' && escolhaDoJogador === "Papel") {
    resultado = 'Player1 Perdeu'
  }
  resultadoFinal.innerHTML = resultado
}

function alertselect() {
  if (escolhaDoJogador === 'Papel') {
    alert("Papel selecionada")
  } else if (escolhaDoJogador ==='Pedra') {
    alert('Pedra selecionada')
  }else if (escolhaDoJogador ==='Tesoura') {
    alert('Tesoura selecionada')
  }
}

function mudarNome(coco, escolhaDoJogador) {
  let selecionaLabel = document.getElementById("escolhaPlayer")
  selecionaLabel.innerHTML = `Escolha Do ${coco}: ${escolhaDoJogador}`
}