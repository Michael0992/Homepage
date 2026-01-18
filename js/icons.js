(() => {
    const container = document.getElementById('icons');
    if (!container) return;

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
        const img = document.createElement('img');
        img.src = `rsc/ico/${icon}`;
        img.alt = icon.replace(/-Dark\.svg$|\.svg$/i, '');
        img.className = 'icon';
        img.loading = 'lazy';
        container.appendChild(img);
    }
})();
