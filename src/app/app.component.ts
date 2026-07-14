import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SeoService } from './seo.service';
import { blogPosts } from './blog/blog-posts';

// gtag is loaded by the snippet in index.html; declare it for type-checking.
declare const gtag: (...args: any[]) => void;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'NetworkJester';

  constructor(private router: Router, private seo: SeoService) { }

  ngOnInit(): void {
    // Update page metadata after every completed navigation. This is the single
    // source of truth for titles/descriptions/social tags across the site.
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(event => {
        this.applyMetadata(event.urlAfterRedirects);
        this.trackPageView(event.urlAfterRedirects);
      });
  }

  // Send a GA4 page_view for the current route. Automatic page views are turned
  // off in index.html, so this is the single source of truth for SPA navigations.
  // Runs after applyMetadata so document.title reflects the new page.
  private trackPageView(url: string): void {
    if (typeof gtag !== 'function') { return; }
    gtag('event', 'page_view', {
      page_path: url,
      page_title: document.title,
      page_location: document.location.href,
    });
  }

  private applyMetadata(url: string): void {
    // Walk to the deepest activated route — that's the one that rendered.
    let snapshot: ActivatedRouteSnapshot = this.router.routerState.snapshot.root;
    while (snapshot.firstChild) {
      snapshot = snapshot.firstChild;
    }

    const path = url.split('?')[0].split('#')[0];

    // Blog posts have no static route data; derive their metadata from the post.
    const slug = snapshot.paramMap.get('slug');
    if (slug) {
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        this.seo.update({
          title: `${post.title} — Connor Schuler`,
          description: post.summary,
          path,
          type: 'article',
        });
      } else {
        // Unknown slug — fall back to a generic, non-indexable description.
        this.seo.update({
          title: 'Post Not Found — Connor Schuler',
          description: 'The blog post you are looking for could not be found.',
          path,
        });
      }
      return;
    }

    // Static pages carry their title/description in route data.
    const data = snapshot.data;
    if (data['title'] && data['description']) {
      this.seo.update({
        title: data['title'],
        description: data['description'],
        path,
      });
    }
  }
}
