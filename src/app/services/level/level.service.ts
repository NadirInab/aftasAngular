// level.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LevelService {
  private apiUrl = 'http://localhost:8080/api/levels';

  constructor(private http: HttpClient) {}

  getLevels(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
