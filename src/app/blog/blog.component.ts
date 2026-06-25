import { Component } from '@angular/core';
import { blogPosts, BlogPost } from './blog-posts';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css',
    standalone: false
})
export class BlogComponent {
    posts: BlogPost[] = blogPosts;
}
