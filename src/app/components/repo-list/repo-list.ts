import { Component, input } from '@angular/core';
import { Repository } from '../../interfaces';
import { RepoCard } from '../repo-card/repo-card';

@Component({
  selector: 'app-repo-list',
  imports: [RepoCard],
  templateUrl: './repo-list.html',
})
export class RepoList {
  repos = input.required<Repository[]>();
}
