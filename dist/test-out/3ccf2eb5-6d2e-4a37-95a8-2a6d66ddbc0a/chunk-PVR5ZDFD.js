import {
  RouterLink,
  init_router
} from "./chunk-V3N65XNH.js";
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

// angular:jit:template:src/app/components/user-search-item/user-search-item.html
var user_search_item_default;
var init_user_search_item = __esm({
  "angular:jit:template:src/app/components/user-search-item/user-search-item.html"() {
    user_search_item_default = `<div
  class="flex justify-between items-center p-2 border-0 border-b-1 border-zinc-400/20 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
  [style.marginTop]="first() ? '0.5rem' : '0rem'"
  [routerLink]="'/user/' + user().login"
>
  <img
    icon="pi pi-user"
    [src]="user().avatar_url"
    [alt]="user().login"
    class="w-8 h-8 md:w-10 md:h-10 rounded-[999px] ml-3 bg-zinc-800"
  />
  <p class="flex-1 mx-4 text-sm md:text-base lg:text-lg break-all">
    {{ user().login }}
  </p>
</div>
`;
  }
});

// src/app/components/user-search-item/user-search-item.ts
var UserSearchItem;
var init_user_search_item2 = __esm({
  "src/app/components/user-search-item/user-search-item.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_search_item();
    init_core();
    init_router();
    init_core();
    UserSearchItem = class UserSearchItem2 {
      user = input.required();
      first = input.required();
      static propDecorators = {
        user: [{ type: Input, args: [{ isSignal: true, alias: "user", required: true, transform: void 0 }] }],
        first: [{ type: Input, args: [{ isSignal: true, alias: "first", required: true, transform: void 0 }] }]
      };
    };
    UserSearchItem = __decorate([
      Component({
        selector: "app-user-search-item",
        imports: [RouterLink],
        template: user_search_item_default
      })
    ], UserSearchItem);
  }
});

export {
  UserSearchItem,
  init_user_search_item2 as init_user_search_item
};
//# sourceMappingURL=chunk-PVR5ZDFD.js.map
