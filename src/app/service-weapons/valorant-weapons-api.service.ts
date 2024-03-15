import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValorantWeaponsApiService {

  private urlApi = 'https://valorant-api.com/v1/weapons';

  constructor(private http: HttpClient) { }

  getWeapons(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }

  getWeaponById(id: string): Observable<any> {
    const url = `${this.urlApi}/${id}`;
    return this.http.get<any>(url);
  }
  
}
