import { Project } from "../models/landing.model";

export const projectsData: Project[] = [
  {
    img: 'assets/imgs/project/fraxianime.webp',
    alt: 'Fraxi Anime Project',
    name: 'Fraxi Anime',
    description:
      'Clon funcional de JKAnime. Plataforma web de streaming de anime. Permite ver, buscar y descargar antiguos y nuevos animes.',
    tags: ['Frontend', 'Backend', 'Scraping'],
    skills: [
      {
        name: 'Spring Boot 3 - Java 17',
        svg: 'assets/svgs/framework/springboot.svg',
        // // url: '/#skills',
        // url: 'https://acortar.link/kiridepapel-springboot',
        // blank: true,
      },
      {
        name: 'JSoup',
        svg: 'assets/svgs/knowledge/jsoup.svg',
        // url: 'https://acortar.link/kiridepapel-jwt',
        // blank: true,
      },
      {
        name: 'Angular 17 - TypeScript 5',
        svg: 'assets/svgs/framework/angular.svg',
        // url: 'https://acortar.link/kiridepapel-angular',
        // blank: true,
      },
      {
        name: 'Tailwind',
        svg: 'assets/svgs/knowledge/tailwind.svg',
        // url: 'https://acortar.link/kiridepapel-tailwind',
        // blank: true,
      },
      {
        name: 'PostgreSQL',
        svg: 'assets/svgs/database/postgresql.svg',
        // url: 'https://acortar.link/kiridepapel-postgresql',
        // blank: true,
      },
    ],
    demoUrl: 'https://fraxianime.vercel.app',
    codeFrontUrl: 'https://github.com/Kiridepapel/fraxianime-frontend',
    codeBackUrl: 'https://github.com/Kiridepapel/fraxianime-backend',
  },
  {
    img: 'assets/imgs/project/monolithfood.webp',
    alt: 'Monolith Food Project',
    name: 'Monolith Food',
    description:
      'Aplicativo web de seguimiento nutricional. Permite registrar de alimentos, calcular de ingesta calórica, selección de objetivos, actividad física, etc.',
    tags: ['Frontend', 'Backend', 'JWT'],
    skills: [
      {
        name: 'Spring Boot 3 - Java 17',
        svg: 'assets/svgs/framework/springboot.svg',
        // // url: '/#skills',
        // url: 'https://acortar.link/kiridepapel-springboot',
        // blank: true,
      },
      {
        name: 'JWT',
        svg: 'assets/svgs/knowledge/jwt.svg',
        // url: 'https://acortar.link/kiridepapel-jwt',
        // blank: true,
      },
      {
        name: 'Angular 16 - TypeScript 5',
        svg: 'assets/svgs/framework/angular.svg',
        // url: 'https://acortar.link/kiridepapel-angular',
        // blank: true,
      },
      {
        name: 'SCSS',
        svg: 'assets/svgs/language/scss.svg',
        // url: 'https://acortar.link/kiridepapel-scss',
        // blank: true,
      },
      {
        name: 'PostgreSQL',
        svg: 'assets/svgs/database/postgresql.svg',
        // url: 'https://acortar.link/kiridepapel-postgresql',
        // blank: true,
      },
    ],
    demoUrl: 'https://monolithfood.vercel.app/login',
    codeFrontUrl: 'https://github.com/UNI-MONOLITH-FOOD/MonolithFoodFrontend',
    codeBackUrl: 'https://github.com/UNI-MONOLITH-FOOD/MonolithFoodApplication',
  },
];
