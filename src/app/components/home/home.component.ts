import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public download() {
    const pdfUrl = 'assets/pdfs/CV_Brian_Uceda.pdf';
    const link = document.createElement('a');

    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'CV_Brian_Uceda.pdf';

    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
