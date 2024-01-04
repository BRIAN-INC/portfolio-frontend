import { GithubService } from './../../services/github.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

class CommitGroup {
  year: number = 0;
  commits: number = 0;
}

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  private gitUser = 'kiridepapel';
  private quantityOfEvents = 5;
  // Information received and calculated from GitHub API
  public commitsData: any[] = [];
  public commitsGroup: CommitGroup[] = [];
  // Don't touch this
  public updateIntervals: any[] = [];
  public percDiff: number = 0;
  public isLoading: boolean = true;

  constructor(private githubService: GithubService) {}

  async ngOnInit() {
    try {
      await this.githubService.getEventsRequest(this.gitUser);

      if (this.getLength > 0) {
        this.fillCommitsData();
        this.startRealTimeUpdates();
      }
    } catch (error: any) {
      console.error(`Error (AboutMeComponent:ngOnInit()): ${error.message}`);
    } finally {
      this.isLoading = false;
    }
  }

  ngOnDestroy() {
    if (this.getLength > 0) {
      this.updateIntervals.forEach((interval) => clearInterval(interval));
    }
  }

  public changeTab(index: number): void {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabBodies = document.querySelectorAll('.tab-body');

    tabButtons.forEach((button) => button.classList.remove('active'));
    tabBodies.forEach((body) => {
      body.classList.remove('active');
      body.scrollTop = 0;
    });

    tabButtons[index].classList.add('active');
    tabBodies[index].classList.add('active');
  }

  // GitHub user to show
  public get getGitUser(): string {
    return this.gitUser;
  }

  public set setGitUser(gitUser: string) {
    this.gitUser = gitUser;
  }

  // Quantity of events to show
  public get getQuantityOfEvents(): number {
    return this.quantityOfEvents;
  }

  public set setQuantityOfEvents(quantityOfEvents: number) {
    this.quantityOfEvents = quantityOfEvents;
  }

  // Information of the service
  public get getResponse(): any {
    return this.githubService.getResponse;
  }

  public get getEvents(): any {
    return this.githubService.getEvents;
  }

  public get getLength(): number {
    return this.githubService.getLength;
  }

  public get getUser(): any {
    return this.githubService.getUser;
  }

  private fillCommitsData() {
    if (this.getEvents && this.getEvents.length > 0) {
      const relevantCommits = this.getEvents.filter(
        (event: any) => event.type != 'PublicEvent'
      );

      this.commitsData = relevantCommits.slice(0, this.quantityOfEvents);
    }
  }

  public modifyRepoName(repoName: string, index: number) {
    return repoName.split('/')[index];
  }

  public modifyUrl(apiurlEvents: string) {
    return apiurlEvents
      .replace('api.', '')
      .replace('/repos', '')
      .replace('/commits', '/commit');
  }

  public getOrgUrl(apiurlEvents: string) {
    let repoUrl = this.modifyUrl(apiurlEvents);
    let orgNameIndex = repoUrl.lastIndexOf('/');
    let orgUrl = repoUrl.substring(0, orgNameIndex);

    let gitName = this.getGitUser;
    let orgName = orgUrl.substring(orgUrl.lastIndexOf('/') + 1);

    // Primera letra en minuscula siempre
    orgName = orgName.charAt(0).toUpperCase() + orgName.slice(1);
    gitName = gitName.charAt(0).toUpperCase() + gitName.slice(1);

    if (orgName == gitName) {
      return (orgUrl += '?tab=repositories');
    }
    // } else {
    //   return 'https://github.com/orgs/' + orgName + '/repositories';
    // }

    return orgUrl;
  }

  public removeEventOnString(event: string) {
    return event.replace('Event', '');
  }

  private startRealTimeUpdates() {
    this.commitsData.forEach((event: any) => {
      const startTime = DateTime.fromISO(event.created_at);

      // Definir la función de actualización
      const updateEventTime = () => {
        const currentDateTime = DateTime.now();
        const elapsedTime = currentDateTime.diff(startTime, 'seconds').seconds;
        event.lastUpdateTime = this.formatRelativeDateTime(
          currentDateTime.toISO(),
          elapsedTime
        );
      };

      // Ejecutar la función de actualización de inmediato
      updateEventTime();

      // Configurar el intervalo para futuras actualizaciones cada segundo
      const interval = setInterval(updateEventTime, 1000);
      this.updateIntervals.push(interval);
    });
  }

  private formatRelativeDateTime(
    dateTimeString: string,
    elapsedSeconds: number
  ): string {
    const eventDateTime = DateTime.fromISO(dateTimeString);
    const updatedDateTime = eventDateTime.plus({ seconds: elapsedSeconds });

    let relativeTime = updatedDateTime.toRelative({
      base: DateTime.now(),
      locale: 'en',
    });

    if (!relativeTime!.includes('ago')) {
      relativeTime = relativeTime?.replace('in ', '') + ' ago';
    }

    return relativeTime!;
  }
}
