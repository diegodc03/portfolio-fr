import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  imports: [CommonModule],
  templateUrl: './achievements.html',
  styleUrl: './achievements.css',
})
export class Achievements {
  // Datos de Idiomas
  languages = [
    { name: 'Español', level: 'Nativo', percentage: 100 },
    { name: 'Inglés', level: 'B2 (52/100)', percentage: 60 }
  ];

  // Datos de Premios
  awards = [
    {
      title: '1º Premio Hackathon IA',
      organizer: 'Viewnext Generativa',
      icon: '🏆' // Puedes usar un emoji o un icono SVG
    },
    {
      title: 'TFG con Cátedra HP',
      organizer: 'Universidad de Salamanca',
      icon: '🎓'
    }
  ];

  // Datos de Cursos Externos
  courses = [
    { name: 'Angular: De cero a experto', hours: '33h', platform: 'Udemy' },
    // Puedes añadir más aquí
  ];
}
