import {
  init_search_bar
} from "./chunk-DZOGRK4R.js";
import {
  SocialMediaLink,
  init_social_media_link
} from "./chunk-E2CWIQEH.js";
import {
  init_user_aliases
} from "./chunk-WEAFEU76.js";
import {
  init_user_bio
} from "./chunk-3IXB2B7Z.js";
import {
  init_user_search_item
} from "./chunk-PVR5ZDFD.js";
import {
  init_user_stats
} from "./chunk-4NVC6HZR.js";
import {
  init_error_message
} from "./chunk-IQJJM67C.js";
import {
  init_footer
} from "./chunk-K7TGSAN2.js";
import {
  init_loader
} from "./chunk-FU45V4IG.js";
import {
  init_navbar
} from "./chunk-E2EAI765.js";
import {
  init_repo_list
} from "./chunk-DBTO2K6A.js";
import {
  init_repo_card
} from "./chunk-KHYIDAXO.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  input
} from "./chunk-56THSHHT.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/user-socials/user-socials.html
var user_socials_default;
var init_user_socials = __esm({
  "angular:jit:template:src/app/user-socials/user-socials.html"() {
    user_socials_default = '<div class="flex space-x-4 items-center mt-2">\n  @for (social of socials(); track social.provider) {\n  <app-social-media-link [provider]="social.provider" [url]="social.url" />\n  }\n</div>\n';
  }
});

// src/app/components/index.ts
var init_components = __esm({
  "src/app/components/index.ts"() {
    "use strict";
    init_footer();
    init_navbar();
    init_search_bar();
    init_repo_list();
    init_social_media_link();
    init_user_stats();
    init_user_socials2();
    init_user_aliases();
    init_user_bio();
    init_repo_card();
    init_loader();
    init_error_message();
    init_user_search_item();
  }
});

// src/app/user-socials/user-socials.ts
var UserSocials;
var init_user_socials2 = __esm({
  "src/app/user-socials/user-socials.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_socials();
    init_core();
    init_components();
    init_core();
    UserSocials = class UserSocials2 {
      socials = input.required();
      static propDecorators = {
        socials: [{ type: Input, args: [{ isSignal: true, alias: "socials", required: true, transform: void 0 }] }]
      };
    };
    UserSocials = __decorate([
      Component({
        selector: "app-user-socials",
        imports: [SocialMediaLink],
        template: user_socials_default
      })
    ], UserSocials);
  }
});

export {
  UserSocials,
  init_user_socials2 as init_user_socials,
  init_components
};
//# sourceMappingURL=chunk-WEV7YRJV.js.map
