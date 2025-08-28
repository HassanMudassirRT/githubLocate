import {
  BaseComponent,
  BaseStyle,
  SharedModule,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent
} from "./chunk-WJSIDV3S.js";
import {
  CommonModule,
  init_common
} from "./chunk-HINAUQGB.js";
import {
  ChangeDetectionStrategy,
  Component,
  FactoryTarget,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
  __decorate,
  core_exports,
  init_core,
  init_tslib_es6,
  inject,
  input,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-56THSHHT.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/components/loader/loader.html
var loader_default;
var init_loader = __esm({
  "angular:jit:template:src/app/components/loader/loader.html"() {
    loader_default = `<div class="flex flex-col items-center justify-center md:my-8">
  <p-progressspinner
    class="mx-auto my-4 size-8 md:size-12"
    [strokeWidth]="'4'"
    animationDuration="1s"
    aria-label="Loading"
  />
  <p class="mb-2 md:mt-4 text-center">{{ label() }}</p>
</div>
`;
  }
});

// node_modules/@primeuix/styles/dist/progressspinner/index.mjs
var style;
var init_progressspinner = __esm({
  "node_modules/@primeuix/styles/dist/progressspinner/index.mjs"() {
    "use strict";
    style = "\n    .p-progressspinner {\n        position: relative;\n        margin: 0 auto;\n        width: 100px;\n        height: 100px;\n        display: inline-block;\n    }\n\n    .p-progressspinner::before {\n        content: '';\n        display: block;\n        padding-top: 100%;\n    }\n\n    .p-progressspinner-spin {\n        height: 100%;\n        transform-origin: center center;\n        width: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        animation: p-progressspinner-rotate 2s linear infinite;\n    }\n\n    .p-progressspinner-circle {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: 0;\n        stroke: dt('progressspinner.colorOne');\n        animation:\n            p-progressspinner-dash 1.5s ease-in-out infinite,\n            p-progressspinner-color 6s ease-in-out infinite;\n        stroke-linecap: round;\n    }\n\n    @keyframes p-progressspinner-rotate {\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n    @keyframes p-progressspinner-dash {\n        0% {\n            stroke-dasharray: 1, 200;\n            stroke-dashoffset: 0;\n        }\n        50% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -35px;\n        }\n        100% {\n            stroke-dasharray: 89, 200;\n            stroke-dashoffset: -124px;\n        }\n    }\n    @keyframes p-progressspinner-color {\n        100%,\n        0% {\n            stroke: dt('progressspinner.color.one');\n        }\n        40% {\n            stroke: dt('progressspinner.color.two');\n        }\n        66% {\n            stroke: dt('progressspinner.color.three');\n        }\n        80%,\n        90% {\n            stroke: dt('progressspinner.color.four');\n        }\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-progressspinner.mjs
var classes, ProgressSpinnerStyle, ProgressSpinnerClasses, ProgressSpinner, ProgressSpinnerModule;
var init_primeng_progressspinner = __esm({
  "node_modules/primeng/fesm2022/primeng-progressspinner.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_primeng_api();
    init_primeng_basecomponent();
    init_progressspinner();
    init_primeng_base();
    classes = {
      root: () => ["p-progressspinner"],
      spin: "p-progressspinner-spin",
      circle: "p-progressspinner-circle"
    };
    ProgressSpinnerStyle = class _ProgressSpinnerStyle extends BaseStyle {
      name = "progressspinner";
      theme = style;
      classes = classes;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ProgressSpinnerStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ProgressSpinnerStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ProgressSpinnerStyle, decorators: [{
      type: Injectable
    }] });
    (function(ProgressSpinnerClasses2) {
      ProgressSpinnerClasses2["root"] = "p-progressspinner";
      ProgressSpinnerClasses2["spin"] = "p-progressspinner-spin";
      ProgressSpinnerClasses2["circle"] = "p-progressspinner-circle";
    })(ProgressSpinnerClasses || (ProgressSpinnerClasses = {}));
    ProgressSpinner = class _ProgressSpinner extends BaseComponent {
      /**
       * Class of the element.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Width of the circle stroke.
       * @group Props
       */
      strokeWidth = "2";
      /**
       * Color for the background of the circle.
       * @group Props
       */
      fill = "none";
      /**
       * Duration of the rotate animation.
       * @group Props
       */
      animationDuration = "2s";
      /**
       * Used to define a aria label attribute the current element.
       * @group Props
       */
      ariaLabel;
      _componentStyle = inject(ProgressSpinnerStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ProgressSpinner, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.3", type: _ProgressSpinner, isStandalone: true, selector: "p-progressSpinner, p-progress-spinner, p-progressspinner", inputs: { styleClass: "styleClass", strokeWidth: "strokeWidth", fill: "fill", animationDuration: "animationDuration", ariaLabel: "ariaLabel" }, host: { properties: { "attr.aria-label": "ariaLabel", "attr.role": "'progressbar'", "attr.data-pc-name": "'progressspinner'", "attr.data-pc-section": "'root'", "attr.aria-busy": "true", "class": "cn(cx('root'), styleClass)" } }, providers: [ProgressSpinnerStyle], usesInheritance: true, ngImport: core_exports, template: `
        <svg [class]="cx('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
            <circle [class]="cx('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ProgressSpinner, decorators: [{
      type: Component,
      args: [{
        selector: "p-progressSpinner, p-progress-spinner, p-progressspinner",
        standalone: true,
        imports: [CommonModule, SharedModule],
        template: `
        <svg [class]="cx('spin')" viewBox="25 25 50 50" [style.animation-duration]="animationDuration" [attr.data-pc-section]="'root'">
            <circle [class]="cx('circle')" cx="50" cy="50" r="20" [attr.fill]="fill" [attr.stroke-width]="strokeWidth" stroke-miterlimit="10" />
        </svg>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [ProgressSpinnerStyle],
        host: {
          "[attr.aria-label]": "ariaLabel",
          "[attr.role]": "'progressbar'",
          "[attr.data-pc-name]": "'progressspinner'",
          "[attr.data-pc-section]": "'root'",
          "[attr.aria-busy]": "true",
          "[class]": "cn(cx('root'), styleClass)"
        }
      }]
    }], propDecorators: { styleClass: [{
      type: Input
    }], strokeWidth: [{
      type: Input
    }], fill: [{
      type: Input
    }], animationDuration: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }] } });
    ProgressSpinnerModule = class _ProgressSpinnerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ProgressSpinnerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _ProgressSpinnerModule, imports: [ProgressSpinner, SharedModule], exports: [ProgressSpinner, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ProgressSpinnerModule, imports: [ProgressSpinner, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ProgressSpinnerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ProgressSpinner, SharedModule],
        exports: [ProgressSpinner, SharedModule]
      }]
    }] });
  }
});

// src/app/components/loader/loader.ts
var Loader;
var init_loader2 = __esm({
  "src/app/components/loader/loader.ts"() {
    "use strict";
    init_tslib_es6();
    init_loader();
    init_core();
    init_primeng_progressspinner();
    init_core();
    Loader = class Loader2 {
      label = input.required();
      static propDecorators = {
        label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: true, transform: void 0 }] }]
      };
    };
    Loader = __decorate([
      Component({
        selector: "app-loader",
        imports: [ProgressSpinnerModule],
        template: loader_default
      })
    ], Loader);
  }
});

export {
  ProgressSpinnerModule,
  init_primeng_progressspinner,
  Loader,
  init_loader2 as init_loader
};
//# sourceMappingURL=chunk-FU45V4IG.js.map
