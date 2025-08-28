import { Component, input, inject, effect, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, forkJoin, EMPTY, catchError, map, tap } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { RepoList, UserStats, UserSocials, UserAliases, UserBio, Loader, ErrorMessage } from '../../components';
import { GithubService } from '../../services/github';
import { CombinedUserData } from '../../interfaces';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AsyncPipe,
    ProgressSpinnerModule,
    CardModule,
    TagModule,
    ButtonModule,
    AvatarModule,
    DividerModule,
    RippleModule,
    RouterLink,
    RepoList,
    UserStats,
    UserSocials,
    UserAliases,
    UserBio,
    Loader,
    ErrorMessage
],
  templateUrl: './user.html',
})
export class User {
  username = input.required<string>();
  isLoading = signal(true);
  isError = signal<boolean>(false);

  combinedData$!: Observable<CombinedUserData>;

  private githubService = inject(GithubService);

  constructor() {
    effect(() => {
      this.isLoading.set(true);
      this.isError.set(false);

      this.combinedData$ = forkJoin({
        user: this.githubService.getUserDetails(this.username()),
        repos: this.githubService.getUserRepos(this.username()),
        socials: this.githubService.getUserSocials(this.username()),
      }).pipe(
        map((data) => {
          const userStats = [
            { label: 'Public Repos', value: data.user.public_repos },
            { label: 'Followers', value: data.user.followers },
            { label: 'Following', value: data.user.following },
            { label: 'Public Gists', value: data.user.public_gists },
          ];

          return {
            user: data.user,
            repos: data.repos.slice(0, 5),
            socials: [...data.socials, {url: data.user.html_url, provider: "GitHub"} ],
            userStats,
          };
        }),
        
        catchError((err) => {
          console.error('Failed to load user data:', err);
          this.isLoading.set(false);
          this.isError.set(true);
          
          return EMPTY;
        }),

        tap(() => { 
          console.log('TAG-001: User data loaded successfully');
          this.isLoading.set(false)}
        )
      );
    });
  }
}
