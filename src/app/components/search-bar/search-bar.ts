import { Component, signal, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { FluidModule } from 'primeng/fluid';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  EMPTY,
} from 'rxjs';
import { Loader } from '../loader/loader';
import { UserSearchItem } from '../user-search-item/user-search-item';
import { GitHubService } from '../../services/github';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-search-bar',
  imports: [
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    TooltipModule,
    FluidModule,
    ReactiveFormsModule,
    UserSearchItem,
    Loader
  ],
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnInit {
  searchTerm = new FormControl('');
  isLoading = signal(false);
  hasSearched = signal(false);
  users = signal<User[]>([]);

  private githubService = inject(GitHubService);

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
        this.users.set(data.items);
        this.isLoading.set(false);
      });
  }
}
