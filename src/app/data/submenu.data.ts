import { Submenu } from "../models/submenu.model";

// Por ahora se recomienda no poner más de 6 submenus,
// ya que se desborda del navbar en pantallas pequeñas

export const submenusPortfolioData: Submenu[] = [
  {
    icon: 'fas fa-home',
    text: 'Home',
    shortDescription: 'Go to home',
    uri: '#home',
    blank: false,
  },
  {
    icon: 'fa-solid fa-person-dots-from-line',
    text: 'About',
    shortDescription: 'Go to about',
    uri: '#about',
    blank: false,
  },
  {
    icon: 'fas fa-code',
    text: 'Skills',
    shortDescription: 'Go to skills',
    uri: '#skills',
    blank: false,
  },
  {
    icon: 'fas fa-cogs',
    text: 'Technologies',
    shortDescription: 'Go to technologies',
    uri: '#technologies',
    blank: false,
  },
  {
    icon: 'fas fa-project-diagram',
    text: 'Projects',
    shortDescription: 'Go to projects',
    uri: '#projects',
    blank: false,
  },
  {
    icon: 'fas fa-envelope',
    text: 'Contact',
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
    uri: '/docs/monolith-food',
    blank: false,
  },
];
