import { Component } from '@angular/core';
import { socialData } from '../../data/contact.data';
import { ContactDTO, Social } from '../../models/landing.model';
import { SocialItemComponent } from '../../components/social-item/social-item.component';
import { environment } from '../../../environments/environment-prod';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialItemComponent, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  public socialData: Social[] = socialData;
  public contact: ContactDTO = new ContactDTO();

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.contact.sendMeCopy = true;
    try {
      this.http.getSimple('/test').subscribe((data: any) => {
        console.log(data);
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  public check() {
    this.contact.sendMeCopy = !this.contact.sendMeCopy;
  }
}
