import {
  UserSearchItem,
  init_user_search_item
} from "./chunk-PVR5ZDFD.js";
import "./chunk-V3N65XNH.js";
import "./chunk-3LYCJGDS.js";
import "./chunk-HINAUQGB.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/user-search-item/user-search-item.spec.ts
var require_user_search_item_spec = __commonJS({
  "src/app/components/user-search-item/user-search-item.spec.ts"(exports) {
    init_testing();
    init_user_search_item();
    describe("UserSearchItem", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserSearchItem]
        }).compileComponents();
        fixture = TestBed.createComponent(UserSearchItem);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_search_item_spec();
//# sourceMappingURL=spec-app-components-user-search-item-user-search-item.spec.js.map
