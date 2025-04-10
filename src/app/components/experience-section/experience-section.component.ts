import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [CommonModule, ExperienceCardComponent],
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent {
  experiences = [
    {
      icon: 'assets/group-2.png',
      title: 'Développeur Stagiaire SQLI',
      description: 'Stage intensif en Angular et Java.'
    },
    {
      icon: 'assets/group-1935.png',
      title: 'Stagiaire chez Foncia',
      description: 'Intégration HTML/CSS et modules'
    },
    {
      icon: 'assets/group-1938.png',
      title: 'Développeur Alternant SQLI',
      description: 'Fullstack Angular/SpringBoot'
    },
    {
      icon: 'assets/icons.png',
      title: 'Stagiaire Loft One',
      description: 'Création site vitrine sous WordPress'
    }
  ];
}
