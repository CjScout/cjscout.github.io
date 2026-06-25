import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPosts, BlogPost, ContentBlock } from '../blog-posts';

// A run of paragraph text: either plain text or a clickable web link.
export type TextSegment =
    | { text: string }
    | { text: string; href: string };

// Matches a markdown-style link [text](url) or a bare http(s) URL.
const LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s]+)/g;

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrl: './blog-post.component.css',
    standalone: false
})
export class BlogPostComponent {
    post?: BlogPost;

    constructor(private route: ActivatedRoute) {
        const slug = this.route.snapshot.paramMap.get('slug');
        this.post = blogPosts.find(p => p.slug === slug);
    }

    // A header block is an object with a `heading`; a paragraph is a plain string.
    isHeading(block: ContentBlock): block is { heading: string } {
        return typeof block === 'object';
    }

    // A link segment carries an `href`; a plain text segment does not.
    isLink(segment: TextSegment): segment is { text: string; href: string } {
        return 'href' in segment;
    }

    // Split a paragraph into plain-text and link segments so the template can
    // render bare URLs and [text](url) markdown links as clickable anchors.
    segments(paragraph: string): TextSegment[] {
        const result: TextSegment[] = [];
        let lastIndex = 0;
        LINK_PATTERN.lastIndex = 0;

        for (let match: RegExpExecArray | null; (match = LINK_PATTERN.exec(paragraph)) !== null;) {
            if (match.index > lastIndex) {
                result.push({ text: paragraph.slice(lastIndex, match.index) });
            }

            const [whole, labelText, labelHref, bareUrl] = match;
            if (bareUrl) {
                // Don't swallow trailing sentence punctuation into the URL.
                const trimmed = bareUrl.replace(/[.,;:!?)]+$/, '');
                result.push({ text: trimmed, href: trimmed });
                lastIndex = match.index + trimmed.length;
            } else {
                result.push({ text: labelText, href: labelHref });
                lastIndex = match.index + whole.length;
            }
        }

        if (lastIndex < paragraph.length) {
            result.push({ text: paragraph.slice(lastIndex) });
        }
        return result;
    }
}
