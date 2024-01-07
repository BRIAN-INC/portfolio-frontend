import { Component } from '@angular/core';
import { Skill } from '../../models/landing.model';
import {
  technologiesDev,
  technologiesData,
} from '../../data/technologies.data';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  public technologiesDev: Skill[] = technologiesDev;
  public technologiesData: Skill[] = technologiesData;
}
