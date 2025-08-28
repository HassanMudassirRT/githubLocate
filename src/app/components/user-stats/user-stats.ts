import { Component, input } from '@angular/core';
import { UserStat } from '../../interfaces';

@Component({
  selector: 'app-user-stats',
  imports: [],
  templateUrl: './user-stats.html',
})
export class UserStats {
  stats = input.required<UserStat[]>();
}
