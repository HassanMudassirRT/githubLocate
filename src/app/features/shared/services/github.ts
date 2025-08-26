import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  DetailedUser,
  Repository,
  User,
  UserSearchResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private http = inject(HttpClient);
  // private apiUrl = 'https://api.github.com';

  // searchUsers(query: string): Observable<UserSearchResponse> {
  //   return this.http.get<UserSearchResponse>(`${this.apiUrl}/search/users?q=${query}`);
  // }

  // getUserDetails(username: string): Observable<DetailedUser> {
  //   return this.http.get<DetailedUser>(`${this.apiUrl}/users/${username}`);
  // }

  // getUserRepos(username: string): Observable<Repository[]> {
  //   return this.http.get<Repository[]>(`${this.apiUrl}/users/${username}/repos`);
  // }

  // getUserFollowers(username: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl}/users/${username}/followers`);
  // }

  // getUserFollowing(username: string): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.apiUrl}/users/${username}/following`);
  // }

  private apiUrl = 'http://localhost:3000';

  searchUsers(query: string): Observable<UserSearchResponse> {
    return this.http.get<UserSearchResponse>(
      `${this.apiUrl}/users?login_like=${query}`
    );
  }

  getUserDetails(username: string): Observable<DetailedUser> {
    return this.http.get<DetailedUser>(`${this.apiUrl}/erisa`);
  }

  getUserRepos(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.apiUrl}/repos`);
  }

  getUserFollowers(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/followers`);
  }

  getUserFollowing(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/following`);
  }
}
