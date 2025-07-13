
// Muestra siempre el año actual en el footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.querySelector('#current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});


// smooth-scroll para la navegacion
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// boton para subir hasta el inicio
const btnTop = document.getElementById('btn-top');
window.addEventListener('scroll', () => {
  btnTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// cambiar a modo oscuro o claro
const btn = document.getElementById('theme-toggle');
const current = localStorage.getItem('theme') || 'light';
if (current === 'dark') document.documentElement.setAttribute('data-theme','dark');

btn.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// Texto tipeado en hero
document.addEventListener('DOMContentLoaded', () => {
  const txt          = 'Bienvenido a mi mundo'; 
  const speed        = 100;                       
  const restartDelay = 60000;                   
  const el           = document.getElementById('typing');
  let i = 0;

  function type() {
    if (i < txt.length) {
      el.textContent += txt.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        el.textContent = '';
        i = 0;
        type();
      }, restartDelay);
    }
  }

  type();
});