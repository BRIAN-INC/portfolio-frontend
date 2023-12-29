import { Component, OnDestroy, OnInit } from '@angular/core';
import axios from 'axios';
import { DateTime } from 'luxon';

class CommitGroup {
  year: number = 0;
  commits: number = 0;
}

const gitUser = 'kiridepapel';
const urlUser = `https://api.github.com/users/${gitUser}`;
const urlEvents = `https://api.github.com/users/${gitUser}/events`;

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit, OnDestroy {
  public response: any;
  public events: any;
  public length!: number;
  public commitsGroup: CommitGroup[] = [];
  public commitsData: any[] = [];
  public user: any;
  public updateIntervals: any[] = [];
  public percDiff: number = 0;

  async ngOnInit() {
    try {
      await this.getEvents();
      if (this.length > 0) {
        this.getCommitsGroup();
        this.fillCommitsData();
        this.startRealTimeUpdates();
      }
    } catch (error: any) {
      console.error(`Error: ${error.message}`);
    }
  }

  ngOnDestroy() {
    if (this.length > 0) {
      this.updateIntervals.forEach((interval) => clearInterval(interval));
    }
  }

  private async getEvents() {
    try {
      this.response = await axios.get(urlEvents);
      this.events = this.response.data;
      this.length = this.events.length;

      if (this.length == 0) {
        this.getUser();
      }
    } catch (error: any) {
      console.error(`Error: ${error.message}`);

      if (error.response.status === 404) {
        this.length = -1;
      } else if (error.response.status === 403) {
        this.length = -2;
      }
    }
  }

  private async getUser() {
    try {
      this.response = await axios.get(urlUser);
      this.user = this.response.data;
    } catch (error: any) {
      console.error(`Error: ${error.message}`);
    }
  }

  private getCommitsGroup() {
    if (this.response && this.response.status === 200) {
      const currentYear = DateTime.local().year;
      this.percDiff = 0;

      const startThisYear = DateTime.local(currentYear, 1, 1);
      const endThisYear = DateTime.local(currentYear, 12, 31);

      const startPastYear = DateTime.local(currentYear - 1, 1, 1);
      const endPastYear = DateTime.local(currentYear - 1, 12, 31);

      const commitsThisYear = this.events.filter(
        (event: any) =>
          event.type === 'PushEvent' &&
          startThisYear <= DateTime.fromISO(event.created_at) &&
          DateTime.fromISO(event.created_at) <= endThisYear
      );
      const commitsPastYear = this.events.filter(
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
      console.error(`Error: ${this.response?.status}`);
    }
  }

  private fillCommitsData() {
    let quantity = 3;

    if (this.events && this.events.length > 0) {
      const relevantCommits = this.events.filter(
        (event: any) => event.type != 'PublicEvent'
      );
      this.commitsData = relevantCommits.slice(0, quantity);
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
    // Crear un intervalo de actualización para cada evento
    this.commitsData.forEach((event: any) => {
      // Almacenar el tiempo inicial del evento
      const startTime = DateTime.fromISO(event.created_at);
      const interval = setInterval(() => {
        // Obtener la fecha actual y calcular el tiempo transcurrido
        const currentDateTime = DateTime.now();
        const elapsedTime = currentDateTime.diff(startTime, 'seconds').seconds;
        // Actualizar el evento con el tiempo transcurrido
        event.lastUpdateTime = this.formatRelativeDateTime(
          currentDateTime.toISO(),
          elapsedTime
        );
      }, 1000);
      // Almacenar el intervalo
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
