const asideMenu = document.getElementById('meuaside')
const botaoFechar = document.getElementById('fechar')

botaoFechar.addEventListener('click', () => {
    asideMenu.style.display = 'none';
});