import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchItem } from './user-search-item';
import { provideRouter } from '@angular/router';

describe('UserSearchItem', () => {
  let component: UserSearchItem;
  let fixture: ComponentFixture<UserSearchItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSearchItem],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(UserSearchItem);
    component = fixture.componentInstance;
    const user = {
      login: 'Erisa',
      id: 14004943,
      node_id: 'MDQ6VXNlcjE0MDA0OTQz',
      avatar_url: 'https://avatars.githubusercontent.com/u/14004943?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/Erisa',
      html_url: 'https://github.com/Erisa',
      followers_url: 'https://api.github.com/users/Erisa/followers',
      following_url:
        'https://api.github.com/users/Erisa/following{/other_user}',
      gists_url: 'https://api.github.com/users/Erisa/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/Erisa/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/Erisa/subscriptions',
      organizations_url: 'https://api.github.com/users/Erisa/orgs',
      repos_url: 'https://api.github.com/users/Erisa/repos',
      events_url: 'https://api.github.com/users/Erisa/events{/privacy}',
      received_events_url: 'https://api.github.com/users/Erisa/received_events',
      type: 'User',
      site_admin: false,
      score: 1,
    };
    fixture.componentRef.setInput('user', user);
    fixture.componentRef.setInput('first', true);
    fixture.detectChanges();
  });

  it('should create UserSearchItem', () => {
    expect(component).toBeTruthy();
  });
});
