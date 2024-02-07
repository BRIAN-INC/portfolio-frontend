import { Project } from "../models/landing.model";

export const projectsData: Project[] = [
  {
    img: 'assets/imgs/project/monolithfood.webp',
    alt: 'Monolith Food Project',

    name: 'Monolith Food',
    description:
      'Aplicativo web de seguimiento nutricional. Permite registrar de alimentos, calcular de ingesta calórica, selección de objetivos, actividad física, etc.',
    tags: ['Frontend', 'Backend', 'JWT'],
    skills: [
      {
        name: 'Spring Boot',
        svg: 'assets/svgs/framework/springboot.svg',
        // // url: '/#skills',
        // url: 'https://acortar.link/kiridepapel-springboot',
        // blank: true,
      },
      {
        name: 'Java',
        svg: 'assets/svgs/language/java.svg',
        // url: 'https://acortar.link/kiridepapel-java',
        // blank: true,
      },
      {
        name: 'Angular',
        svg: 'assets/svgs/framework/angular.svg',
        // url: 'https://acortar.link/kiridepapel-angular',
        // blank: true,
      },
      {
        name: 'TypeScript',
        svg: 'assets/svgs/language/typescript.svg',
        // url: 'https://acortar.link/kiridepapel-typescript',
        // blank: true,
      },
      {
        name: 'JWT',
        svg: 'assets/svgs/knowledge/jwt.svg',
        // url: 'https://acortar.link/kiridepapel-jwt',
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
    codeUrl: 'https://github.com/orgs/UNI-MONOLITH-FOOD/repositories',
  },
];
