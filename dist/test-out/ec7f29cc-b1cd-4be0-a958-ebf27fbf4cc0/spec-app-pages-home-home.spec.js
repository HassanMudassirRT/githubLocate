import {
  init_components
} from "./chunk-WEV7YRJV.js";
import {
  SearchBar
} from "./chunk-DZOGRK4R.js";
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
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/pages/home/home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src/app/pages/home/home.html"() {
    home_default = "<app-search-bar />";
  }
});

// src/app/pages/home/home.ts
var Home;
var init_home2 = __esm({
  "src/app/pages/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_core();
    init_components();
    Home = class Home2 {
    };
    Home = __decorate([
      Component({
        selector: "app-home",
        imports: [SearchBar],
        template: home_default
      })
    ], Home);
  }
});

// src/app/pages/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/pages/home/home.spec.ts"(exports) {
    init_testing();
    init_home2();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Home]
        }).compileComponents();
        fixture = TestBed.createComponent(Home);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-app-pages-home-home.spec.js.map
