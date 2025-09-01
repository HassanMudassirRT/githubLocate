import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBio } from './user-bio';

describe('UserBio', () => {
  let component: UserBio;
  let fixture: ComponentFixture<UserBio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBio);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('bio', 'hello world');
    fixture.detectChanges();
  });

  it('should create UserBio', () => {
    expect(component).toBeTruthy();
  });
});
