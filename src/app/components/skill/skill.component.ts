import { Component, Input } from '@angular/core';
import { Skill } from '../../models/landing.model';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() public skill!: Skill;
  @Input() public tam: number = 54;
  @Input() public tamTablet: number = 48;
  @Input() public fontSize: number = 13;

  public tabletSize: number = 1040;

  public isDesktop(): boolean {
    return window.innerWidth > this.tabletSize;
  }
}
