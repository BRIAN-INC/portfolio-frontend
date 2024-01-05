import { Component } from '@angular/core';
import { Project } from '../../models/landing.model';
import { projectsData } from '../../data/landing.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projects: Project[] = projectsData;

  public get getProjects(): Project[] {
    return this.projects;
  }
}
