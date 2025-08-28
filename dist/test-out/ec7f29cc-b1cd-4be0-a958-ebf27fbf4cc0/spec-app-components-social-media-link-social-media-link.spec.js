import {
  SocialMediaLink,
  init_social_media_link
} from "./chunk-E2CWIQEH.js";
import "./chunk-WGD7ETYN.js";
import "./chunk-QKCPCY2R.js";
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

// src/app/components/social-media-link/social-media-link.spec.ts
var require_social_media_link_spec = __commonJS({
  "src/app/components/social-media-link/social-media-link.spec.ts"(exports) {
    init_testing();
    init_social_media_link();
    describe("SocialMediaLink", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [SocialMediaLink]
        }).compileComponents();
        fixture = TestBed.createComponent(SocialMediaLink);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_social_media_link_spec();
//# sourceMappingURL=spec-app-components-social-media-link-social-media-link.spec.js.map
