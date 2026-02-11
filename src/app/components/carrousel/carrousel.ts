import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Slide } from '../../pages/photos-portfolio/model/CarouselItem';



@Component({
  selector: 'app-carrousel',
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './carrousel.html',
  styleUrls: ['./carrousel.css'],
})
export class Carrousel {
  

  // Tu array de datos (esto vendría de tu servicio/backend)
  slides: Slide[] = [
    { 
      id: 1,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200', 
      title: 'Montañas', 
      text: 'Paisaje natural increíble' 
    },
    { 
      id: 2,
      image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200', 
      title: 'Atardecer', 
      text: 'Vista relajante' 
    },
    { 
      id: 3,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200', 
      title: 'Lago Azul', 
      text: 'Reflejos en el agua' 
    }
  ];

  currentIndex: number = 0;
  timeoutId: any;

  ngOnInit(): void {
    this.resetTimer();
  }

  ngOnDestroy(): void {
    // Muy importante: Limpiar el timer si el usuario cambia de página para no gastar memoria
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  // Función para ir a la siguiente foto
  next(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al principio (loop)
    }
    this.resetTimer(); // Reinicia el contador de segundos
  }

  // Función para ir a la foto anterior
  prev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1; // Va al final
    }
    this.resetTimer();
  }

  // Función para ir a una foto específica (los puntitos)
  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetTimer();
  }

  // Lógica del auto-play
  resetTimer(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    // Cambia 3000 por los milisegundos que quieras (3 segundos)
    this.timeoutId = setTimeout(() => this.next(), 3000);
  }

}
