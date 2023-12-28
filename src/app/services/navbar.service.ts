import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private activeButtonId: string | null = null;
  private isNavbarActive: boolean = false;
  private isNavbarScrolled = true;

  // Buttons
  public setActiveButton(id: string): void {
    this.activeButtonId = id;
  }
  public getActiveButton(): string | null {
    return this.activeButtonId;
  }
  public clearActiveButton(): void {
    this.activeButtonId = null;
  }

  // Navbar
  public setNavbarState(state: boolean): void {
    if (state === false) this.clearActiveButton();
    this.isNavbarActive = state;
  }
  public getNavbarState(): boolean {
    return this.isNavbarActive;
  }

  // Scroll
  public disableScrollListener(): void {
    this.isNavbarScrolled = false;
  }
  public enableScrollListener(): void {
    this.isNavbarScrolled = true;
  }
  public isScrollListenerEnabled(): boolean {
    return this.isNavbarScrolled;
  }
}
