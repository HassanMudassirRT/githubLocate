import { Component, input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import {
  GitHubIcon,
  FacebookIcon,
  InstagramIcon,
  TwitchIcon,
  TwitterIcon,
  LinkedInIcon,
  MastodonIcon,
  BlueskyIcon,
  RedditIcon,
  DefaultIcon,
} from '../../icons';

@Component({
  selector: 'app-social-media-link',
  imports: [
    TooltipModule,
    GitHubIcon,
    FacebookIcon,
    InstagramIcon,
    TwitchIcon,
    TwitterIcon,
    LinkedInIcon,
    MastodonIcon,
    BlueskyIcon,
    RedditIcon,
    DefaultIcon,
  ],
  templateUrl: './social-media-link.html',
})
export class SocialMediaLink {
  url = input.required<string>();
  provider = input.required<string>();
}
