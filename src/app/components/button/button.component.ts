import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() type: string = 'transparent';
  color: string = '';
  backgroundColor: string = '';
  hasBorder: boolean = false;
  borderColor: string = '';
  @Input() padding: string = '3px 20px';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.selectColors();
  }

  selectColors(): void {
    switch (this.type) {
      case 'transparent':
        this.color = 'rgb(198, 211, 226)';
        this.backgroundColor = 'transparent';
        this.hasBorder = false;
        this.borderColor = 'transparent';
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
      default:
        this.color = 'rgb(198, 211, 226)';
        this.backgroundColor = 'transparent';
        this.hasBorder = false;
        this.borderColor = 'transparent';
        break;
    }
  }
}
