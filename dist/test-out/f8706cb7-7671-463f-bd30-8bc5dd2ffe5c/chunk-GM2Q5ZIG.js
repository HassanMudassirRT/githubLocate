import {
  BaseComponent,
  BaseStyle,
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
  NgModule,
  ViewEncapsulation,
  core_exports,
  init_core,
  inject,
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

// node_modules/@primeuix/styles/dist/progressbar/index.mjs
var style;
var init_progressbar = __esm({
  "node_modules/@primeuix/styles/dist/progressbar/index.mjs"() {
    "use strict";
    style = "\n    .p-progressbar {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        height: dt('progressbar.height');\n        background: dt('progressbar.background');\n        border-radius: dt('progressbar.border.radius');\n    }\n\n    .p-progressbar-value {\n        margin: 0;\n        background: dt('progressbar.value.background');\n    }\n\n    .p-progressbar-label {\n        color: dt('progressbar.label.color');\n        font-size: dt('progressbar.label.font.size');\n        font-weight: dt('progressbar.label.font.weight');\n    }\n\n    .p-progressbar-determinate .p-progressbar-value {\n        height: 100%;\n        width: 0%;\n        position: absolute;\n        display: none;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        transition: width 1s ease-in-out;\n    }\n\n    .p-progressbar-determinate .p-progressbar-label {\n        display: inline-flex;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::before {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n    }\n\n    .p-progressbar-indeterminate .p-progressbar-value::after {\n        content: '';\n        position: absolute;\n        background: inherit;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        inset-block-end: 0;\n        will-change: inset-inline-start, inset-inline-end;\n        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n        animation-delay: 1.15s;\n    }\n\n    @keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim {\n        0% {\n            inset-inline-start: -35%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n        100% {\n            inset-inline-start: 100%;\n            inset-inline-end: -90%;\n        }\n    }\n\n    @keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n    @-webkit-keyframes p-progressbar-indeterminate-anim-short {\n        0% {\n            inset-inline-start: -200%;\n            inset-inline-end: 100%;\n        }\n        60% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n        100% {\n            inset-inline-start: 107%;\n            inset-inline-end: -8%;\n        }\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-fluid.mjs
var classes, FluidStyle, FluidClasses, Fluid, FluidModule;
var init_primeng_fluid = __esm({
  "node_modules/primeng/fesm2022/primeng-fluid.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_primeng_basecomponent();
    init_progressbar();
    init_primeng_base();
    classes = {
      root: "p-fluid"
    };
    FluidStyle = class _FluidStyle extends BaseStyle {
      name = "fluid";
      classes = classes;
      theme = style;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: FluidStyle, decorators: [{
      type: Injectable
    }] });
    (function(FluidClasses2) {
      FluidClasses2["root"] = "p-fluid";
    })(FluidClasses || (FluidClasses = {}));
    Fluid = class _Fluid extends BaseComponent {
      _componentStyle = inject(FluidStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Fluid, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.3", type: _Fluid, isStandalone: true, selector: "p-fluid", host: { properties: { "class": "cx('root')" } }, providers: [FluidStyle], usesInheritance: true, ngImport: core_exports, template: ` <ng-content></ng-content> `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Fluid, decorators: [{
      type: Component,
      args: [{
        selector: "p-fluid",
        template: ` <ng-content></ng-content> `,
        standalone: true,
        imports: [CommonModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [FluidStyle],
        host: {
          "[class]": "cx('root')"
        }
      }]
    }] });
    FluidModule = class _FluidModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidModule, imports: [Fluid], exports: [Fluid] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _FluidModule, imports: [Fluid] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: FluidModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Fluid],
        exports: [Fluid]
      }]
    }] });
  }
});

export {
  Fluid,
  FluidModule,
  init_primeng_fluid
};
//# sourceMappingURL=chunk-GM2Q5ZIG.js.map
