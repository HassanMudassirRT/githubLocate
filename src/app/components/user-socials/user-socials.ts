import { Component, input } from '@angular/core';
import { SocialMediaLink } from '../social-media-link/social-media-link';
import { Social } from '../../interfaces';

@Component({
  selector: 'app-user-socials',
  imports: [SocialMediaLink],
  templateUrl: './user-socials.html',
})
export class UserSocials {
  socials = input.required<Social[]>();
}
