import { Component } from '@angular/core';
import { socialData } from '../../data/contact.data';
import { ContactDTO, Social } from '../../models/landing.model';
import { SocialItemComponent } from '../../components/social-item/social-item.component';
import { environment } from '../../../environments/environment-prod';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ResponseDTO, ResponseType } from '../../models/general.model';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SocialItemComponent, HttpClientModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private api = environment.BACKEND_URL;

  public socialData: Social[] = socialData;

  public rq: ContactDTO = new ContactDTO();
  public myForm!: FormGroup;

  constructor(
    private globalService: GlobalService,
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.reactiveForm();
  }

  public reactiveForm() {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      sendMeCopy: [true, Validators.required],
    });
  }

  public check() {
    this.rq.sendMeCopy = !this.rq.sendMeCopy;
  }

  public async send() {
    const url = this.api + '/send-email';

    this.rq.title = this.myForm.get('title')?.value;
    this.rq.email = this.myForm.get('email')?.value;
    this.rq.message = this.myForm.get('message')?.value;
    this.rq.sendMeCopy = this.myForm.get('sendMeCopy')?.value;

    await this.http.post<ResponseDTO>(url, this.rq).subscribe({
      next: (response: ResponseDTO) => {
        this.globalService.openCustomSnackbar(
          response.message,
          ResponseType.SUCCESS
        );
        console.log(response);
      },
      error: (response: any) => {
        if (response.error.statusCode == 422) {
          this.globalService.openCustomSnackbar(
            response.error.message,
            ResponseType.WARN
          );
        } else {
          this.globalService.openCustomSnackbar(
            "Ocurrió un error interno!",
            ResponseType.ERROR
          );
        }
        console.log(response);
      },
    });
  }

  public reset() {
    this.myForm.reset();
  }
}
