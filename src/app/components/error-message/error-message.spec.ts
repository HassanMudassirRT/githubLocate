import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessage } from './error-message';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('ErrorMessage', () => {
  let component: ErrorMessage;
  let fixture: ComponentFixture<ErrorMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessage],
      providers: [provideAnimationsAsync()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessage);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('message', 'Error message');
    fixture.detectChanges();
  });

  it('should create ErrorMessage', () => {
    expect(component).toBeTruthy();
  });
});
