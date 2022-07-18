// menu hamburgue
const btnMObile = document.getElementById('btn_mobile');

function toggleMenu(event){
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fehcar menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

btnMObile.addEventListener('click', toggleMenu);
btnMObile.addEventListener('touchstart', toggleMenu);

// dropdown navbar
var dropdown_nav = document.getElementById('dropdown_navbar');
dropdown_nav.onclick = function() {
    dropdown_nav.classList.toggle('active_drop');
} 

// Contato

var pageServico = document.getElementById("entre_contato");
document.getElementById('form_contato').addEventListener('submit', evitarEnvio);
var input = document.querySelectorAll(".load_disabled");
var button = document.querySelector("#form_contato button");
function evitarEnvio(event){
    event.preventDefault();
    input.forEach(disabledInput);
    button.classList.add("loading")
    if (pageServico) {
        button.innerHTML = '<img class="gif_loading" src="../img/lod_button.gif" alt="">';
    } else{
        button.innerHTML = '<img class="gif_loading" src="img/lod_button.gif" alt="">';
    }

    setTimeout(function(){
        var contato = document.querySelector("#entre_contato");
        contato.classList.add("ocultar")
        var enviado = document.querySelector("#depois_de_enviar");
        enviado.classList.add("mostrar")
    }, 2000)
}
function disabledInput(input){
    input.setAttribute("disabled", true);
}
// Page Servicos 
var container_detalhes = document.getElementsByClassName("");

window.onload = function() {
    // vamos pegar todos os botoes:
    var buttonArrow = document.querySelectorAll(".buttonArrow");
    for(var i=0;i<buttonArrow.length;i++) {
      var botao = buttonArrow[i];
      botao.addEventListener("click", buttondrop);
    }
 };
function buttondrop(event) {
    event.currentTarget.classList.toggle('active');
    event.currentTarget.parentNode.parentNode.classList.toggle('active');
} 