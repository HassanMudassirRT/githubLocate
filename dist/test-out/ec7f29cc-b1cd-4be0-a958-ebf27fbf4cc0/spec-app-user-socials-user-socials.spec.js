import {
  UserSocials,
  init_user_socials
} from "./chunk-WEV7YRJV.js";
import "./chunk-DZOGRK4R.js";
import "./chunk-E2CWIQEH.js";
import "./chunk-WGD7ETYN.js";
import "./chunk-WEAFEU76.js";
import "./chunk-3IXB2B7Z.js";
import "./chunk-PVR5ZDFD.js";
import "./chunk-4NVC6HZR.js";
import "./chunk-IQJJM67C.js";
import "./chunk-K7TGSAN2.js";
import "./chunk-FU45V4IG.js";
import "./chunk-E2EAI765.js";
import "./chunk-GM2Q5ZIG.js";
import "./chunk-QKCPCY2R.js";
import "./chunk-V3N65XNH.js";
import "./chunk-3LYCJGDS.js";
import "./chunk-F5XSVYHG.js";
import "./chunk-WJSIDV3S.js";
import "./chunk-HINAUQGB.js";
import "./chunk-DBTO2K6A.js";
import "./chunk-KHYIDAXO.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/user-socials/user-socials.spec.ts
var require_user_socials_spec = __commonJS({
  "src/app/user-socials/user-socials.spec.ts"(exports) {
    init_testing();
    init_user_socials();
    describe("UserSocials", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserSocials]
        }).compileComponents();
        fixture = TestBed.createComponent(UserSocials);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_socials_spec();
//# sourceMappingURL=spec-app-user-socials-user-socials.spec.js.map
