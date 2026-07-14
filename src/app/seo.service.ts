import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

// Per-page metadata. `title` and `description` are required; the rest fall back
// to site-wide defaults so every page gets a complete set of tags.
export interface SeoConfig {
    title: string;
    description: string;
    // Path of the current page (e.g. '/blog/first-post'), used to build the
    // canonical and og:url. Defaults to the site root when omitted.
    path?: string;
    // 'website' for landing/list pages, 'article' for blog posts.
    type?: 'website' | 'article';
}

// Site-wide constants used to build absolute URLs and fill in defaults.
const SITE_NAME = 'Connor Schuler';
const SITE_URL = 'https://connorthenetworkjester.net';
const SITE_IMAGE = `${SITE_URL}/favicon.svg`;

@Injectable({ providedIn: 'root' })
export class SeoService {
    constructor(private title: Title, private meta: Meta) { }

    // Apply a full set of SEO/social metadata for the current page. Safe to call
    // on every navigation — existing tags are updated in place, not duplicated.
    update(config: SeoConfig): void {
        const path = config.path ?? '/';
        const url = `${SITE_URL}${path}`;
        const type = config.type ?? 'website';

        this.title.setTitle(config.title);

        // Standard description.
        this.meta.updateTag({ name: 'description', content: config.description });

        // Canonical URL (kept in sync with the active route).
        this.setCanonical(url);

        // Open Graph (Facebook, LinkedIn, iMessage, etc.).
        this.meta.updateTag({ property: 'og:title', content: config.title });
        this.meta.updateTag({ property: 'og:description', content: config.description });
        this.meta.updateTag({ property: 'og:type', content: type });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:site_name', content: SITE_NAME });
        this.meta.updateTag({ property: 'og:image', content: SITE_IMAGE });

        // Twitter Card.
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ name: 'twitter:title', content: config.title });
        this.meta.updateTag({ name: 'twitter:description', content: config.description });
        this.meta.updateTag({ name: 'twitter:image', content: SITE_IMAGE });
    }

    // Maintain a single <link rel="canonical"> in the document head.
    private setCanonical(url: string): void {
        let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
        if (!link) {
            link = document.createElement('link');
            link.setAttribute('rel', 'canonical');
            document.head.appendChild(link);
        }
        link.setAttribute('href', url);
    }
}
