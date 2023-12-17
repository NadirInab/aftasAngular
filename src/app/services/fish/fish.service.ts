import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FishService {
  private apiUrl = 'http://localhost:8080/api/fishes';

  constructor(private http: HttpClient) {}

  getFishes(): Observable<any[]> {
    return this.http.get<[]>(this.apiUrl);
  }

  addFish(fishData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, fishData);
  }
}
