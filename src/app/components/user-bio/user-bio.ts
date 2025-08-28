import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-bio',
  imports: [],
  templateUrl: './user-bio.html',
})
export class UserBio {
  bio = input.required<string>();
}
