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
        svg: 'assets/svgs/framework/spring.svg',
      },
      {
        name: 'Java',
        svg: 'assets/svgs/language/java.svg',
      },
      {
        name: 'Angular',
        svg: 'assets/svgs/framework/angular.svg',
      },
      {
        name: 'TypeScript',
        svg: 'assets/svgs/language/typescript.svg',
      },
      {
        name: 'JWT',
        svg: 'assets/svgs/knowledge/jwt.svg',
      },
      {
        name: 'PostgreSQL',
        svg: 'assets/svgs/knowledge/postgresql.svg',
      },
    ],

    demoUrl: 'https://monolithfood.vercel.app/login',
    codeUrl: 'https://github.com/orgs/UNI-MONOLITH-FOOD/repositories',
  },
];
