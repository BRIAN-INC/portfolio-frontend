import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import axios from 'axios';
import { environment } from '../../environments/environment.prod';

const urlUser = 'https://api.github.com/users/...';
const urlEvents = 'https://api.github.com/users/.../events';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  // Authentication
  private token!: string;
  private headers: any;
  // Data
  public response: any;
  public events: any;
  public length!: number;
  public user: any;

  constructor(private oauthService: OAuthService, private configService: ConfigService) {}

  public get getToken(): any {
    return this.token;
  }

  public async fetchTokenUsingPasswordFlow() {
    try {
      this.oauthService.configure({
        tokenEndpoint: 'https://github.com/login/oauth/access_token',
      });

      await this.oauthService.fetchTokenUsingPasswordFlow(
        environment.GITHUB_CLIENT_ID!,
        environment.GITHUB_CLIENT_SECRET!,
      );

      this.token = this.oauthService.getAccessToken();
      this.headers = {
        Authorization: 'Bearer ' + this.token,
      };
    } catch (error: any) {
      console.error(`Error (GithubService:fetchTokenUsingPasswordFlow()): ${error.message}`);
    }
  }

  public async getEventsRequest(username: string) {
    try {
      this.response = await axios.get(
        urlEvents.replace('...', username),
        this.headers
      );
      this.events = this.response.data;
      this.length = this.events.length;

      console.log('dev: ', environment.env);
      console.log('GITHUB_CLIENT_ID: ', environment.GITHUB_CLIENT_ID);
      console.log('GITHUB_CLIENT_SECRET: ', environment.GITHUB_CLIENT_SECRET);

      if (this.length == 0) {
        this.getUserRequest(username);
      }
    } catch (error: any) {
      console.error(`Error (GithubService:getEventsRequest()): ${error.message}`);

      if (error.response.status === 404) {
        this.length = -1;
      } else if (error.response.status === 403) {
        this.length = -2;
      }
    }
  }

  public async getUserRequest(username: string) {
    try {
      this.response = await axios.get(
        urlUser.replace('...', username),
        this.headers
      );
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
