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
  @Input() uri: string = '';
  @Input() disabled: boolean = false;
  @Input() blank: boolean = false;
  @Input() submenus: Submenu[] = [];
  color: string = '';
  backgroundColor: string = '';
  hasBorder: boolean = false;
  borderColor: string = '';
  // My variables
  public showHoverAnimWidth: number = 1040;
  public haveSubmenus: boolean = false;
  public havePreviewImg: boolean = false;
  public animationClass: string = '';
  private hideSubmenuTimer: any;
  public screenWidth: number = window.innerWidth;

  constructor(private navbarService: NavbarService) {}

  public ngOnInit(): void {
    if (!this.id) this.id = Math.random().toString(32).slice(2);
    this.selectColors();
    this.defineIfHaveData();
    // console.log('this id (' + this.text + '): ' + this.id);
  }

  public toggleSubmenus(): void {
    if (this.navbarService.getActiveButton() === this.id) {
      this.hideAnimation();
    } else {
      if (this.animationClass == 'show') {
        this.hideAnimation();
      } else {
        this.navbarService.setActiveButton(this.id);
        this.showSubmenus('toggleSubmenus');
      }
    }
  }

  public showSubmenus(desde: string): void {
    // console.log('---------');
    // console.log(
    //   'showSubmenus(' + desde + '): ' + this.navbarService.getActiveButton()
    // );
    if (this.screenWidth <= this.showHoverAnimWidth) return; // Celular
    // console.log('pasó el if');
    this.navbarService.clearActiveButton();
    this.navbarService.setActiveButton(this.id);
    if (this.hideSubmenuTimer) {
      clearTimeout(this.hideSubmenuTimer);
    }
    this.animationClass = 'show';
    // console.log(
    //   'terminó el showSubmenus(): ' + this.navbarService.getActiveButton()
    // );
  }

  public hideSubmenus(desde: string): void {
    if (this.isButtonActive()) {
      // console.log(
      //   'hideSubmenus(' + desde + '): ' + this.navbarService.getActiveButton()
      // );
      // console.log('entrando');
      if (this.screenWidth <= this.showHoverAnimWidth || !this.isButtonActive())
        return; // Celular
      // console.log('logró entrar');
      if (this.animationClass != '') {
        this.hideAnimation();
      }
    }
  }

  private hideAnimation(): void {
    // Oculta progresivamente el submenu
    this.navbarService.clearActiveButton();
    this.hideSubmenuTimer = setTimeout(() => {
      this.animationClass = 'hide';
      this.hideSubmenuTimer = setTimeout(() => {
        this.animationClass = '';
      }, 100);
    }, 50);
    // console.log(
    //   'final de hideSubmenus(): ' + this.navbarService.getActiveButton()
    // );
    // console.log('---------');
  }

  public isButtonActive(): boolean {
    return this.navbarService.getActiveButton() === this.id;
  }

  public isDesktop(): boolean {
    return this.screenWidth > this.showHoverAnimWidth;
  }

  public navigate(uri: string): void {
    if (!uri) return;
    this.hideSubmenus('navigate');

    if (this.blank) window.open(uri, '_blank');
    else {
      window.location.href = uri;
    }
  }

  private defineIfHaveData(): void {
    this.haveSubmenus = this.submenus.length > 0;
    this.havePreviewImg = this.submenus.some((submenu) => {
      return submenu.previewImg != null;
    });
  }

  private selectColors(): void {
    switch (this.type) {
      case 'transparent':
        this.color = 'rgb(198, 211, 226)';
        this.backgroundColor = 'transparent';
        this.padding = '3px 20px 3px 5px';
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
