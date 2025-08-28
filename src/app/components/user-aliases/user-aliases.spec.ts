import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAliases } from './user-aliases';

describe('UserAliases', () => {
  let component: UserAliases;
  let fixture: ComponentFixture<UserAliases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAliases]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAliases);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
