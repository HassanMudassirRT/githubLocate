import { Component, input, inject, effect, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable, forkJoin, EMPTY, catchError, map } from 'rxjs';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { SocialMediaLink } from '../../components/social-media-link/social-media-link';
import { GithubService } from '../../services/github';
import { CombinedUserData } from '../../interfaces';
import { RepoCard } from "../../components/repo-card/repo-card";

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
    SocialMediaLink,
    RepoCard
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

      const userObservables = {
        user: this.githubService.getUserDetails(this.username()),
        repos: this.githubService.getUserRepos(this.username()),
        socials: this.githubService.getUserSocials(this.username()),
      };

      this.combinedData$ = forkJoin(userObservables).pipe(
        map((data) => ({
          user: data.user,
          repos: data.repos.slice(0, 5),
          socials: data.socials,
        })),

        catchError((err) => {
          console.error('Failed to load user data:', err);
          this.isLoading.set(false);
          this.isError.set(true);

          return EMPTY;
        })
      );

      this.combinedData$.subscribe(() => {
        this.isLoading.set(false);
      });
    });
  }
}
