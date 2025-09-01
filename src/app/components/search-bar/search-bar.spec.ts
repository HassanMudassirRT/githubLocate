import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBar } from './search-bar';
import { provideHttpClient } from '@angular/common/http';

describe('SearchBar', () => {
  let component: SearchBar;
  let fixture: ComponentFixture<SearchBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBar],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SearchBar', () => {
    expect(component).toBeTruthy();
  });
});
