import {
  ErrorMessage,
  init_error_message
} from "./chunk-IQJJM67C.js";
import "./chunk-F5XSVYHG.js";
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

// src/app/components/error-message/error-message.spec.ts
var require_error_message_spec = __commonJS({
  "src/app/components/error-message/error-message.spec.ts"(exports) {
    init_testing();
    init_error_message();
    describe("ErrorMessage", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ErrorMessage]
        }).compileComponents();
        fixture = TestBed.createComponent(ErrorMessage);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_error_message_spec();
//# sourceMappingURL=spec-app-components-error-message-error-message.spec.js.map
