import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private activeButtonId: string | null = null;
  private state: boolean = true;
  private isScrollEnabled = true;

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
    this.state = state;
  }
  public getNavbarState(): boolean {
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
}
