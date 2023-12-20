import { Component, Input } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { Submenu } from '../../models/submenu.model';
import { NavbarService } from '../../services/navbar.service';
import { environment } from '../../../environments/environment.prod';

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

  constructor(
    private viewportScroller: ViewportScroller,
    private navbarService: NavbarService
  ) {}

  public ngOnInit(): void {
    if (!this.id) this.id = Math.random().toString(32).slice(2);
    this.selectColors();
    this.defineIfHaveData();
  }

  public toggleSubmenus(): void {
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
  }

  public showSubmenus(): void {
    if (this.screenWidth <= this.showHoverAnimWidth) return; // Celular
    this.navbarService.clearActiveButton();
    this.navbarService.setActiveButton(this.id);
    if (this.hideSubmenuTimer) {
      clearTimeout(this.hideSubmenuTimer);
    }
    this.animationClass = 'show';
  }

  public hideSubmenus(): void {
    if (this.screenWidth <= this.showHoverAnimWidth) return; // Celular
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

  public isButtonActive(): boolean {
    return this.navbarService.getActiveButton() === this.id;
  }

  public isDesktop(): boolean {
    return this.screenWidth > this.showHoverAnimWidth;
  }

  public navigate(uri: string): void {
    if (!uri) return;
    this.hideSubmenus();

    if (this.blank) window.open(uri, '_blank');
    else {
      // if (uri.startsWith('#')) {
      //   this.goToSectionWithScroll(uri);
      // }
      window.location.href = uri;
    }
  }

  // private goToSectionWithScroll(uri: string): void {
  //   // console.log('bar-height: ');
  //   if (!this.isDesktop()) return;

  //   this.hideSubmenuTimer = setTimeout(() => {
  //     const section = document.querySelector(uri);
  //     let navbarHeight: number = 80;

  //     if (section) {
  //       const offset = section.getBoundingClientRect().top - navbarHeight;
  //       this.viewportScroller.scrollToPosition([0, offset]);
  //     }
  //   }, 50);
  // }

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
