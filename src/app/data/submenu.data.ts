import { Submenu } from "../models/submenu.model";

export const submenusHomeData: Submenu[] = [
  {
    icon: 'fas fa-home',
    text: 'Home',
    shortDescription: 'Go to home',
    route: '/home',
    blank: false,
  },
  {
    icon: 'fas fa-user',
    text: 'About',
    shortDescription: 'Go to about',
    route: '/about',
    blank: false,
  },
  {
    icon: 'fas fa-code',
    text: 'Technologies',
    shortDescription: 'Go to technologies',
    route: '/technologies',
    blank: false,
  },
  {
    icon: 'fas fa-code',
    text: 'Projects',
    shortDescription: 'Go to projects',
    route: '/projects',
    blank: false,
  },
  {
    icon: 'fas fa-envelope',
    text: 'Contact',
    shortDescription: 'Go to contact',
    route: '/contact',
    blank: false,
  },
];

export const submenusProfileData: Submenu[] = [
  {
    icon: 'fas fa-user',
    text: 'Profile',
    shortDescription: 'Manage your profile',
    route: '/profile',
    blank: false,
  },
  {
    icon: 'fas fa-cog',
    text: 'Settings',
    shortDescription: 'Manage your settings',
    route: '/settings',
    blank: false,
  },
  {
    icon: 'fas fa-sign-out-alt',
    text: 'Logout',
    shortDescription: 'Logout from your account',
    route: '/logout',
    blank: false,
  },
];
