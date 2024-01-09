import { trigger, transition, style, animate } from '@angular/animations';

export const snackBarAnimation = trigger('snackBarAnimation', [
  transition(':enter', [
    style({ transform: 'translateY(100%)', opacity: 0 }),
    animate(
      '200ms ease-out',
      style({ transform: 'translateY(0)', opacity: 1 })
    ),
  ]),
  transition(':leave', [
    animate(
      '200ms ease-in',
      style({ transform: 'translateY(100%)', opacity: 0 })
    ),
  ]),
]);
