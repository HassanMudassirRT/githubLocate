import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DetailedUser,
  Repository,
  Social,
  User,
  UserSearchResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.github.com';

  searchUsers(query: string): Observable<UserSearchResponse> {
    return this.http.get<UserSearchResponse>(`${this.apiUrl}/search/users?q=${query}`);
  }

  getUserDetails(username: string): Observable<DetailedUser> {
    return this.http.get<DetailedUser>(`${this.apiUrl}/users/${username}`);
  }

  getUserRepos(username: string, perPage: number = 10, page: number = 1): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}/users/${username}/repos?per_page=${perPage}&page=${page}`);
  }

  getUserSocials(username: string): Observable<Social[]> {
    return this.http.get<Social[]>(`${this.apiUrl}/users/${username}/social_accounts`);
  }
}
