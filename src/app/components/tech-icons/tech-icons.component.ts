import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-tech-icons',
  imports: [],
  templateUrl: './tech-icons.component.html',
  styleUrl: './tech-icons.component.scss'
})
export class TechIconsComponent {
  icons = [
    'assets/icons/angular.svg',
    'assets/icons/java.svg',
    'assets/icons/spring.svg',
    'assets/icons/typescript.svg',
    'assets/icons/docker.svg',
    'assets/icons/html.svg',
  ];
  

}
