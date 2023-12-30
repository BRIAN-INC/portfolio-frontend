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
  private quantityOfEvents = 4;
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
        this.getCommitsGroup();
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

  // Component functions
  private getCommitsGroup() {
    if (this.getResponse && this.getResponse.status === 200) {
      const currentYear = DateTime.local().year;
      this.percDiff = 0;

      const startThisYear = DateTime.local(currentYear, 1, 1);
      const endThisYear = DateTime.local(currentYear, 12, 31);

      const startPastYear = DateTime.local(currentYear - 1, 1, 1);
      const endPastYear = DateTime.local(currentYear - 1, 12, 31);

      const commitsThisYear = this.getEvents.filter(
        (event: any) =>
          event.type === 'PushEvent' &&
          startThisYear <= DateTime.fromISO(event.created_at) &&
          DateTime.fromISO(event.created_at) <= endThisYear
      );
      const commitsPastYear = this.getEvents.filter(
        (event: any) =>
          event.type === 'PushEvent' &&
          startPastYear <= DateTime.fromISO(event.created_at) &&
          DateTime.fromISO(event.created_at) <= endPastYear
      );

      const commitsThisYearCount = commitsThisYear.reduce(
        (total: number, event: any) => total + event.payload.size,
        0
      );
      const commitsPastYearCount = commitsPastYear.reduce(
        (total: number, event: any) => total + event.payload.size,
        0
      );

      this.percDiff =
        commitsPastYearCount === 0
          ? 100
          : ((commitsThisYearCount - commitsPastYearCount) /
              commitsPastYearCount) *
            100;

      if (this.percDiff === 100) {
        this.percDiff = Number(this.percDiff.toFixed(0));
      } else {
        this.percDiff = Number(this.percDiff.toFixed(2));
      }

      this.commitsGroup.push(
        {
          year: currentYear,
          commits: commitsThisYearCount,
        },
        {
          year: currentYear - 1,
          commits: commitsPastYearCount,
        }
      );
    } else {
      console.error(
        `Error (AboutMeComponent:getCommitsGroup()): ${this.getResponse?.status}`
      );
    }
  }

  private fillCommitsData() {
    if (this.getEvents && this.getEvents.length > 0) {
      const relevantCommits = this.getEvents.filter(
        (event: any) => event.type != 'PublicEvent'
      );
      this.commitsData = relevantCommits.slice(0, this.quantityOfEvents);
    }
  }

  public convertApiToGitHub(apiurlEvents: string) {
    return apiurlEvents
      .replace('api.', '')
      .replace('/repos', '')
      .replace('/commits', '/commit');
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

      // Configurar el intervalo para futuras actualizaciones
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
