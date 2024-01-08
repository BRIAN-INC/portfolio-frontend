import { Component } from '@angular/core';
import { socialData } from '../../data/contact.data';
import { SocialItemComponent } from '../../components/social-item/social-item.component';
import { HttpService } from '../../services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactDTO, Social } from '../../models/landing.model';

@Component({
  selector: 'app-contactDTO',
  standalone: true,
  imports: [SocialItemComponent, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class contactDTOComponent {
  public socialData: Social[] = socialData;
  public contactDTO: ContactDTO = new ContactDTO();

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.contactDTO.sendMeCopy = true;
    try {
      this.http.getSimple('/test').subscribe((data: any) => {
        console.log(data);
      });
    } catch (error) {
      console.log('error: ', error);
    }
  }

  public check() {
    this.contactDTO.sendMeCopy = !this.contactDTO.sendMeCopy;
  }
}
