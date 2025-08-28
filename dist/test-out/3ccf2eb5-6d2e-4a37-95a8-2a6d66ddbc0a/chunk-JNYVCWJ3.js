import {
  Ripple,
  SpinnerIcon,
  init_primeng_icons,
  init_primeng_ripple
} from "./chunk-F5XSVYHG.js";
import {
  Fluid,
  init_primeng_fluid
} from "./chunk-GM2Q5ZIG.js";
import {
  DomHandler,
  init_primeng_dom
} from "./chunk-QKCPCY2R.js";
import {
  Router,
  init_router
} from "./chunk-V3N65XNH.js";
import {
  BaseComponent,
  BaseStyle,
  O,
  PrimeTemplate,
  R,
  SharedModule,
  W,
  a,
  init_dist,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent,
  s,
  s2,
  z
} from "./chunk-WJSIDV3S.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  init_common,
  isPlatformBrowser
} from "./chunk-HINAUQGB.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EventEmitter,
  FactoryTarget,
  Injectable,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  computed,
  contentChild,
  core_exports,
  init_core,
  init_tslib_es6,
  inject,
  input,
  numberAttribute,
  signal,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-56THSHHT.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/components/navbar/navbar.html
var navbar_default;
var init_navbar = __esm({
  "angular:jit:template:src/app/components/navbar/navbar.html"() {
    navbar_default = `<header class="p-4 md:p-5 lg:p-6 xl:p-8 backdrop-blur-md border-b border-zinc-400/50">
  <nav class="flex justify-between items-center md:grid md:grid-cols-3">
    <h1
      class="text-xl md:text-4xl xl:text-5xl col-start-2 col-end-3 text-center cursor-pointer transition-all duration-300"
      (click)="router.navigate(['/'])"
    >
      githubLocate
    </h1>
    <p-button
      [icon]="isDarkMode() ? 'pi pi-moon' : 'pi pi-sun'"
      [outlined]="true"
      size="small"
      (click)="toggleDarkMode()"
      class="col-start-3 col-end-4 justify-self-end px-3 py-2 text-sm md:px-4 md:py-2.5 md:text-base lg:px-5 lg:py-3 lg:text-lg md:scale-110 lg:scale-130"
      aria-label="Theme-Toggle"
    />
  </nav>
</header>
`;
  }
});

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus, AutoFocusModule;
var init_primeng_autofocus = __esm({
  "node_modules/primeng/fesm2022/primeng-autofocus.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_primeng_basecomponent();
    init_primeng_dom();
    AutoFocus = class _AutoFocus extends BaseComponent {
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus = false;
      focused = false;
      platformId = inject(PLATFORM_ID);
      document = inject(DOCUMENT);
      host = inject(ElementRef);
      ngAfterContentChecked() {
        if (this.autofocus === false) {
          this.host.nativeElement.removeAttribute("autofocus");
        } else {
          this.host.nativeElement.setAttribute("autofocus", true);
        }
        if (!this.focused) {
          this.autoFocus();
        }
      }
      ngAfterViewChecked() {
        if (!this.focused) {
          this.autoFocus();
        }
      }
      autoFocus() {
        if (isPlatformBrowser(this.platformId) && this.autofocus) {
          setTimeout(() => {
            const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
            if (focusableElements.length === 0) {
              this.host.nativeElement.focus();
            }
            if (focusableElements.length > 0) {
              focusableElements[0].focus();
            }
            this.focused = true;
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocus, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _AutoFocus, isStandalone: true, selector: "[pAutoFocus]", inputs: { autofocus: ["pAutoFocus", "autofocus"] }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: AutoFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[pAutoFocus]",
        standalone: true
      }]
    }], propDecorators: { autofocus: [{
      type: Input,
      args: ["pAutoFocus"]
    }] } });
    AutoFocusModule = class _AutoFocusModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocusModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocusModule, imports: [AutoFocus], exports: [AutoFocus] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AutoFocusModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: AutoFocusModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [AutoFocus],
        exports: [AutoFocus]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/badge/index.mjs
var style;
var init_badge = __esm({
  "node_modules/@primeuix/styles/dist/badge/index.mjs"() {
    "use strict";
    style = "\n    .p-badge {\n        display: inline-flex;\n        border-radius: dt('badge.border.radius');\n        align-items: center;\n        justify-content: center;\n        padding: dt('badge.padding');\n        background: dt('badge.primary.background');\n        color: dt('badge.primary.color');\n        font-size: dt('badge.font.size');\n        font-weight: dt('badge.font.weight');\n        min-width: dt('badge.min.width');\n        height: dt('badge.height');\n    }\n\n    .p-badge-dot {\n        width: dt('badge.dot.size');\n        min-width: dt('badge.dot.size');\n        height: dt('badge.dot.size');\n        border-radius: 50%;\n        padding: 0;\n    }\n\n    .p-badge-circle {\n        padding: 0;\n        border-radius: 50%;\n    }\n\n    .p-badge-secondary {\n        background: dt('badge.secondary.background');\n        color: dt('badge.secondary.color');\n    }\n\n    .p-badge-success {\n        background: dt('badge.success.background');\n        color: dt('badge.success.color');\n    }\n\n    .p-badge-info {\n        background: dt('badge.info.background');\n        color: dt('badge.info.color');\n    }\n\n    .p-badge-warn {\n        background: dt('badge.warn.background');\n        color: dt('badge.warn.color');\n    }\n\n    .p-badge-danger {\n        background: dt('badge.danger.background');\n        color: dt('badge.danger.color');\n    }\n\n    .p-badge-contrast {\n        background: dt('badge.contrast.background');\n        color: dt('badge.contrast.color');\n    }\n\n    .p-badge-sm {\n        font-size: dt('badge.sm.font.size');\n        min-width: dt('badge.sm.min.width');\n        height: dt('badge.sm.height');\n    }\n\n    .p-badge-lg {\n        font-size: dt('badge.lg.font.size');\n        min-width: dt('badge.lg.min.width');\n        height: dt('badge.lg.height');\n    }\n\n    .p-badge-xl {\n        font-size: dt('badge.xl.font.size');\n        min-width: dt('badge.xl.min.width');\n        height: dt('badge.xl.height');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-badge.mjs
var theme, classes, BadgeStyle, BadgeClasses, BadgeDirective, Badge, BadgeModule;
var init_primeng_badge = __esm({
  "node_modules/primeng/fesm2022/primeng-badge.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_badge();
    init_primeng_base();
    theme = /*css*/
    `
    ${style}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`;
    classes = {
      root: ({ instance }) => [
        "p-badge p-component",
        {
          "p-badge-circle": s(instance.value()) && String(instance.value()).length === 1,
          "p-badge-dot": a(instance.value()),
          "p-badge-sm": instance.size() === "small" || instance.badgeSize() === "small",
          "p-badge-lg": instance.size() === "large" || instance.badgeSize() === "large",
          "p-badge-xl": instance.size() === "xlarge" || instance.badgeSize() === "xlarge",
          "p-badge-info": instance.severity() === "info",
          "p-badge-success": instance.severity() === "success",
          "p-badge-warn": instance.severity() === "warn",
          "p-badge-danger": instance.severity() === "danger",
          "p-badge-secondary": instance.severity() === "secondary",
          "p-badge-contrast": instance.severity() === "contrast"
        }
      ]
    };
    BadgeStyle = class _BadgeStyle extends BaseStyle {
      name = "badge";
      theme = theme;
      classes = classes;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BadgeStyle, decorators: [{
      type: Injectable
    }] });
    (function(BadgeClasses2) {
      BadgeClasses2["root"] = "p-badge";
    })(BadgeClasses || (BadgeClasses = {}));
    BadgeDirective = class _BadgeDirective extends BaseComponent {
      /**
       * When specified, disables the component.
       * @group Props
       */
      disabled;
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      badgeSize;
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       * @deprecated use badgeSize instead.
       */
      set size(value) {
        this._size = value;
        console.log("size property is deprecated and will removed in v18, use badgeSize instead.");
      }
      get size() {
        return this._size;
      }
      _size;
      /**
       * Severity type of the badge.
       * @group Props
       */
      severity;
      /**
       * Value to display inside the badge.
       * @group Props
       */
      value;
      /**
       * Inline style of the element.
       * @group Props
       */
      badgeStyle;
      /**
       * Class of the element.
       * @group Props
       */
      badgeStyleClass;
      id;
      badgeEl;
      _componentStyle = inject(BadgeStyle);
      get activeElement() {
        return this.el.nativeElement.nodeName.indexOf("-") != -1 ? this.el.nativeElement.firstChild : this.el.nativeElement;
      }
      get canUpdateBadge() {
        return this.id && !this.disabled;
      }
      constructor() {
        super();
      }
      ngOnChanges({ value, size, severity, disabled, badgeStyle, badgeStyleClass }) {
        super.ngOnChanges({ value, size, severity, disabled });
        if (disabled) {
          this.toggleDisableState();
        }
        if (!this.canUpdateBadge) {
          return;
        }
        if (severity) {
          this.setSeverity(severity.previousValue);
        }
        if (size) {
          this.setSizeClasses();
        }
        if (value) {
          this.setValue();
        }
        if (badgeStyle || badgeStyleClass) {
          this.applyStyles();
        }
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        this.id = s2("pn_id_") + "_badge";
        this.renderBadgeContent();
      }
      setValue(element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.value != null) {
          if (R(badge, "p-badge-dot")) {
            O(badge, "p-badge-dot");
          }
          if (this.value && String(this.value).length === 1) {
            W(badge, "p-badge-circle");
          } else {
            O(badge, "p-badge-circle");
          }
        } else {
          if (!R(badge, "p-badge-dot")) {
            W(badge, "p-badge-dot");
          }
          O(badge, "p-badge-circle");
        }
        badge.innerHTML = "";
        const badgeValue = this.value != null ? String(this.value) : "";
        this.renderer.appendChild(badge, this.document.createTextNode(badgeValue));
      }
      setSizeClasses(element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.badgeSize) {
          if (this.badgeSize === "large") {
            W(badge, "p-badge-lg");
            O(badge, "p-badge-xl");
          }
          if (this.badgeSize === "xlarge") {
            W(badge, "p-badge-xl");
            O(badge, "p-badge-lg");
          }
        } else if (this.size && !this.badgeSize) {
          if (this.size === "large") {
            W(badge, "p-badge-lg");
            O(badge, "p-badge-xl");
          }
          if (this.size === "xlarge") {
            W(badge, "p-badge-xl");
            O(badge, "p-badge-lg");
          }
        } else {
          O(badge, "p-badge-lg");
          O(badge, "p-badge-xl");
        }
      }
      renderBadgeContent() {
        if (this.disabled) {
          return null;
        }
        const el = this.activeElement;
        const badge = this.document.createElement("span");
        badge.id = this.id;
        badge.className = "p-badge p-component";
        this.setSeverity(null, badge);
        this.setSizeClasses(badge);
        this.setValue(badge);
        W(el, "p-overlay-badge");
        this.renderer.appendChild(el, badge);
        this.badgeEl = badge;
        this.applyStyles();
      }
      applyStyles() {
        if (this.badgeEl && this.badgeStyle && typeof this.badgeStyle === "object") {
          for (const [key, value] of Object.entries(this.badgeStyle)) {
            this.renderer.setStyle(this.badgeEl, key, value);
          }
        }
        if (this.badgeEl && this.badgeStyleClass) {
          this.badgeEl.classList.add(...this.badgeStyleClass.split(" "));
        }
      }
      setSeverity(oldSeverity, element) {
        const badge = element ?? this.document.getElementById(this.id);
        if (!badge) {
          return;
        }
        if (this.severity) {
          W(badge, `p-badge-${this.severity}`);
        }
        if (oldSeverity) {
          O(badge, `p-badge-${oldSeverity}`);
        }
      }
      toggleDisableState() {
        if (!this.id) {
          return;
        }
        if (this.disabled) {
          const badge = this.activeElement?.querySelector(`#${this.id}`);
          if (badge) {
            this.renderer.removeChild(this.activeElement, badge);
          }
        } else {
          this.renderBadgeContent();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeDirective, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _BadgeDirective, isStandalone: true, selector: "[pBadge]", inputs: { disabled: ["badgeDisabled", "disabled"], badgeSize: "badgeSize", size: "size", severity: "severity", value: "value", badgeStyle: "badgeStyle", badgeStyleClass: "badgeStyleClass" }, providers: [BadgeStyle], usesInheritance: true, usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BadgeDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[pBadge]",
        providers: [BadgeStyle],
        standalone: true
      }]
    }], ctorParameters: () => [], propDecorators: { disabled: [{
      type: Input,
      args: ["badgeDisabled"]
    }], badgeSize: [{
      type: Input
    }], size: [{
      type: Input
    }], severity: [{
      type: Input
    }], value: [{
      type: Input
    }], badgeStyle: [{
      type: Input
    }], badgeStyleClass: [{
      type: Input
    }] } });
    Badge = class _Badge extends BaseComponent {
      /**
       * Class of the element.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass = input(...ngDevMode ? [void 0, { debugName: "styleClass" }] : []);
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      badgeSize = input(...ngDevMode ? [void 0, { debugName: "badgeSize" }] : []);
      /**
       * Size of the badge, valid options are "large" and "xlarge".
       * @group Props
       */
      size = input(...ngDevMode ? [void 0, { debugName: "size" }] : []);
      /**
       * Severity type of the badge.
       * @group Props
       */
      severity = input(...ngDevMode ? [void 0, { debugName: "severity" }] : []);
      /**
       * Value to display inside the badge.
       * @group Props
       */
      value = input(...ngDevMode ? [void 0, { debugName: "value" }] : []);
      /**
       * When specified, disables the component.
       * @group Props
       */
      badgeDisabled = input(false, ...ngDevMode ? [{ debugName: "badgeDisabled", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      _componentStyle = inject(BadgeStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Badge, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _Badge, isStandalone: true, selector: "p-badge", inputs: { styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: true, isRequired: false, transformFunction: null }, badgeSize: { classPropertyName: "badgeSize", publicName: "badgeSize", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: true, isRequired: false, transformFunction: null }, value: { classPropertyName: "value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null }, badgeDisabled: { classPropertyName: "badgeDisabled", publicName: "badgeDisabled", isSignal: true, isRequired: false, transformFunction: null } }, host: { properties: { "class": "cn(cx('root'), styleClass())", "style.display": 'badgeDisabled() ? "none" : null' } }, providers: [BadgeStyle], usesInheritance: true, ngImport: core_exports, template: `{{ value() }}`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Badge, decorators: [{
      type: Component,
      args: [{
        selector: "p-badge",
        template: `{{ value() }}`,
        standalone: true,
        imports: [CommonModule, SharedModule],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [BadgeStyle],
        host: {
          "[class]": "cn(cx('root'), styleClass())",
          "[style.display]": 'badgeDisabled() ? "none" : null'
        }
      }]
    }] });
    BadgeModule = class _BadgeModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeModule, imports: [Badge, BadgeDirective, SharedModule], exports: [Badge, BadgeDirective, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BadgeModule, imports: [Badge, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BadgeModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Badge, BadgeDirective, SharedModule],
        exports: [Badge, BadgeDirective, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/button/index.mjs
var style2;
var init_button = __esm({
  "node_modules/@primeuix/styles/dist/button/index.mjs"() {
    "use strict";
    style2 = `
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;
  }
});

// node_modules/primeng/fesm2022/primeng-button.mjs
var classes2, ButtonStyle, ButtonClasses, INTERNAL_BUTTON_CLASSES, ButtonLabel, ButtonIcon, ButtonDirective, Button, ButtonModule;
var init_primeng_button = __esm({
  "node_modules/primeng/fesm2022/primeng-button.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_autofocus();
    init_primeng_badge();
    init_primeng_badge();
    init_primeng_basecomponent();
    init_primeng_fluid();
    init_primeng_icons();
    init_primeng_ripple();
    init_button();
    init_primeng_base();
    classes2 = {
      root: ({ instance }) => [
        "p-button p-component",
        {
          "p-button-icon-only": (instance.icon || instance.buttonProps?.icon || instance.iconTemplate || instance._iconTemplate || instance.loadingIcon || instance.loadingIconTemplate || instance._loadingIconTemplate) && !instance.label && !instance.buttonProps?.label,
          "p-button-vertical": (instance.iconPos === "top" || instance.iconPos === "bottom") && instance.label,
          "p-button-loading": instance.loading || instance.buttonProps?.loading,
          "p-button-link": instance.link || instance.buttonProps?.link,
          [`p-button-${instance.severity || instance.buttonProps?.severity}`]: instance.severity || instance.buttonProps?.severity,
          "p-button-raised": instance.raised || instance.buttonProps?.raised,
          "p-button-rounded": instance.rounded || instance.buttonProps?.rounded,
          "p-button-text": instance.text || instance.variant === "text" || instance.buttonProps?.text || instance.buttonProps?.variant === "text",
          "p-button-outlined": instance.outlined || instance.variant === "outlined" || instance.buttonProps?.outlined || instance.buttonProps?.variant === "outlined",
          "p-button-sm": instance.size === "small" || instance.buttonProps?.size === "small",
          "p-button-lg": instance.size === "large" || instance.buttonProps?.size === "large",
          "p-button-plain": instance.plain || instance.buttonProps?.plain,
          "p-button-fluid": instance.hasFluid
        }
      ],
      loadingIcon: "p-button-loading-icon",
      icon: ({ instance }) => [
        "p-button-icon",
        {
          [`p-button-icon-${instance.iconPos || instance.buttonProps?.iconPos}`]: instance.label || instance.buttonProps?.label,
          "p-button-icon-left": (instance.iconPos === "left" || instance.buttonProps?.iconPos === "left") && instance.label || instance.buttonProps?.label,
          "p-button-icon-right": (instance.iconPos === "right" || instance.buttonProps?.iconPos === "right") && instance.label || instance.buttonProps?.label
        },
        instance.icon,
        instance.buttonProps?.icon
      ],
      spinnerIcon: ({ instance }) => {
        return Object.entries(instance.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
      },
      label: "p-button-label"
    };
    ButtonStyle = class _ButtonStyle extends BaseStyle {
      name = "button";
      theme = style2;
      classes = classes2;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonStyle, decorators: [{
      type: Injectable
    }] });
    (function(ButtonClasses2) {
      ButtonClasses2["root"] = "p-button";
      ButtonClasses2["loadingIcon"] = "p-button-loading-icon";
      ButtonClasses2["icon"] = "p-button-icon";
      ButtonClasses2["label"] = "p-button-label";
    })(ButtonClasses || (ButtonClasses = {}));
    INTERNAL_BUTTON_CLASSES = {
      button: "p-button",
      component: "p-component",
      iconOnly: "p-button-icon-only",
      disabled: "p-disabled",
      loading: "p-button-loading",
      labelOnly: "p-button-loading-label-only"
    };
    ButtonLabel = class _ButtonLabel extends BaseComponent {
      _componentStyle = inject(ButtonStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonLabel, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _ButtonLabel, isStandalone: true, selector: "[pButtonLabel]", host: { properties: { "class.p-button-label": "true" } }, providers: [ButtonStyle], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonLabel, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButtonLabel]",
        providers: [ButtonStyle],
        standalone: true,
        host: {
          "[class.p-button-label]": "true"
        }
      }]
    }] });
    ButtonIcon = class _ButtonIcon extends BaseComponent {
      _componentStyle = inject(ButtonStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonIcon, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.1.3", type: _ButtonIcon, isStandalone: true, selector: "[pButtonIcon]", host: { properties: { "class.p-button-icon": "true" } }, providers: [ButtonStyle], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonIcon, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButtonIcon]",
        providers: [ButtonStyle],
        standalone: true,
        host: {
          "[class.p-button-icon]": "true"
        }
      }]
    }] });
    ButtonDirective = class _ButtonDirective extends BaseComponent {
      /**
       * Position of the icon.
       * @deprecated utilize pButtonIcon and pButtonLabel directives.
       * @group Props
       */
      iconPos = "left";
      /**
       * Uses to pass attributes to the loading icon's DOM element.
       * @deprecated utilize pButonIcon instead.
       * @group Props
       */
      loadingIcon;
      set label(val) {
        this._label = val;
        if (this.initialized) {
          this.updateLabel();
          this.updateIcon();
          this.setStyleClass();
        }
      }
      set icon(val) {
        this._icon = val;
        if (this.initialized) {
          this.updateIcon();
          this.setStyleClass();
        }
      }
      /**
       * Whether the button is in loading state.
       * @group Props
       */
      get loading() {
        return this._loading;
      }
      set loading(val) {
        this._loading = val;
        if (this.initialized) {
          this.updateIcon();
          this.setStyleClass();
        }
      }
      _buttonProps;
      iconSignal = contentChild(ButtonIcon, ...ngDevMode ? [{ debugName: "iconSignal" }] : []);
      labelSignal = contentChild(ButtonLabel, ...ngDevMode ? [{ debugName: "labelSignal" }] : []);
      isIconOnly = computed(() => !!(!this.labelSignal() && this.iconSignal()), ...ngDevMode ? [{ debugName: "isIconOnly" }] : []);
      set buttonProps(val) {
        this._buttonProps = val;
        if (val && typeof val === "object") {
          Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
        }
      }
      _severity;
      /**
       * Defines the style of the button.
       * @group Props
       */
      get severity() {
        return this._severity;
      }
      set severity(value) {
        this._severity = value;
        if (this.initialized) {
          this.setStyleClass();
        }
      }
      /**
       * Add a shadow to indicate elevation.
       * @group Props
       */
      raised = false;
      /**
       * Add a circular border radius to the button.
       * @group Props
       */
      rounded = false;
      /**
       * Add a textual class to the button without a background initially.
       * @group Props
       */
      text = false;
      /**
       * Add a border class without a background initially.
       * @group Props
       */
      outlined = false;
      /**
       * Defines the size of the button.
       * @group Props
       */
      size = null;
      /**
       * Add a plain textual class to the button without a background initially.
       * @group Props
       */
      plain = false;
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue undefined
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      _label;
      _icon;
      _loading = false;
      initialized;
      get htmlElement() {
        return this.el.nativeElement;
      }
      _internalClasses = Object.values(INTERNAL_BUTTON_CLASSES);
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      isTextButton = computed(() => !!(!this.iconSignal() && this.labelSignal() && this.text), ...ngDevMode ? [{ debugName: "isTextButton" }] : []);
      /**
       * Text of the button.
       * @deprecated use pButtonLabel directive instead.
       * @group Props
       */
      get label() {
        return this._label;
      }
      /**
       * Name of the icon.
       * @deprecated use pButtonIcon directive instead
       * @group Props
       */
      get icon() {
        return this._icon;
      }
      /**
       * Used to pass all properties of the ButtonProps to the Button component.
       * @deprecated assign props directly to the button element.
       * @group Props
       */
      get buttonProps() {
        return this._buttonProps;
      }
      spinnerIcon = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;
      _componentStyle = inject(ButtonStyle);
      ngAfterViewInit() {
        super.ngAfterViewInit();
        W(this.htmlElement, this.getStyleClass().join(" "));
        this.createIcon();
        this.createLabel();
        this.initialized = true;
      }
      getStyleClass() {
        const styleClass = [INTERNAL_BUTTON_CLASSES.button, INTERNAL_BUTTON_CLASSES.component];
        if (this.icon && !this.label && a(this.htmlElement.textContent)) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
        }
        if (this.loading) {
          styleClass.push(INTERNAL_BUTTON_CLASSES.disabled, INTERNAL_BUTTON_CLASSES.loading);
          if (!this.icon && this.label) {
            styleClass.push(INTERNAL_BUTTON_CLASSES.labelOnly);
          }
          if (this.icon && !this.label && !a(this.htmlElement.textContent)) {
            styleClass.push(INTERNAL_BUTTON_CLASSES.iconOnly);
          }
        }
        if (this.text) {
          styleClass.push("p-button-text");
        }
        if (this.severity) {
          styleClass.push(`p-button-${this.severity}`);
        }
        if (this.plain) {
          styleClass.push("p-button-plain");
        }
        if (this.raised) {
          styleClass.push("p-button-raised");
        }
        if (this.size) {
          styleClass.push(`p-button-${this.size}`);
        }
        if (this.outlined) {
          styleClass.push("p-button-outlined");
        }
        if (this.rounded) {
          styleClass.push("p-button-rounded");
        }
        if (this.size === "small") {
          styleClass.push("p-button-sm");
        }
        if (this.size === "large") {
          styleClass.push("p-button-lg");
        }
        if (this.hasFluid) {
          styleClass.push("p-button-fluid");
        }
        return styleClass;
      }
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      setStyleClass() {
        const styleClass = this.getStyleClass();
        this.removeExistingSeverityClass();
        this.htmlElement.classList.remove(...this._internalClasses);
        this.htmlElement.classList.add(...styleClass);
      }
      removeExistingSeverityClass() {
        const severityArray = ["success", "info", "warn", "danger", "help", "primary", "secondary", "contrast"];
        const existingSeverityClass = this.htmlElement.classList.value.split(" ").find((cls) => severityArray.some((severity) => cls === `p-button-${severity}`));
        if (existingSeverityClass) {
          this.htmlElement.classList.remove(existingSeverityClass);
        }
      }
      createLabel() {
        const created = z(this.htmlElement, ".p-button-label");
        if (!created && this.label) {
          let labelElement = this.document.createElement("span");
          if (this.icon && !this.label) {
            labelElement.setAttribute("aria-hidden", "true");
          }
          labelElement.className = "p-button-label";
          labelElement.appendChild(this.document.createTextNode(this.label));
          this.htmlElement.appendChild(labelElement);
        }
      }
      createIcon() {
        const created = z(this.htmlElement, ".p-button-icon");
        if (!created && (this.icon || this.loading)) {
          let iconElement = this.document.createElement("span");
          iconElement.className = "p-button-icon";
          iconElement.setAttribute("aria-hidden", "true");
          let iconPosClass = this.label ? "p-button-icon-" + this.iconPos : null;
          if (iconPosClass) {
            W(iconElement, iconPosClass);
          }
          let iconClass = this.getIconClass();
          if (iconClass) {
            W(iconElement, iconClass);
          }
          if (!this.loadingIcon && this.loading) {
            iconElement.innerHTML = this.spinnerIcon;
          }
          this.htmlElement.insertBefore(iconElement, this.htmlElement.firstChild);
        }
      }
      updateLabel() {
        let labelElement = z(this.htmlElement, ".p-button-label");
        if (!this.label) {
          labelElement && this.htmlElement.removeChild(labelElement);
          return;
        }
        labelElement ? labelElement.textContent = this.label : this.createLabel();
      }
      updateIcon() {
        let iconElement = z(this.htmlElement, ".p-button-icon");
        let labelElement = z(this.htmlElement, ".p-button-label");
        if (this.loading && !this.loadingIcon && iconElement) {
          iconElement.innerHTML = this.spinnerIcon;
        } else if (iconElement?.innerHTML) {
          iconElement.innerHTML = "";
        }
        if (iconElement) {
          if (this.iconPos) {
            iconElement.className = "p-button-icon " + (labelElement ? "p-button-icon-" + this.iconPos : "") + " " + this.getIconClass();
          } else {
            iconElement.className = "p-button-icon " + this.getIconClass();
          }
        } else {
          this.createIcon();
        }
      }
      getIconClass() {
        return this.loading ? "p-button-loading-icon " + (this.loadingIcon ? this.loadingIcon : "p-icon") : this.icon || "p-hidden";
      }
      ngOnDestroy() {
        this.initialized = false;
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonDirective, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.2.0", version: "20.1.3", type: _ButtonDirective, isStandalone: true, selector: "[pButton]", inputs: { iconPos: { classPropertyName: "iconPos", publicName: "iconPos", isSignal: false, isRequired: false, transformFunction: null }, loadingIcon: { classPropertyName: "loadingIcon", publicName: "loadingIcon", isSignal: false, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: false, isRequired: false, transformFunction: null }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: false, isRequired: false, transformFunction: null }, raised: { classPropertyName: "raised", publicName: "raised", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, rounded: { classPropertyName: "rounded", publicName: "rounded", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, text: { classPropertyName: "text", publicName: "text", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, outlined: { classPropertyName: "outlined", publicName: "outlined", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, plain: { classPropertyName: "plain", publicName: "plain", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: false, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, buttonProps: { classPropertyName: "buttonProps", publicName: "buttonProps", isSignal: false, isRequired: false, transformFunction: null } }, host: { properties: { "class.p-button-icon-only": "isIconOnly()", "class.p-button-text": "isTextButton()" } }, providers: [ButtonStyle], queries: [{ propertyName: "iconSignal", first: true, predicate: ButtonIcon, descendants: true, isSignal: true }, { propertyName: "labelSignal", first: true, predicate: ButtonLabel, descendants: true, isSignal: true }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonDirective, decorators: [{
      type: Directive,
      args: [{
        selector: "[pButton]",
        standalone: true,
        providers: [ButtonStyle],
        host: {
          "[class.p-button-icon-only]": "isIconOnly()",
          "[class.p-button-text]": "isTextButton()"
        }
      }]
    }], propDecorators: { iconPos: [{
      type: Input
    }], loadingIcon: [{
      type: Input
    }], loading: [{
      type: Input
    }], severity: [{
      type: Input
    }], raised: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rounded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], text: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], outlined: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], size: [{
      type: Input
    }], plain: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], label: [{
      type: Input
    }], icon: [{
      type: Input
    }], buttonProps: [{
      type: Input
    }] } });
    Button = class _Button extends BaseComponent {
      /**
       * Type of the button.
       * @group Props
       */
      type = "button";
      /**
       * Position of the icon.
       * @group Props
       */
      iconPos = "left";
      /**
       * Name of the icon.
       * @group Props
       */
      icon;
      /**
       * Value of the badge.
       * @group Props
       */
      badge;
      /**
       * Uses to pass attributes to the label's DOM element.
       * @group Props
       */
      label;
      /**
       * When present, it specifies that the component should be disabled.
       * @group Props
       */
      disabled;
      /**
       * Whether the button is in loading state.
       * @group Props
       */
      loading = false;
      /**
       * Icon to display in loading state.
       * @group Props
       */
      loadingIcon;
      /**
       * Add a shadow to indicate elevation.
       * @group Props
       */
      raised = false;
      /**
       * Add a circular border radius to the button.
       * @group Props
       */
      rounded = false;
      /**
       * Add a textual class to the button without a background initially.
       * @group Props
       */
      text = false;
      /**
       * Add a plain textual class to the button without a background initially.
       * @group Props
       */
      plain = false;
      /**
       * Defines the style of the button.
       * @group Props
       */
      severity;
      /**
       * Add a border class without a background initially.
       * @group Props
       */
      outlined = false;
      /**
       * Add a link style to the button.
       * @group Props
       */
      link = false;
      /**
       * Add a tabindex to the button.
       * @group Props
       */
      tabindex;
      /**
       * Defines the size of the button.
       * @group Props
       */
      size;
      /**
       * Specifies the variant of the component.
       * @group Props
       */
      variant;
      /**
       * Inline style of the element.
       * @group Props
       */
      style;
      /**
       * Class of the element.
       * @group Props
       */
      styleClass;
      /**
       * Style class of the badge.
       * @group Props
       * @deprecated use badgeSeverity instead.
       */
      badgeClass;
      /**
       * Severity type of the badge.
       * @group Props
       * @defaultValue secondary
       */
      badgeSeverity = "secondary";
      /**
       * Used to define a string that autocomplete attribute the current element.
       * @group Props
       */
      ariaLabel;
      /**
       * Button props as an object.
       * @group Props
       */
      buttonProps;
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus;
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue undefined
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * Callback to execute when button is clicked.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (click).
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      onClick = new EventEmitter();
      /**
       * Callback to execute when button is focused.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (focus).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      onFocus = new EventEmitter();
      /**
       * Callback to execute when button loses focus.
       * This event is intended to be used with the <p-button> component. Using a regular <button> element, use (blur).
       * @param {FocusEvent} event - Focus event.
       * @group Emits
       */
      onBlur = new EventEmitter();
      /**
       * Template of the content.
       * @group Templates
       **/
      contentTemplate;
      /**
       * Template of the loading.
       * @group Templates
       **/
      loadingIconTemplate;
      /**
       * Template of the icon.
       * @group Templates
       **/
      iconTemplate;
      templates;
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      _componentStyle = inject(ButtonStyle);
      _contentTemplate;
      _iconTemplate;
      _loadingIconTemplate;
      ngAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "content":
              this._contentTemplate = item.template;
              break;
            case "icon":
              this._iconTemplate = item.template;
              break;
            case "loadingicon":
              this._loadingIconTemplate = item.template;
              break;
            default:
              this._contentTemplate = item.template;
              break;
          }
        });
      }
      spinnerIconClass() {
        return Object.entries(this.iconClass()).filter(([, value]) => !!value).reduce((acc, [key]) => acc + ` ${key}`, "p-button-loading-icon");
      }
      iconClass() {
        return {
          [`p-button-loading-icon pi-spin ${this.loadingIcon ?? ""}`]: this.loading,
          "p-button-icon": true,
          "p-button-icon-left": this.iconPos === "left" && this.label,
          "p-button-icon-right": this.iconPos === "right" && this.label,
          "p-button-icon-top": this.iconPos === "top" && this.label,
          "p-button-icon-bottom": this.iconPos === "bottom" && this.label
        };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Button, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _Button, isStandalone: true, selector: "p-button", inputs: { type: { classPropertyName: "type", publicName: "type", isSignal: false, isRequired: false, transformFunction: null }, iconPos: { classPropertyName: "iconPos", publicName: "iconPos", isSignal: false, isRequired: false, transformFunction: null }, icon: { classPropertyName: "icon", publicName: "icon", isSignal: false, isRequired: false, transformFunction: null }, badge: { classPropertyName: "badge", publicName: "badge", isSignal: false, isRequired: false, transformFunction: null }, label: { classPropertyName: "label", publicName: "label", isSignal: false, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, loadingIcon: { classPropertyName: "loadingIcon", publicName: "loadingIcon", isSignal: false, isRequired: false, transformFunction: null }, raised: { classPropertyName: "raised", publicName: "raised", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, rounded: { classPropertyName: "rounded", publicName: "rounded", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, text: { classPropertyName: "text", publicName: "text", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, plain: { classPropertyName: "plain", publicName: "plain", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, severity: { classPropertyName: "severity", publicName: "severity", isSignal: false, isRequired: false, transformFunction: null }, outlined: { classPropertyName: "outlined", publicName: "outlined", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, link: { classPropertyName: "link", publicName: "link", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, tabindex: { classPropertyName: "tabindex", publicName: "tabindex", isSignal: false, isRequired: false, transformFunction: numberAttribute }, size: { classPropertyName: "size", publicName: "size", isSignal: false, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: false, isRequired: false, transformFunction: null }, style: { classPropertyName: "style", publicName: "style", isSignal: false, isRequired: false, transformFunction: null }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, badgeClass: { classPropertyName: "badgeClass", publicName: "badgeClass", isSignal: false, isRequired: false, transformFunction: null }, badgeSeverity: { classPropertyName: "badgeSeverity", publicName: "badgeSeverity", isSignal: false, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: false, isRequired: false, transformFunction: null }, buttonProps: { classPropertyName: "buttonProps", publicName: "buttonProps", isSignal: false, isRequired: false, transformFunction: null }, autofocus: { classPropertyName: "autofocus", publicName: "autofocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, providers: [ButtonStyle], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"], descendants: true }, { propertyName: "loadingIconTemplate", first: true, predicate: ["loadingicon"], descendants: true }, { propertyName: "iconTemplate", first: true, predicate: ["icon"], descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: core_exports, template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cx('loadingIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <svg data-p-icon="spinner" *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), spinnerIconClass())" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="cx('icon')" [attr.data-pc-section]="'icon'"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon') }"></ng-template>
            </ng-container>
            <span [class]="cx('label')" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity"></p-badge>
        </button>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "directive", type: AutoFocus, selector: "[pAutoFocus]", inputs: ["pAutoFocus"] }, { kind: "component", type: SpinnerIcon, selector: '[data-p-icon="spinner"]' }, { kind: "ngmodule", type: BadgeModule }, { kind: "component", type: Badge, selector: "p-badge", inputs: ["styleClass", "badgeSize", "size", "severity", "value", "badgeDisabled"] }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Button, decorators: [{
      type: Component,
      args: [{
        selector: "p-button",
        standalone: true,
        imports: [CommonModule, Ripple, AutoFocus, SpinnerIcon, BadgeModule, SharedModule],
        template: `
        <button
            [attr.type]="type || buttonProps?.type"
            [attr.aria-label]="ariaLabel || buttonProps?.ariaLabel"
            [ngStyle]="style || buttonProps?.style"
            [disabled]="disabled || loading || buttonProps?.disabled"
            [class]="cn(cx('root'), styleClass, buttonProps?.styleClass)"
            (click)="onClick.emit($event)"
            (focus)="onFocus.emit($event)"
            (blur)="onBlur.emit($event)"
            pRipple
            [attr.data-pc-name]="'button'"
            [attr.data-pc-section]="'root'"
            [attr.tabindex]="tabindex || buttonProps?.tabindex"
            [pAutoFocus]="autofocus || buttonProps?.autofocus"
        >
            <ng-content></ng-content>
            <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            <ng-container *ngIf="loading">
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cx('loadingIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'"></span>
                    <svg data-p-icon="spinner" *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), spinnerIconClass())" [spin]="true" [attr.aria-hidden]="true" [attr.data-pc-section]="'loadingicon'" />
                </ng-container>
                <ng-template [ngIf]="loadingIconTemplate || _loadingIconTemplate" *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate; context: { class: cx('loadingIcon') }"></ng-template>
            </ng-container>
            <ng-container *ngIf="!loading">
                <span *ngIf="icon && !iconTemplate && !_iconTemplate" [class]="cx('icon')" [attr.data-pc-section]="'icon'"></span>
                <ng-template [ngIf]="!icon && (iconTemplate || _iconTemplate)" *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { class: cx('icon') }"></ng-template>
            </ng-container>
            <span [class]="cx('label')" [attr.aria-hidden]="icon && !label" *ngIf="!contentTemplate && !_contentTemplate && label" [attr.data-pc-section]="'label'">{{ label }}</span>
            <p-badge *ngIf="!contentTemplate && !_contentTemplate && badge" [value]="badge" [severity]="badgeSeverity"></p-badge>
        </button>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [ButtonStyle]
      }]
    }], propDecorators: { type: [{
      type: Input
    }], iconPos: [{
      type: Input
    }], icon: [{
      type: Input
    }], badge: [{
      type: Input
    }], label: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], loading: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], loadingIcon: [{
      type: Input
    }], raised: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], rounded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], text: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], plain: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], severity: [{
      type: Input
    }], outlined: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], link: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabindex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], size: [{
      type: Input
    }], variant: [{
      type: Input
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], badgeClass: [{
      type: Input
    }], badgeSeverity: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }], buttonProps: [{
      type: Input
    }], autofocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onClick: [{
      type: Output
    }], onFocus: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], contentTemplate: [{
      type: ContentChild,
      args: ["content"]
    }], loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon"]
    }], iconTemplate: [{
      type: ContentChild,
      args: ["icon"]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    ButtonModule = class _ButtonModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonModule, imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon], exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ButtonModule, imports: [CommonModule, Button, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ButtonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CommonModule, ButtonDirective, Button, SharedModule, ButtonLabel, ButtonIcon],
        exports: [ButtonDirective, Button, ButtonLabel, ButtonIcon, SharedModule]
      }]
    }] });
  }
});

// src/app/components/navbar/navbar.ts
var Navbar;
var init_navbar2 = __esm({
  "src/app/components/navbar/navbar.ts"() {
    "use strict";
    init_tslib_es6();
    init_navbar();
    init_core();
    init_router();
    init_primeng_button();
    Navbar = class Navbar2 {
      router = inject(Router);
      isDarkMode = signal(false);
      ngOnInit() {
        const element = document.documentElement;
        const stored = localStorage.getItem("darkMode");
        if (stored === "1") {
          element.classList.add("my-app-dark");
          this.isDarkMode.set(true);
          return;
        }
        if (stored === "0") {
          element.classList.remove("my-app-dark");
          this.isDarkMode.set(false);
          return;
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          element.classList.add("my-app-dark");
          this.isDarkMode.set(true);
        }
      }
      toggleDarkMode() {
        const element = document.documentElement;
        element.classList.toggle("my-app-dark");
        this.isDarkMode.set(element.classList.contains("my-app-dark"));
        localStorage.setItem("darkMode", this.isDarkMode() ? "1" : "0");
      }
    };
    Navbar = __decorate([
      Component({
        selector: "app-navbar",
        imports: [ButtonModule],
        template: navbar_default
      })
    ], Navbar);
  }
});

export {
  AutoFocus,
  init_primeng_autofocus,
  ButtonModule,
  init_primeng_button,
  Navbar,
  init_navbar2 as init_navbar
};
//# sourceMappingURL=chunk-JNYVCWJ3.js.map
