(() => {
    const container = document.getElementById('icons');
    if (!container) return;

    const modalEl = document.getElementById('skillModal');
    const modalTitleEl = document.getElementById('skillModalTitle');
    const modalSubtitleEl = document.getElementById('skillModalSubtitle');
    const modalLabelEl = document.getElementById('skillModalLabel');
    const modalDescEl = document.getElementById('skillModalDescription');
    const modalImgEl = document.getElementById('skillModalImg');

    const fallbackDescription = (name) =>
        `${name} ist ein Tool bzw. eine Technologie aus meinem Stack. Das Icon steht für ${name}.`;

    /** @type {Record<string, {title: string, subtitle?: string, description: string}>} */
    const SKILL_INFO = {
        Arch: {
            title: 'Arch Linux',
            subtitle: 'Betriebssystem',
            description: 'Rolling-Release Linux-Distribution. Das Icon steht für Linux-/Terminal-Erfahrung und Systemverständnis.',
        },
        Arduino: {
            title: 'Arduino',
            subtitle: 'Microcontroller / IoT',
            description: 'Plattform für Microcontroller-Prototypen – Sensoren/Aktoren, serielle Kommunikation und kleine Hardware-Projekte.',
        },
        Blender: {
            title: 'Blender',
            subtitle: '3D / Animation',
            description: '3D-Modellierung und Animation – nutze ich für Assets, Prototypen und einfache Renderings.',
        },
        CS: {
            title: 'C#',
            subtitle: 'Programmiersprache',
            description: 'Programmiersprache im .NET-Ökosystem – für Backend, Tools und Trainings.',
        },
        CSS: {
            title: 'CSS',
            subtitle: 'Web',
            description: 'Styling für Web-UIs – Layout, Responsive Design, Komponenten und kleine Animationen.',
        },
        DotNet: {
            title: '.NET',
            subtitle: 'Plattform / Framework',
            description: 'Framework/Runtime für C#-Anwendungen – z.B. Web-APIs, Services und Tools.',
        },
        Electron: {
            title: 'Electron',
            subtitle: 'Desktop Apps',
            description: 'Framework für Desktop-Anwendungen mit Web-Technologien (HTML/CSS/JS) – z.B. für Tools/Clients.',
        },
        Flask: {
            title: 'Flask',
            subtitle: 'Python Webframework',
            description: 'Leichtgewichtiges Python-Webframework – ideal für kleine Web-APIs und Prototypen.',
        },
        Git: {
            title: 'Git',
            subtitle: 'Versionskontrolle',
            description: 'Versionsverwaltung für saubere Historie, Branching, Code-Reviews und nachvollziehbare Releases.',
        },
        Github: {
            title: 'GitHub',
            subtitle: 'Hosting / Collaboration',
            description: 'Plattform für Repos, Issues, Pull Requests und CI/CD-Workflows.',
        },
        Godot: {
            title: 'Godot',
            subtitle: 'Game Engine',
            description: 'Open-Source Game Engine – für Prototyping, Szenen, Scripting und Gameplay-Mechaniken.',
        },
        HTML: {
            title: 'HTML',
            subtitle: 'Web',
            description: 'Struktur und Semantik von Webseiten – Basis für Inhalte und Komponenten.',
        },
        JavaScript: {
            title: 'JavaScript',
            subtitle: 'Web / Node.js',
            description: 'Sprache für Frontend-Interaktion und Node.js-Tooling/Serverlogik.',
        },
        Linux: {
            title: 'Linux',
            subtitle: 'Betriebssystem',
            description: 'Server-/Desktop-Betriebssystem – Shell, Deployments, Services und grundlegende Administration.',
        },
        MySQL: {
            title: 'MySQL',
            subtitle: 'Datenbank',
            description: 'Relationale Datenbank – Datenmodelle, Abfragen und persistente Speicherung in Web-Apps.',
        },
        Notion: {
            title: 'Notion',
            subtitle: 'Doku / Organisation',
            description: 'Dokumentation und Projektorganisation – Notizen, Wissensbasis, Aufgaben und Strukturierung.',
        },
        Powershell: {
            title: 'PowerShell',
            subtitle: 'Automation',
            description: 'Scripting/Automation unter Windows – für Admin-Aufgaben, Tooling und Dev-Workflows.',
        },
        Python: {
            title: 'Python',
            subtitle: 'Programmiersprache',
            description: 'Skripte, Automatisierung und Projekte – schnell für Prototypen, Tools und Datenverarbeitung.',
        },
        RaspberryPi: {
            title: 'Raspberry Pi',
            subtitle: 'Mini-Server / Hardware',
            description: 'Single-Board-Computer – z.B. für kleine Server-/Testumgebungen und lokale Services.',
        },
        SQLite: {
            title: 'SQLite',
            subtitle: 'Datenbank',
            description: 'Leichte, dateibasierte Datenbank – ideal für lokale Tools und Prototypen ohne Server.',
        },
        Unity: {
            title: 'Unity',
            subtitle: 'Game Engine',
            description: 'Game Engine – Erfahrung mit Asset-Workflows, Szenen, Komponenten und Scripting.',
        },
        VisualStudio: {
            title: 'Visual Studio',
            subtitle: 'IDE',
            description: 'IDE, besonders stark für .NET/C# – Debugging, Profiler, Projektverwaltung.',
        },
        VSCode: {
            title: 'Visual Studio Code',
            subtitle: 'Editor / IDE',
            description: 'Mein Standard-Editor – Debugging, Extensions, Git-Integration und schnelle Workflows.',
        },
        Windows: {
            title: 'Windows',
            subtitle: 'Betriebssystem',
            description: 'Hauptumgebung für Entwicklung und Tooling – inklusive PowerShell- und .NET-Stack.',
        },
        Wordpress: {
            title: 'WordPress',
            subtitle: 'CMS',
            description: 'Content-Management-System – Themes/Plugins, Content-Struktur und einfache Anpassungen.',
        },
        nodejs: {
            title: 'Node.js',
            subtitle: 'Runtime',
            description: 'JavaScript-Laufzeitumgebung für Server/Tools – z.B. APIs, Scripts und Build/Tooling.',
        },
    };

    function normalizeNameFromFilename(filename) {
        return filename
            .replace(/-Dark\.svg$/i, '')
            .replace(/\.svg$/i, '')
            .trim();
    }

    function openSkillModal({ title, subtitle, description, iconSrc, iconAlt }) {
        if (!modalEl || !modalTitleEl || !modalLabelEl || !modalDescEl || !modalImgEl) return;

        modalLabelEl.textContent = title;
        modalTitleEl.textContent = title;
        if (modalSubtitleEl) modalSubtitleEl.textContent = subtitle || 'Technologie / Tool';
        modalDescEl.textContent = description;

        modalImgEl.src = iconSrc;
        modalImgEl.alt = iconAlt || title;

        // Bootstrap 5 global
        const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
        modal.show();
    }

    const icons = [
        'Arch-Dark.svg',
        'Arduino.svg',
        'Blender-Dark.svg',
        'CS.svg',
        'CSS.svg',
        'DotNet.svg',
        'Electron.svg',
        'Flask-Dark.svg',
        'Git.svg',
        'Github-Dark.svg',
        'Godot-Dark.svg',
        'HTML.svg',
        'JavaScript.svg',
        'Linux-Dark.svg',
        'MySQL-Dark.svg',
        'Notion-Dark.svg',
        'Powershell-Dark.svg',
        'Python-Dark.svg',
        'RaspberryPi-Dark.svg',
        'SQLite.svg',
        'Unity-Dark.svg',
        'VisualStudio-Dark.svg',
        'VSCode-Dark.svg',
        'Windows-Dark.svg',
        'Wordpress.svg',
        'nodejs-dark.svg',
    ];

    for (const icon of icons) {
        const rawName = normalizeNameFromFilename(icon);
        const info = SKILL_INFO[rawName] ?? { title: rawName, subtitle: 'Technologie / Tool', description: fallbackDescription(rawName) };
        const iconSrc = `rsc/ico/${icon}`;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'c-skill-btn';
        button.setAttribute('aria-label', `Beschreibung öffnen: ${info.title}`);

        const img = document.createElement('img');
        img.src = iconSrc;
        img.alt = info.title;
        img.className = 'icon';
        img.loading = 'lazy';

        button.appendChild(img);
        button.addEventListener('click', () => {
            openSkillModal({
                title: info.title,
                subtitle: info.subtitle,
                description: info.description,
                iconSrc,
                iconAlt: info.title,
            });
        });

        container.appendChild(button);
    }
})();
