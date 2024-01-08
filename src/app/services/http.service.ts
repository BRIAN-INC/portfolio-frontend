import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment-prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private backendUrl = environment.BACKEND_URL;

  constructor(private http: HttpClient) {}

  // * Get
  getSimple<T>(uri: string, params?: any): Observable<T> {
    const httpParams = new HttpParams({ fromObject: params });
    return this.http.get<T>(this.backendUrl + uri, { params: httpParams });
  }
}
