import { NavbarService } from '../../services/navbar.service';
import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { Submenu } from '../../models/submenu.model';
import {
  submenusPortfolioData,
  submenusDocsData,
  submenusGitHubData,
  submenusLinkedInData,
} from '../../data/submenu.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled = false;
  // Data
  submenusPortfolio: Submenu[] = [];
  submenusDocs: Submenu[] = [];
  submenusGitHub: Submenu[] = [];
  submenusLinkeIn: Submenu[] = [];

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.loadSubmenusProfile();
  }

  public isNavbarExpanded(): boolean {
    return this.navbarService.getNavbarState() === true;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.navbarService.isScrollListenerEnabled()) return;

    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScrolled = scrollPosition > 1;
    console.log(this.isScrolled);
  }

  public navigate(url?: string): void {
    if (!url) return;
    window.location.href = url;
  }

  loadSubmenusProfile(): void {
    this.submenusPortfolio = submenusPortfolioData;
    this.submenusDocs = submenusDocsData;
    this.submenusGitHub = submenusGitHubData;
    this.submenusLinkeIn = submenusLinkedInData;
  }

  toggleMenu(): void {
    if (this.isNavbarExpanded())
      this.navbarService.setNavbarState(false);
    else
      this.navbarService.setNavbarState(true);
  }
}
