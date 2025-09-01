import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSocials } from './user-socials';
import { Social } from '../../interfaces';

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
    const socials: Social[] = [{url: 'https://github.com/', provider: 'github'}];
    fixture.componentRef.setInput('socials', socials);
    fixture.detectChanges();
  });

  it('should create UserSocials', () => {
    expect(component).toBeTruthy();
  });
});
