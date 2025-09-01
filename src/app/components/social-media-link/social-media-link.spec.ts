import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaLink } from './social-media-link';

describe('SocialMediaLink', () => {
  let component: SocialMediaLink;
  let fixture: ComponentFixture<SocialMediaLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaLink],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaLink);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('url', 'https://github.com/');
    fixture.componentRef.setInput('provider', 'github');
    fixture.detectChanges();
  });

  it('should create SocialMediaLink', () => {
    expect(component).toBeTruthy();
  });
});
