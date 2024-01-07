import { Component } from '@angular/core';
import { Project } from '../../models/landing.model';
import { projectsData } from '../../data/projects.data';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  private projects: Project[] = projectsData;

  public get getProjects(): Project[] {
    return this.projects;
  }
}
