(() => {
    const heroText = document.getElementById('heroTextEffect');
    if (!heroText) return;

    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    const texts = [
        'IT Trainer',
        'Full-Stack Developer',
        'Web Designer',
        '3D Artist',
        'Technischer Produktdesigner',
    ];

    if (prefersReducedMotion) {
        heroText.textContent = texts[0];
        return;
    }

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let lastTick = 0;

    const typeDelay = 42;
    const deleteDelay = 26;
    const pauseDelay = 900;

    function tick(now) {
        const delta = now - lastTick;
        const targetDelay = isDeleting ? deleteDelay : typeDelay;

        if (delta >= targetDelay) {
            lastTick = now;

            const current = texts[index];

            if (!isDeleting) {
                charIndex = Math.min(charIndex + 1, current.length);
                heroText.textContent = current.slice(0, charIndex);

                if (charIndex === current.length) {
                    isDeleting = true;
                    lastTick = now + pauseDelay;
                }
            } else {
                charIndex = Math.max(charIndex - 1, 0);
                heroText.textContent = current.slice(0, charIndex);

                if (charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % texts.length;
                }
            }
        }

        requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
})();


