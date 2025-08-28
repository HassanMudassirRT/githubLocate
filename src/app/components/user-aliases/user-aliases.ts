import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-aliases',
  imports: [],
  templateUrl: './user-aliases.html',
})
export class UserAliases {
  name = input<string | null>('');
  login = input.required<string>();
}
