import { Component, computed, input } from '@angular/core';
import { CarrouselItem } from '../../../pages/photos-portfolio/model/CarouselItem';

@Component({
  selector: 'app-image-grid',
  imports: [],
  templateUrl: './image-grid.html',
  styleUrl: './image-grid.css',
})
export class ImageGrid {

  carrouselCells = input.required<CarrouselItem[]>();


  columns = computed(() => {

    const images = this.carrouselCells();
    const result: CarrouselItem[][] = [[], [], [], []];
    
    // Distribuimos las imágenes usando el índice y el operador módulo (%)
    images.forEach((item, index) => {
      result[index % 4].push(item);
    });

    return result;
  })



}
