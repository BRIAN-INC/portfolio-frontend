import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../components/home/home.component';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [NavbarComponent, HomeComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss'
})
export class DocsComponent {

}
