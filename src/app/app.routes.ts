import { HomeComponent } from './portfolio/pages/home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
];
