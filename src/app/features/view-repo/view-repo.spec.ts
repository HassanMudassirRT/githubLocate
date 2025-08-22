import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRepo } from './view-repo';

describe('ViewRepo', () => {
  let component: ViewRepo;
  let fixture: ComponentFixture<ViewRepo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRepo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRepo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
