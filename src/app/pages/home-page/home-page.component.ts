import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import des composants utilisés dans la HomePage
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { ExperienceSectionComponent } from '../../components/experience-section/experience-section.component';
import { ProjectsSectionComponent } from '../../components/projects-section/projects-section.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { TechIconsComponent } from '../../components/tech-icons/tech-icons.component';
import { OrbitGraphicComponent } from '../../components/orbit-graphic/orbit-graphic.component';
import { ExperienceCardComponent } from "../../components/experience-card/experience-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    ContactFormComponent,
    TechIconsComponent,
    ExperienceCardComponent
],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {}