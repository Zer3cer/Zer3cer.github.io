// 项目数据
const projectsData = [
    { type: 'platform', tags: [['Python', 'red'], ['Go', 'blue'], ['gRPC', 'blue']], imgSeed: 'shadowc2' },
    { type: 'tool',      tags: [['Python', 'red'], ['React', 'blue'], ['PostgreSQL', 'blue']], imgSeed: 'reconnexus' },
    { type: 'platform',  tags: [['Go', 'red'], ['Next.js', 'blue'], ['WebSocket', 'blue']], imgSeed: 'phishforge' },
    { type: 'tool',      tags: [['C', 'red'], ['Python', 'blue'], ['Linux', 'blue']], imgSeed: 'privesc' },
    { type: 'tool',      tags: [['Go', 'red'], ['SOCKS5', 'blue'], ['UDP', 'blue']], imgSeed: 'netghost' },
    { type: 'tool',      tags: [['Python', 'red'], ['CLI', 'blue'], ['Fuzzing', 'blue']], imgSeed: 'bughunter' },
];

function renderProjects(lang) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    projectsData.forEach((p, i) => {
        const title = window.i18n.data[lang][`proj_${i}_title`];
        const desc = window.i18n.data[lang][`proj_${i}_desc`];
        const typeLabel = p.type === 'platform' 
            ? (lang === 'zh' ? '平台' : 'Platform') 
            : (lang === 'zh' ? '工具' : 'Tool');
        
        const card = document.createElement('article');
        card.className = 'project-card';
        card.style.transitionDelay = `${i * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-thumb-wrap">
                <img class="project-thumb" src="https://picsum.photos/seed/${p.imgSeed}/800/500.jpg" alt="${title}" loading="lazy" />
                <div class="project-type-badge ${p.type}">${typeLabel}</div>
            </div>
            <div class="project-info">
                <h3>${title}</h3>
                <p>${desc}</p>
                <div class="project-tags">
                    ${p.tags.map(([t, c]) => `<span class="${c}">${t}</span>`).join('')}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
        
        setTimeout(() => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) card.classList.add('visible');
        }, 50);
    });
}

window.projects = {
    render: renderProjects
};
