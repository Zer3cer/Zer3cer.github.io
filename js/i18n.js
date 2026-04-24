const i18nData = {
    en: {
        nav_about: 'About',
        nav_projects: 'Arsenal',
        nav_skills: 'Skills',
        nav_contact: 'Contact',
        hero_badge: 'Red Team Operator',
        hero_line1: 'Offensive',
        hero_line2: 'Security',
        hero_line3: ' Arsenal',
        hero_desc: 'Focused on red team operations, building custom attack platforms and tools. Turning deep understanding of adversarial tactics into actionable capabilities.',
        hero_btn1: 'View Arsenal',
        hero_btn2: 'Get in Touch',
        term_cmd1: 'python3 recon.py --target 10.0.0.0/24',
        term_out1: '[*] Scanning 254 hosts... 42 alive',
        term_out2: '[+] Found 7 open services with known CVEs',
        term_cmd2: 'python3 exploit.py --payload reverse_shell',
        term_out3: '[+] Session opened on 10.0.0.17:4444',
        stat_1_label: 'Years in Red Team',
        stat_2_label: 'Custom Tools',
        stat_3_label: 'Engagements',
        stat_4_label: 'CVEs Discovered',
        about_tag: 'About',
        about_title: 'Who is Zer3cer',
        about_h3: 'Builder of Offensive Arsenal',
        about_p1: "I'm a red team operator with 5+ years of experience in offensive security. My focus is not just finding vulnerabilities — it's building the platforms and tooling that make entire attack chains reliable, scalable, and stealthy.",
        about_p2: "I've developed multiple self-hosted C2 frameworks, reconnaissance platforms, and exploitation toolkits from scratch. Every tool starts from a real gap I encountered during engagements, not from reinventing the wheel.",
        proj_tag: 'Arsenal',
        proj_title: 'Custom Platforms & Tools',
        skill_tag: 'Skills',
        skill_title: 'Technical Capabilities',
        contact_h3: "Let's Connect",
        contact_p: 'Collaboration, security research, or just a chat about offensive techniques — always open.',
        proj_0_title: 'ShadowC2',
        proj_0_desc: 'Self-developed C2 framework with multi-protocol communication (HTTPS/DNS/ICMP), modular post-exploitation, and OPSEC-aware beaconing strategies.',
        proj_1_title: 'ReconNexus',
        proj_1_desc: 'Automated attack surface mapping platform. Subdomain enumeration, port scanning, fingerprinting, and vulnerability correlation in one pipeline.',
        proj_2_title: 'PhishForge',
        proj_2_desc: 'Red team phishing infrastructure toolkit with template cloning, credential harvesting, payload delivery, and real-time campaign analytics dashboard.',
        proj_3_title: 'PrivEsc Suite',
        proj_3_desc: 'Collection of local privilege escalation vectors for Windows/Linux. Automated enumeration and exploit suggestion based on environment context.',
        proj_4_title: 'NetGhost',
        proj_4_desc: 'Covert tunneling tool supporting SOCKS5 proxy chaining through compromised hosts. Designed for pivoting in segmented networks with minimal footprint.',
        proj_5_title: 'BugHunter CLI',
        proj_5_desc: 'Bug bounty reconnaissance CLI that automates target discovery, parameter fuzzing, and vulnerability scanning with customizable attack profiles.',
        sk_0_name: 'Penetration Testing',
        sk_0_0: 'Web App (OWASP Top 10)',
        sk_0_1: 'Network Pentest',
        sk_0_2: 'API Security',
        sk_0_3: 'Mobile Pentest',
        sk_1_name: 'Red Team Ops',
        sk_1_0: 'C2 Operations',
        sk_1_1: 'Active Directory',
        sk_1_2: 'Social Engineering',
        sk_1_3: 'Evasion & OPSEC',
        sk_2_name: 'Tool Development',
        sk_2_0: 'Python / Go',
        sk_2_1: 'C / Rust',
        sk_2_2: 'PowerShell / C#',
        sk_2_3: 'Shellcode Crafting',
        sk_3_name: 'Research',
        sk_3_0: '0day Discovery',
        sk_3_1: 'Binary Analysis',
        sk_3_2: 'Protocol Fuzzing',
        sk_3_3: 'Threat Intelligence',
        footer_text: '&copy; 2025 Zer3cer — Deployed via GitHub Pages'
    },
    zh: {
        nav_about: '关于',
        nav_projects: '武器库',
        nav_skills: '技能',
        nav_contact: '联系',
        hero_badge: '红队安全测试人员',
        hero_line1: '攻击性',
        hero_line2: '安全',
        hero_line3: ' 武器库',
        hero_desc: '专注红队行动，自研攻击平台与工具。将对抗战术的深度理解转化为可执行的安全能力。',
        hero_btn1: '查看武器库',
        hero_btn2: '取得联系',
        term_cmd1: 'python3 recon.py --target 10.0.0.0/24',
        term_out1: '[*] 正在扫描 254 台主机... 42 台存活',
        term_out2: '[+] 发现 7 个开放服务存在已知 CVE',
        term_cmd2: 'python3 exploit.py --payload reverse_shell',
        term_out3: '[+] 已在 10.0.0.17:4444 建立会话',
        stat_1_label: '年红队经验',
        stat_2_label: '自研工具',
        stat_3_label: '实战项目',
        stat_4_label: '发现 CVE',
        about_tag: '关于',
        about_title: '谁是 Zer3cer',
        about_h3: '攻击武器库的构建者',
        about_p1: '我是一名拥有 5 年以上经验的红队安全测试人员。我的重点不仅是发现漏洞——更是构建让整条攻击链可靠、可扩展、隐蔽的平台与工具。',
        about_p2: '我从零开发过多个自托管 C2 框架、侦察平台和利用工具包。每一个工具都源于实战中遇到的真实缺口，而非重复造轮子。',
        proj_tag: '武器库',
        proj_title: '自研平台与工具',
        skill_tag: '技能',
        skill_title: '技术能力矩阵',
        contact_h3: '建立联系',
        contact_p: '无论是项目合作、安全研究，还是单纯聊聊攻防技术——随时欢迎。',
        proj_0_title: 'ShadowC2',
        proj_0_desc: '自研 C2 框架，支持多协议通信（HTTPS/DNS/ICMP）、模块化后渗透以及 OPSEC 感知的信标策略。',
        proj_1_title: 'ReconNexus',
        proj_1_desc: '自动化攻击面测绘平台。子域名枚举、端口扫描、指纹识别与漏洞关联，一条流水线完成。',
        proj_2_title: 'PhishForge',
        proj_2_desc: '红队钓鱼基础设施工具包，支持模板克隆、凭据收集、载荷投递及实时活动分析仪表盘。',
        proj_3_title: 'PrivEsc Suite',
        proj_3_desc: 'Windows/Linux 本地提权向量合集。根据环境上下文自动枚举并推荐利用路径。',
        proj_4_title: 'NetGhost',
        proj_4_desc: '隐蔽隧道工具，支持通过被控主机进行 SOCKS5 代理链路转发。专为分段网络横向移动设计，足迹极小。',
        proj_5_title: 'BugHunter CLI',
        proj_5_desc: '漏洞赏金侦察 CLI，自动化目标发现、参数 Fuzz 以及漏洞扫描，支持自定义攻击配置文件。',
        sk_0_name: '渗透测试',
        sk_0_0: 'Web 应用 (OWASP Top 10)',
        sk_0_1: '网络渗透',
        sk_0_2: 'API 安全',
        sk_0_3: '移动端渗透',
        sk_1_name: '红队行动',
        sk_1_0: 'C2 运营',
        sk_1_1: 'Active Directory',
        sk_1_2: '社会工程学',
        sk_1_3: '免杀与 OPSEC',
        sk_2_name: '工具开发',
        sk_2_0: 'Python / Go',
        sk_2_1: 'C / Rust',
        sk_2_2: 'PowerShell / C#',
        sk_2_3: 'Shellcode 编写',
        sk_3_name: '安全研究',
        sk_3_0: '0day 发现',
        sk_3_1: '二进制分析',
        sk_3_2: '协议 Fuzzing',
        sk_3_3: '威胁情报',
        footer_text: '&copy; 2025 Zer3cer — 通过 GitHub Pages 部署'
    }
};

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18nData[lang][key] !== undefined) {
            el.textContent = i18nData[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.lang = lang;
    
    renderProjects(lang);
    renderSkills(lang);
    renderTerminal(lang);
    renderStats(lang);
    renderAbout(lang);
    renderContact(lang);
    renderFooter(lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

window.i18n = {
    data: i18nData,
    current: currentLang,
    apply: applyLang
};
