import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;
  let htmlElement: HTMLElement;

  beforeEach(async () => {
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string | null => key in store ? store[key] : null,
      setItem: (key: string, value: string) => store[key] = `${value}`,
      removeItem: (key: string) => delete store[key],
      clear: () => store = {}
    };
    Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

    htmlElement = document.documentElement;

    await TestBed.configureTestingModule({
      imports: [Navbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set dark mode on initialization if localStorage has "1"', () => {
    localStorage.setItem('darkMode', '1');
    component.ngOnInit();

    expect(component.isDarkMode()).toBe(true);
    expect(htmlElement.classList.contains('my-app-dark')).toBe(true);
  });

  it('should not set dark mode on initialization if localStorage has "0"', () => {
    localStorage.setItem('darkMode', '0');
    component.ngOnInit();

    expect(component.isDarkMode()).toBe(false);
    expect(htmlElement.classList.contains('my-app-dark')).toBe(false);
  });

  it('should set dark mode based on system preference if no localStorage value exists', () => {
    localStorage.clear();
    const matchMediaSpy = spyOn(window, 'matchMedia').and.returnValue({
      matches: true,
    } as any);
    component.ngOnInit();

    expect(component.isDarkMode()).toBe(true);
    expect(htmlElement.classList.contains('my-app-dark')).toBe(true);
    expect(matchMediaSpy).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
  });

  it('should toggle to dark mode, update the signal, and set localStorage to "1"', () => {
    component.isDarkMode.set(false);
    htmlElement.classList.remove('my-app-dark');
    component.toggleDarkMode();

    expect(component.isDarkMode()).toBe(true);
    expect(htmlElement.classList.contains('my-app-dark')).toBe(true);
    expect(localStorage.getItem('darkMode')).toBe('1');
  });

  it('should toggle to light mode, update the signal, and set localStorage to "0"', () => {
    component.isDarkMode.set(true);
    htmlElement.classList.add('my-app-dark');
    component.toggleDarkMode();

    expect(component.isDarkMode()).toBe(false);
    expect(htmlElement.classList.contains('my-app-dark')).toBe(false);
    expect(localStorage.getItem('darkMode')).toBe('0');
  });
});
