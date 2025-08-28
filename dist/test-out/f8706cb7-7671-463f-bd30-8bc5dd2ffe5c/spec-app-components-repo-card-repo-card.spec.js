import {
  RepoCard,
  init_repo_card
} from "./chunk-KHYIDAXO.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/repo-card/repo-card.spec.ts
var require_repo_card_spec = __commonJS({
  "src/app/components/repo-card/repo-card.spec.ts"(exports) {
    init_testing();
    init_repo_card();
    describe("RepoCard", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [RepoCard]
        }).compileComponents();
        fixture = TestBed.createComponent(RepoCard);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_repo_card_spec();
//# sourceMappingURL=spec-app-components-repo-card-repo-card.spec.js.map
