document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load
    setTimeout(revealOnScroll, 100);

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Optional: Glitch effect hover intensity
    const glitchText = document.querySelector('.glitch');
    if(glitchText) {
        glitchText.addEventListener('mouseover', () => {
            glitchText.style.textShadow = '0 0 30px rgba(0, 240, 255, 0.8)';
        });
        glitchText.addEventListener('mouseout', () => {
            glitchText.style.textShadow = '0 0 20px rgba(0, 240, 255, 0.5)';
        });
    }
});
