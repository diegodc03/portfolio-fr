import { Component } from '@angular/core';
import { ExpansionPanelFather } from "../../components/photos-portfolio/expansion-panel-father/expansion-panel-father";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-photos-portfolio',
  imports: [ExpansionPanelFather, RouterLink],
  templateUrl: './photos-portfolio.html',
  styleUrl: './photos-portfolio.css',
})
export class PhotosPortfolio {

}
