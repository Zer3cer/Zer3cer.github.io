document.addEventListener('DOMContentLoaded', () => {
    window.i18n.apply(window.i18n.current);
    
    window.utils.setupNavbar();
    window.utils.setupCursorGlow();
    window.utils.setupScrollAnimations();
    
    window.projects.render(window.i18n.current);
    window.skills.render(window.i18n.current);
    renderTerminal(window.i18n.current);
    renderStats(window.i18n.current);
    renderAbout(window.i18n.current);
    renderContact(window.i18n.current);
    renderFooter(window.i18n.current);
    
    window.utils.animateNumbers();
});

function renderTerminal(lang) {
    const terminal = document.getElementById('terminal');
    const commands = [
        { cmd: window.i18n.data[lang].term_cmd1, out: window.i18n.data[lang].term_out1 },
        { cmd: window.i18n.data[lang].term_out2, out: null },
        { cmd: window.i18n.data[lang].term_cmd2, out: window.i18n.data[lang].term_out3 }
    ];
    
    let html = '<div class="terminal-window"><div class="terminal-bar">';
    html += '<div class="terminal-dot r"></div><div class="terminal-dot y"></div><div class="terminal-dot g"></div>';
    html += '<span>zer3cer@kali ~ </span></div><div class="terminal-body">';
    
    commands.forEach((cmd, i) => {
        html += `<div><span class="prompt">$</span> <span class="cmd">${cmd.cmd}</span></div>`;
        if (cmd.out) {
            html += `<div class="output">${cmd.out}</div>`;
        }
    });
    
    html += '<div><span class="prompt">$</span> <span class="cursor-blink"></span></div></div></div>';
    terminal.innerHTML = html;
}

function renderStats(lang) {
    const stats = document.getElementById('stats');
    const statsData = [
        { value: 5, label: window.i18n.data[lang].stat_1_label },
        { value: 15, label: window.i18n.data[lang].stat_2_label },
        { value: 200, label: window.i18n.data[lang].stat_3_label },
        { value: 30, label: window.i18n.data[lang].stat_4_label }
    ];
    
    let html = '<div class="stats-bar">';
    statsData.forEach((stat, i) => {
        html += `
            <div class="stat-item">
                <div class="stat-num" data-target="${stat.value}">0<span>+</span></div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `;
    });
    html += '</div>';
    stats.innerHTML = html;
}

function renderAbout(lang) {
    const visual = document.getElementById('aboutVisual');
    const content = document.getElementById('aboutContent');
    
    visual.innerHTML = `
        <div class="about-hex-ring"></div>
        <div class="about-hex-ring"></div>
        <img class="about-avatar" src="https://picsum.photos/seed/zer3cer-avatar/300/300.jpg" alt="Zer3cer" />
        <div class="about-float-tag t1">Pentest</div>
        <div class="about-float-tag t2">Tool Dev</div>
        <div class="about-float-tag t3">0day Hunter</div>
    `;
    
    content.innerHTML = `
        <h3>${window.i18n.data[lang].about_h3}</h3>
        <p>${window.i18n.data[lang].about_p1}</p>
        <p>${window.i18n.data[lang].about_p2}</p>
        <div class="tech-tags">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Go</span>
            <span class="tech-tag">C/C++</span>
            <span class="tech-tag">Rust</span>
            <span class="tech-tag">PowerShell</span>
            <span class="tech-tag">Assembly</span>
            <span class="tech-tag">Cobalt Strike</span>
            <span class="tech-tag">BloodHound</span>
        </div>
    `;
}

function renderContact(lang) {
    const contactBox = document.getElementById('contactBox');
    contactBox.innerHTML = `
        <h3>${window.i18n.data[lang].contact_h3}</h3>
        <p>${window.i18n.data[lang].contact_p}</p>
        <div class="contact-links">
            <a href="mailto:zer3cer@proton.me" class="contact-link">
                <i class="fa-regular fa-envelope"></i> Email
            </a>
            <a href="https://github.com/Zer3cer" target="_blank" class="contact-link">
                <i class="fa-brands fa-github"></i> GitHub
            </a>
            <a href="https://twitter.com/Zer3cer" target="_blank" class="contact-link">
                <i class="fa-brands fa-x-twitter"></i> Twitter
            </a>
            <a href="https://t.me/Zer3cer" target="_blank" class="contact-link">
                <i class="fa-brands fa-telegram"></i> Telegram
            </a>
        </div>
    `;
}

function renderFooter(lang) {
    const footer = document.getElementById('footer');
    footer.innerHTML = `<p>${window.i18n.data[lang].footer_text}</p>`;
}
