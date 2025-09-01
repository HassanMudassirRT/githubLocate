import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { SearchBar } from './search-bar';
import { GitHubService } from '../../services/github';
import { User } from '../../interfaces/user';

describe('SearchBar', () => {
  let component: SearchBar;
  let fixture: ComponentFixture<SearchBar>;
  let githubService: GitHubService;

  const mockUsers: User[] = [
    {
      login: 'testuser1',
      id: 1,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: false,
      score: 0,
    },
    {
      login: 'testuser2',
      id: 2,
      node_id: '',
      avatar_url: '',
      gravatar_id: '',
      url: '',
      html_url: '',
      followers_url: '',
      following_url: '',
      gists_url: '',
      starred_url: '',
      subscriptions_url: '',
      organizations_url: '',
      repos_url: '',
      events_url: '',
      received_events_url: '',
      type: '',
      site_admin: false,
      score: 0,
    },
  ];

  beforeEach(async () => {
    const githubServiceSpy = jasmine.createSpyObj('GitHubService', [
      'searchUsers',
    ]);

    await TestBed.configureTestingModule({
      imports: [SearchBar],
      providers: [
        provideHttpClient(),
        { provide: GitHubService, useValue: githubServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchBar);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GitHubService);
    fixture.detectChanges();
  });

  it('should create SearchBar', () => {
    expect(component).toBeTruthy();
  });

  it('should clear users and reset hasSearched when the search term is empty', fakeAsync(() => {
    component.users.set(mockUsers);

    component.searchTerm.setValue('');
    tick(501); 

    expect(component.users()).toEqual([]);
    expect(component.hasSearched()).toBe(false);
  }));

  it('should update users signal and set loading state correctly on successful search', fakeAsync(() => {
    (githubService.searchUsers as jasmine.Spy).and.returnValue(
      of({ items: mockUsers, total_count: mockUsers.length })
    );

    component.searchTerm.setValue('test');
    
    tick(501);

    expect(githubService.searchUsers).toHaveBeenCalledWith('test');
    expect(component.users()).toEqual(mockUsers);
    expect(component.isLoading()).toBe(false);
    expect(component.hasSearched()).toBe(true);
  }));

  it('should not call searchUsers if the search term is the same as the previous one', fakeAsync(() => {
  
    (githubService.searchUsers as jasmine.Spy).and.returnValue(
      of({ items: mockUsers, total_count: mockUsers.length })
    );
    component.searchTerm.setValue('test');
    tick(501);

    component.searchTerm.setValue('test');
    tick(501);

    expect(githubService.searchUsers).toHaveBeenCalledTimes(1);
  }));

  it('should handle search error and reset loading state', fakeAsync(() => {
    (githubService.searchUsers as jasmine.Spy).and.returnValue(
      throwError(() => new Error('API Error'))
    );

    component.searchTerm.setValue('error');

    tick(501);

    expect(component.users()).toEqual([]);
    expect(component.isLoading()).toBe(false);
    expect(component.hasSearched()).toBe(true);
  }));

  it('should not call searchUsers until the debounce time has passed', fakeAsync(() => {
    (githubService.searchUsers as jasmine.Spy).and.returnValue(
      of({ items: [], total_count: 0 })
    );

    // When a search term is set but the debounce time has not passed
    component.searchTerm.setValue('angular');
    tick(250);
    // Then the service shouldn't have  been called
    expect(githubService.searchUsers).not.toHaveBeenCalled();

    // But when the remaining debounce time passes
    tick(251);

    // Then the service should have been called
    expect(githubService.searchUsers).toHaveBeenCalledTimes(1);
  }));
});
