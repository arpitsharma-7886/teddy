// Add interactive features
document.addEventListener('DOMContentLoaded', function() {
    const loveBtn = document.getElementById('loveBtn');
    const teddies = document.querySelectorAll('.teddy');
    
    // Button click effect
    loveBtn.addEventListener('click', function() {
        createHearts();
        showSpecialMessage();
        this.textContent = '💕 I Love You Anushka! 💕';
        setTimeout(() => {
            this.textContent = 'Click for More Love! 💕';
        }, 3000);
    });
    
    // Teddy click effects
    teddies.forEach((teddy, index) => {
        teddy.addEventListener('click', function() {
            createTeddyHearts(this);
            animateTeddy(this);
        });
    });
    
    // Create floating hearts
    function createHearts() {
        const hearts = ['💕', '💖', '💗', '💓', '💝', '💞', '💟'];
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '100%';
                heart.style.fontSize = '30px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9999';
                heart.style.animation = `floatUp ${2 + Math.random() * 2}s ease-out forwards`;
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 100);
        }
    }
    
    // Create hearts around teddy
    function createTeddyHearts(teddy) {
        const rect = teddy.getBoundingClientRect();
        const hearts = ['💕', '💖', '💗'];
        
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'fixed';
                heart.style.left = rect.left + rect.width / 2 + 'px';
                heart.style.top = rect.top + rect.height / 2 + 'px';
                heart.style.fontSize = '20px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '9999';
                heart.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`;
                heart.style.opacity = '0';
                heart.style.transition = 'all 1s ease-out';
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.opacity = '1';
                    heart.style.transform += ' translateY(-50px)';
                }, 10);
                
                setTimeout(() => {
                    heart.style.opacity = '0';
                }, 500);
                
                setTimeout(() => {
                    heart.remove();
                }, 1500);
            }, i * 50);
        }
    }
    
    // Animate teddy on click
    function animateTeddy(teddy) {
        teddy.style.animation = 'none';
        setTimeout(() => {
            teddy.style.animation = 'spin 0.5s ease';
        }, 10);
        setTimeout(() => {
            teddy.style.animation = '';
        }, 600);
    }
    
    // Show special message
    function showSpecialMessage() {
        const messages = [
            "You're my favorite person! 💕",
            "I love you more than words can say! 💖",
            "You make every day special! 💗",
            "You're my cuddliest companion! 🐻",
            "Happy Teddy Day, my love! 💝"
        ];
        
        const message = messages[Math.floor(Math.random() * messages.length)];
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = 'rgba(255, 255, 255, 0.95)';
        messageDiv.style.padding = '20px 40px';
        messageDiv.style.borderRadius = '20px';
        messageDiv.style.fontSize = '1.5rem';
        messageDiv.style.color = '#764ba2';
        messageDiv.style.zIndex = '10000';
        messageDiv.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
        messageDiv.style.animation = 'fadeInScale 0.5s ease';
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.style.animation = 'fadeOutScale 0.5s ease';
            setTimeout(() => {
                messageDiv.remove();
            }, 500);
        }, 2000);
    }
    
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            to {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        @keyframes spin {
            from {
                transform: rotate(0deg) scale(1);
            }
            50% {
                transform: rotate(180deg) scale(1.2);
            }
            to {
                transform: rotate(360deg) scale(1);
            }
        }
        
        @keyframes fadeInScale {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }
        
        @keyframes fadeOutScale {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add parallax effect on scroll
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        const teddies = document.querySelectorAll('.teddy');
        
        teddies.forEach((teddy, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = -(currentScroll * speed);
            teddy.style.transform = `translateY(${yPos}px)`;
        });
        
        lastScroll = currentScroll;
    });
    
    // Random teddy movements
    setInterval(() => {
        teddies.forEach(teddy => {
            if (Math.random() > 0.7) {
                teddy.style.animation = 'none';
                setTimeout(() => {
                    teddy.style.animation = 'wiggle 0.5s ease';
                }, 10);
                setTimeout(() => {
                    teddy.style.animation = '';
                }, 600);
            }
        });
    }, 3000);
    
    // Add wiggle animation
    const wiggleStyle = document.createElement('style');
    wiggleStyle.textContent = `
        @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-5deg); }
            75% { transform: rotate(5deg); }
        }
    `;
    document.head.appendChild(wiggleStyle);
});

