import { Component, Input } from '@angular/core';
import { Carrousel } from "../../components/carrousel/carrousel";
import { ImageGrid } from "../../components/image-grid/image-grid";

@Component({
  selector: 'app-photos-portfolio',
  imports: [ImageGrid],
  templateUrl: './photos-portfolio.html',
  styleUrl: './photos-portfolio.css',
})
export class PhotosPortfolio {

}
