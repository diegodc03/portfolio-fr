import { Component, computed, input, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Carrousel } from '../../../pages/photos-portfolio/model/Carrousel';
import { CarrouselItem } from '../../../pages/photos-portfolio/model/CarouselItem';


@Component({
  selector: 'app-expansion-panel',
  imports: [MatExpansionModule],
  templateUrl: './expansion-panel.html',
  styleUrl: './expansion-panel.css',
})
export class ExpansionPanel {


  readonly expansionPanelOpened = input(false);
  
  readonly carrousel = input.required<Carrousel>();

  columns = computed(() => {

    const images = this.carrousel().images;
    const result: CarrouselItem[][] = [[], [], [], []];
    
    // Distribuimos las imágenes usando el índice y el operador módulo (%)
    images.forEach((item, index) => {
      result[index % 4].push(item);
    });

    return result;
  })
  

}
