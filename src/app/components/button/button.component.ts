import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Submenu } from '../../models/submenu.model';
import { NavbarService } from '../../services/navbar.service';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  // Input variables
  private id: string = '';
  // * Button: Decoration
  @Input() icon: string = '';
  public marginRightIcon: string = '10px';
  @Input() text?: string;
  @Input() type?: string;
  @Input() padding?: string;
  @Input() borderRadius?: string;
  @Input() color?: string;
  @Input() backgroundColor?: string;
  @Input() sizeDesktop?: string;
  @Input() sizeMobile?: string;
  @Input() fontWeight?: string = '500';
  // * Button: Usability
  @Input() pointer?: boolean = true;
  @Input() uri: string = '';
  @Input() disabled: boolean = false;
  @Input() blank: boolean = false;
  @Input() submenus: Submenu[] = [];
  @Input() dialog?: any = null;
  @Input() dialogConfig?: MatDialogConfig = undefined;
  // CSS Variables
  hasBorder: boolean = false;
  borderColor: string = '';
  // SCSS Variables
  public showHoverAnimWidth: number = 1040;
  // My variables
  public haveSubmenus: boolean = false;
  public havePreviewImg: boolean = false;
  public isDialogButton: boolean = false;
  public animationClass: string = '';
  private hideSubmenuTimer: any;
  private screenWidth: number = window.innerWidth;

  constructor(
    private navbarService: NavbarService,
    private matDialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.id) this.id = Math.random().toString(32).slice(2);
    this.initializeVariables();
    this.selectColors();
    this.defineIfHaveData();
  }

  public calculateFontSize(isSubmenu: boolean): string {
    const isMobile = !this.isDesktop();
    if (isSubmenu) {
      return isMobile
        ? Number(this.sizeDesktop!.slice(0, -2)) - 1 + 'px'
        : Number(this.sizeMobile!.slice(0, -2)) - 2 + 'px';
    } else {
      return isMobile ? this.sizeMobile! : this.sizeDesktop!;
    }
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

  public changeNavbarState(newState: boolean): void {
    this.navbarService.setNavbarState(newState);
  }

  public showSubmenus(desde: string): void {
    if (this.getWindowWidth <= this.showHoverAnimWidth) return; // Celular

    this.navbarService.clearActiveButton();
    this.navbarService.setActiveButton(this.id);

    if (this.hideSubmenuTimer) clearTimeout(this.hideSubmenuTimer);

    this.animationClass = 'show';
  }

  public hideSubmenus(desde: string): void {
    if (this.isButtonActive()) {
      if (
        this.getWindowWidth <= this.showHoverAnimWidth ||
        !this.isButtonActive()
      )
        return; // Celular

      if (this.animationClass != '') this.hideAnimation();
    }
  }

  private hideAnimation(): void {
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
    return this.getWindowWidth > this.showHoverAnimWidth;
  }

  get getWindowWidth(): number {
    this.screenWidth = window.innerWidth;
    return this.screenWidth;
  }

  public navigate(uri: string): void {
    if (!uri) return;

    this.hideSubmenus('navigate');
    this.navbarService.setNavbarState(false);

    if (this.blank) {
      window.open(uri, '_blank');
    } else {
      if (uri.startsWith('#')) {
        window.location.href = uri;
      } else {
        this.router.navigateByUrl(uri);
      }
    }
  }

  public openDialog(component: any, dialogConfig: MatDialogConfig): void {
    this.navbarService.disableScrollListener();

    const dialogRef = this.matDialog.open(component, dialogConfig);

    dialogRef.afterOpened().subscribe(() => {
      this.navbarService.enableScrollListener();
    });
  }

  private initializeVariables(): void {
    if (!this.type) this.type = 'personalized';
    if (!this.text) this.marginRightIcon = '0px';
    if (!this.borderRadius) this.borderRadius = '2.5px';
    if (!this.color) this.color = '#c6d3e2';
    if (!this.backgroundColor) this.backgroundColor = 'transparent';
    if (!this.sizeDesktop) this.sizeDesktop = '13px';
    if (!this.sizeMobile) this.sizeMobile = '12px';
  }

  private defineIfHaveData(): void {
    this.haveSubmenus = this.submenus.length > 0;
    this.havePreviewImg = this.submenus.some((submenu) => {
      return submenu.previewImg != null;
    });
    this.isDialogButton =
      this.dialog !== undefined &&
      this.dialog !== null &&
      this.dialogConfig !== undefined &&
      this.dialogConfig !== null;
  }

  private selectColors(): void {
    switch (this.type) {
      case 'transparent':
        this.backgroundColor = 'transparent';
        if (!this.padding) this.padding = '3px 20px 3px 5px';
        break;
      case 'primary':
        this.color = '#fff';
        this.backgroundColor = 'rgb(20, 164, 255)';
        this.hasBorder = true;
        this.borderColor = 'rgb(20, 164, 255)';
        if (!this.padding) this.padding = '5px 20px';
        break;
      case 'secondary':
        this.backgroundColor = 'rgb(32, 44, 70)';
        this.hasBorder = true;
        this.borderColor = 'rgb(51, 70, 112)';
        if (!this.padding) this.padding = '5px 20px';
        break;
      case 'tertiary':
        this.color = 'rgb(233, 233, 233)';
        this.backgroundColor = 'rgb(37, 41, 47)';
        this.hasBorder = true;
        this.borderColor = 'rgb(37, 41, 47)';
        if (!this.padding) this.padding = '5px 20px';
        break;
      default:
        break;
    }
  }
}
