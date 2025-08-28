import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../interfaces';

@Component({
  selector: 'app-user-search-item',
  imports: [RouterLink],
  templateUrl: './user-search-item.html',
})
export class UserSearchItem {
  user = input.required<User>();
  first = input.required<boolean>();
}
