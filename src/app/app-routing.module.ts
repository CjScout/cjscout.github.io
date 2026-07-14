import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Connor Schuler — Networking & Cybersecurity Student',
      description: 'Connor Schuler is a Champlain College student studying Computer Networking & Cybersecurity and Computer & Digital Forensics. Background, certifications, experience, and projects.',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects — Connor Schuler',
      description: 'Selected projects by Connor Schuler, including a network infrastructure overhaul, a full-stack test-data app for UNH-IOL, NIST 800-171 compliance reviews, and this website.',
    },
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: {
      title: 'Blog — Connor Schuler',
      description: 'Writing by Connor Schuler on technology, cybersecurity, and the issues he cares about.',
    },
  },
  // Title/description for individual posts are set dynamically from the post in AppComponent.
  { path: 'blog/:slug', component: BlogPostComponent },
  {
    path: '**',
    component: ErrorPageComponent,
    data: {
      title: 'Page Not Found — Connor Schuler',
      description: 'The page you are looking for could not be found.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
