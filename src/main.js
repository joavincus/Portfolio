import '../styles/main.scss';

document.getElementById('darkModeToggle').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
});

document.getElementById('darkModeToggleSidebar').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode', this.checked);
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('dark-mode', this.checked);
});

document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('navbar-menu');
  this.classList.toggle('open');
  menu.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function () {
  const toggler = document.querySelector('.navbar-toggler');
  const sidebar = document.querySelector('.sidebar');
  const closeSidebarButton = document.querySelector('.sidebar-close');

  toggler.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
  });

  closeSidebarButton.addEventListener('click', function () {
    sidebar.classList.remove('open');
    document.body.classList.remove('sidebar-open');
  });
});

const header = document.getElementById('title')
const navbarLinks = document.querySelectorAll('.nav-item')

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    title.style.opacity = '0';
    navbarLinks.forEach(link => {
    link.style.fontSize = '1rem';});
  } else {
    title.style.opacity = '1';
    navbarLinks.forEach(link => {
    link.style.fontSize = '1.1rem';});
  }
});

ScrollReveal().reveal('.points', {
  duration: 1000,
  origin: 'bottom',
  distance: '150px',
  opacity: 0,
  interval: 200
});

ScrollReveal().reveal('#about-me-img', {
      duration: 1500,
      origin: 'left',
      distance: '500px',
      interval: 200
});

ScrollReveal().reveal('#about-me-text', {
  duration: 1000,     
  origin: 'right',  
  distance: '500px',  
  easing: 'ease',      
  reset: false, 
  interval: 200   
});
ScrollReveal().reveal('.contact-icons', {
  duration: 1000,   
  origin: 'bottom',   
  distance: '200px',    
  easing: 'ease',      
  reset: false,       
  interval: 500        
});

ScrollReveal().reveal('.card-1', {
    origin: 'left', 
    distance: '100px',
    duration: 800,
    delay: 0,       
    easing: 'ease-in-out',
    opacity: 0,
    reset: false      
  });

  ScrollReveal().reveal('.card-2', {
    origin: 'left',   
    distance: '100px',
    duration: 800,
    delay: 300,
    easing: 'ease-in-out',
    opacity: 0,
    reset: false
  });

  ScrollReveal().reveal('.card-3', {
    origin: 'left',  
    distance: '100px',
    duration: 800,
    delay: 600, 
    easing: 'ease-in-out',
    opacity: 0,
    reset: false
  });

  
function criarTooltipPersonalizada(seletor, conteudo, tema, posicao) {
  tippy(seletor, {
    content: conteudo,
    theme: tema,
    placement: posicao,
    animation: 'scale',
    duration: [100, 100],
    arrow: false,
    interactive: true,  
    hideOnClick: true
  });
}

criarTooltipPersonalizada('#icon-img-1', 'JavaScript', 'meu-tema', 'top');
criarTooltipPersonalizada('#icon-img-2', 'TypeScript', 'meu-tema', 'top');
criarTooltipPersonalizada('#icon-img-3', 'C-Plus', 'meu-tema', 'top');
criarTooltipPersonalizada('#icon-img-4', 'C-Sharp', 'meu-tema', 'top');
