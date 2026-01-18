/* global marked */

(() => {
    function normalizeAssetUrl(url, assetBase) {
        if (!url) return url;
        if (/^(https?:)?\/\//i.test(url)) return url;
        if (url.startsWith('#')) return url;
        if (url.startsWith('data:')) return url;

        // Markdown in this repo references images like: imgs/image1.png
        // From projects/GDPython.html we want: projects/mds/imgs/...
        if (url.startsWith('imgs/')) return `${assetBase}${url}`;

        return url;
    }

    async function renderProjectMarkdown({ markdownUrl, contentElementId, assetBase }) {
        const content = document.getElementById(contentElementId);
        if (!content) return;

        try {
            const res = await fetch(markdownUrl, { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const md = await res.text();

            const renderer = new marked.Renderer();

            renderer.image = ({ href, title, text }) => {
                const src = normalizeAssetUrl(href, assetBase);
                const safeTitle = title ? ` title="${escapeHtml(title)}"` : '';
                return `<figure class="md-figure"><img src="${escapeHtml(src)}" alt="${escapeHtml(text || '')}" loading="lazy" decoding="async"${safeTitle} /></figure>`;
            };

            renderer.link = ({ href, title, text }) => {
                const url = normalizeAssetUrl(href, assetBase);
                const safeTitle = title ? ` title="${escapeHtml(title)}"` : '';
                const isExternal = /^(https?:)?\/\//i.test(url);
                const extra = isExternal ? ' rel="noopener noreferrer" target="_blank"' : '';
                return `<a href="${escapeHtml(url)}"${safeTitle}${extra}>${text}</a>`;
            };

            marked.setOptions({
                gfm: true,
                breaks: false,
                headerIds: true,
                mangle: false,
                renderer,
            });

            content.innerHTML = marked.parse(md);
        } catch (e) {
            content.innerHTML = `<p class="c-card-text">Konnte Markdown nicht laden. (${escapeHtml(String(e))})</p>`;
        }
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    window.renderProjectMarkdown = renderProjectMarkdown;
})();
