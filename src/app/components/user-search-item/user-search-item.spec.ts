import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchItem } from './user-search-item';

describe('UserSearchItem', () => {
  let component: UserSearchItem;
  let fixture: ComponentFixture<UserSearchItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSearchItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSearchItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
