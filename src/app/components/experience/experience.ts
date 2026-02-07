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
      techStack: ['Java 21 / 17 / 11', 'Spring Boot 3', 'PostgreSQL', 'Docker', 'Git']
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
      techStack: [] // Vacío o lo quitas si es opcional
    },
    {
      period: '2019',
      role: 'Voluntario Eventos',
      company: 'Cruz Roja', // Ejemplo inventado
      tasks: ['Apoyo logístico en campañas locales.'],
      techStack: []
    }
  ];

  education = [
    {
      period: '2023 - 2024',
      degree: 'Máster en Desarrollo de Aplicaciones Web',
      institution: 'Universidad Complutense de Madrid',
      details: [
        'Enfoque en tecnologías front-end y back-end modernas.',
        'Proyecto final: Plataforma de comercio electrónico utilizando Angular y Spring Boot.'
      ]
    },
    {
      period: '2019 - 2023',
      degree: 'Ingeniería Informática',
      institution: 'Universidad de Salamanca',
      details: [
        'Especialización en desarrollo de software y sistemas distribuidos.',
        'Proyectos destacados: Desarrollo de una aplicación web para gestión de bibliotecas.'
      ]
    }
  ];
}
