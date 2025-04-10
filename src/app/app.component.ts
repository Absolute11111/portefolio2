import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

// Standalone components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
  ]
})
export class AppComponent {}
