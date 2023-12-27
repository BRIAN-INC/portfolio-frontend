import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.scss'
})
export class DocsComponent {

}
