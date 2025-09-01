import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCard } from './repo-card';
import repo from '../../mocks/repo';

describe('RepoCard', () => {
  let component: RepoCard;
  let fixture: ComponentFixture<RepoCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoCard],
    }).compileComponents();

    fixture = TestBed.createComponent(RepoCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('repo', repo);
    fixture.detectChanges();
  });

  it('should create RepoCard', () => {
    expect(component).toBeTruthy();
  });
});
