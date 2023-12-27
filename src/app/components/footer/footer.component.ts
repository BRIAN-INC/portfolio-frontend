import { Component } from '@angular/core';
import { Submenu } from '../../models/submenu.model';
import {
  submenusDocsData,
  submenusInfoData,
  submenusPortfolioData,
} from '../../data/submenu.data';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public submenusPortfolio: Submenu[] = [];
  public submenusDocs: Submenu[] = [];
  public submenusInfo: Submenu[] = [];

  constructor() {}

  ngOnInit(): void {
    this.submenusPortfolio = submenusPortfolioData;
    this.submenusDocs = submenusDocsData;
    this.submenusInfo = submenusInfoData;
  }

  public navigate(url?: string, target?: boolean): void {
    if (!url) return;

    if (target) window.open(url, '_blank');
    else window.location.href = url;
  }
}
