import { Component, computed, signal } from '@angular/core';
import { CarrouselItem } from '../../../pages/photos-portfolio/model/CarouselItem';
import { Carrousel } from '../../../pages/photos-portfolio/model/Carrousel';
import { MatAccordion } from "@angular/material/expansion";
import { ExpansionPanel } from "../expansion-panel/expansion-panel";
@Component({
  selector: 'app-expansion-panel-father',
  imports: [MatAccordion, ExpansionPanel],
  templateUrl: './expansion-panel-father.html',
  styleUrl: './expansion-panel-father.css',
})
export class ExpansionPanelFather {

  allPhotos = signal<CarrouselItem[]>([
  { id: 1, image: 'photos/Asturias y Vacaciones con Natalia 2.JPG', title: 'Asturias y Vacaciones con Natalia 2', group: 1 },
  { id: 2, image: 'photos/Asturias y Vacaciones con Natalia 3.JPG', title: 'Asturias y Vacaciones con Natalia 3', group: 1 },
  { id: 3, image: 'photos/Asturias y Vacaciones con Natalia 4.JPG', title: 'Asturias y Vacaciones con Natalia 4', group: 1 },
  { id: 4, image: 'photos/Asturias y Vacaciones con Natalia 5.JPG', title: 'Asturias y Vacaciones con Natalia 5', group: 1 },
  { id: 5, image: 'photos/Asturias y Vacaciones con Natalia 6.JPG', title: 'Asturias y Vacaciones con Natalia 6', group: 1 },
  { id: 6, image: 'photos/Asturias y Vacaciones con Natalia 7.JPG', title: 'Asturias y Vacaciones con Natalia 7', group: 1 },
  { id: 7, image: 'photos/Asturias y Vacaciones con Natalia 8.jpg', title: 'Asturias y Vacaciones con Natalia 8', group: 1 },
  { id: 8, image: 'photos/Asturias y Vacaciones con Natalia 9.jpg', title: 'Asturias y Vacaciones con Natalia 9', group: 1 },
  { id: 9, image: 'photos/Asturias y Vacaciones con Natalia 10.jpg', title: 'Asturias y Vacaciones con Natalia 10', group: 1 },
  { id: 10, image: 'photos/Asturias y Vacaciones con Natalia 11.jpg', title: 'Asturias y Vacaciones con Natalia 11', group: 1 },
  { id: 11, image: 'photos/Asturias y Vacaciones con Natalia 13.jpg', title: 'Asturias y Vacaciones con Natalia 13', group: 1 },
  { id: 12, image: 'photos/Asturias y Vacaciones con Natalia.JPG', title: 'Asturias y Vacaciones con Natalia', group: 1 },

  { id: 13, image: 'photos/Bejar.JPG', title: 'Bejar', group: 2 },
  { id: 14, image: 'photos/Bejar2.JPG', title: 'Bejar2', group: 2 },
  { id: 15, image: 'photos/Bejar3.JPG', title: 'Bejar3', group: 2 },
  { id: 16, image: 'photos/Bejar4.JPG', title: 'Bejar4', group: 2 },
  { id: 17, image: 'photos/Bejar5.JPG', title: 'Bejar5', group: 2 },
  { id: 18, image: 'photos/Bejar6.JPG', title: 'Bejar6', group: 2 },
  { id: 19, image: 'photos/Bejar7.JPG', title: 'Bejar7', group: 2 },
  { id: 20, image: 'photos/Bejar9.JPG', title: 'Bejar9', group: 2 },
  { id: 21, image: 'photos/Bejar10.JPG', title: 'Bejar10', group: 2 },
  { id: 22, image: 'photos/Bejar11.JPG', title: 'Bejar11', group: 2 },
  { id: 23, image: 'photos/Bejar12.JPG', title: 'Bejar12', group: 2 },
  { id: 24, image: 'photos/Bejar13.JPG', title: 'Bejar13', group: 2 },

  { id: 25, image: 'photos/Galicia y Amigos 4.jpg', title: 'Galicia y Amigos 4', group: 3 },
  { id: 26, image: 'photos/Galicia y Amigos 5.jpg', title: 'Galicia y Amigos 5', group: 3 },
  { id: 27, image: 'photos/Galicia y Amigos 6.jpg', title: 'Galicia y Amigos 6', group: 3 },
  { id: 28, image: 'photos/Galicia y Amigos 7.jpg', title: 'Galicia y Amigos 7', group: 3 },
  { id: 29, image: 'photos/Galicia y Amigos 8.jpg', title: 'Galicia y Amigos 8', group: 3 },
  { id: 30, image: 'photos/Galicia y Amigos.jpg', title: 'Galicia y Amigos', group: 3 },
  { id: 31, image: 'photos/Galicia y Amigos1.jpg', title: 'Galicia y Amigos1', group: 3 },
  { id: 32, image: 'photos/Galicia y Amigos3.jpg', title: 'Galicia y Amigos3', group: 3 },

  { id: 33, image: 'photos/NavidadMadrid27-12-46.jpg', title: 'NavidadMadrid27-12-46', group: 4 },
  { id: 34, image: 'photos/NavidadMadrid27-12-47.jpg', title: 'NavidadMadrid27-12-47', group: 4 },
  { id: 35, image: 'photos/NavidadMadrid27-12-50.jpg', title: 'NavidadMadrid27-12-50', group: 4 },
  { id: 36, image: 'photos/NavidadMadrid27-12-52.jpg', title: 'NavidadMadrid27-12-52', group: 4 },
  { id: 37, image: 'photos/NavidadMadrid27-12-57.jpg', title: 'NavidadMadrid27-12-57', group: 4 },
  { id: 38, image: 'photos/NavidadMadrid27-12-64.jpg', title: 'NavidadMadrid27-12-64', group: 4 },
  { id: 39, image: 'photos/NavidadMadrid27-12-66.jpg', title: 'NavidadMadrid27-12-66', group: 4 },
  { id: 40, image: 'photos/NavidadMadrid27-12-71.jpg', title: 'NavidadMadrid27-12-71', group: 4 },
  { id: 41, image: 'photos/NavidadMadrid27-12-72.jpg', title: 'NavidadMadrid27-12-72', group: 4 },

  { id: 42, image: 'photos/Salamanca.JPG', title: 'Salamanca', group: 5 },
  { id: 43, image: 'photos/Salamanca2.JPG', title: 'Salamanca2', group: 5 },
  { id: 44, image: 'photos/Salamanca3.JPG', title: 'Salamanca3', group: 5 },
  { id: 45, image: 'photos/Salamanca4.JPG', title: 'Salamanca4', group: 5 },

  { id: 46, image: 'photos/Sanabria y el frio 2.JPG', title: 'Sanabria y el frio 2', group: 6 },
  { id: 47, image: 'photos/Sanabria y el frio 3.JPG', title: 'Sanabria y el frio 3', group: 6 },
  { id: 48, image: 'photos/Sanabria y el frio 4.JPG', title: 'Sanabria y el frio 4', group: 6 },
  { id: 49, image: 'photos/Sanabria y el frio 5.JPG', title: 'Sanabria y el frio 5', group: 6 },
  { id: 50, image: 'photos/Sanabria y el frio 6.JPG', title: 'Sanabria y el frio 6', group: 6 },
  { id: 51, image: 'photos/Sanabria y el frio 7.JPG', title: 'Sanabria y el frio 7', group: 6 },
  { id: 52, image: 'photos/Sanabria y el frio 8.JPG', title: 'Sanabria y el frio 8', group: 6 },
  { id: 53, image: 'photos/Sanabria y el frio 9.JPG', title: 'Sanabria y el frio 9', group: 6 },
  { id: 54, image: 'photos/Sanabria y el frio 10.JPG', title: 'Sanabria y el frio 10', group: 6 },
  { id: 55, image: 'photos/Sanabria y el frio 12.jpg', title: 'Sanabria y el frio 12', group: 6 },
  { id: 56, image: 'photos/Sanabria y el frio.JPG', title: 'Sanabria y el frio1', group: 6 },
  { id: 57, image: 'photos/Sanabria y el frio11.jpg', title: 'Sanabria y el frio11', group: 6 },

]);

  carrouselsAgrupados = computed<Carrousel[]>(() => {


    const grouped = this.allPhotos().reduce((acc, item) => {
      const groupId = item.group ?? 0;
      if (!acc[groupId]) {
        acc[groupId] = [];
      }

      acc[groupId].push(item);
      return acc;

      if (!acc[groupId]) {
        acc[groupId] = [];
      }
      acc[groupId].push(item);
      return acc;

    }, {} as Record<number, CarrouselItem[]>);


    return Object.keys(grouped).map(key => {
    const groupKey = Number(key);
    const imagesInGroup = grouped[groupKey];
    
    // Opcional: Extraer un nombre más bonito del título de la primera foto del grupo
    // Tomamos el título de la primera imagen y quitamos los números del final
    const baseName = imagesInGroup[0].title.replace(/\d+$/, '').trim();

    return {
      name: baseName || `Grupo ${groupKey}`,
      description: `Colección con ${imagesInGroup.length} imágenes`,
      images: imagesInGroup
    };
  });
  });
}
