import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class CompetitionService {
  private baseUrl = 'http://localhost:8080/api/competitions';

  constructor(private http : HttpClient) { }

  getCompetition(): Observable<any> {
   return this.http.get(`${this.baseUrl}/competition`)
  }

  createCompetition(competitionData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.baseUrl}/competition`, competitionData, { headers });
  }


  deleteCompetition(competitionId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/competition/${competitionId}`);
  }
}
