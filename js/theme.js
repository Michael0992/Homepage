(() => {
    const STORAGE_KEY = 'theme';
    const root = document.documentElement;

    const prefersDarkQuery = window.matchMedia?.('(prefers-color-scheme: dark)');

    function getStoredTheme() {
        try {
            const value = localStorage.getItem(STORAGE_KEY);
            return value === 'dark' || value === 'light' ? value : null;
        } catch {
            return null;
        }
    }

    function getSystemTheme() {
        return prefersDarkQuery?.matches ? 'dark' : 'light';
    }

    function getEffectiveTheme() {
        return root.dataset.theme === 'dark' || root.dataset.theme === 'light' ? root.dataset.theme : getSystemTheme();
    }

    function setTheme(theme) {
        if (theme === 'dark' || theme === 'light') {
            root.dataset.theme = theme;
            try {
                localStorage.setItem(STORAGE_KEY, theme);
            } catch {
                // ignore
            }
            return;
        }

        delete root.dataset.theme;
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            // ignore
        }
    }

    function syncToggleUI() {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        const label = toggle.querySelector('.c-theme-toggle-text');
        const effective = getEffectiveTheme();

        // Requested wording: show the active mode
        if (label) label.textContent = effective === 'dark' ? 'Dark mode' : 'Light mode';
        toggle.setAttribute('aria-pressed', effective === 'dark' ? 'true' : 'false');
        toggle.title = 'Theme umschalten';
    }

    // Apply stored theme (if any); otherwise follow system (no data-theme attribute)
    const stored = getStoredTheme();
    if (stored) {
        root.dataset.theme = stored;
    } else {
        delete root.dataset.theme;
    }

    // Wire up button
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            const next = getEffectiveTheme() === 'dark' ? 'light' : 'dark';
            setTheme(next);
            syncToggleUI();
        });
    }

    // If following system, react to system changes
    prefersDarkQuery?.addEventListener?.('change', () => {
        if (!getStoredTheme()) {
            syncToggleUI();
        }
    });

    syncToggleUI();
})();
