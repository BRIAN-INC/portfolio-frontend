import { NavbarService } from '../../services/navbar.service';
import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { Submenu } from '../../models/submenu.model';
import {
  submenusDocsData,
  submenusInfoData,
  submenusPortfolioData,
} from '../../data/submenu.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public submenusPortfolio: Submenu[] = [];
  public submenusDocs: Submenu[] = [];
  public submenusInfo: Submenu[] = [];
  public isDialogCache: { [key: string]: boolean } = {};

  public constructor(
    private navbarService: NavbarService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.submenusPortfolio = submenusPortfolioData;
    this.submenusDocs = submenusDocsData;
    this.submenusInfo = submenusInfoData;
  }

  public navigate(url?: string, target?: boolean): void {
    if (!url) return;

    if (target) window.open(url, '_blank');
    else window.location.href = url;
  }

  public openDialog(component: any, dialogConfig: MatDialogConfig): void {
    this.navbarService.disableScrollListener();

    const dialogRef = this.dialog.open(component, dialogConfig);

    dialogRef.afterOpened().subscribe(() => {
      this.navbarService.enableScrollListener();
    });
  }

  public isDialogButton(item: any): boolean {
    const key = item.dialog ? 'true' : 'false';

    // Verificar si ya se ha calculado antes
    if (this.isDialogCache[key] !== undefined) {
      return this.isDialogCache[key];
    }

    // Calcular el resultado y almacenarlo en la caché
    const result =
      item.dialog !== undefined &&
      item.dialog !== null &&
      item.dialogConfig !== undefined &&
      item.dialogConfig !== null;

    this.isDialogCache[key] = result;

    return result;
  }
}
