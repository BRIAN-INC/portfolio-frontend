import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Submenu } from '../../models/submenu.model';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  // Angular variables
  private id: string = '';
  @Input() icon: string = '';
  @Input() text: string = 'Button';
  @Input() type: string = 'transparent';
  @Input() padding: string = '3px 20px';
  @Input() url: string = '';
  @Input() disabled: boolean = false;
  @Input() blank: boolean = false;
  @Input() submenus: Submenu[] = [];
  color: string = '';
  backgroundColor: string = '';
  hasBorder: boolean = false;
  borderColor: string = '';
  // My variables
  public haveSubmenus: boolean = false;
  public animationClass: string = '';
  private hideSubmenuTimer: any;
  public screenWidth: number = window.innerWidth;

  constructor(private navbarService: NavbarService) {}

  public ngOnInit(): void {
    if (!this.id) this.id = Math.random().toString(32).slice(2);
    this.selectColors();
    this.defineIfHaveSubmenus();
  }

  public toggleSubmenus(): void {
    console.log('antes: ' + this.isButtonActive());
    if (this.navbarService.getActiveButton() === this.id) {
      this.hideAnimation();
    } else {
      if (this.animationClass == 'show') {
        this.hideAnimation();
      } else {
        this.navbarService.setActiveButton(this.id);
        this.showSubmenus();
      }
    }
    console.log('despues: ' + this.isButtonActive());
  }

  public showSubmenus(): void {
    if (this.screenWidth <= 920) return; // Celular
    this.navbarService.setActiveButton(this.id);
    if (this.hideSubmenuTimer) {
      clearTimeout(this.hideSubmenuTimer);
    }
    this.animationClass = 'show';
  }

  public hideSubmenus(): void {
    if (this.screenWidth <= 920) return; // Celular
    if (this.animationClass != '') {
      this.hideAnimation();
    }
  }

  private hideAnimation(): void {
    // Limpia el boton activo del service
    this.navbarService.clearActiveButton();
    // Oculta progresivamente el submenu
    this.hideSubmenuTimer = setTimeout(() => {
      this.animationClass = 'hide';
      this.hideSubmenuTimer = setTimeout(() => {
        this.animationClass = '';
      }, 100);
    }, 50);
  }

  isButtonActive(): boolean {
    return this.navbarService.getActiveButton() === this.id;
  }

  public navigate(): void {
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
