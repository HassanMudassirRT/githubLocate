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
import { GithubService } from '../shared/services/github';
import { Repository } from '../shared/interfaces';

@Component({
  selector: 'app-view-repo',
  standalone: true,
  imports: [
    PaginatorModule,
    ProgressSpinnerModule,
    IconFieldModule,
    InputIconModule,
  ],
  templateUrl: './view-repo.html',
})
export class ViewRepo {
  username = input.required<string>();

  protected paginatorState$ = new BehaviorSubject<PaginatorState>({
    first: 0,
    rows: 10,
  });

  totalRecords = signal(0);
  loading = signal(true);
  error = signal(false);

  public repos = signal<Repository[]>([]);

  protected rowsPerPageOptions = computed(() => {
    const total = this.totalRecords();
    const options = [10, 30, 50, 100];
    if (total > 0 && total < options[0]) {
      return [total, ...options];
    }
    return options;
  });

  private githubService = inject(GithubService);

  constructor() {
    effect(() => {
      const currentUsername = this.username();
      if (!currentUsername) return;

      combineLatest([this.paginatorState$])
        .pipe(
          switchMap(() => this.githubService.getUserDetails(currentUsername)),
          switchMap((userDetails) => {
            this.totalRecords.set(userDetails.public_repos);

            const state = this.paginatorState$.value;
            const page = (state.first ?? 0) / (state.rows ?? 10) + 1;
            const perPage = state.rows ?? 10;
            return this.githubService.getUserRepos(
              currentUsername,
              perPage,
              page
            );
          }),
          catchError((err) => {
            this.loading.set(false);
            this.error.set(true);
            return EMPTY;
          })
        )
        .subscribe((repos) => {
          this.repos.set(repos);
          this.loading.set(false);
        });
    });
  }

  onPageChange(event: PaginatorState) {
    this.paginatorState$.next(event);
  }
}
