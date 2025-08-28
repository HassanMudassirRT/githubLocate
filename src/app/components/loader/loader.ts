import { Component, input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-loader',
  imports: [ProgressSpinnerModule],
  templateUrl: './loader.html',
})
export class Loader {
  label = input.required<string>();
}
