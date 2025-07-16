// Seleciona os elementos do DOM
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

// Adiciona o evento de clique ao botão hamburguer
hamburger.addEventListener('click', () => {
    // Adiciona ou remove a classe 'active' na navegação
    nav.classList.toggle('active');
});