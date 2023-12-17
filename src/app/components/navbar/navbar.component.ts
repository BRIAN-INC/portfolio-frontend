import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { Submenu } from '../../models/submenu.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatDialogModule, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isExpanded = false;
  isScrolled = false;
  // Data
  submenusProfile: Submenu[] = [];
  gitHubUrl: string = 'https://github.com/kiridepapel';
  linkedInUrl: string =
    'https://www.linkedin.com/in/brian-uceda-hirata-880b68237/';

  constructor(private dialog: MatDialog) {}

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

  loadSubmenusProfile(): void {
    this.submenusProfile = [
      {
        icon: 'fas fa-user',
        text: 'Profile',
        shortDescription: 'Manage your profile',
        route: '/profile',
        blank: false,
      },
      {
        icon: 'fas fa-cog',
        text: 'Settings',
        shortDescription: 'Manage your settings',
        route: '/settings',
        blank: false,
      },
      {
        icon: 'fas fa-sign-out-alt',
        text: 'Logout',
        shortDescription: 'Logout from your account',
        route: '/logout',
        blank: false,
      },
    ];
  }

  toggleMenu(): void {
    this.isExpanded = !this.isExpanded;
  }
}
