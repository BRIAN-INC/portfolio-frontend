import { Component } from '@angular/core';
import { SocialItemComponent } from '../social-item/social-item.component';
import { socialData } from '../../data/contact.data';
import { Social } from '../../models/landing.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialItemComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public socialData: Social[] = socialData;
}
