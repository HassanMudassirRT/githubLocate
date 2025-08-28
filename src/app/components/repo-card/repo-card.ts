import { Component, input } from '@angular/core';
import { Repository } from '../../interfaces';

@Component({
  selector: 'app-repo-card',
  imports: [],
  templateUrl: './repo-card.html',
})
export class RepoCard {
  repo = input.required<Repository>();
}
