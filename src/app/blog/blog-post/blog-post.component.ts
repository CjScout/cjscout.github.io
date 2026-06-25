import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPosts, BlogPost, ContentBlock } from '../blog-posts';

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
}
