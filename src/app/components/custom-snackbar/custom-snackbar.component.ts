import { Component, Inject } from '@angular/core';
import { snackBarAnimation } from './custom-snackbar.animations';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-custom-snackbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './custom-snackbar.component.html',
  styleUrl: './custom-snackbar.component.scss',
  animations: [snackBarAnimation],
})
export class CustomSnackbarComponent {
  snackbarRef?: MatSnackBarRef<CustomSnackbarComponent>;

  constructor(
    private globalService: GlobalService,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}

  closeCustomSnackbar(): void {
    this.globalService.closeCustomSnackbar();
  }
}
