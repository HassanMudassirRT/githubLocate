import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader } from './loader';

describe('Loader', () => {
  let component: Loader;
  let fixture: ComponentFixture<Loader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Label message');
    fixture.detectChanges();
  });

  it('should create Loader', () => {
    expect(component).toBeTruthy();
  });
});
