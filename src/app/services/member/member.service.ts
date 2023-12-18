// member.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:8080/api/members';

  constructor(private http: HttpClient) {}

  addMember(memberData: any): Observable<any> {
    return this.http.post(this.apiUrl, memberData);
  }
  getMember(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  deleteMember(memberId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${memberId}`);
  }
}
