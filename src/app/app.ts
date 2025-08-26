import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { Navbar, Footer } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
