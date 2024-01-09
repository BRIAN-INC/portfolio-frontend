import { Injectable } from '@angular/core';
import { MatDialogConfig } from '@angular/material/dialog';
import { ResponseType } from '../models/general.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';

interface CustomSnackbarData {
  type: string;
  icon: string;
  action: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  horizontalPos: MatSnackBarHorizontalPosition = 'right';
  verticalPos: MatSnackBarVerticalPosition = 'bottom';

  constructor(private snackBar: MatSnackBar) {}

  public createDialogConfig(
    width: string,
    height: string,
    disableClose?: boolean,
    closeOnNavigation?: boolean,
    data?: any
  ): MatDialogConfig {
    const config = new MatDialogConfig();
    config.disableClose = disableClose || false;
    config.autoFocus = true;
    config.closeOnNavigation = closeOnNavigation || false;
    config.width = width || '1080px';
    config.height = height || '650px';
    config.enterAnimationDuration = 300;
    config.exitAnimationDuration = 300;
    config.data = data || null;
    return config;
  }

  // Snackbar: Abrir o cerrar
  public openCustomSnackbar(message: string, type: ResponseType): void {
    let data: CustomSnackbarData = {
      type: type,
      icon: '',
      action: 'Cerrar',
    };
    data = this.selectTypeOfSnackBar(data);
    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      horizontalPosition: this.horizontalPos,
      verticalPosition: this.verticalPos,
      duration: 3000,
      data: {
        message: message,
        action: data.action,
        icon: data.icon,
        snackBar: this.snackBar,
      },
      panelClass: [data.type],
    });
  }
  selectTypeOfSnackBar(data: CustomSnackbarData): CustomSnackbarData {
    switch (data.type) {
      // Basic
      case ResponseType.SUCCESS:
        data.type = 'success-snackbar';
        data.icon = 'done';
        data.action = 'Hecho';
        return data;
      case ResponseType.INFO:
        data.type = 'info-snackbar';
        data.icon = 'info';
        data.action = 'Hecho';
        return data;
      case ResponseType.WARN:
        data.type = 'warn-snackbar';
        data.icon = 'error';
        data.action = 'Hecho';
        return data;
      case ResponseType.ERROR:
        data.type = 'error-snackbar';
        data.icon = 'warning';
        data.action = 'Cerrar';
        return data;
      case ResponseType.FAVORITE:
        data.type = 'favorite-snackbar';
        data.icon = 'favorite';
        data.action = 'Hecho';
        return data;
      default:
        data.type = 'success-snackbar';
        data.icon = 'done';
        return data;
    }
  }
  public closeCustomSnackbar(): void {
    this.snackBar.dismiss();
  }
}
