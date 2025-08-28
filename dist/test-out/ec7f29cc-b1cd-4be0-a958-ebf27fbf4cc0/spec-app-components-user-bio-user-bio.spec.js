import {
  UserBio,
  init_user_bio
} from "./chunk-3IXB2B7Z.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/user-bio/user-bio.spec.ts
var require_user_bio_spec = __commonJS({
  "src/app/components/user-bio/user-bio.spec.ts"(exports) {
    init_testing();
    init_user_bio();
    describe("UserBio", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserBio]
        }).compileComponents();
        fixture = TestBed.createComponent(UserBio);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_bio_spec();
//# sourceMappingURL=spec-app-components-user-bio-user-bio.spec.js.map
