import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private state: boolean = false;
  private isScrollEnabled = true;
  private activeButtonId: string | null = null;

  // Navbar
  setNavbarState(state: boolean): void {
    if (state === false) this.clearActiveButton();
    this.state = state;
  }

  getNavbarState(): boolean {
    return this.state;
  }

  // Scroll
  public disableScrollListener(): void {
    this.isScrollEnabled = false;
  }

  public enableScrollListener(): void {
    this.isScrollEnabled = true;
  }

  public isScrollListenerEnabled(): boolean {
    return this.isScrollEnabled;
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
