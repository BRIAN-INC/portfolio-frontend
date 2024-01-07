import { Component } from '@angular/core';
import { skillsFrameworks, skillsKnowledges, skillsLanguages } from '../../data/landing.data';
import { Skill } from '../../models/landing.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  public skillsLanguages: Skill[] = skillsLanguages;
  public skillsFrameworks: Skill[] = skillsFrameworks;
  public skillsKnowledges: Skill[] = skillsKnowledges;
}
