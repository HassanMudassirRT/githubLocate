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

// angular:jit:template:src/app/components/user-aliases/user-aliases.html
var user_aliases_default;
var init_user_aliases = __esm({
  "angular:jit:template:src/app/components/user-aliases/user-aliases.html"() {
    user_aliases_default = '<h1\n  class="text-3xl md:text-4xl font-extrabold text-primary-500 text-center mb-1.5"\n>\n  {{ name() || login() }}\n</h1>\n<p class="text-lg md:text-xl font-medium text-center text-zinc-600 dark:text-zinc-400">\n  {{ login() }}\n</p>\n';
  }
});

// src/app/components/user-aliases/user-aliases.ts
var UserAliases;
var init_user_aliases2 = __esm({
  "src/app/components/user-aliases/user-aliases.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_aliases();
    init_core();
    init_core();
    UserAliases = class UserAliases2 {
      name = input("");
      login = input.required();
      static propDecorators = {
        name: [{ type: Input, args: [{ isSignal: true, alias: "name", required: false, transform: void 0 }] }],
        login: [{ type: Input, args: [{ isSignal: true, alias: "login", required: true, transform: void 0 }] }]
      };
    };
    UserAliases = __decorate([
      Component({
        selector: "app-user-aliases",
        imports: [],
        template: user_aliases_default
      })
    ], UserAliases);
  }
});

export {
  UserAliases,
  init_user_aliases2 as init_user_aliases
};
//# sourceMappingURL=chunk-WEAFEU76.js.map
