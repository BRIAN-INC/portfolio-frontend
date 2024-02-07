import { Component } from '@angular/core';
import { Skill } from '../../models/landing.model';
import { SkillComponent } from '../../components/skill/skill.component';
import { skillsDatabases, skillsFrameworks, skillsKnowledges, skillsLanguages } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  public skillsLanguages: Skill[] = skillsLanguages;
  public skillsDatabases: Skill[] = skillsDatabases;
  public skillsFrameworks: Skill[] = skillsFrameworks;
  public skillsKnowledges: Skill[] = skillsKnowledges;
}
