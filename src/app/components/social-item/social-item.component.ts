import { Component, Input } from '@angular/core';
import { Social } from '../../models/landing.model';

@Component({
  selector: 'app-social-item',
  standalone: true,
  imports: [],
  templateUrl: './social-item.component.html',
  styleUrl: './social-item.component.scss',
})
export class SocialItemComponent {
  @Input() social!: Social;
  @Input() public tam: any = 54;
  @Input() public tamTablet: any = 42;

  public tabletSize: number = 1040;

  ngOnInit() {
    this.tam = this.tam + 'px';
    this.tamTablet = this.tamTablet + 'px';
  }

  public isDesktop(): boolean {
    return window.innerWidth > this.tabletSize;
  }
}
