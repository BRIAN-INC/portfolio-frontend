import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Submenu } from '../../models/submenu.model';
import { submenusDocsData, submenusPortfolioData } from '../../data/submenu.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public submenusPortfolio: Submenu[] = [];
  public submenusDocs: Submenu[] = [];

  ngOnInit(): void {
    this.submenusPortfolio = submenusPortfolioData;
    this.submenusDocs = submenusDocsData;
  }

  public navigate(url?: string): void {
    if (!url) return;
    window.location.href = url;
  }
}
