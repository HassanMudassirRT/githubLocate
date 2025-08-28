import {
  Ripple,
  TimesIcon,
  init_primeng_icons,
  init_primeng_ripple
} from "./chunk-F5XSVYHG.js";
import {
  BaseComponent,
  BaseStyle,
  PrimeTemplate,
  SharedModule,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent
} from "./chunk-WJSIDV3S.js";
import {
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  init_common
} from "./chunk-HINAUQGB.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  EventEmitter,
  FactoryTarget,
  Inject,
  Injectable,
  Input,
  NgModule,
  Output,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  core_exports,
  init_core,
  init_tslib_es6,
  inject,
  input,
  signal,
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

// angular:jit:template:src/app/components/error-message/error-message.html
var error_message_default;
var init_error_message = __esm({
  "angular:jit:template:src/app/components/error-message/error-message.html"() {
    error_message_default = '<p-message severity="error" class="relative bottom-14 flex items-baseline p-2" size="large">\n  <i class="pi pi-exclamation-triangle" [style.fontSize.rem]="1.25"></i>\n  {{ message() }}\n</p-message>\n';
  }
});

// node_modules/@angular/animations/fesm2022/private_export.mjs
function trigger(name, definitions) {
  return { type: AnimationMetadataType.Trigger, name, definitions, options: {} };
}
function animate(timings, styles = null) {
  return { type: AnimationMetadataType.Animate, styles, timings };
}
function sequence(steps, options = null) {
  return { type: AnimationMetadataType.Sequence, steps, options };
}
function style(tokens) {
  return { type: AnimationMetadataType.Style, styles: tokens, offset: null };
}
function state(name, styles, options) {
  return { type: AnimationMetadataType.State, name, styles, options };
}
function transition(stateChangeExpr, steps, options = null) {
  return { type: AnimationMetadataType.Transition, expr: stateChangeExpr, animation: steps, options };
}
function animation(steps, options = null) {
  return { type: AnimationMetadataType.Reference, animation: steps, options };
}
function animateChild(options = null) {
  return { type: AnimationMetadataType.AnimateChild, options };
}
function useAnimation(animation2, options = null) {
  return { type: AnimationMetadataType.AnimateRef, animation: animation2, options };
}
function query(selector, animation2, options = null) {
  return { type: AnimationMetadataType.Query, selector, animation: animation2, options };
}
var AnimationMetadataType;
var init_private_export = __esm({
  "node_modules/@angular/animations/fesm2022/private_export.mjs"() {
    "use strict";
    (function(AnimationMetadataType2) {
      AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
      AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
      AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
      AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
      AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
      AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
      AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
      AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
      AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
      AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
      AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
      AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
      AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
    })(AnimationMetadataType || (AnimationMetadataType = {}));
  }
});

// node_modules/@angular/animations/fesm2022/animations.mjs
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var AnimationBuilder, AnimationFactory, BrowserAnimationBuilder, BrowserAnimationFactory, RendererAnimationPlayer;
var init_animations = __esm({
  "node_modules/@angular/animations/fesm2022/animations.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_private_export();
    init_private_export();
    AnimationBuilder = class _AnimationBuilder {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _AnimationBuilder, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _AnimationBuilder, providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: AnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root", useFactory: () => inject(BrowserAnimationBuilder) }]
    }] });
    AnimationFactory = class {
    };
    BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
      animationModuleType = inject(ANIMATION_MODULE_TYPE, { optional: true });
      _nextAnimationId = 0;
      _renderer;
      constructor(rootRenderer, doc) {
        super();
        const typeData = {
          id: "0",
          encapsulation: ViewEncapsulation.None,
          styles: [],
          data: { animation: [] }
        };
        this._renderer = rootRenderer.createRenderer(doc.body, typeData);
        if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
          throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
        }
      }
      build(animation2) {
        const id = this._nextAnimationId;
        this._nextAnimationId++;
        const entry = Array.isArray(animation2) ? sequence(animation2) : animation2;
        issueAnimationCommand(this._renderer, null, id, "register", [entry]);
        return new BrowserAnimationFactory(id, this._renderer);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BrowserAnimationBuilder, deps: [{ token: RendererFactory2 }, { token: DOCUMENT }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: _BrowserAnimationBuilder, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: core_exports, type: BrowserAnimationBuilder, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: RendererFactory2 }, { type: Document, decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }] }] });
    BrowserAnimationFactory = class extends AnimationFactory {
      _id;
      _renderer;
      constructor(_id, _renderer) {
        super();
        this._id = _id;
        this._renderer = _renderer;
      }
      create(element, options) {
        return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
      }
    };
    RendererAnimationPlayer = class {
      id;
      element;
      _renderer;
      parentPlayer = null;
      _started = false;
      constructor(id, element, options, _renderer) {
        this.id = id;
        this.element = element;
        this._renderer = _renderer;
        this._command("create", options);
      }
      _listen(eventName, callback) {
        return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
      }
      _command(command, ...args) {
        issueAnimationCommand(this._renderer, this.element, this.id, command, args);
      }
      onDone(fn) {
        this._listen("done", fn);
      }
      onStart(fn) {
        this._listen("start", fn);
      }
      onDestroy(fn) {
        this._listen("destroy", fn);
      }
      init() {
        this._command("init");
      }
      hasStarted() {
        return this._started;
      }
      play() {
        this._command("play");
        this._started = true;
      }
      pause() {
        this._command("pause");
      }
      restart() {
        this._command("restart");
      }
      finish() {
        this._command("finish");
      }
      destroy() {
        this._command("destroy");
      }
      reset() {
        this._command("reset");
        this._started = false;
      }
      setPosition(p) {
        this._command("setPosition", p);
      }
      getPosition() {
        return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
      }
      totalTime = 0;
    };
  }
});

// node_modules/@primeuix/styles/dist/message/index.mjs
var style2;
var init_message = __esm({
  "node_modules/@primeuix/styles/dist/message/index.mjs"() {
    "use strict";
    style2 = "\n    .p-message {\n        border-radius: dt('message.border.radius');\n        outline-width: dt('message.border.width');\n        outline-style: solid;\n    }\n\n    .p-message-content {\n        display: flex;\n        align-items: center;\n        padding: dt('message.content.padding');\n        gap: dt('message.content.gap');\n        height: 100%;\n    }\n\n    .p-message-icon {\n        flex-shrink: 0;\n    }\n\n    .p-message-close-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        margin-inline-start: auto;\n        overflow: hidden;\n        position: relative;\n        width: dt('message.close.button.width');\n        height: dt('message.close.button.height');\n        border-radius: dt('message.close.button.border.radius');\n        background: transparent;\n        transition:\n            background dt('message.transition.duration'),\n            color dt('message.transition.duration'),\n            outline-color dt('message.transition.duration'),\n            box-shadow dt('message.transition.duration'),\n            opacity 0.3s;\n        outline-color: transparent;\n        color: inherit;\n        padding: 0;\n        border: none;\n        cursor: pointer;\n        user-select: none;\n    }\n\n    .p-message-close-icon {\n        font-size: dt('message.close.icon.size');\n        width: dt('message.close.icon.size');\n        height: dt('message.close.icon.size');\n    }\n\n    .p-message-close-button:focus-visible {\n        outline-width: dt('message.close.button.focus.ring.width');\n        outline-style: dt('message.close.button.focus.ring.style');\n        outline-offset: dt('message.close.button.focus.ring.offset');\n    }\n\n    .p-message-info {\n        background: dt('message.info.background');\n        outline-color: dt('message.info.border.color');\n        color: dt('message.info.color');\n        box-shadow: dt('message.info.shadow');\n    }\n\n    .p-message-info .p-message-close-button:focus-visible {\n        outline-color: dt('message.info.close.button.focus.ring.color');\n        box-shadow: dt('message.info.close.button.focus.ring.shadow');\n    }\n\n    .p-message-info .p-message-close-button:hover {\n        background: dt('message.info.close.button.hover.background');\n    }\n\n    .p-message-info.p-message-outlined {\n        color: dt('message.info.outlined.color');\n        outline-color: dt('message.info.outlined.border.color');\n    }\n\n    .p-message-info.p-message-simple {\n        color: dt('message.info.simple.color');\n    }\n\n    .p-message-success {\n        background: dt('message.success.background');\n        outline-color: dt('message.success.border.color');\n        color: dt('message.success.color');\n        box-shadow: dt('message.success.shadow');\n    }\n\n    .p-message-success .p-message-close-button:focus-visible {\n        outline-color: dt('message.success.close.button.focus.ring.color');\n        box-shadow: dt('message.success.close.button.focus.ring.shadow');\n    }\n\n    .p-message-success .p-message-close-button:hover {\n        background: dt('message.success.close.button.hover.background');\n    }\n\n    .p-message-success.p-message-outlined {\n        color: dt('message.success.outlined.color');\n        outline-color: dt('message.success.outlined.border.color');\n    }\n\n    .p-message-success.p-message-simple {\n        color: dt('message.success.simple.color');\n    }\n\n    .p-message-warn {\n        background: dt('message.warn.background');\n        outline-color: dt('message.warn.border.color');\n        color: dt('message.warn.color');\n        box-shadow: dt('message.warn.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:focus-visible {\n        outline-color: dt('message.warn.close.button.focus.ring.color');\n        box-shadow: dt('message.warn.close.button.focus.ring.shadow');\n    }\n\n    .p-message-warn .p-message-close-button:hover {\n        background: dt('message.warn.close.button.hover.background');\n    }\n\n    .p-message-warn.p-message-outlined {\n        color: dt('message.warn.outlined.color');\n        outline-color: dt('message.warn.outlined.border.color');\n    }\n\n    .p-message-warn.p-message-simple {\n        color: dt('message.warn.simple.color');\n    }\n\n    .p-message-error {\n        background: dt('message.error.background');\n        outline-color: dt('message.error.border.color');\n        color: dt('message.error.color');\n        box-shadow: dt('message.error.shadow');\n    }\n\n    .p-message-error .p-message-close-button:focus-visible {\n        outline-color: dt('message.error.close.button.focus.ring.color');\n        box-shadow: dt('message.error.close.button.focus.ring.shadow');\n    }\n\n    .p-message-error .p-message-close-button:hover {\n        background: dt('message.error.close.button.hover.background');\n    }\n\n    .p-message-error.p-message-outlined {\n        color: dt('message.error.outlined.color');\n        outline-color: dt('message.error.outlined.border.color');\n    }\n\n    .p-message-error.p-message-simple {\n        color: dt('message.error.simple.color');\n    }\n\n    .p-message-secondary {\n        background: dt('message.secondary.background');\n        outline-color: dt('message.secondary.border.color');\n        color: dt('message.secondary.color');\n        box-shadow: dt('message.secondary.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:focus-visible {\n        outline-color: dt('message.secondary.close.button.focus.ring.color');\n        box-shadow: dt('message.secondary.close.button.focus.ring.shadow');\n    }\n\n    .p-message-secondary .p-message-close-button:hover {\n        background: dt('message.secondary.close.button.hover.background');\n    }\n\n    .p-message-secondary.p-message-outlined {\n        color: dt('message.secondary.outlined.color');\n        outline-color: dt('message.secondary.outlined.border.color');\n    }\n\n    .p-message-secondary.p-message-simple {\n        color: dt('message.secondary.simple.color');\n    }\n\n    .p-message-contrast {\n        background: dt('message.contrast.background');\n        outline-color: dt('message.contrast.border.color');\n        color: dt('message.contrast.color');\n        box-shadow: dt('message.contrast.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:focus-visible {\n        outline-color: dt('message.contrast.close.button.focus.ring.color');\n        box-shadow: dt('message.contrast.close.button.focus.ring.shadow');\n    }\n\n    .p-message-contrast .p-message-close-button:hover {\n        background: dt('message.contrast.close.button.hover.background');\n    }\n\n    .p-message-contrast.p-message-outlined {\n        color: dt('message.contrast.outlined.color');\n        outline-color: dt('message.contrast.outlined.border.color');\n    }\n\n    .p-message-contrast.p-message-simple {\n        color: dt('message.contrast.simple.color');\n    }\n\n    .p-message-text {\n        font-size: dt('message.text.font.size');\n        font-weight: dt('message.text.font.weight');\n    }\n\n    .p-message-icon {\n        font-size: dt('message.icon.size');\n        width: dt('message.icon.size');\n        height: dt('message.icon.size');\n    }\n\n    .p-message-enter-from {\n        opacity: 0;\n    }\n\n    .p-message-enter-active {\n        transition: opacity 0.3s;\n    }\n\n    .p-message.p-message-leave-from {\n        max-height: 1000px;\n    }\n\n    .p-message.p-message-leave-to {\n        max-height: 0;\n        opacity: 0;\n        margin: 0;\n    }\n\n    .p-message-leave-active {\n        overflow: hidden;\n        transition:\n            max-height 0.45s cubic-bezier(0, 1, 0, 1),\n            opacity 0.3s,\n            margin 0.3s;\n    }\n\n    .p-message-leave-active .p-message-close-button {\n        opacity: 0;\n    }\n\n    .p-message-sm .p-message-content {\n        padding: dt('message.content.sm.padding');\n    }\n\n    .p-message-sm .p-message-text {\n        font-size: dt('message.text.sm.font.size');\n    }\n\n    .p-message-sm .p-message-icon {\n        font-size: dt('message.icon.sm.size');\n        width: dt('message.icon.sm.size');\n        height: dt('message.icon.sm.size');\n    }\n\n    .p-message-sm .p-message-close-icon {\n        font-size: dt('message.close.icon.sm.size');\n        width: dt('message.close.icon.sm.size');\n        height: dt('message.close.icon.sm.size');\n    }\n\n    .p-message-lg .p-message-content {\n        padding: dt('message.content.lg.padding');\n    }\n\n    .p-message-lg .p-message-text {\n        font-size: dt('message.text.lg.font.size');\n    }\n\n    .p-message-lg .p-message-icon {\n        font-size: dt('message.icon.lg.size');\n        width: dt('message.icon.lg.size');\n        height: dt('message.icon.lg.size');\n    }\n\n    .p-message-lg .p-message-close-icon {\n        font-size: dt('message.close.icon.lg.size');\n        width: dt('message.close.icon.lg.size');\n        height: dt('message.close.icon.lg.size');\n    }\n\n    .p-message-outlined {\n        background: transparent;\n        outline-width: dt('message.outlined.border.width');\n    }\n\n    .p-message-simple {\n        background: transparent;\n        outline-color: transparent;\n        box-shadow: none;\n    }\n\n    .p-message-simple .p-message-content {\n        padding: dt('message.simple.content.padding');\n    }\n\n    .p-message-outlined .p-message-close-button:hover,\n    .p-message-simple .p-message-close-button:hover {\n        background: transparent;\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-message.mjs
var classes, MessageStyle, MessageClasses, Message, MessageModule;
var init_primeng_message = __esm({
  "node_modules/primeng/fesm2022/primeng-message.mjs"() {
    "use strict";
    init_animations();
    init_common();
    init_common();
    init_core();
    init_core();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_icons();
    init_primeng_ripple();
    init_message();
    init_primeng_base();
    classes = {
      root: ({ instance }) => ["p-message p-component p-message-" + instance.severity, "p-message-" + instance.variant, { "p-message-sm": instance.size === "small", "p-message-lg": instance.size === "large" }],
      content: "p-message-content",
      icon: "p-message-icon",
      text: "p-message-text",
      closeButton: "p-message-close-button",
      closeIcon: "p-message-close-icon"
    };
    MessageStyle = class _MessageStyle extends BaseStyle {
      name = "message";
      theme = style2;
      classes = classes;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _MessageStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _MessageStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: MessageStyle, decorators: [{
      type: Injectable
    }] });
    (function(MessageClasses2) {
      MessageClasses2["root"] = "p-message";
      MessageClasses2["content"] = "p-message-content";
      MessageClasses2["icon"] = "p-message-icon";
      MessageClasses2["text"] = "p-message-text";
      MessageClasses2["closeButton"] = "p-message-close-button";
      MessageClasses2["closeIcon"] = "p-message-close-icon";
    })(MessageClasses || (MessageClasses = {}));
    Message = class _Message extends BaseComponent {
      /**
       * Severity level of the message.
       * @defaultValue 'info'
       * @group Props
       */
      severity = "info";
      /**
       * Text content.
       * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
       * @group Props
       */
      text;
      /**
       * Whether displaying messages would be escaped or not.
       * @deprecated since v20.0.0. Use content projection instead '<p-message>Content</p-message>'.
       * @group Props
       */
      escape = true;
      /**
       * Inline style of the component.
       * @group Props
       */
      style;
      /**
       * Style class of the component.
       * @group Props
       */
      styleClass;
      /**
       * Whether the message can be closed manually using the close icon.
       * @group Props
       * @defaultValue false
       */
      closable = false;
      /**
       * Icon to display in the message.
       * @group Props
       * @defaultValue undefined
       */
      icon;
      /**
       * Icon to display in the message close button.
       * @group Props
       * @defaultValue undefined
       */
      closeIcon;
      /**
       * Delay in milliseconds to close the message automatically.
       * @defaultValue undefined
       */
      life;
      /**
       * Transition options of the show animation.
       * @defaultValue '300ms ease-out'
       * @group Props
       */
      showTransitionOptions = "300ms ease-out";
      /**
       * Transition options of the hide animation.
       * @defaultValue '200ms cubic-bezier(0.86, 0, 0.07, 1)'
       * @group Props
       */
      hideTransitionOptions = "200ms cubic-bezier(0.86, 0, 0.07, 1)";
      /**
       * Defines the size of the component.
       * @group Props
       */
      size;
      /**
       * Specifies the input variant of the component.
       * @group Props
       */
      variant;
      /**
       * Emits when the message is closed.
       * @param {{ originalEvent: Event }} event - The event object containing the original event.
       * @group Emits
       */
      onClose = new EventEmitter();
      get closeAriaLabel() {
        return this.config.translation.aria ? this.config.translation.aria.close : void 0;
      }
      visible = signal(true, ...ngDevMode ? [{ debugName: "visible" }] : []);
      _componentStyle = inject(MessageStyle);
      /**
       * Custom template of the message container.
       * @group Templates
       */
      containerTemplate;
      /**
       * Custom template of the message icon.
       * @group Templates
       */
      iconTemplate;
      /**
       * Custom template of the close icon.
       * @group Templates
       */
      closeIconTemplate;
      templates;
      _containerTemplate;
      _iconTemplate;
      _closeIconTemplate;
      ngOnInit() {
        super.ngOnInit();
        if (this.life) {
          setTimeout(() => {
            this.visible.set(false);
          }, this.life);
        }
      }
      ngAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "container":
              this._containerTemplate = item.template;
              break;
            case "icon":
              this._iconTemplate = item.template;
              break;
            case "closeicon":
              this._closeIconTemplate = item.template;
              break;
          }
        });
      }
      /**
       * Closes the message.
       * @param {Event} event - Browser event.
       * @group Method
       */
      close(event) {
        this.visible.set(false);
        this.onClose.emit({ originalEvent: event });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Message, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.1.3", type: _Message, isStandalone: true, selector: "p-message", inputs: { severity: "severity", text: "text", escape: ["escape", "escape", booleanAttribute], style: "style", styleClass: "styleClass", closable: ["closable", "closable", booleanAttribute], icon: "icon", closeIcon: "closeIcon", life: "life", showTransitionOptions: "showTransitionOptions", hideTransitionOptions: "hideTransitionOptions", size: "size", variant: "variant" }, outputs: { onClose: "onClose" }, providers: [MessageStyle], queries: [{ propertyName: "containerTemplate", first: true, predicate: ["container"] }, { propertyName: "iconTemplate", first: true, predicate: ["icon"] }, { propertyName: "closeIconTemplate", first: true, predicate: ["closeicon"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: core_exports, template: `
        @if (visible()) {
            <div
                class="p-message p-component"
                [attr.aria-live]="'polite'"
                [class]="cn(cx('root'), styleClass)"
                [attr.role]="'alert'"
                [@messageAnimation]="{
                    value: 'visible()',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions
                    }
                }"
            >
                <div [class]="cx('content')">
                    @if (iconTemplate || _iconTemplate) {
                        <ng-container *ngTemplateOutlet="iconTemplate || iconTemplate"></ng-container>
                    }
                    @if (icon) {
                        <i [class]="cn(cx('icon'), icon)"></i>
                    }

                    <div *ngIf="!escape; else escapeOut">
                        <span *ngIf="!escape" [ngClass]="cx('text')" [innerHTML]="text"></span>
                    </div>

                    <ng-template #escapeOut>
                        <span *ngIf="escape && text" [ngClass]="cx('text')">{{ text }}</span>
                    </ng-template>

                    @if (containerTemplate || _containerTemplate) {
                        <ng-container *ngTemplateOutlet="containerTemplate || containerTemplate; context: { closeCallback: close.bind(this) }"></ng-container>
                    } @else {
                        <span [ngClass]="cx('text')">
                            <ng-content></ng-content>
                        </span>
                    }
                    @if (closable) {
                        <button pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel">
                            @if (closeIcon) {
                                <i [class]="cn(cx('closeIcon'), closeIcon)" [ngClass]="closeIcon"></i>
                            }
                            @if (closeIconTemplate || _closeIconTemplate) {
                                <ng-container *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-container>
                            }
                            @if (!closeIconTemplate && !_closeIconTemplate && !closeIcon) {
                                <svg data-p-icon="times" [class]="cx('closeIcon')" />
                            }
                        </button>
                    }
                </div>
            </div>
        }
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: TimesIcon, selector: '[data-p-icon="times"]' }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "ngmodule", type: SharedModule }], animations: [
        trigger("messageAnimation", [
          transition(":enter", [style({ opacity: 0, transform: "translateY(-25%)" }), animate("{{showTransitionParams}}")]),
          transition(":leave", [
            animate("{{hideTransitionParams}}", style({
              height: 0,
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              opacity: 0
            }))
          ])
        ])
      ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Message, decorators: [{
      type: Component,
      args: [{
        selector: "p-message",
        standalone: true,
        imports: [CommonModule, TimesIcon, Ripple, SharedModule],
        template: `
        @if (visible()) {
            <div
                class="p-message p-component"
                [attr.aria-live]="'polite'"
                [class]="cn(cx('root'), styleClass)"
                [attr.role]="'alert'"
                [@messageAnimation]="{
                    value: 'visible()',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions
                    }
                }"
            >
                <div [class]="cx('content')">
                    @if (iconTemplate || _iconTemplate) {
                        <ng-container *ngTemplateOutlet="iconTemplate || iconTemplate"></ng-container>
                    }
                    @if (icon) {
                        <i [class]="cn(cx('icon'), icon)"></i>
                    }

                    <div *ngIf="!escape; else escapeOut">
                        <span *ngIf="!escape" [ngClass]="cx('text')" [innerHTML]="text"></span>
                    </div>

                    <ng-template #escapeOut>
                        <span *ngIf="escape && text" [ngClass]="cx('text')">{{ text }}</span>
                    </ng-template>

                    @if (containerTemplate || _containerTemplate) {
                        <ng-container *ngTemplateOutlet="containerTemplate || containerTemplate; context: { closeCallback: close.bind(this) }"></ng-container>
                    } @else {
                        <span [ngClass]="cx('text')">
                            <ng-content></ng-content>
                        </span>
                    }
                    @if (closable) {
                        <button pRipple type="button" [class]="cx('closeButton')" (click)="close($event)" [attr.aria-label]="closeAriaLabel">
                            @if (closeIcon) {
                                <i [class]="cn(cx('closeIcon'), closeIcon)" [ngClass]="closeIcon"></i>
                            }
                            @if (closeIconTemplate || _closeIconTemplate) {
                                <ng-container *ngTemplateOutlet="closeIconTemplate || _closeIconTemplate"></ng-container>
                            }
                            @if (!closeIconTemplate && !_closeIconTemplate && !closeIcon) {
                                <svg data-p-icon="times" [class]="cx('closeIcon')" />
                            }
                        </button>
                    }
                </div>
            </div>
        }
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [MessageStyle],
        animations: [
          trigger("messageAnimation", [
            transition(":enter", [style({ opacity: 0, transform: "translateY(-25%)" }), animate("{{showTransitionParams}}")]),
            transition(":leave", [
              animate("{{hideTransitionParams}}", style({
                height: 0,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                opacity: 0
              }))
            ])
          ])
        ]
      }]
    }], propDecorators: { severity: [{
      type: Input
    }], text: [{
      type: Input
    }], escape: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], closable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], icon: [{
      type: Input
    }], closeIcon: [{
      type: Input
    }], life: [{
      type: Input
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], size: [{
      type: Input
    }], variant: [{
      type: Input
    }], onClose: [{
      type: Output
    }], containerTemplate: [{
      type: ContentChild,
      args: ["container", { descendants: false }]
    }], iconTemplate: [{
      type: ContentChild,
      args: ["icon", { descendants: false }]
    }], closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    MessageModule = class _MessageModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _MessageModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _MessageModule, imports: [Message, SharedModule], exports: [Message, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _MessageModule, imports: [Message, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: MessageModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Message, SharedModule],
        exports: [Message, SharedModule]
      }]
    }] });
  }
});

// src/app/components/error-message/error-message.ts
var ErrorMessage;
var init_error_message2 = __esm({
  "src/app/components/error-message/error-message.ts"() {
    "use strict";
    init_tslib_es6();
    init_error_message();
    init_core();
    init_primeng_message();
    init_core();
    ErrorMessage = class ErrorMessage2 {
      message = input.required();
      static propDecorators = {
        message: [{ type: Input, args: [{ isSignal: true, alias: "message", required: true, transform: void 0 }] }]
      };
    };
    ErrorMessage = __decorate([
      Component({
        selector: "app-error-message",
        imports: [MessageModule],
        template: error_message_default
      })
    ], ErrorMessage);
  }
});

export {
  trigger,
  animate,
  style,
  state,
  transition,
  animation,
  animateChild,
  useAnimation,
  query,
  init_animations,
  ErrorMessage,
  init_error_message2 as init_error_message
};
/*! Bundled license information:

@angular/animations/fesm2022/private_export.mjs:
@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v20.2.1
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-IQJJM67C.js.map
