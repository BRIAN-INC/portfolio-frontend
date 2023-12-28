import { MatDialogConfig } from '@angular/material/dialog';

// Posible options for submenu (obly one at a time is posible):
// In all cases is necesary set all required default variables for Button
//
// * 1. Default button
//   - No extra variables necesary
//
// * 2. Button with dialog (on click)
//   - Necesary extra variables: dialog (component), dialogConfig;
//
// * 3. Button with preview image (on hover):
//   - Necesary variables: previewImg;

export class Submenu {
  // Default variables for Button
  icon?: string = '';
  text?: string = '';
  shortDescription?: string = '';
  uri?: string = '';
  blank?: boolean = false;
  // Dialog
  dialog?: any = null;
  dialogConfig?: MatDialogConfig = undefined;
  // Preview image
  previewImg?: any = null;
}
