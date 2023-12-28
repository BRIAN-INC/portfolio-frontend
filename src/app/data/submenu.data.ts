import { CvComponent } from "../components/cv/cv.component";
import { Submenu } from "../models/submenu.model";
import { GlobalService } from "../services/global.service";

const globalService = new GlobalService(); // Instancia del servicio

// Por ahora se recomienda no poner más de 6 submenus,
// ya que se desborda del navbar en pantallas pequeñas

export const submenusPortfolioData: Submenu[] = [
  {
    icon: 'fas fa-home',
    text: 'Inicio',
    shortDescription: 'Go to home',
    uri: '#home',
    blank: false,
  },
  {
    icon: 'fa-solid fa-person-dots-from-line',
    text: 'Sobre mí',
    shortDescription: 'Go to about me',
    uri: '#about-me',
    blank: false,
  },
  {
    icon: 'fas fa-project-diagram',
    text: 'Proyectos',
    shortDescription: 'Go to projects',
    uri: '#projects',
    blank: false,
  },
  {
    icon: 'fas fa-code',
    text: 'Habilidades',
    shortDescription: 'Go to skills',
    uri: '#skills',
    blank: false,
  },
  {
    icon: 'fas fa-cogs',
    text: 'Tecnologías',
    shortDescription: 'Go to technologies',
    uri: '#technologies',
    blank: false,
  },
  {
    icon: 'fas fa-envelope',
    text: 'Contacto',
    shortDescription: 'Go to contact',
    uri: '#contact',
    blank: false,
  },
];

export const submenusDocsData: Submenu[] = [
  {
    icon: 'fa-solid fa-book',
    text: 'Monolith Food',
    shortDescription: 'Manage your nutrition',
    uri: '/docs',
    blank: false,
  },
];

export const submenusInfoData: Submenu[] = [
  {
    icon: 'fas fa-file-alt',
    text: 'CV',
    shortDescription: 'Watch my Curriculum Vitae',
    // uri: 'assets/files/cv.pdf',
    uri: 'https://drive.google.com/file/d/1zV5FcSlaJs0qscRKSNUE76ZUNtVYTs0A/view?usp=sharing',
    blank: true,
    dialog: CvComponent,
    dialogConfig: globalService.createDialogConfig(
      '600px',
      '80%',
    ),
  },
  {
    icon: 'fas fa-envelope',
    text: 'Email',
    shortDescription: 'Send me an email',
    uri: 'mailto:brian.uceda@hotmail.com',
    blank: false,
  },
  {
    icon: 'fab fa-whatsapp',
    text: 'WhatsApp',
    shortDescription: 'Send me a message on WhatsApp',
    uri: 'https://wa.me/924227432',
    blank: true,
  },
  {}, // Empty object to simulate a separator in the submenu list
  {
    icon: 'fa-brands fa-github-alt',
    text: 'GitHub',
    shortDescription: 'Go to my GitHub',
    uri: 'https://github.com/kiridepapel/',
    blank: true,
  },
  {
    icon: 'fa-brands fa-linkedin',
    text: 'LinkedIn',
    shortDescription: 'Go to my LinkedIn',
    uri: 'https://www.linkedin.com/in/kiridepapel/',
    blank: true,
  },
];

export const submenusGitHubData: Submenu[] = [
  {
    previewImg: 'assets/imgs/github-preview.webp',
  },
];

export const submenusLinkedInData: Submenu[] = [
  {
    previewImg: 'assets/imgs/linkedin-preview.webp',
  },
];
