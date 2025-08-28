import {
  UserAliases,
  init_user_aliases
} from "./chunk-WEAFEU76.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/user-aliases/user-aliases.spec.ts
var require_user_aliases_spec = __commonJS({
  "src/app/components/user-aliases/user-aliases.spec.ts"(exports) {
    init_testing();
    init_user_aliases();
    describe("UserAliases", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserAliases]
        }).compileComponents();
        fixture = TestBed.createComponent(UserAliases);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_aliases_spec();
//# sourceMappingURL=spec-app-components-user-aliases-user-aliases.spec.js.map
