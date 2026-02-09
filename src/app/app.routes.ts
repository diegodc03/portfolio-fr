import { Routes } from '@angular/router';
import { PhotosPortfolio } from './pages/photos-portfolio/photos-portfolio';
import { CurriculumPortfolio } from './pages/curriculum-portfolio/curriculum-portfolio';

export const routes: Routes = [

    {
        path: 'softwareIng',
        component: CurriculumPortfolio
    },
    {
        path: 'photosPortfolio',
        component: PhotosPortfolio
    },
    {
        path: '',
        redirectTo: 'softwareIng',
        pathMatch: 'full'
    }

];
