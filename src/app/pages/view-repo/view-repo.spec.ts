import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { of, defer, throwError } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { ViewRepo } from './view-repo';
import { GitHubService } from '../../services/github';
import { User as mockUser, Repo as mockRepos } from '../../mocks';

describe('ViewRepo', () => {
  let component: ViewRepo;
  let fixture: ComponentFixture<ViewRepo>;
  let githubService: jasmine.SpyObj<GitHubService>;

  beforeEach(async () => {
    const githubServiceSpy = jasmine.createSpyObj('GitHubService', [
      'getUserDetails',
      'getUserRepos',
    ]);

    await TestBed.configureTestingModule({
      imports: [ViewRepo],
      providers: [
        provideHttpClient(),
        { provide: GitHubService, useValue: githubServiceSpy },
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRepo);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GitHubService) as jasmine.SpyObj<GitHubService>;
    fixture.componentRef.setInput('username', 'erisa');
  });

  it('should create ViewRepo', () => {
    expect(component).toBeTruthy();
  });

  it('should load repos successfully', fakeAsync(() => {
    githubService.getUserDetails.and.returnValue(defer(() => Promise.resolve(mockUser)));
    githubService.getUserRepos.and.returnValue(defer(() => Promise.resolve(mockRepos)));

    fixture.detectChanges();

    expect(component.isLoading()).toBeTrue();

    tick();

    expect(component.totalRecords()).toBe(108);
    expect(component.repos()).toEqual(mockRepos);
    expect(component.isLoading()).toBeFalse();
    expect(component.isError()).toBeFalse();
    expect(githubService.getUserRepos).toHaveBeenCalledWith('erisa', 10, 1);
  }));

  it('should handle errors gracefully', fakeAsync(() => {
    githubService.getUserDetails.and.returnValue(throwError(() => new Error('fail')));
    githubService.getUserRepos.and.returnValue(of([]));

    fixture.detectChanges();
    tick();

    expect(component.isError()).toBeTrue();
    expect(component.isLoading()).toBeFalse();
    expect(component.repos()).toEqual([]);
  }));

  it('should fetch repos on page change', fakeAsync(() => {
    githubService.getUserDetails.and.returnValue(defer(() => Promise.resolve(mockUser)));
    githubService.getUserRepos.and.returnValue(defer(() => Promise.resolve(mockRepos)));

    fixture.detectChanges();
    tick();

    component.onPageChange({ first: 10, rows: 10 });
    tick();

    expect(githubService.getUserRepos).toHaveBeenCalledWith('erisa', 10, 2);
  }));

  it('should set the minimum number of rows properly', fakeAsync(() => {
   githubService.getUserDetails.and.returnValue(defer(() => Promise.resolve({...mockUser, public_repos: 5})));
  
   fixture.detectChanges();
   tick();
  
   expect(component.rowsPerPageOptions()).toContain(5);
  }));
});
