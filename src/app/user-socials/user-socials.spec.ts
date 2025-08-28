import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocials } from './user-socials';

describe('UserSocials', () => {
  let component: UserSocials;
  let fixture: ComponentFixture<UserSocials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSocials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSocials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
