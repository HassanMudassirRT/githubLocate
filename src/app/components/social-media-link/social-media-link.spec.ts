import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaLink } from './social-media-link';

describe('SocialMediaLink', () => {
  let component: SocialMediaLink;
  let fixture: ComponentFixture<SocialMediaLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
