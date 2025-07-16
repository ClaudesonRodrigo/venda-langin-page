/* --- LÓGICA DO MENU HAMBÚRGUER --- */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


/* --- ANIMAÇÃO DE "REVELAR AO ROLAR" (SCROLL REVEAL) --- */

// Função que será chamada quando um elemento entrar na tela
const revealOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    // Se o elemento está visível (intersecting)
    if (entry.isIntersecting) {
      // Adiciona a classe 'active' para ativar a animação CSS
      entry.target.classList.add('active');
      // Para de observar o elemento para não animar de novo
      observer.unobserve(entry.target);
    }
  });
};

// Opções para o Intersection Observer
const observerOptions = {
  root: null, // Observa em relação à viewport
  threshold: 0.1 // Ativa quando 10% do elemento estiver visível
};

// Cria o observador
const scrollObserver = new IntersectionObserver(revealOnScroll, observerOptions);

// Seleciona todos os elementos com a classe .reveal e os observa
const elementsToReveal = document.querySelectorAll('.reveal');
elementsToReveal.forEach(element => {
  scrollObserver.observe(element);
});


/* --- ATIVAÇÃO DO EFEITO TILT.JS NOS CARDS DO PORTFÓLIO --- */

// O script do vanilla-tilt já faz o trabalho sozinho
// ao encontrar o atributo 'data-tilt'.
// Se quiséssemos configurar, faríamos assim:
VanillaTilt.init(document.querySelectorAll(".portfolio-item"), {
    max: 15,       // Inclinação máxima
    speed: 400,    // Velocidade da transição
    glare: true,   // Adiciona um efeito de brilho
    "max-glare": 0.5 // Intensidade do brilho
});
