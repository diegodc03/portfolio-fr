import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ExperienceDto {
  period: string;
  role: string;
  company: string;
  tasks: string[];      // Array para los puntos (bullet points)
  techStack?: string[]; // Array opcional para las tecnologías
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {

  experiences: ExperienceDto[] = [
    {
      period: '2025 - Act',
      role: 'Desarrollador FullStack',
      company: 'Viewnext',
      tasks: [
        'Desarrollo backend robusto con Spring Boot 3 y Java 21.',
        'Gestión y modelado de datos con PostgreSQL y MyBatis.',
        'Control de versiones (Git) y automatización CI/CD.',
        'Metodología Kanban para gestión eficiente de flujos.'
      ],
      techStack: ['Java 21 / 17 / 11','Angular 19', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Git']
    },
    {
      period: '2025',
      role: 'Desarrollador FullStack (Prácticas)',
      company: 'Viewnext',
      tasks: [
        'Desarrollo de aplicaciones web con Angular 19 y Spring Boot.',
        'Trabajo colaborativo en entorno ágil (Scrum, Dailys, Sprints).',
        'Administración de bases de datos relacionales (MySQL).',
        'Ciclo completo: desde diseño hasta despliegue.'
      ],
      techStack: ['Angular 19', 'MySQL', 'Scrum', 'TypeScript']
    }
  ];

  // Array 2: Voluntariado (Derecha) - NUEVO
  volunteering: ExperienceDto[] = [
    {
      period: '2021 - Act.',
      role: 'Fotógrafo / Staff',
      company: 'CB Zamora',
      tasks: [
        'Fotografía de eventos deportivos.',
        'Control de accesos y gestión de público.'
      ],
      techStack: []
    }
  ];

  education = [
    {
      period: 'Act.',
      degree: 'General',
      institution: 'Autodidacta',
      details: [
        'Estudiando de forma autodidacta inglés para sacarme el B2/B1',
        'Estudiando certificaciones de AWS (Cloud Practitioner de momento) para ampliar mis conocimientos en la nube.',
        'Mejorando mis habilidades en desarrollo de software a través de cursos online y proyectos personales. (Como puede ser el desarrollo de esta misma web)',
        'Estudiando la certificacion de Scrum Master para mejorar mis habilidades en gestión de proyectos ágiles.'
      ]
    },
    {
      period: '2019 - 2023',
      degree: 'Ingeniería Informática',
      institution: 'Universidad de Salamanca',
      details: [
        'Especialización en desarrollo de software y sistemas distribuidos.',
        'A partir de la universidad, he desarrollado una sólida base en programación, algoritmos y estructuras de datos, así como en gestión de proyectos y trabajo en equipo.',
      ]
    }
  ];
}
