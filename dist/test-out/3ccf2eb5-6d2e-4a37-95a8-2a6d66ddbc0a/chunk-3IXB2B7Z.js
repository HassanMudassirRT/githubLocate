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

// angular:jit:template:src/app/components/user-bio/user-bio.html
var user_bio_default;
var init_user_bio = __esm({
  "angular:jit:template:src/app/components/user-bio/user-bio.html"() {
    user_bio_default = '<p class="text-center text-sm md:text-base text-zinc-500 dark:text-zinc-400">\n  {{ bio() }}\n</p>\n';
  }
});

// src/app/components/user-bio/user-bio.ts
var UserBio;
var init_user_bio2 = __esm({
  "src/app/components/user-bio/user-bio.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_bio();
    init_core();
    init_core();
    UserBio = class UserBio2 {
      bio = input.required();
      static propDecorators = {
        bio: [{ type: Input, args: [{ isSignal: true, alias: "bio", required: true, transform: void 0 }] }]
      };
    };
    UserBio = __decorate([
      Component({
        selector: "app-user-bio",
        imports: [],
        template: user_bio_default
      })
    ], UserBio);
  }
});

export {
  UserBio,
  init_user_bio2 as init_user_bio
};
//# sourceMappingURL=chunk-3IXB2B7Z.js.map
