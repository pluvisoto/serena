// Lógica principal Serena HeadSpa

document.addEventListener('DOMContentLoaded', () => {

  // 1. Scroll Suave para Links Internos
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Reduz a altura da navbar fixa para não cobrir o título da seção
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Animação de Reveal no Scroll (Elementos surgindo suavemente)
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // Elemento aparece quando estiver 100px para dentro da tela
    
    revealElements.forEach(el => {
      const revealTop = el.getBoundingClientRect().top;
      if (revealTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Gatilho inicial

  // 3. Navbar Background ao Scrolar (fica opaca ao descer)
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.background = 'rgba(247, 242, 235, 0.98)';
      nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.03)';
    } else {
      nav.style.background = 'rgba(247, 242, 235, 0.9)';
      nav.style.boxShadow = 'none';
    }
  });

  // 4. Lógica do FAQ (Accordion)
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Fecha todos os outros antes de abrir
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle the atual
      item.classList.toggle('active');
    });
  });

  // 5. Hero Parallax Sutil
  const heroWrapper = document.querySelector('.hero-background');
  
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    // Move o background muito levemente para dar sensação de profundidade
    if(heroWrapper && scrollPos < window.innerHeight) {
       heroWrapper.style.transform = `translateY(${scrollPos * 0.3}px)`;
    }
  });

});
