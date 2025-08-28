import {
  RepoCard,
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

// angular:jit:template:src/app/components/repo-list/repo-list.html
var repo_list_default;
var init_repo_list = __esm({
  "angular:jit:template:src/app/components/repo-list/repo-list.html"() {
    repo_list_default = '<h3 class="text-2xl font-bold mb-4">Repositories</h3>\n<div class="space-y-4">\n  @for (repo of repos(); track repo.id) {\n  <app-repo-card [repo]="repo" />\n  }\n</div>\n';
  }
});

// src/app/components/repo-list/repo-list.ts
var RepoList;
var init_repo_list2 = __esm({
  "src/app/components/repo-list/repo-list.ts"() {
    "use strict";
    init_tslib_es6();
    init_repo_list();
    init_core();
    init_repo_card();
    init_core();
    RepoList = class RepoList2 {
      repos = input.required();
      static propDecorators = {
        repos: [{ type: Input, args: [{ isSignal: true, alias: "repos", required: true, transform: void 0 }] }]
      };
    };
    RepoList = __decorate([
      Component({
        selector: "app-repo-list",
        imports: [RepoCard],
        template: repo_list_default
      })
    ], RepoList);
  }
});

export {
  RepoList,
  init_repo_list2 as init_repo_list
};
//# sourceMappingURL=chunk-DBTO2K6A.js.map
