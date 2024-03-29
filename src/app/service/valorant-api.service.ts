// valorant-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantApiService {

  private urlApi = 'https://valorant-api.com/v1/agents';

  constructor(private http: HttpClient) { }

  getAgents(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
