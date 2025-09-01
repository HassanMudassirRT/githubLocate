import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';

import { ViewRepo } from './view-repo';

describe('ViewRepo', () => {
  let component: ViewRepo;
  let fixture: ComponentFixture<ViewRepo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRepo],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRepo);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('username', 'erisa');
    fixture.detectChanges();
  });

  it('should create ViewRepo', () => {
    expect(component).toBeTruthy();
  });
});
