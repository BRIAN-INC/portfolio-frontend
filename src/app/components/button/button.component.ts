import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Submenu } from '../../models/submenu.model';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() icon: string = '';
  @Input() text: string = 'Button';
  @Input() type: string = 'transparent';
  @Input() padding: string = '3px 20px';
  @Input() url: string = '';
  @Input() disabled: boolean = false;
  @Input() blank: boolean = false;
  @Input() submenus: Submenu[] = [];
  public haveSubmenus: boolean = false;
  color: string = '';
  backgroundColor: string = '';
  hasBorder: boolean = false;
  borderColor: string = '';

  constructor() {}

  ngOnInit(): void {
    this.selectColors();
    this.defineIfHaveSubmenus();
  }

  public navigate(): void {
    // If url is '' or null, then do nothing
    if (!this.url) return;
    else if (this.blank) {
      window.open(this.url, '_blank');
    } else {
      window.location.href = this.url;
    }
  }

  private defineIfHaveSubmenus(): void {
    this.haveSubmenus = this.submenus.length > 0;
  }

  private selectColors(): void {
    switch (this.type) {
      case 'transparent':
        this.color = 'rgb(198, 211, 226)';
        this.backgroundColor = 'transparent';
        break;
      case 'primary':
        this.color = '#fff';
        this.backgroundColor = 'rgb(20, 164, 255)';
        this.hasBorder = true;
        this.borderColor = 'rgb(20, 164, 255)';
        break;
      case 'secondary':
        this.color = 'rgb(198, 211, 226)';
        this.backgroundColor = 'rgb(32, 44, 70)';
        this.hasBorder = true;
        this.borderColor = 'rgb(51, 70, 112)';
        break;
      case 'tertiary':
        this.color = 'rgb(233, 233, 233)';
        this.backgroundColor = 'rgb(37, 41, 47)';
        this.hasBorder = true;
        this.borderColor = 'rgb(37, 41, 47)';
        break;
      default:
        this.color = 'rgb(198, 211, 226)';
        this.backgroundColor = 'transparent';
        break;
    }
  }
}
