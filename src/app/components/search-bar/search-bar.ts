import { Component, signal, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FluidModule } from 'primeng/fluid';

import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  EMPTY,
} from 'rxjs';
import { GithubService } from '../../services/github';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-search-bar',
  imports: [
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    TooltipModule,
    ProgressSpinnerModule,
    FluidModule,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnInit {
  searchTerm = new FormControl('');
  isLoading = signal(false);
  hasSearched = signal(false);
  users = signal<User[]>([]);

  private githubService = inject(GithubService);

  ngOnInit(): void {
    this.searchTerm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((term: string | null) => {
          if (!term) {
            this.users.set([]);
            this.hasSearched.set(false);
            return EMPTY;
          }
          this.hasSearched.set(true);
          this.isLoading.set(true);
          return this.githubService.searchUsers(term).pipe(
            catchError(() => {
              this.isLoading.set(false);
              this.users.set([]);
              
              return EMPTY;
            })
          );
        })
      )
      .subscribe((data) => {
        const filteredData = data.items.filter((user) =>
          user.login
            .toLowerCase()
            .includes(this.searchTerm.value?.toLowerCase() || '')
        );
        this.users.set(filteredData);
        this.isLoading.set(false);
      });
  }
}
