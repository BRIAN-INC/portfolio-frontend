export class Project {
  img: string = '';
  alt: string = '';

  name: string = '';
  description: string = '';
  tags: string[] = [];
  skills: Skill[] = [];

  codeUrl?: string = '';
  demoUrl?: string = '';
}

export class Skill {
  name?: string = '';
  svg?: string = '';
}
