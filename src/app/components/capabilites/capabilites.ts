import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface HabilitiesType {
  titleType: string;
  subtitleType: string;
  skills: string[];
}

@Component({
  selector: 'app-capabilites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capabilites.html',
  styleUrl: './capabilites.css',
})
export class Capabilites {
  
  skillSections: HabilitiesType[] = [
  {
    titleType: 'Habilidades Técnicas',
    subtitleType: 'Tecnologías clave que utilizo para desarrollar arquitecturas escalables y modernas.',
    skills: [
      'Java 21',
      'Spring Boot 3',
      'Angular 19',
      'TypeScript',
      'PostgreSQL',
      'Docker',
      'Git / GitHub',
      'Microservicios',
      'HTML5 & CSS3'
    ]
  },
  {
    titleType: 'Habilidades Blandas',
    subtitleType: 'Cualidades personales que aporto para fomentar un entorno de trabajo colaborativo y eficiente.',
    skills: [
      'Trabajo en Equipo',
      'Resolución de Problemas',
      'Comunicación Efectiva',
      'Aprendizaje Continuo',
      'Adaptabilidad',
      'Gestión del Tiempo',
      'Pensamiento Crítico',
      'Atención al Detalle'
    ]
  },
  {
    titleType: 'Metodologías y Herramientas',
    subtitleType: 'Flujos de trabajo y estándares que garantizan la calidad del código.',
    skills: [
      'Scrum',
      'Kanban',
      'CI/CD',
      'Clean Code',
      'Principios SOLID',
      'Testing',
      'Diseño Responsive',
      'VS Code / IntelliJ'
    ]
  }
];
      
}




