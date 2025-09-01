import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { User } from './user';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('username', 'erisa');
    fixture.detectChanges();
  });

  it('should create User', () => {
    expect(component).toBeTruthy();
  });
});
