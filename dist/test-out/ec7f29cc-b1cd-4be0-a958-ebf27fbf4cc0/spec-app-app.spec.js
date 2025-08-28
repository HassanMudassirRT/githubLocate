import {
  init_components
} from "./chunk-WEV7YRJV.js";
import "./chunk-DZOGRK4R.js";
import "./chunk-E2CWIQEH.js";
import {
  init_primeng_utils,
  zindexutils
} from "./chunk-WGD7ETYN.js";
import "./chunk-WEAFEU76.js";
import "./chunk-3IXB2B7Z.js";
import "./chunk-PVR5ZDFD.js";
import "./chunk-4NVC6HZR.js";
import {
  animate,
  animateChild,
  init_animations,
  query,
  state,
  style,
  transition,
  trigger
} from "./chunk-IQJJM67C.js";
import {
  Footer
} from "./chunk-K7TGSAN2.js";
import "./chunk-FU45V4IG.js";
import {
  Navbar
} from "./chunk-E2EAI765.js";
import "./chunk-GM2Q5ZIG.js";
import "./chunk-QKCPCY2R.js";
import {
  RouterOutlet,
  init_router
} from "./chunk-V3N65XNH.js";
import "./chunk-3LYCJGDS.js";
import {
  CheckIcon,
  ExclamationTriangleIcon,
  InfoCircleIcon,
  TimesCircleIcon,
  TimesIcon,
  init_primeng_icons
} from "./chunk-F5XSVYHG.js";
import {
  BaseComponent,
  BaseStyle,
  Kt,
  MessageService,
  PrimeNG,
  PrimeTemplate,
  SharedModule,
  a,
  init_dist,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent,
  init_primeng_config,
  s2 as s
} from "./chunk-WJSIDV3S.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet,
  init_common
} from "./chunk-HINAUQGB.js";
import "./chunk-DBTO2K6A.js";
import "./chunk-KHYIDAXO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  FactoryTarget,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  TestBed,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  core_exports,
  init_core,
  init_testing,
  init_tslib_es6,
  inject,
  numberAttribute,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/app.html
var app_default;
var init_app = __esm({
  "angular:jit:template:src/app/app.html"() {
    app_default = '<app-navbar />\n<p-toast position="bottom-right"/>\n<router-outlet />\n<app-footer />\n';
  }
});

// angular:jit:style:src/app/app.css
var app_default2;
var init_app2 = __esm({
  "angular:jit:style:src/app/app.css"() {
    app_default2 = "/* src/app/app.css */\n/*# sourceMappingURL=app.css.map */\n";
  }
});

// node_modules/@primeuix/styles/dist/toast/index.mjs
var style2;
var init_toast = __esm({
  "node_modules/@primeuix/styles/dist/toast/index.mjs"() {
    "use strict";
    style2 = "\n    .p-toast {\n        width: dt('toast.width');\n        white-space: pre-line;\n        word-break: break-word;\n    }\n\n    .p-toast-message {\n        margin: 0 0 1rem 0;\n    }\n\n    .p-toast-message-icon {\n        flex-shrink: 0;\n        font-size: dt('toast.icon.size');\n        width: dt('toast.icon.size');\n        height: dt('toast.icon.size');\n    }\n\n    .p-toast-message-content {\n        display: flex;\n        align-items: flex-start;\n        padding: dt('toast.content.padding');\n        gap: dt('toast.content.gap');\n    }\n\n    .p-toast-message-text {\n        flex: 1 1 auto;\n        display: flex;\n        flex-direction: column;\n        gap: dt('toast.text.gap');\n    }\n\n    .p-toast-summary {\n        font-weight: dt('toast.summary.font.weight');\n        font-size: dt('toast.summary.font.size');\n    }\n\n    .p-toast-detail {\n        font-weight: dt('toast.detail.font.weight');\n        font-size: dt('toast.detail.font.size');\n    }\n\n    .p-toast-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: pointer;\n        background: transparent;\n        transition:\n            background dt('toast.transition.duration'),\n            color dt('toast.transition.duration'),\n            outline-color dt('toast.transition.duration'),\n            box-shadow dt('toast.transition.duration');\n        outline-color: transparent;\n        color: inherit;\n        width: dt('toast.close.button.width');\n        height: dt('toast.close.button.height');\n        border-radius: dt('toast.close.button.border.radius');\n        margin: -25% 0 0 0;\n        right: -25%;\n        padding: 0;\n        border: none;\n        user-select: none;\n    }\n\n    .p-toast-close-button:dir(rtl) {\n        margin: -25% 0 0 auto;\n        left: -25%;\n        right: auto;\n    }\n\n    .p-toast-message-info,\n    .p-toast-message-success,\n    .p-toast-message-warn,\n    .p-toast-message-error,\n    .p-toast-message-secondary,\n    .p-toast-message-contrast {\n        border-width: dt('toast.border.width');\n        border-style: solid;\n        backdrop-filter: blur(dt('toast.blur'));\n        border-radius: dt('toast.border.radius');\n    }\n\n    .p-toast-close-icon {\n        font-size: dt('toast.close.icon.size');\n        width: dt('toast.close.icon.size');\n        height: dt('toast.close.icon.size');\n    }\n\n    .p-toast-close-button:focus-visible {\n        outline-width: dt('focus.ring.width');\n        outline-style: dt('focus.ring.style');\n        outline-offset: dt('focus.ring.offset');\n    }\n\n    .p-toast-message-info {\n        background: dt('toast.info.background');\n        border-color: dt('toast.info.border.color');\n        color: dt('toast.info.color');\n        box-shadow: dt('toast.info.shadow');\n    }\n\n    .p-toast-message-info .p-toast-detail {\n        color: dt('toast.info.detail.color');\n    }\n\n    .p-toast-message-info .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.info.close.button.focus.ring.color');\n        box-shadow: dt('toast.info.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-info .p-toast-close-button:hover {\n        background: dt('toast.info.close.button.hover.background');\n    }\n\n    .p-toast-message-success {\n        background: dt('toast.success.background');\n        border-color: dt('toast.success.border.color');\n        color: dt('toast.success.color');\n        box-shadow: dt('toast.success.shadow');\n    }\n\n    .p-toast-message-success .p-toast-detail {\n        color: dt('toast.success.detail.color');\n    }\n\n    .p-toast-message-success .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.success.close.button.focus.ring.color');\n        box-shadow: dt('toast.success.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-success .p-toast-close-button:hover {\n        background: dt('toast.success.close.button.hover.background');\n    }\n\n    .p-toast-message-warn {\n        background: dt('toast.warn.background');\n        border-color: dt('toast.warn.border.color');\n        color: dt('toast.warn.color');\n        box-shadow: dt('toast.warn.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-detail {\n        color: dt('toast.warn.detail.color');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.warn.close.button.focus.ring.color');\n        box-shadow: dt('toast.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-warn .p-toast-close-button:hover {\n        background: dt('toast.warn.close.button.hover.background');\n    }\n\n    .p-toast-message-error {\n        background: dt('toast.error.background');\n        border-color: dt('toast.error.border.color');\n        color: dt('toast.error.color');\n        box-shadow: dt('toast.error.shadow');\n    }\n\n    .p-toast-message-error .p-toast-detail {\n        color: dt('toast.error.detail.color');\n    }\n\n    .p-toast-message-error .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.error.close.button.focus.ring.color');\n        box-shadow: dt('toast.error.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-error .p-toast-close-button:hover {\n        background: dt('toast.error.close.button.hover.background');\n    }\n\n    .p-toast-message-secondary {\n        background: dt('toast.secondary.background');\n        border-color: dt('toast.secondary.border.color');\n        color: dt('toast.secondary.color');\n        box-shadow: dt('toast.secondary.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-detail {\n        color: dt('toast.secondary.detail.color');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.secondary.close.button.focus.ring.color');\n        box-shadow: dt('toast.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-secondary .p-toast-close-button:hover {\n        background: dt('toast.secondary.close.button.hover.background');\n    }\n\n    .p-toast-message-contrast {\n        background: dt('toast.contrast.background');\n        border-color: dt('toast.contrast.border.color');\n        color: dt('toast.contrast.color');\n        box-shadow: dt('toast.contrast.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-detail {\n        color: dt('toast.contrast.detail.color');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:focus-visible {\n        outline-color: dt('toast.contrast.close.button.focus.ring.color');\n        box-shadow: dt('toast.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-toast-message-contrast .p-toast-close-button:hover {\n        background: dt('toast.contrast.close.button.hover.background');\n    }\n\n    .p-toast-top-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-bottom-center {\n        transform: translateX(-50%);\n    }\n\n    .p-toast-center {\n        min-width: 20vw;\n        transform: translate(-50%, -50%);\n    }\n\n    .p-toast-message-enter-from {\n        opacity: 0;\n        transform: translateY(50%);\n    }\n\n    .p-toast-message-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-toast .p-toast-message.p-toast-message-leave-to {\n        max-height: 0;\n        opacity: 0;\n        margin-bottom: 0;\n        overflow: hidden;\n    }\n\n    .p-toast-message-enter-active {\n        transition:\n            transform 0.3s,\n            opacity 0.3s;\n    }\n\n    .p-toast-message-leave-active {\n        transition:\n            max-height 0.45s cubic-bezier(0, 1, 0, 1),\n            opacity 0.3s,\n            margin-bottom 0.3s;\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-toast.mjs
var inlineStyles, classes, ToastStyle, ToastClasses, ToastItem, Toast, ToastModule;
var init_primeng_toast = __esm({
  "node_modules/primeng/fesm2022/primeng-toast.mjs"() {
    "use strict";
    init_animations();
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_icons();
    init_primeng_utils();
    init_toast();
    init_primeng_base();
    inlineStyles = {
      root: ({ instance }) => {
        const { _position } = instance;
        return {
          position: "fixed",
          top: _position === "top-right" || _position === "top-left" || _position === "top-center" ? "20px" : _position === "center" ? "50%" : null,
          right: (_position === "top-right" || _position === "bottom-right") && "20px",
          bottom: (_position === "bottom-left" || _position === "bottom-right" || _position === "bottom-center") && "20px",
          left: _position === "top-left" || _position === "bottom-left" ? "20px" : _position === "center" || _position === "top-center" || _position === "bottom-center" ? "50%" : null
        };
      }
    };
    classes = {
      root: ({ instance }) => ["p-toast p-component", `p-toast-${instance._position}`],
      message: ({ instance }) => ({
        "p-toast-message": true,
        "p-toast-message-info": instance.message.severity === "info" || instance.message.severity === void 0,
        "p-toast-message-warn": instance.message.severity === "warn",
        "p-toast-message-error": instance.message.severity === "error",
        "p-toast-message-success": instance.message.severity === "success",
        "p-toast-message-secondary": instance.message.severity === "secondary",
        "p-toast-message-contrast": instance.message.severity === "contrast"
      }),
      messageContent: "p-toast-message-content",
      messageIcon: ({ instance }) => ({
        "p-toast-message-icon": true,
        [`pi ${instance.message.icon}`]: !!instance.message.icon
      }),
      messageText: "p-toast-message-text",
      summary: "p-toast-summary",
      detail: "p-toast-detail",
      closeButton: "p-toast-close-button",
      closeIcon: ({ instance }) => ({
        "p-toast-close-icon": true,
        [`pi ${instance.message.closeIcon}`]: !!instance.message.closeIcon
      })
    };
    ToastStyle = class _ToastStyle extends BaseStyle {
      name = "toast";
      theme = style2;
      classes = classes;
      inlineStyles = inlineStyles;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ToastStyle, decorators: [{
      type: Injectable
    }] });
    (function(ToastClasses2) {
      ToastClasses2["root"] = "p-toast";
      ToastClasses2["message"] = "p-toast-message";
      ToastClasses2["messageContent"] = "p-toast-message-content";
      ToastClasses2["messageIcon"] = "p-toast-message-icon";
      ToastClasses2["messageText"] = "p-toast-message-text";
      ToastClasses2["summary"] = "p-toast-summary";
      ToastClasses2["detail"] = "p-toast-detail";
      ToastClasses2["closeButton"] = "p-toast-close-button";
      ToastClasses2["closeIcon"] = "p-toast-close-icon";
    })(ToastClasses || (ToastClasses = {}));
    ToastItem = class _ToastItem extends BaseComponent {
      zone;
      message;
      index;
      life;
      template;
      headlessTemplate;
      showTransformOptions;
      hideTransformOptions;
      showTransitionOptions;
      hideTransitionOptions;
      onClose = new EventEmitter();
      _componentStyle = inject(ToastStyle);
      timeout;
      constructor(zone) {
        super();
        this.zone = zone;
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        this.initTimeout();
      }
      initTimeout() {
        if (!this.message?.sticky) {
          this.zone.runOutsideAngular(() => {
            this.timeout = setTimeout(() => {
              this.onClose.emit({
                index: this.index,
                message: this.message
              });
            }, this.message?.life || this.life || 3e3);
          });
        }
      }
      clearTimeout() {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
      }
      onMouseEnter() {
        this.clearTimeout();
      }
      onMouseLeave() {
        this.initTimeout();
      }
      onCloseIconClick = (event) => {
        this.clearTimeout();
        this.onClose.emit({
          index: this.index,
          message: this.message
        });
        event.preventDefault();
      };
      get closeAriaLabel() {
        return this.config.translation.aria ? this.config.translation.aria.close : void 0;
      }
      ngOnDestroy() {
        this.clearTimeout();
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastItem, deps: [{ token: NgZone }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.1.3", type: _ToastItem, isStandalone: true, selector: "p-toastItem", inputs: { message: "message", index: ["index", "index", numberAttribute], life: ["life", "life", numberAttribute], template: "template", headlessTemplate: "headlessTemplate", showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions" }, outputs: { onClose: "onClose" }, providers: [ToastStyle], usesInheritance: true, ngImport: core_exports, template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="cn(cx('message'), message?.styleClass)"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [class]="cn(cx('messageContent'), message?.contentStyleClass)" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <svg data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <svg data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        }
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: CheckIcon, selector: '[data-p-icon="check"]' }, { kind: "component", type: ExclamationTriangleIcon, selector: '[data-p-icon="exclamation-triangle"]' }, { kind: "component", type: InfoCircleIcon, selector: '[data-p-icon="info-circle"]' }, { kind: "component", type: TimesIcon, selector: '[data-p-icon="times"]' }, { kind: "component", type: TimesCircleIcon, selector: '[data-p-icon="times-circle"]' }, { kind: "ngmodule", type: SharedModule }], animations: [
        trigger("messageState", [
          state("visible", style({
            transform: "translateY(0)",
            opacity: 1
          })),
          transition("void => *", [
            style({
              transform: "{{showTransformParams}}",
              opacity: 0
            }),
            animate("{{showTransitionParams}}")
          ]),
          transition("* => void", [
            animate("{{hideTransitionParams}}", style({
              height: 0,
              opacity: 0,
              transform: "{{hideTransformParams}}"
            }))
          ])
        ])
      ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ToastItem, decorators: [{
      type: Component,
      args: [{
        selector: "p-toastItem",
        standalone: true,
        imports: [CommonModule, CheckIcon, ExclamationTriangleIcon, InfoCircleIcon, TimesIcon, TimesCircleIcon, SharedModule],
        template: `
        <div
            #container
            [attr.id]="message?.id"
            [class]="cn(cx('message'), message?.styleClass)"
            [@messageState]="{
                value: 'visible',
                params: {
                    showTransformParams: showTransformOptions,
                    hideTransformParams: hideTransformOptions,
                    showTransitionParams: showTransitionOptions,
                    hideTransitionParams: hideTransitionOptions
                }
            }"
            (mouseenter)="onMouseEnter()"
            (mouseleave)="onMouseLeave()"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            [attr.data-pc-name]="'toast'"
            [attr.data-pc-section]="'root'"
        >
            @if (headlessTemplate) {
                <ng-container *ngTemplateOutlet="headlessTemplate; context: { $implicit: message, closeFn: onCloseIconClick }"></ng-container>
            } @else {
                <div [class]="cn(cx('messageContent'), message?.contentStyleClass)" [attr.data-pc-section]="'content'">
                    <ng-container *ngIf="!template">
                        @if (message.icon) {
                            <span [class]="cn(cx('messageIcon'), message?.icon)"></span>
                        } @else {
                            @switch (message.severity) {
                                @case ('success') {
                                    <svg data-p-icon="check" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('info') {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('error') {
                                    <svg data-p-icon="times-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @case ('warn') {
                                    <svg data-p-icon="exclamation-triangle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                                @default {
                                    <svg data-p-icon="info-circle" [class]="cx('messageIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'icon'" />
                                }
                            }
                        }
                        <div [ngClass]="cx('messageText')" [attr.data-pc-section]="'text'">
                            <div [ngClass]="cx('summary')" [attr.data-pc-section]="'summary'">
                                {{ message.summary }}
                            </div>
                            <div [ngClass]="cx('detail')" [attr.data-pc-section]="'detail'">{{ message.detail }}</div>
                        </div>
                    </ng-container>
                    <ng-container *ngTemplateOutlet="template; context: { $implicit: message }"></ng-container>
                    @if (message?.closable !== false) {
                        <div>
                            <button type="button" [attr.class]="cx('closeButton')" (click)="onCloseIconClick($event)" (keydown.enter)="onCloseIconClick($event)" [attr.aria-label]="closeAriaLabel" [attr.data-pc-section]="'closebutton'" autofocus>
                                @if (message.closeIcon) {
                                    <span *ngIf="message.closeIcon" [class]="cn(cx('closeIcon'), message?.closeIcon)"></span>
                                } @else {
                                    <svg data-p-icon="times" [class]="cx('closeIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'closeicon'" />
                                }
                            </button>
                        </div>
                    }
                </div>
            }
        </div>
    `,
        animations: [
          trigger("messageState", [
            state("visible", style({
              transform: "translateY(0)",
              opacity: 1
            })),
            transition("void => *", [
              style({
                transform: "{{showTransformParams}}",
                opacity: 0
              }),
              animate("{{showTransitionParams}}")
            ]),
            transition("* => void", [
              animate("{{hideTransitionParams}}", style({
                height: 0,
                opacity: 0,
                transform: "{{hideTransformParams}}"
              }))
            ])
          ])
        ],
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [ToastStyle]
      }]
    }], ctorParameters: () => [{ type: NgZone }], propDecorators: { message: [{
      type: Input
    }], index: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], life: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], template: [{
      type: Input
    }], headlessTemplate: [{
      type: Input
    }], showTransformOptions: [{
      type: Input
    }], hideTransformOptions: [{
      type: Input
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], onClose: [{
      type: Output
    }] } });
    Toast = class _Toast extends BaseComponent {
      /**
       * Key of the message in case message is targeted to a specific toast component.
       * @group Props
       */
      key;
      /**
       * Whether to automatically manage layering.
       * @group Props
       */
      autoZIndex = true;
      /**
       * Base zIndex value to use in layering.
       * @group Props
       */
      baseZIndex = 0;
      /**
       * The default time to display messages for in milliseconds.
       * @group Props
       */
      life = 3e3;
      /**
       * Inline class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Position of the toast in viewport.
       * @group Props
       */
      get position() {
        return this._position;
      }
      set position(value) {
        this._position = value;
        this.cd.markForCheck();
      }
      /**
       * It does not add the new message if there is already a toast displayed with the same content
       * @group Props
       */
      preventOpenDuplicates = false;
      /**
       * Displays only once a message with the same content.
       * @group Props
       */
      preventDuplicates = false;
      /**
       * Transform options of the show animation.
       * @group Props
       */
      showTransformOptions = "translateY(100%)";
      /**
       * Transform options of the hide animation.
       * @group Props
       */
      hideTransformOptions = "translateY(-100%)";
      /**
       * Transition options of the show animation.
       * @group Props
       */
      showTransitionOptions = "300ms ease-out";
      /**
       * Transition options of the hide animation.
       * @group Props
       */
      hideTransitionOptions = "250ms ease-in";
      /**
       * Object literal to define styles per screen size.
       * @group Props
       */
      breakpoints;
      /**
       * Callback to invoke when a message is closed.
       * @param {ToastCloseEvent} event - custom close event.
       * @group Emits
       */
      onClose = new EventEmitter();
      /**
       * Custom template of message.
       * @group Templates
       */
      template;
      /**
       * Custom headless template.
       * @group Templates
       */
      headlessTemplate;
      messageSubscription;
      clearSubscription;
      messages;
      messagesArchieve;
      _position = "top-right";
      messageService = inject(MessageService);
      _componentStyle = inject(ToastStyle);
      styleElement;
      id = s("pn_id_");
      templates;
      constructor() {
        super();
      }
      ngOnInit() {
        super.ngOnInit();
        this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
          if (messages) {
            if (Array.isArray(messages)) {
              const filteredMessages = messages.filter((m) => this.canAdd(m));
              this.add(filteredMessages);
            } else if (this.canAdd(messages)) {
              this.add([messages]);
            }
          }
        });
        this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
          if (key) {
            if (this.key === key) {
              this.messages = null;
            }
          } else {
            this.messages = null;
          }
          this.cd.markForCheck();
        });
      }
      _template;
      _headlessTemplate;
      ngAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "message":
              this._template = item.template;
              break;
            case "headless":
              this._headlessTemplate = item.template;
              break;
            default:
              this._template = item.template;
              break;
          }
        });
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.breakpoints) {
          this.createStyle();
        }
      }
      add(messages) {
        this.messages = this.messages ? [...this.messages, ...messages] : [...messages];
        if (this.preventDuplicates) {
          this.messagesArchieve = this.messagesArchieve ? [...this.messagesArchieve, ...messages] : [...messages];
        }
        this.cd.markForCheck();
      }
      canAdd(message) {
        let allow = this.key === message.key;
        if (allow && this.preventOpenDuplicates) {
          allow = !this.containsMessage(this.messages, message);
        }
        if (allow && this.preventDuplicates) {
          allow = !this.containsMessage(this.messagesArchieve, message);
        }
        return allow;
      }
      containsMessage(collection, message) {
        if (!collection) {
          return false;
        }
        return collection.find((m) => {
          return m.summary === message.summary && m.detail == message.detail && m.severity === message.severity;
        }) != null;
      }
      onMessageClose(event) {
        this.messages?.splice(event.index, 1);
        this.onClose.emit({
          message: event.message
        });
        this.cd.detectChanges();
      }
      onAnimationStart(event) {
        if (event.fromState === "void") {
          this.renderer.setAttribute(this.el?.nativeElement, this.id, "");
          if (this.autoZIndex && this.el?.nativeElement.style.zIndex === "") {
            zindexutils.set("modal", this.el?.nativeElement, this.baseZIndex || this.config.zIndex.modal);
          }
        }
      }
      onAnimationEnd(event) {
        if (event.toState === "void") {
          if (this.autoZIndex && a(this.messages)) {
            zindexutils.clear(this.el?.nativeElement);
          }
        }
      }
      createStyle() {
        if (!this.styleElement) {
          this.styleElement = this.renderer.createElement("style");
          this.styleElement.type = "text/css";
          this.renderer.appendChild(this.document.head, this.styleElement);
          let innerHTML = "";
          for (let breakpoint in this.breakpoints) {
            let breakpointStyle = "";
            for (let styleProp in this.breakpoints[breakpoint]) {
              breakpointStyle += styleProp + ":" + this.breakpoints[breakpoint][styleProp] + " !important;";
            }
            innerHTML += `
                    @media screen and (max-width: ${breakpoint}) {
                        .p-toast[${this.id}] {
                           ${breakpointStyle}
                        }
                    }
                `;
          }
          this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
          Kt(this.styleElement, "nonce", this.config?.csp()?.nonce);
        }
      }
      destroyStyle() {
        if (this.styleElement) {
          this.renderer.removeChild(this.document.head, this.styleElement);
          this.styleElement = null;
        }
      }
      ngOnDestroy() {
        if (this.messageSubscription) {
          this.messageSubscription.unsubscribe();
        }
        if (this.el && this.autoZIndex) {
          zindexutils.clear(this.el.nativeElement);
        }
        if (this.clearSubscription) {
          this.clearSubscription.unsubscribe();
        }
        this.destroyStyle();
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Toast, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.1.3", type: _Toast, isStandalone: true, selector: "p-toast", inputs: { key: "key", autoZIndex: ["autoZIndex", "autoZIndex", booleanAttribute], baseZIndex: ["baseZIndex", "baseZIndex", numberAttribute], life: ["life", "life", numberAttribute], styleClass: "styleClass", position: "position", preventOpenDuplicates: ["preventOpenDuplicates", "preventOpenDuplicates", booleanAttribute], preventDuplicates: ["preventDuplicates", "preventDuplicates", booleanAttribute], showTransformOptions: "showTransformOptions", hideTransformOptions: "hideTransformOptions", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", breakpoints: "breakpoints" }, outputs: { onClose: "onClose" }, host: { properties: { "class": "cn(cx('root'), styleClass)", "style": "sx('root')" } }, providers: [ToastStyle], queries: [{ propertyName: "template", first: true, predicate: ["message"], descendants: true }, { propertyName: "headlessTemplate", first: true, predicate: ["headless"], descendants: true }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: core_exports, template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            (onClose)="onMessageClose($event)"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            @toastAnimation
            (@toastAnimation.start)="onAnimationStart($event)"
            (@toastAnimation.done)="onAnimationEnd($event)"
            [showTransformOptions]="showTransformOptions"
            [hideTransformOptions]="hideTransformOptions"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
        ></p-toastItem>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: ToastItem, selector: "p-toastItem", inputs: ["message", "index", "life", "template", "headlessTemplate", "showTransformOptions", "hideTransformOptions", "showTransitionOptions", "hideTransitionOptions"], outputs: ["onClose"] }, { kind: "ngmodule", type: SharedModule }], animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Toast, decorators: [{
      type: Component,
      args: [{
        selector: "p-toast",
        standalone: true,
        imports: [CommonModule, ToastItem, SharedModule],
        template: `
        <p-toastItem
            *ngFor="let msg of messages; let i = index"
            [message]="msg"
            [index]="i"
            [life]="life"
            (onClose)="onMessageClose($event)"
            [template]="template || _template"
            [headlessTemplate]="headlessTemplate || _headlessTemplate"
            @toastAnimation
            (@toastAnimation.start)="onAnimationStart($event)"
            (@toastAnimation.done)="onAnimationEnd($event)"
            [showTransformOptions]="showTransformOptions"
            [hideTransformOptions]="hideTransformOptions"
            [showTransitionOptions]="showTransitionOptions"
            [hideTransitionOptions]="hideTransitionOptions"
        ></p-toastItem>
    `,
        animations: [trigger("toastAnimation", [transition(":enter, :leave", [query("@*", animateChild())])])],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [ToastStyle],
        host: {
          "[class]": "cn(cx('root'), styleClass)",
          "[style]": "sx('root')"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { key: [{
      type: Input
    }], autoZIndex: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], baseZIndex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], life: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], styleClass: [{
      type: Input
    }], position: [{
      type: Input
    }], preventOpenDuplicates: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], preventDuplicates: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showTransformOptions: [{
      type: Input
    }], hideTransformOptions: [{
      type: Input
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], breakpoints: [{
      type: Input
    }], onClose: [{
      type: Output
    }], template: [{
      type: ContentChild,
      args: ["message"]
    }], headlessTemplate: [{
      type: ContentChild,
      args: ["headless"]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    ToastModule = class _ToastModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastModule, imports: [Toast, SharedModule], exports: [Toast, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ToastModule, imports: [Toast, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ToastModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Toast, SharedModule],
        exports: [Toast, SharedModule]
      }]
    }] });
  }
});

// src/app/app.ts
var App;
var init_app3 = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_app();
    init_app2();
    init_core();
    init_router();
    init_primeng_config();
    init_primeng_toast();
    init_components();
    App = class App2 {
      primeng;
      constructor(primeng) {
        this.primeng = primeng;
      }
      ngOnInit() {
        this.primeng.ripple.set(true);
      }
      static ctorParameters = () => [
        { type: PrimeNG }
      ];
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet, Navbar, Footer, ToastModule],
        template: app_default,
        styles: [app_default2]
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app3();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Hello, githubLocate");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app-app.spec.js.map
