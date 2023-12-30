import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../../environments/environment-prod';

const urlUser = 'https://api.github.com/users/...';
const urlEvents = 'https://api.github.com/users/.../events';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // Data
  public response: any;
  public events: any;
  public length!: number;
  public user: any;

  public async getEventsRequest(username: string) {
    try {
      this.response = await axios.get(urlEvents.replace('...', username));
      this.events = this.response.data;
      this.length = this.events.length;

      if (this.length == 0) {
        this.getUserRequest(username);
      }
    } catch (error: any) {
      console.error(
        `Error (GithubService:getEventsRequest()): ${error.message}`
      );
      if (error.response.status === 404) {
        this.length = -1;
      } else if (error.response.status === 403) {
        this.length = -2;
      }
    }
  }

  public async getUserRequest(username: string) {
    try {
      this.response = await axios.get(urlUser.replace('...', username));
      this.user = this.response.data;
    } catch (error: any) {
      console.error(`Error (GithubService:getUserRequest()): ${error.message}`);
    }
  }

  public get getResponse(): any {
    return this.response;
  }

  public get getEvents(): any {
    return this.events;
  }

  public get getLength(): number {
    return this.length;
  }

  public get getUser(): any {
    return this.user;
  }
}
