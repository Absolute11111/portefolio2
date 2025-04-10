import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-icons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-icons.component.html',
  styleUrls: ['./tech-icons.component.scss']
})
export class TechIconsComponent {
  icons = [
    'assets/Angular.png',
    'assets/github.png',
    'assets/html.png',
    'assets/css.png',
    'assets/Typescript.png',
    'assets/java.png'
  ];
}
