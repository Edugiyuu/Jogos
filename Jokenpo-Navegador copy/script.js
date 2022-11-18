const buttonpvp = document.getElementById("pvpButton")
const buttonpvb = document.getElementById("pvbButton")
const nomeDosJogadores = document.getElementById("nomeDosJogadores");
const op = document.getElementById("opções");

const buttonVoltar = document.getElementById("pgInicial");
const Logo = document.getElementById("logo");
const Jogar = document.getElementById("jogar");

function PvpDisappear() {
    Logo.style.display = "none";
    buttonpvp.style.display = "none";
    buttonpvb.style.display = "none";
    nomeDosJogadores.style.display = 'block';
    op.style.display = 'block';
    buttonVoltar.style.display = 'block';
    
}
function PvbDisappear() {
    Logo.style.display = "none";
    buttonpvb.style.display = "none";
    buttonpvp.style.display = "none";
    buttonVoltar.style.display = 'block';
    op.style.display = 'block';
    nomeDosJogadores.style.display = 'block';
    Jogar.style.display = "block"
}
function ArmazenarNome() {
    var nomeDoJogador1 = document.getElementById("colocarNome").value;
    alert(nomeDoJogador1);
}
function AtualizarPagina() {
    location.reload(true);
}