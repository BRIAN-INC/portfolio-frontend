import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private state: boolean = false;
  private activeButtonId: string | null = null;

  // Navbar
  setNavbarState(state: boolean): void {
    this.state = state;
  }

  getNavbarState(): boolean {
    return this.state;
  }

  // Buttons
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
