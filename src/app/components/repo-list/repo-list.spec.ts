import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoList } from './repo-list';
import repos from '../../mocks/repo';

describe('RepoList', () => {
  let component: RepoList;
  let fixture: ComponentFixture<RepoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoList);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('repos', repos);
    fixture.detectChanges();
  });

  it('should create RepoList', () => {
    expect(component).toBeTruthy();
  });
});
