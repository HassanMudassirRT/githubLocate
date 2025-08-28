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

// angular:jit:template:src/app/components/repo-card/repo-card.html
var repo_card_default;
var init_repo_card = __esm({
  "angular:jit:template:src/app/components/repo-card/repo-card.html"() {
    repo_card_default = '<div\n  class="flex flex-col justify-between items-start p-4 rounded-lg bg-zinc-200/50 dark:bg-zinc-800/50 border border-zinc-400/20 mb-4"\n>\n  <div class="flex-1 w-full">\n    <a\n      [href]="repo().html_url"\n      target="_blank"\n      class="text-lg font-bold text-primary-500 hover:underline break-words md:text-xl lg:text-2xl"\n    >\n      {{ repo().name }}\n    </a>\n    @if (repo().description) {\n    <p class="text-sm mt-1 text-zinc-600 dark:text-zinc-400">\n      {{ repo().description }}\n    </p>\n    }\n  </div>\n\n  <div\n    class="flex flex-wrap gap-4 mt-2 text-sm text-zinc-500 dark:text-zinc-400"\n  >\n    @if (repo().language) {\n    <span class="flex items-center gap-1.5">\n      <i class="pi pi-code"></i>\n      {{ repo().language }}\n    </span>\n    }\n    <span class="flex gap-1.5">\n      <i class="pi pi-star"></i>\n      {{ repo().stargazers_count }}\n    </span>\n    <span class="flex gap-1.5">\n      <i class="pi pi-eye"></i>\n      {{ repo().watchers_count }}\n    </span>\n  </div>\n</div>\n';
  }
});

// src/app/components/repo-card/repo-card.ts
var RepoCard;
var init_repo_card2 = __esm({
  "src/app/components/repo-card/repo-card.ts"() {
    "use strict";
    init_tslib_es6();
    init_repo_card();
    init_core();
    init_core();
    RepoCard = class RepoCard2 {
      repo = input.required();
      static propDecorators = {
        repo: [{ type: Input, args: [{ isSignal: true, alias: "repo", required: true, transform: void 0 }] }]
      };
    };
    RepoCard = __decorate([
      Component({
        selector: "app-repo-card",
        imports: [],
        template: repo_card_default
      })
    ], RepoCard);
  }
});

export {
  RepoCard,
  init_repo_card2 as init_repo_card
};
//# sourceMappingURL=chunk-KHYIDAXO.js.map
