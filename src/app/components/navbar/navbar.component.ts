import { NavbarService } from './../../services/navbar.service';
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
  isExpanded = false;
  isScrolled = false;
  // Data
  submenusPortfolio: Submenu[] = [];
  submenusDocs: Submenu[] = [];
  submenusGitHub: Submenu[] = [];
  submenusLinkeIn: Submenu[] = [];
  gitHubUrl: string = 'https://github.com/kiridepapel/';
  linkedInUrl: string = 'https://www.linkedin.com/in/kiridepapel/';

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {
    this.loadSubmenusProfile();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition > 1) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
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
    this.isExpanded = !this.isExpanded;
    this.navbarService.clearActiveButton();
  }
}
