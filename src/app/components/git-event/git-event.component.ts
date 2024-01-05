import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-git-event',
  standalone: true,
  imports: [],
  templateUrl: './git-event.component.html',
  styleUrl: './git-event.component.scss',
})
export class GitEventComponent {
  @Input() public gitUser!: string;
  @Input() public event: any;

  constructor() {}

  public modifyRepoName(repoName: string, index: number) {
    return repoName.split('/')[index];
  }

  public modifyUrl(apiurlEvents: string) {
    return apiurlEvents
      .replace('api.', '')
      .replace('/repos', '')
      .replace('/commits', '/commit');
  }

  public copyUrl(url: string) {
    navigator.clipboard.writeText(url);
    console.log('URL copied to clipboard');
  }

  public getOrgUrl(apiurlEvents: string) {
    let repoUrl = this.modifyUrl(apiurlEvents);
    let orgNameIndex = repoUrl.lastIndexOf('/');
    let orgUrl = repoUrl.substring(0, orgNameIndex);

    let gitName = this.gitUser;
    let orgName = orgUrl.substring(orgUrl.lastIndexOf('/') + 1);

    // Primera letra en minuscula siempre
    orgName = orgName.charAt(0).toUpperCase() + orgName.slice(1);
    gitName = gitName.charAt(0).toUpperCase() + gitName.slice(1);

    if (orgName == gitName) {
      return (orgUrl += '?tab=repositories');
    }

    return orgUrl;
  }

  public removeEventOnString(event: string) {
    return event.replace('Event', '');
  }
}
