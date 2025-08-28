import {
  Loader,
  init_loader
} from "./chunk-FU45V4IG.js";
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

// src/app/components/loader/loader.spec.ts
var require_loader_spec = __commonJS({
  "src/app/components/loader/loader.spec.ts"(exports) {
    init_testing();
    init_loader();
    describe("Loader", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Loader]
        }).compileComponents();
        fixture = TestBed.createComponent(Loader);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_loader_spec();
//# sourceMappingURL=spec-app-components-loader-loader.spec.js.map
