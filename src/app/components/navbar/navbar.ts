import { Component, signal, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule],
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {
  router = inject(Router);
  isDarkMode = signal(false);

  ngOnInit() {
    const element = document.documentElement;

    const stored = localStorage.getItem('darkMode');
    if (stored === '1') {
      element.classList.add('my-app-dark');
      this.isDarkMode.set(true);
      return;
    }
    if (stored === '0') {
      element.classList.remove('my-app-dark');
      this.isDarkMode.set(false);
      return;
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      element.classList.add('my-app-dark');
      this.isDarkMode.set(true);
    }
  }

  toggleDarkMode() {
    const element = document.documentElement;
    element.classList.toggle('my-app-dark');
    this.isDarkMode.set(element.classList.contains('my-app-dark'));

    localStorage.setItem('darkMode', this.isDarkMode() ? '1' : '0');
  }
}
