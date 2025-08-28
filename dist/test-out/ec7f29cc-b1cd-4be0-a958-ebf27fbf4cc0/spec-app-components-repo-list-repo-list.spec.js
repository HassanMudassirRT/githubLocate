import {
  RepoList,
  init_repo_list
} from "./chunk-DBTO2K6A.js";
import "./chunk-KHYIDAXO.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/repo-list/repo-list.spec.ts
var require_repo_list_spec = __commonJS({
  "src/app/components/repo-list/repo-list.spec.ts"(exports) {
    init_testing();
    init_repo_list();
    describe("RepoList", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [RepoList]
        }).compileComponents();
        fixture = TestBed.createComponent(RepoList);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_repo_list_spec();
//# sourceMappingURL=spec-app-components-repo-list-repo-list.spec.js.map
