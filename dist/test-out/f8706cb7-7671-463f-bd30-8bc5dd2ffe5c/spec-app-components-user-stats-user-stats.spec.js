import {
  UserStats,
  init_user_stats
} from "./chunk-4NVC6HZR.js";
import {
  TestBed,
  init_testing
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/components/user-stats/user-stats.spec.ts
var require_user_stats_spec = __commonJS({
  "src/app/components/user-stats/user-stats.spec.ts"(exports) {
    init_testing();
    init_user_stats();
    describe("UserStats", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [UserStats]
        }).compileComponents();
        fixture = TestBed.createComponent(UserStats);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_stats_spec();
//# sourceMappingURL=spec-app-components-user-stats-user-stats.spec.js.map
