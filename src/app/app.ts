import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast'; 
import { Navbar, Footer } from './components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, ToastModule],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  constructor(private primeng: PrimeNG) {}

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
