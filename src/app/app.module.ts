import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';

// PrimeNG
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';

const TerminalGreen = definePreset(Lara, {
  semantic: {
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}'
    },
    colorScheme: {
      dark: {
        surface: {
          0: '#ffffff',
          50: '#e8e8e8',
          100: '#d1d1d1',
          200: '#a3a3a3',
          300: '#757575',
          400: '#474747',
          500: '#1a1a1a',
          600: '#151515',
          700: '#111111',
          800: '#0d0d0d',
          900: '#0a0a0a',
          950: '#050505'
        }
      }
    }
  }
});

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ErrorPageComponent,
    ProjectsComponent,
    BlogComponent,
    BlogPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    DividerModule,
    CardModule
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: TerminalGreen,
        options: {
          darkModeSelector: '.always-dark'
        }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
