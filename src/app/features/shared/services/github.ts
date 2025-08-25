import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserSearchResponse } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:3000';

  searchUsers(query: string): Observable<UserSearchResponse> {

    return this.http.get<UserSearchResponse>(`${this.baseUrl}/users?login_like=${query}`);
  }
}
