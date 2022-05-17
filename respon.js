const bntnM = document.getElementById('bntnM');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

bntnM.addEventListener('click',toggleMenu);