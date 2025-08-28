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

// angular:jit:template:src/app/components/user-stats/user-stats.html
var user_stats_default;
var init_user_stats = __esm({
  "angular:jit:template:src/app/components/user-stats/user-stats.html"() {
    user_stats_default = '<div class="grid grid-cols-2 gap-4 text-center text-sm">\n  @for (stat of stats(); track stat.label) {\n  <div\n    class="flex flex-col items-center justify-center p-2 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50"\n  >\n    <span class="text-xl font-bold">{{ stat.value }}</span>\n    <span class="text-zinc-600 dark:text-zinc-400">{{ stat.label }}</span>\n  </div>\n  }\n</div>\n';
  }
});

// src/app/components/user-stats/user-stats.ts
var UserStats;
var init_user_stats2 = __esm({
  "src/app/components/user-stats/user-stats.ts"() {
    "use strict";
    init_tslib_es6();
    init_user_stats();
    init_core();
    init_core();
    UserStats = class UserStats2 {
      stats = input.required();
      static propDecorators = {
        stats: [{ type: Input, args: [{ isSignal: true, alias: "stats", required: true, transform: void 0 }] }]
      };
    };
    UserStats = __decorate([
      Component({
        selector: "app-user-stats",
        imports: [],
        template: user_stats_default
      })
    ], UserStats);
  }
});

export {
  UserStats,
  init_user_stats2 as init_user_stats
};
//# sourceMappingURL=chunk-4NVC6HZR.js.map
