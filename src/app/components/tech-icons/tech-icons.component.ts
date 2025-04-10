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
    'assets/Icons/angular.svg',
    'assets/Icons/spring.svg',
    'assets/Icons/github.svg',
    'assets/Icons/html.svg',
    'assets/Icons/css.svg',
    'assets/Icons/js.svg',
    'assets/Icons/java.svg'
  ];
}
