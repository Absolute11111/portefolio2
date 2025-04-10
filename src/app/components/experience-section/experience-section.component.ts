import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceCardComponent } from '../experience-card/experience-card.component';

@Component({
  standalone: true,
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
  imports: [CommonModule, ExperienceCardComponent] // ✅ importer le composant enfant
})
export class ExperienceSectionComponent {
  experiences = [
    {
      title: 'Développeur Stagiaire SQLI',
      subtitle: 'Stage d’initiation en agence',
      icon: '🌟'
    },
    {
      title: 'Anciennement Stagiaire chez Foncia',
      subtitle: 'Refonte d’outils immobiliers',
      icon: '🌕'
    },
    {
      title: 'Développeur Alternant SQLI',
      subtitle: 'Fullstack en mission client',
      icon: '🪐'
    },
    {
      title: 'Stagiaire chez Loft One',
      subtitle: 'Projet web en autonomie',
      icon: '🚀'
    }
  ];
}
