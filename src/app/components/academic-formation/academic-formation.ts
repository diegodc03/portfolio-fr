import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-academic-formation',
  imports: [CommonModule],
  templateUrl: './academic-formation.html',
  styleUrl: './academic-formation.css',
})
export class AcademicFormation {
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
