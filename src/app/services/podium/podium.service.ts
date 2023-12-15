import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PodiumService  {
  // protected baseUrl = environment.API_BASE_URL ;
  protected baseUrl = 'http' ;

  constructor(private http : HttpClient) { }

  getPodium(): Observable<any> {
   return this.http.get(`${this.baseUrl}/podium`)
  }

  createPodium(podiumData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/podium`, podiumData, { headers });
  }

  updatePodium(podiumId: number, podiumData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(`${this.baseUrl}/podium/${podiumId}`, podiumData, { headers });
  }

  deletePodium(podiumId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/podium/${podiumId}`);
  }
}
