import { Component } from '@angular/core';
import { blogPosts, BlogPost } from './blog-posts';
import { ArgStateService } from '../arg/arg-state.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css',
    standalone: false
})
export class BlogComponent {
    posts: BlogPost[] = blogPosts;

    constructor(public argState: ArgStateService) { }
}
