function contatarWhatsApp() {
    const numeroWhatsApp = "5521980337683";
    const mensagem = "Olá Assis! Gostaria de um orçamento para conserto do meu celular.";
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(urlWhatsApp, '_blank');
}

// Animação suave ao rolar para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

 // Seleciona todos os itens do portfólio
 const portfolioItems = document.querySelectorAll('.portfolio-item');
    
 // Configura o observer
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             // Adiciona a classe "in-view" para mostrar o overlay
             entry.target.classList.add('in-view');
         } else {
             // Remove a classe quando o item não estiver mais na viewport
             entry.target.classList.remove('in-view');
         }
     });
 }, { threshold: 0.5 }); // 50% visível para ativar

 // Observa cada item do portfólio
 portfolioItems.forEach(item => {
     observer.observe(item);
 });