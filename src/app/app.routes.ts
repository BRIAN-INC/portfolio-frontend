import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { DocsComponent } from './pages/docs/docs.component';

export const routes: Routes = [
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'docs', component: DocsComponent },
];
