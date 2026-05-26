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

    // Mobile Navigation Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks ? navLinks.querySelectorAll('a') : [];

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when a link is clicked
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Modals Controller
    const modals = {
        manifesto: {
            backdrop: document.getElementById('manifesto-modal'),
            trigger: document.getElementById('open-manifesto')
        },
        privacy: {
            backdrop: document.getElementById('privacy-modal'),
            trigger: document.getElementById('open-privacy')
        },
        license: {
            backdrop: document.getElementById('license-modal'),
            trigger: document.getElementById('open-license')
        }
    };

    const openModal = (backdrop) => {
        if (backdrop) {
            backdrop.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    };

    const closeModal = (backdrop) => {
        if (backdrop) {
            backdrop.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    };

    // Setup modal listeners
    Object.values(modals).forEach(({ backdrop, trigger }) => {
        if (trigger && backdrop) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                openModal(backdrop);
            });
        }
        
        if (backdrop) {
            // Close on close icon or footer close buttons
            const closeButtons = backdrop.querySelectorAll('.modal-close, .close-modal-btn');
            closeButtons.forEach(btn => {
                btn.addEventListener('click', () => closeModal(backdrop));
            });

            // Close when clicking on the background overlay
            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) {
                    closeModal(backdrop);
                }
            });
        }
    });

    // Newsletter Subscription
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterSuccess = document.getElementById('newsletter-success');

    if (newsletterForm && newsletterSuccess) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Simulate cryptographic dispatch
            const submitBtn = newsletterForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Securing...';
            
            setTimeout(() => {
                newsletterForm.querySelector('.input-group').style.display = 'none';
                newsletterSuccess.classList.remove('hidden');
            }, 1200);
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    const contactSuccess = document.getElementById('contact-success');

    if (contactForm && contactSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Encrypting Transmission...';
            
            setTimeout(() => {
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                contactSuccess.classList.remove('hidden');
                
                // Hide feedback after 5 seconds
                setTimeout(() => {
                    contactSuccess.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }

    // Node Grid Simulator Console
    const nodeForm = document.getElementById('node-form');
    const terminalOutput = document.getElementById('terminal-output');
    const nodeBtn = document.getElementById('node-btn');

    if (nodeForm && terminalOutput && nodeBtn) {
        nodeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nodeName = document.getElementById('node-name').value.trim().toUpperCase();
            const nodeLocation = document.getElementById('node-location').value.trim();
            const nodeTier = document.getElementById('node-tier');
            const tierText = nodeTier.options[nodeTier.selectedIndex].text;
            
            // Lock form during registration simulation
            nodeBtn.disabled = true;
            nodeForm.querySelectorAll('input, select').forEach(el => el.disabled = true);
            
            // Start terminal output
            terminalOutput.innerHTML = '';
            
            const logLines = [
                { text: `[SYSTEM] Initializing node connection sequence for '${nodeName}'...`, delay: 300, type: 'info' },
                { text: `[CRYPTO] Generating 4096-bit zero-knowledge keypairs...`, delay: 900, type: 'info' },
                { text: `[CRYPTO] ZK-Keys generated successfully.`, delay: 1400, type: 'success' },
                { text: `[NET] Querying decentral-grid anchors for routing...`, delay: 2000, type: 'info' },
                { text: `[NET] Anchors located in Reykjavik, Vancouver, and Geneva.`, delay: 2500, type: 'info' },
                { text: `[SYSTEM] Performing hardware benchmark for: ${tierText}...`, delay: 3200, type: 'info' },
                { text: `[SYSTEM] Node capacity meets protocol criteria. Initiating sync.`, delay: 3900, type: 'info' },
                { text: `[SYNC] Syncing local neural weight cache (100% complete)...`, delay: 4700, type: 'success' },
                { text: `[NET] Establishing peer tunnels at physical anchor: ${nodeLocation}...`, delay: 5400, type: 'info' },
                { text: `[NET] Handshake validated by 7 peer validators.`, delay: 6000, type: 'success' },
                { text: `[SUCCESS] Connection secure. Node '${nodeName}' is now active on the Grid!`, delay: 6700, type: 'success-glow' },
                { text: `[SYSTEM] Node ID: CD-ZK-${Math.floor(1000 + Math.random()*9000)}-${nodeName.replace(/[^A-Z0-9]/g, '')}`, delay: 7200, type: 'success-glow' }
            ];
            
            logLines.forEach(line => {
                setTimeout(() => {
                    const p = document.createElement('p');
                    if (line.type === 'success') {
                        p.className = 'term-success';
                    } else if (line.type === 'success-glow') {
                        p.className = 'term-success term-cursor';
                    } else {
                        p.className = '';
                    }
                    p.textContent = line.text;
                    terminalOutput.appendChild(p);
                    
                    // Scroll to bottom of terminal
                    terminalOutput.scrollTop = terminalOutput.scrollHeight;
                    
                    // If this was the last line, enable form again but keep button disabled or change it
                    if (line === logLines[logLines.length - 1]) {
                        nodeBtn.textContent = 'Node Registered Successfully';
                        nodeBtn.style.background = '#27c93f';
                        nodeBtn.style.boxShadow = '0 0 15px rgba(39, 201, 63, 0.4)';
                        nodeBtn.style.borderColor = '#27c93f';
                        nodeBtn.style.color = '#fff';
                    }
                }, line.delay);
            });
        });
    }
});
