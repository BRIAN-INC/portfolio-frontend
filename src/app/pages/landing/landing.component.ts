import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../components/home/home.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { TechnologiesComponent } from '../../components/technologies/technologies.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    TechnologiesComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {}
