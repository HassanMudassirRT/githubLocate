import {
  Navbar,
  init_navbar
} from "./chunk-JNYVCWJ3.js";
import "./chunk-F5XSVYHG.js";
import "./chunk-GM2Q5ZIG.js";
import "./chunk-QKCPCY2R.js";
import "./chunk-V3N65XNH.js";
import "./chunk-3LYCJGDS.js";
import "./chunk-WJSIDV3S.js";
import "./chunk-HINAUQGB.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/navbar/navbar.spec.ts
var require_navbar_spec = __commonJS({
  "src/app/components/navbar/navbar.spec.ts"(exports) {
    init_testing();
    init_navbar();
    describe("Navbar", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Navbar]
        }).compileComponents();
        fixture = TestBed.createComponent(Navbar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_navbar_spec();
//# sourceMappingURL=spec-app-components-navbar-navbar.spec.js.map
