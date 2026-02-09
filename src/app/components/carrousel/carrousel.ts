import { Component } from '@angular/core';



@Component({
  selector: 'app-carrousel',
  imports: [],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
})
export class Carrousel {
   // Aquí recibimos el array.
  // Cuando tengas el Back, simplemente le pasarás los datos de la API a este input.
  //@Input() items: CarouselItem[] = [];
  // Este array simula tu respuesta del Backend (JSON)
  misFotos = [
    { id: 1, label: 'Slide 1', image: 'https://picsum.photos/id/10/600/400', text: 'Bosque' },
    { id: 2, label: 'Slide 2', image: 'https://picsum.photos/id/20/600/400', text: 'Oficina' },
    { id: 3, label: 'Slide 3', image: 'https://picsum.photos/id/30/600/400', text: 'Café' },
  ];

}
