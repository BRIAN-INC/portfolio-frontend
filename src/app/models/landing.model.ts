export class Project {
  img: string = '';
  alt: string = '';

  name: string = '';
  description: string = '';
  tags: string[] = [];
  skills: Skill[] = [];

  codeFrontUrl?: string = '';
  codeBackUrl?: string = '';
  demoUrl?: string = '';
}

export class Skill {
  name?: string = '';
  svg?: string = '';
  url?: string = '';
  blank?: boolean = false;
}

export class Social {
  name: string = '';
  svg: string = '';
  url: string = '';
  bgColor?: string = '';
}

export class ContactDTO {
  title: string = '';
  email: string = '';
  message: string = '';
  sendMeCopy: boolean = true;
}
