import {
  SearchBar,
  init_search_bar
} from "./chunk-DZOGRK4R.js";
import "./chunk-WGD7ETYN.js";
import "./chunk-PVR5ZDFD.js";
import "./chunk-FU45V4IG.js";
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

// src/app/components/search-bar/search-bar.spec.ts
var require_search_bar_spec = __commonJS({
  "src/app/components/search-bar/search-bar.spec.ts"(exports) {
    init_testing();
    init_search_bar();
    describe("SearchBar", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [SearchBar]
        }).compileComponents();
        fixture = TestBed.createComponent(SearchBar);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_search_bar_spec();
//# sourceMappingURL=spec-app-components-search-bar-search-bar.spec.js.map
