const skillsData = [
    { icon: 'fa-solid fa-crosshairs', color: 'red', pcts: [92, 88, 85, 78] },
    { icon: 'fa-solid fa-user-secret', color: 'cyan', pcts: [95, 90, 82, 88] },
    { icon: 'fa-solid fa-code', color: 'amber', pcts: [93, 78, 85, 80] },
    { icon: 'fa-solid fa-microscope', color: 'violet', pcts: [82, 75, 78, 72] },
];

function renderSkills(lang) {
    const container = document.getElementById('skillsContainer');
    container.innerHTML = '';
    
    skillsData.forEach((cat, ci) => {
        const name = window.i18n.data[lang][`sk_${ci}_name`];
        const items = cat.pcts.map((pct, si) => ({
            name: window.i18n.data[lang][`sk_${ci}_${si}`],
            pct
        }));
        
        const div = document.createElement('div');
        div.className = 'skill-category reveal';
        
        div.innerHTML = `
            <div class="skill-cat-header">
                <div class="skill-cat-icon ${cat.color}"><i class="${cat.icon}"></i></div>
                <div class="skill-cat-name">${name}</div>
            </div>
            <div class="skill-items">
                ${items.map(s => `
                    <div class="skill-item">
                        <span class="skill-name">${s.name}</span>
                        <div class="skill-bar-wrap">
                            <div class="skill-bar" data-pct="${s.pct}"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(div);
        
        setTimeout(() => {
            const rect = div.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                div.classList.add('visible');
                div.querySelectorAll('.skill-bar').forEach(bar => {
                    bar.style.maxWidth = bar.dataset.pct + '%';
                    requestAnimationFrame(() => bar.classList.add('animated'));
                });
            }
        }, 50);
    });
}

window.skills = {
    render: renderSkills
};
