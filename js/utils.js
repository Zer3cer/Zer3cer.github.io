function animateNumbers() {
    const statNums = document.querySelectorAll('.stat-num[data-target]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const step = Math.max(1, Math.floor(target / 50));
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.innerHTML = current + '<span>+</span>';
                }, 28);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    statNums.forEach(el => observer.observe(el));
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'skillsContainer') {
                    entry.target.querySelectorAll('.skill-bar').forEach(bar => {
                        bar.style.maxWidth = bar.dataset.pct + '%';
                        requestAnimationFrame(() => bar.classList.add('animated'));
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section, .project-card').forEach(el => observer.observe(el));
}

function setupCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow');
    if (!cursorGlow) {
        console.error('cursorGlow element not found');
        return; 
    }
    
    let mouseX = -500, mouseY = -500;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });
    
    function updateCursor() {
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
}


function setupNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
}

function setupCursorGlow() {
    const cursorGlow = document.getElementById('cursorGlow'); 
    let mouseX = -500, mouseY = -500;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, { passive: true });
    
    function updateCursor() {
        cursorGlow.style.left = mouseX + 'px'; 
        cursorGlow.style.top = mouseY + 'px';
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
}


window.utils = {
    animateNumbers,
    setupScrollAnimations,
    setupCursorGlow,
    setupNavbar
};
