import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of, throwError, defer } from 'rxjs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { User } from './user';
import {
  User as mockUser,
  Repo as mockRepos,
  Social as mockSocials,
} from '../../mocks';
import { GitHubService } from '../../services/github';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;
  let githubService: jasmine.SpyObj<GitHubService>;

  beforeEach(async () => {
    const githubServiceSpy = jasmine.createSpyObj('GitHubService', [
      'getUserDetails',
      'getUserRepos',
      'getUserSocials',
    ]);

    await TestBed.configureTestingModule({
      imports: [User],
      providers: [
        provideHttpClient(),
        { provide: GitHubService, useValue: githubServiceSpy },
        provideRouter([]),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
    githubService = TestBed.inject(
      GitHubService
    ) as jasmine.SpyObj<GitHubService>;
  });

  it('should create User', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and combine user data on successful service calls', fakeAsync(() => {
    githubService.getUserDetails.and.returnValue(
      defer(() => Promise.resolve(mockUser))
    );
    githubService.getUserRepos.and.returnValue(
      defer(() => Promise.resolve(mockRepos))
    );
    githubService.getUserSocials.and.returnValue(
      defer(() => Promise.resolve(mockSocials))
    );

    fixture.componentRef.setInput('username', 'erisa');
    fixture.detectChanges();

    expect(component.isLoading()).toBeTrue;
    expect(component.isError()).toBeFalse;

    component.combinedData$.subscribe((data) => {
      expect(data.user).toEqual(mockUser);
      expect(data.repos.length).toBe(1);
      expect(data.repos).toEqual(mockRepos);
      expect(data.socials.length).toBe(2);
      expect(data.socials[1].provider).toBe('GitHub');
      expect(data.userStats.length).toBe(4);
      expect(data.userStats[0].value).toBe(mockUser.public_repos);
    });
  }));

  it('should handle errors gracefully and set isLoading and isError correctly', fakeAsync(() => {
    githubService.getUserDetails.and.returnValue(
      throwError(() => new Error('Service Error'))
    );
    githubService.getUserRepos.and.returnValue(of([]));
    githubService.getUserSocials.and.returnValue(of([]));

    fixture.componentRef.setInput('username', 'testuser');
    fixture.detectChanges();

    expect(component.isLoading()).toBeFalse;
    expect(component.isError()).toBeTrue;
  }));

  it('should re-trigger the effect when the username input changes', fakeAsync(() => {
    githubService.getUserDetails.and.returnValue(
      defer(() => Promise.resolve(mockUser))
    );
    githubService.getUserRepos.and.returnValue(
      defer(() => Promise.resolve(mockRepos))
    );
    githubService.getUserSocials.and.returnValue(
      defer(() => Promise.resolve(mockSocials))
    );
    fixture.componentRef.setInput('username', 'new-user');
    fixture.detectChanges();

    expect(component.isLoading()).toBeTrue;
    tick();

    expect(githubService.getUserDetails).toHaveBeenCalledWith('new-user');
    expect(component.isLoading()).toBeFalse;
    expect(component.isError()).toBeFalse;
  }));
});
