import {
  Component,
  input,
  inject,
  signal,
  effect,
  computed,
} from '@angular/core';
import {
  EMPTY,
  BehaviorSubject,
  switchMap,
  catchError,
  combineLatest,
} from 'rxjs';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { RepoCard, ErrorMessage, Loader } from '../../components';
import { GitHubService } from '../../services/github';
import { Repository } from '../../interfaces';

@Component({
  selector: 'app-view-repo',
  standalone: true,
  imports: [
    PaginatorModule,
    ProgressSpinnerModule,
    IconFieldModule,
    InputIconModule,
    RepoCard,
    ErrorMessage,
    Loader,
  ],
  templateUrl: './view-repo.html',
})
export class ViewRepo {
  username = input.required<string>();
  totalRecords = signal(0);
  isLoading = signal(true);
  isError = signal(false);
  repos = signal<Repository[]>([]);

  protected paginatorState$ = new BehaviorSubject<PaginatorState>({
    first: 0,
    rows: 10,
  });

  rowsPerPageOptions = computed(() => {
    const total = this.totalRecords();
    const options = [10, 30, 50, 100];
    if (total > 0 && total < options[0]) {
      return [total, ...options];
    }
    return options;
  });

  private githubService = inject(GitHubService);

  constructor() {
    effect(() => {
      this.isLoading.set(true);
      this.isError.set(false);

      combineLatest([this.paginatorState$])
        .pipe(
          switchMap(() => this.githubService.getUserDetails(this.username())),
          switchMap((userDetails) => {
            this.totalRecords.set(userDetails.public_repos);

            const state = this.paginatorState$.value;
            const page = (state.first ?? 0) / (state.rows ?? 10) + 1;
            const perPage = state.rows ?? 10;
            return this.githubService.getUserRepos(
              this.username(),
              perPage,
              page
            );
          }),
          catchError((err) => {
            this.isLoading.set(false);
            this.isError.set(true);
            return EMPTY;
          })
        )
        .subscribe((repos) => {
          this.repos.set(repos);
          this.isLoading.set(false);
        });
    });
  }

  onPageChange(event: PaginatorState) {
    this.paginatorState$.next(event);
  }
}
