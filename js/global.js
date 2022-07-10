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
