import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private activeButtonId: string | null = null;

  setActiveButton(id: string): void {
    this.activeButtonId = id;
  }

  getActiveButton(): string | null {
    return this.activeButtonId;
  }

  clearActiveButton(): void {
    this.activeButtonId = null;
  }
}
