import {
  init_components
} from "./chunk-XRHJ3CBC.js";
import {
  BaseModelHolder,
  FormsModule,
  GithubService,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputText,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  init_forms,
  init_github,
  init_primeng_basemodelholder,
  init_primeng_iconfield,
  init_primeng_inputicon,
  init_primeng_inputtext
} from "./chunk-DZOGRK4R.js";
import "./chunk-E2CWIQEH.js";
import {
  ObjectUtils,
  Tooltip,
  init_primeng_tooltip,
  init_primeng_utils,
  zindexutils
} from "./chunk-WGD7ETYN.js";
import "./chunk-WEAFEU76.js";
import "./chunk-3IXB2B7Z.js";
import "./chunk-PVR5ZDFD.js";
import "./chunk-4NVC6HZR.js";
import {
  ErrorMessage,
  animate,
  animation,
  init_animations,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-IQJJM67C.js";
import "./chunk-K7TGSAN2.js";
import {
  Loader,
  ProgressSpinnerModule,
  init_primeng_progressspinner
} from "./chunk-FU45V4IG.js";
import {
  AutoFocus,
  init_primeng_autofocus
} from "./chunk-PJEHBBWW.js";
import {
  Fluid,
  init_primeng_fluid
} from "./chunk-GM2Q5ZIG.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler,
  init_primeng_dom,
  unblockBodyScroll
} from "./chunk-QKCPCY2R.js";
import "./chunk-V3N65XNH.js";
import "./chunk-3LYCJGDS.js";
import {
  AngleDoubleLeftIcon,
  AngleDoubleRightIcon,
  AngleDownIcon,
  AngleLeftIcon,
  AngleRightIcon,
  AngleUpIcon,
  BlankIcon,
  CheckIcon,
  ChevronDownIcon,
  Ripple,
  SearchIcon,
  SpinnerIcon,
  TimesIcon,
  init_primeng_icons,
  init_primeng_ripple
} from "./chunk-F5XSVYHG.js";
import {
  BaseComponent,
  BaseStyle,
  FilterService,
  Jt,
  Lt,
  M,
  Mt,
  O,
  OverlayService,
  PrimeTemplate,
  Rt,
  SharedModule,
  TranslationKeys,
  Tt,
  W,
  Yt,
  a,
  b,
  bt,
  c,
  et,
  init_dist,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent,
  j,
  j2,
  k2 as k,
  s,
  s2,
  vt,
  y,
  z
} from "./chunk-WJSIDV3S.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  init_common,
  isPlatformBrowser
} from "./chunk-HINAUQGB.js";
import "./chunk-DBTO2K6A.js";
import {
  RepoCard
} from "./chunk-KHYIDAXO.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  EventEmitter,
  FactoryTarget,
  HostBinding,
  Injectable,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  TestBed,
  ViewChild,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  core_exports,
  effect,
  forwardRef,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  input,
  numberAttribute,
  signal,
  switchMap,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-56THSHHT.js";
import {
  __async,
  __commonJS,
  __esm,
  __spreadProps,
  __spreadValues
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/pages/view-repo/view-repo.html
var view_repo_default;
var init_view_repo = __esm({
  "angular:jit:template:src/app/pages/view-repo/view-repo.html"() {
    view_repo_default = '<main\n  class="flex flex-col items-center min-h-screen p-4 md:p-8 lg:p-12 mb-[100px] md:mb-[120px] lg:mb-[150px]"\n>\n  <div class="flex flex-col items-center space-x-0 w-full max-w-4xl">\n    <h1 class="text-2xl font-bold my-4 mb-12 center md:text-3xl lg:text-4xl">\n      Repositories\n    </h1>\n\n    @if (isLoading()) {\n\n    <app-loader label="Fetching repositories..." />\n    } @else if (isError()) {\n\n    <app-error-message\n      message="Could not fetch repositories. Please check the username and try again."\n    />\n    } @else {\n    <div class="space-y-4 w-full">\n      @if (repos().length > 0) { @for ( repo of repos(); track repo.id ) {\n      <app-repo-card [repo]="repo" />\n      } } @else {\n      <p class="text-center my-4 text-zinc-500 dark:text-zinc-400">\n        No repositories found for this user.\n      </p>\n      }\n    </div>\n    <p-paginator\n      (onPageChange)="onPageChange($event)"\n      [rows]="paginatorState$.value.rows"\n      [totalRecords]="totalRecords()"\n      [rowsPerPageOptions]="rowsPerPageOptions()"\n      class="mt-6 w-full"\n    />\n\n    }\n  </div>\n</main>\n';
  }
});

// node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs
var BaseEditableHolder;
var init_primeng_baseeditableholder = __esm({
  "node_modules/primeng/fesm2022/primeng-baseeditableholder.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_basemodelholder();
    BaseEditableHolder = class _BaseEditableHolder extends BaseModelHolder {
      /**
       * There must be a value (if set).
       * @defaultValue false
       * @group Props
       */
      required = input(void 0, ...ngDevMode ? [{ debugName: "required", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * When present, it specifies that the component should have invalid state style.
       * @defaultValue false
       * @group Props
       */
      invalid = input(void 0, ...ngDevMode ? [{ debugName: "invalid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * When present, it specifies that the component should have disabled state style.
       * @defaultValue false
       * @group Props
       */
      disabled = input(void 0, ...ngDevMode ? [{ debugName: "disabled", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * When present, it specifies that the name of the input.
       * @defaultValue undefined
       * @group Props
       */
      name = input(...ngDevMode ? [void 0, { debugName: "name" }] : []);
      _disabled = signal(false, ...ngDevMode ? [{ debugName: "_disabled" }] : []);
      $disabled = computed(() => this.disabled() || this._disabled(), ...ngDevMode ? [{ debugName: "$disabled" }] : []);
      onModelChange = () => {
      };
      onModelTouched = () => {
      };
      writeDisabledState(value) {
        this._disabled.set(value);
      }
      writeControlValue(value, setModelValue) {
      }
      /**** Angular ControlValueAccessors ****/
      writeValue(value) {
        this.writeControlValue(value, this.writeModelValue.bind(this));
      }
      registerOnChange(fn) {
        this.onModelChange = fn;
      }
      registerOnTouched(fn) {
        this.onModelTouched = fn;
      }
      setDisabledState(val) {
        this.writeDisabledState(val);
        this.cd.markForCheck();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BaseEditableHolder, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.1.3", type: _BaseEditableHolder, isStandalone: true, inputs: { required: { classPropertyName: "required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, invalid: { classPropertyName: "invalid", publicName: "invalid", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, name: { classPropertyName: "name", publicName: "name", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BaseEditableHolder, decorators: [{
      type: Directive,
      args: [{ standalone: true }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-baseinput.mjs
var BaseInput;
var init_primeng_baseinput = __esm({
  "node_modules/primeng/fesm2022/primeng-baseinput.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_primeng_baseeditableholder();
    init_primeng_fluid();
    BaseInput = class _BaseInput extends BaseEditableHolder {
      pcFluid = inject(Fluid, { optional: true, host: true, skipSelf: true });
      /**
       * Spans 100% width of the container when enabled.
       * @defaultValue false
       * @group Props
       */
      fluid = input(void 0, ...ngDevMode ? [{ debugName: "fluid", transform: booleanAttribute }] : [{ transform: booleanAttribute }]);
      /**
       * Specifies the input variant of the component.
       * @defaultValue 'outlined'
       * @group Props
       */
      variant = input(...ngDevMode ? [void 0, { debugName: "variant" }] : []);
      /**
       * Specifies the size of the component.
       * @defaultValue undefined
       * @group Props
       */
      size = input(...ngDevMode ? [void 0, { debugName: "size" }] : []);
      /**
       * Specifies the visible width of the input element in characters.
       * @defaultValue undefined
       * @group Props
       */
      inputSize = input(...ngDevMode ? [void 0, { debugName: "inputSize" }] : []);
      /**
       * Specifies the value must match the pattern.
       * @defaultValue undefined
       * @group Props
       */
      pattern = input(...ngDevMode ? [void 0, { debugName: "pattern" }] : []);
      /**
       * The value must be greater than or equal to the value.
       * @defaultValue undefined
       * @group Props
       */
      min = input(...ngDevMode ? [void 0, { debugName: "min" }] : []);
      /**
       * The value must be less than or equal to the value.
       * @defaultValue undefined
       * @group Props
       */
      max = input(...ngDevMode ? [void 0, { debugName: "max" }] : []);
      /**
       * Unless the step is set to the any literal, the value must be min + an integral multiple of the step.
       * @defaultValue undefined
       * @group Props
       */
      step = input(...ngDevMode ? [void 0, { debugName: "step" }] : []);
      /**
       * The number of characters (code points) must not be less than the value of the attribute, if non-empty.
       * @defaultValue undefined
       * @group Props
       */
      minlength = input(...ngDevMode ? [void 0, { debugName: "minlength" }] : []);
      /**
       * The number of characters (code points) must not exceed the value of the attribute.
       * @defaultValue undefined
       * @group Props
       */
      maxlength = input(...ngDevMode ? [void 0, { debugName: "maxlength" }] : []);
      $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{ debugName: "$variant" }] : []);
      get hasFluid() {
        return this.fluid() ?? !!this.pcFluid;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _BaseInput, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "17.1.0", version: "20.1.3", type: _BaseInput, isStandalone: true, inputs: { fluid: { classPropertyName: "fluid", publicName: "fluid", isSignal: true, isRequired: false, transformFunction: null }, variant: { classPropertyName: "variant", publicName: "variant", isSignal: true, isRequired: false, transformFunction: null }, size: { classPropertyName: "size", publicName: "size", isSignal: true, isRequired: false, transformFunction: null }, inputSize: { classPropertyName: "inputSize", publicName: "inputSize", isSignal: true, isRequired: false, transformFunction: null }, pattern: { classPropertyName: "pattern", publicName: "pattern", isSignal: true, isRequired: false, transformFunction: null }, min: { classPropertyName: "min", publicName: "min", isSignal: true, isRequired: false, transformFunction: null }, max: { classPropertyName: "max", publicName: "max", isSignal: true, isRequired: false, transformFunction: null }, step: { classPropertyName: "step", publicName: "step", isSignal: true, isRequired: false, transformFunction: null }, minlength: { classPropertyName: "minlength", publicName: "minlength", isSignal: true, isRequired: false, transformFunction: null }, maxlength: { classPropertyName: "maxlength", publicName: "maxlength", isSignal: true, isRequired: false, transformFunction: null } }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: BaseInput, decorators: [{
      type: Directive,
      args: [{ standalone: true }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-overlay.mjs
var theme, OverlayStyle, showOverlayContentAnimation, hideOverlayContentAnimation, Overlay, OverlayModule;
var init_primeng_overlay = __esm({
  "node_modules/primeng/fesm2022/primeng-overlay.mjs"() {
    "use strict";
    init_animations();
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_dom();
    init_primeng_utils();
    init_primeng_base();
    theme = /*css*/
    `
.p-overlay {
    position: absolute;
    top: 0;
}

.p-overlay-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-content {
    transform-origin: inherit;
}

/* Github Issue #18560 */
.p-component-overlay.p-component {
    position: relative;
}

.p-overlay-modal > .p-overlay-content {
    z-index: 1;
    width: 90%;
}

/* Position */
/* top */
.p-overlay-top {
    align-items: flex-start;
}
.p-overlay-top-start {
    align-items: flex-start;
    justify-content: flex-start;
}
.p-overlay-top-end {
    align-items: flex-start;
    justify-content: flex-end;
}

/* bottom */
.p-overlay-bottom {
    align-items: flex-end;
}
.p-overlay-bottom-start {
    align-items: flex-end;
    justify-content: flex-start;
}
.p-overlay-bottom-end {
    align-items: flex-end;
    justify-content: flex-end;
}

/* left */
.p-overlay-left {
    justify-content: flex-start;
}
.p-overlay-left-start {
    justify-content: flex-start;
    align-items: flex-start;
}
.p-overlay-left-end {
    justify-content: flex-start;
    align-items: flex-end;
}

/* right */
.p-overlay-right {
    justify-content: flex-end;
}
.p-overlay-right-start {
    justify-content: flex-end;
    align-items: flex-start;
}
.p-overlay-right-end {
    justify-content: flex-end;
    align-items: flex-end;
}
`;
    OverlayStyle = class _OverlayStyle extends BaseStyle {
      name = "overlay";
      theme = theme;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _OverlayStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _OverlayStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: OverlayStyle, decorators: [{
      type: Injectable
    }] });
    showOverlayContentAnimation = animation([style({ transform: "{{transform}}", opacity: 0 }), animate("{{showTransitionParams}}")]);
    hideOverlayContentAnimation = animation([animate("{{hideTransitionParams}}", style({ transform: "{{transform}}", opacity: 0 }))]);
    Overlay = class _Overlay extends BaseComponent {
      overlayService;
      zone;
      /**
       * The visible property is an input that determines the visibility of the component.
       * @defaultValue false
       * @group Props
       */
      get visible() {
        return this._visible;
      }
      set visible(value) {
        this._visible = value;
        if (this._visible && !this.modalVisible) {
          this.modalVisible = true;
        }
      }
      /**
       * The mode property is an input that determines the overlay mode type or string.
       * @defaultValue null
       * @group Props
       */
      get mode() {
        return this._mode || this.overlayOptions?.mode;
      }
      set mode(value) {
        this._mode = value;
      }
      /**
       * The style property is an input that determines the style object for the component.
       * @defaultValue null
       * @group Props
       */
      get style() {
        return ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
      }
      set style(value) {
        this._style = value;
      }
      /**
       * The styleClass property is an input that determines the CSS class(es) for the component.
       * @defaultValue null
       * @group Props
       */
      get styleClass() {
        return ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
      }
      set styleClass(value) {
        this._styleClass = value;
      }
      /**
       * The contentStyle property is an input that determines the style object for the content of the component.
       * @defaultValue null
       * @group Props
       */
      get contentStyle() {
        return ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
      }
      set contentStyle(value) {
        this._contentStyle = value;
      }
      /**
       * The contentStyleClass property is an input that determines the CSS class(es) for the content of the component.
       * @defaultValue null
       * @group Props
       */
      get contentStyleClass() {
        return ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
      }
      set contentStyleClass(value) {
        this._contentStyleClass = value;
      }
      /**
       * The target property is an input that specifies the target element or selector for the component.
       * @defaultValue null
       * @group Props
       */
      get target() {
        const value = this._target || this.overlayOptions?.target;
        return value === void 0 ? "@prev" : value;
      }
      set target(value) {
        this._target = value;
      }
      /**
       * The autoZIndex determines whether to automatically manage layering. Its default value is 'false'.
       * @defaultValue false
       * @group Props
       */
      get autoZIndex() {
        const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
        return value === void 0 ? true : value;
      }
      set autoZIndex(value) {
        this._autoZIndex = value;
      }
      /**
       * The baseZIndex is base zIndex value to use in layering.
       * @defaultValue null
       * @group Props
       */
      get baseZIndex() {
        const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
        return value === void 0 ? 0 : value;
      }
      set baseZIndex(value) {
        this._baseZIndex = value;
      }
      /**
       * Transition options of the show or hide animation.
       * @defaultValue .12s cubic-bezier(0, 0, 0.2, 1)
       * @group Props
       */
      get showTransitionOptions() {
        const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
        return value === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : value;
      }
      set showTransitionOptions(value) {
        this._showTransitionOptions = value;
      }
      /**
       * The hideTransitionOptions property is an input that determines the CSS transition options for hiding the component.
       * @defaultValue .1s linear
       * @group Props
       */
      get hideTransitionOptions() {
        const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
        return value === void 0 ? ".1s linear" : value;
      }
      set hideTransitionOptions(value) {
        this._hideTransitionOptions = value;
      }
      /**
       * The listener property is an input that specifies the listener object for the component.
       * @defaultValue null
       * @group Props
       */
      get listener() {
        return this._listener || this.overlayOptions?.listener;
      }
      set listener(value) {
        this._listener = value;
      }
      /**
       * It is the option used to determine in which mode it should appear according to the given media or breakpoint.
       * @defaultValue null
       * @group Props
       */
      get responsive() {
        return this._responsive || this.overlayOptions?.responsive;
      }
      set responsive(val) {
        this._responsive = val;
      }
      /**
       * The options property is an input that specifies the overlay options for the component.
       * @defaultValue null
       * @group Props
       */
      get options() {
        return this._options;
      }
      set options(val) {
        this._options = val;
      }
      /**
       * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @defaultValue 'self'
       * @group Props
       */
      appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : []);
      /**
       * This EventEmitter is used to notify changes in the visibility state of a component.
       * @param {Boolean} boolean - Value of visibility as boolean.
       * @group Emits
       */
      visibleChange = new EventEmitter();
      /**
       * Callback to invoke before the overlay is shown.
       * @param {OverlayOnBeforeShowEvent} event - Custom overlay before show event.
       * @group Emits
       */
      onBeforeShow = new EventEmitter();
      /**
       * Callback to invoke when the overlay is shown.
       * @param {OverlayOnShowEvent} event - Custom overlay show event.
       * @group Emits
       */
      onShow = new EventEmitter();
      /**
       * Callback to invoke before the overlay is hidden.
       * @param {OverlayOnBeforeHideEvent} event - Custom overlay before hide event.
       * @group Emits
       */
      onBeforeHide = new EventEmitter();
      /**
       * Callback to invoke when the overlay is hidden
       * @param {OverlayOnHideEvent} event - Custom hide event.
       * @group Emits
       */
      onHide = new EventEmitter();
      /**
       * Callback to invoke when the animation is started.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      onAnimationStart = new EventEmitter();
      /**
       * Callback to invoke when the animation is done.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      onAnimationDone = new EventEmitter();
      overlayViewChild;
      contentViewChild;
      /**
       * Content template of the component.
       * @group Templates
       */
      contentTemplate;
      templates;
      hostAttrSelector = input(...ngDevMode ? [void 0, { debugName: "hostAttrSelector" }] : []);
      $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : []);
      _contentTemplate;
      _visible = false;
      _mode;
      _style;
      _styleClass;
      _contentStyle;
      _contentStyleClass;
      _target;
      _autoZIndex;
      _baseZIndex;
      _showTransitionOptions;
      _hideTransitionOptions;
      _listener;
      _responsive;
      _options;
      modalVisible = false;
      isOverlayClicked = false;
      isOverlayContentClicked = false;
      scrollHandler;
      documentClickListener;
      documentResizeListener;
      _componentStyle = inject(OverlayStyle);
      documentKeyboardListener;
      window;
      transformOptions = {
        default: "scaleY(0.8)",
        center: "scale(0.7)",
        top: "translate3d(0px, -100%, 0px)",
        "top-start": "translate3d(0px, -100%, 0px)",
        "top-end": "translate3d(0px, -100%, 0px)",
        bottom: "translate3d(0px, 100%, 0px)",
        "bottom-start": "translate3d(0px, 100%, 0px)",
        "bottom-end": "translate3d(0px, 100%, 0px)",
        left: "translate3d(-100%, 0px, 0px)",
        "left-start": "translate3d(-100%, 0px, 0px)",
        "left-end": "translate3d(-100%, 0px, 0px)",
        right: "translate3d(100%, 0px, 0px)",
        "right-start": "translate3d(100%, 0px, 0px)",
        "right-end": "translate3d(100%, 0px, 0px)"
      };
      get modal() {
        if (isPlatformBrowser(this.platformId)) {
          return this.mode === "modal" || this.overlayResponsiveOptions && this.document.defaultView?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
        }
      }
      get overlayMode() {
        return this.mode || (this.modal ? "modal" : "overlay");
      }
      get overlayOptions() {
        return __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options);
      }
      get overlayResponsiveOptions() {
        return __spreadValues(__spreadValues({}, this.overlayOptions?.responsive), this.responsive);
      }
      get overlayResponsiveDirection() {
        return this.overlayResponsiveOptions?.direction || "center";
      }
      get overlayEl() {
        return this.overlayViewChild?.nativeElement;
      }
      get contentEl() {
        return this.contentViewChild?.nativeElement;
      }
      get targetEl() {
        return j(this.target, this.el?.nativeElement);
      }
      constructor(overlayService, zone) {
        super();
        this.overlayService = overlayService;
        this.zone = zone;
      }
      ngAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "content":
              this._contentTemplate = item.template;
              break;
            // TODO: new template types may be added.
            default:
              this._contentTemplate = item.template;
              break;
          }
        });
      }
      show(overlay, isFocus = false) {
        this.onVisibleChange(true);
        this.handleEvents("onShow", { overlay: overlay || this.overlayEl, target: this.targetEl, mode: this.overlayMode });
        isFocus && bt(this.targetEl);
        this.modal && W(this.document?.body, "p-overflow-hidden");
      }
      hide(overlay, isFocus = false) {
        if (!this.visible) {
          return;
        } else {
          this.onVisibleChange(false);
          this.handleEvents("onHide", { overlay: overlay || this.overlayEl, target: this.targetEl, mode: this.overlayMode });
          isFocus && bt(this.targetEl);
          this.modal && O(this.document?.body, "p-overflow-hidden");
        }
      }
      alignOverlay() {
        !this.modal && DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.$appendTo());
      }
      onVisibleChange(visible) {
        this._visible = visible;
        this.visibleChange.emit(visible);
      }
      onOverlayClick() {
        this.isOverlayClicked = true;
      }
      onOverlayContentClick(event) {
        this.overlayService.add({
          originalEvent: event,
          target: this.targetEl
        });
        this.isOverlayContentClicked = true;
      }
      onOverlayContentAnimationStart(event) {
        switch (event.toState) {
          case "visible":
            this.handleEvents("onBeforeShow", { overlay: this.overlayEl, target: this.targetEl, mode: this.overlayMode });
            if (this.autoZIndex) {
              zindexutils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
            }
            this.hostAttrSelector() && this.overlayEl.setAttribute(this.hostAttrSelector(), "");
            DomHandler.appendOverlay(this.overlayEl, this.$appendTo() === "body" ? this.document.body : this.$appendTo(), this.$appendTo());
            this.alignOverlay();
            break;
          case "void":
            this.handleEvents("onBeforeHide", { overlay: this.overlayEl, target: this.targetEl, mode: this.overlayMode });
            this.modal && W(this.overlayEl, "p-overlay-mask-leave");
            break;
        }
        this.handleEvents("onAnimationStart", event);
      }
      onOverlayContentAnimationDone(event) {
        const container = this.overlayEl || event.element.parentElement;
        switch (event.toState) {
          case "visible":
            if (this.visible) {
              this.show(container, true);
              this.bindListeners();
            }
            break;
          case "void":
            if (!this.visible) {
              this.hide(container, true);
              this.modalVisible = false;
              this.unbindListeners();
              DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.$appendTo());
              zindexutils.clear(container);
              this.cd.markForCheck();
              break;
            }
        }
        this.handleEvents("onAnimationDone", event);
      }
      handleEvents(name, params) {
        this[name].emit(params);
        this.options && this.options[name] && this.options[name](params);
        this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
      }
      bindListeners() {
        this.bindScrollListener();
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindDocumentKeyboardListener();
      }
      unbindListeners() {
        this.unbindScrollListener();
        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.unbindDocumentKeyboardListener();
      }
      bindScrollListener() {
        if (!this.scrollHandler) {
          this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl, (event) => {
            const valid = this.listener ? this.listener(event, { type: "scroll", mode: this.overlayMode, valid: true }) : true;
            valid && this.hide(event, true);
          });
        }
        this.scrollHandler.bindScrollListener();
      }
      unbindScrollListener() {
        if (this.scrollHandler) {
          this.scrollHandler.unbindScrollListener();
        }
      }
      bindDocumentClickListener() {
        if (!this.documentClickListener) {
          this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
            const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
            const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
            const valid = this.listener ? this.listener(event, { type: "outside", mode: this.overlayMode, valid: event.which !== 3 && isOutsideClicked }) : isOutsideClicked;
            valid && this.hide(event);
            this.isOverlayClicked = this.isOverlayContentClicked = false;
          });
        }
      }
      unbindDocumentClickListener() {
        if (this.documentClickListener) {
          this.documentClickListener();
          this.documentClickListener = null;
        }
      }
      bindDocumentResizeListener() {
        if (!this.documentResizeListener) {
          this.documentResizeListener = this.renderer.listen(this.document.defaultView, "resize", (event) => {
            const valid = this.listener ? this.listener(event, { type: "resize", mode: this.overlayMode, valid: !Yt() }) : !Yt();
            valid && this.hide(event, true);
          });
        }
      }
      unbindDocumentResizeListener() {
        if (this.documentResizeListener) {
          this.documentResizeListener();
          this.documentResizeListener = null;
        }
      }
      bindDocumentKeyboardListener() {
        if (this.documentKeyboardListener) {
          return;
        }
        this.zone.runOutsideAngular(() => {
          this.documentKeyboardListener = this.renderer.listen(this.document.defaultView, "keydown", (event) => {
            if (this.overlayOptions.hideOnEscape === false || event.code !== "Escape") {
              return;
            }
            const valid = this.listener ? this.listener(event, { type: "keydown", mode: this.overlayMode, valid: !Yt() }) : !Yt();
            if (valid) {
              this.zone.run(() => {
                this.hide(event, true);
              });
            }
          });
        });
      }
      unbindDocumentKeyboardListener() {
        if (this.documentKeyboardListener) {
          this.documentKeyboardListener();
          this.documentKeyboardListener = null;
        }
      }
      ngOnDestroy() {
        this.hide(this.overlayEl, true);
        if (this.overlayEl && this.$appendTo() !== "self") {
          this.renderer.appendChild(this.el.nativeElement, this.overlayEl);
          zindexutils.clear(this.overlayEl);
        }
        if (this.scrollHandler) {
          this.scrollHandler.destroy();
          this.scrollHandler = null;
        }
        this.unbindListeners();
        super.ngOnDestroy();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Overlay, deps: [{ token: OverlayService }, { token: NgZone }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _Overlay, isStandalone: true, selector: "p-overlay", inputs: { visible: { classPropertyName: "visible", publicName: "visible", isSignal: false, isRequired: false, transformFunction: null }, mode: { classPropertyName: "mode", publicName: "mode", isSignal: false, isRequired: false, transformFunction: null }, style: { classPropertyName: "style", publicName: "style", isSignal: false, isRequired: false, transformFunction: null }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, contentStyle: { classPropertyName: "contentStyle", publicName: "contentStyle", isSignal: false, isRequired: false, transformFunction: null }, contentStyleClass: { classPropertyName: "contentStyleClass", publicName: "contentStyleClass", isSignal: false, isRequired: false, transformFunction: null }, target: { classPropertyName: "target", publicName: "target", isSignal: false, isRequired: false, transformFunction: null }, autoZIndex: { classPropertyName: "autoZIndex", publicName: "autoZIndex", isSignal: false, isRequired: false, transformFunction: null }, baseZIndex: { classPropertyName: "baseZIndex", publicName: "baseZIndex", isSignal: false, isRequired: false, transformFunction: null }, showTransitionOptions: { classPropertyName: "showTransitionOptions", publicName: "showTransitionOptions", isSignal: false, isRequired: false, transformFunction: null }, hideTransitionOptions: { classPropertyName: "hideTransitionOptions", publicName: "hideTransitionOptions", isSignal: false, isRequired: false, transformFunction: null }, listener: { classPropertyName: "listener", publicName: "listener", isSignal: false, isRequired: false, transformFunction: null }, responsive: { classPropertyName: "responsive", publicName: "responsive", isSignal: false, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: false, isRequired: false, transformFunction: null }, appendTo: { classPropertyName: "appendTo", publicName: "appendTo", isSignal: true, isRequired: false, transformFunction: null }, hostAttrSelector: { classPropertyName: "hostAttrSelector", publicName: "hostAttrSelector", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { visibleChange: "visibleChange", onBeforeShow: "onBeforeShow", onShow: "onShow", onBeforeHide: "onBeforeHide", onHide: "onHide", onAnimationStart: "onAnimationStart", onAnimationDone: "onAnimationDone" }, providers: [OverlayStyle], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"] }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "overlayViewChild", first: true, predicate: ["overlay"], descendants: true }, { propertyName: "contentViewChild", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
        <div
            *ngIf="modalVisible"
            #overlay
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-overlay p-component': true,
                'p-overlay-modal p-overlay-mask p-overlay-mask-enter': modal,
                'p-overlay-center': modal && overlayResponsiveDirection === 'center',
                'p-overlay-top': modal && overlayResponsiveDirection === 'top',
                'p-overlay-top-start': modal && overlayResponsiveDirection === 'top-start',
                'p-overlay-top-end': modal && overlayResponsiveDirection === 'top-end',
                'p-overlay-bottom': modal && overlayResponsiveDirection === 'bottom',
                'p-overlay-bottom-start': modal && overlayResponsiveDirection === 'bottom-start',
                'p-overlay-bottom-end': modal && overlayResponsiveDirection === 'bottom-end',
                'p-overlay-left': modal && overlayResponsiveDirection === 'left',
                'p-overlay-left-start': modal && overlayResponsiveDirection === 'left-start',
                'p-overlay-left-end': modal && overlayResponsiveDirection === 'left-end',
                'p-overlay-right': modal && overlayResponsiveDirection === 'right',
                'p-overlay-right-start': modal && overlayResponsiveDirection === 'right-start',
                'p-overlay-right-end': modal && overlayResponsiveDirection === 'right-end'
            }"
            (click)="onOverlayClick()"
        >
            <div
                *ngIf="visible"
                #content
                [ngStyle]="contentStyle"
                [class]="contentStyleClass"
                [ngClass]="'p-overlay-content'"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{
                    value: 'visible',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions,
                        transform: transformOptions[modal ? overlayResponsiveDirection : 'default']
                    }
                }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: SharedModule }], animations: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Overlay, decorators: [{
      type: Component,
      args: [{
        selector: "p-overlay",
        standalone: true,
        imports: [CommonModule, SharedModule],
        template: `
        <div
            *ngIf="modalVisible"
            #overlay
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-overlay p-component': true,
                'p-overlay-modal p-overlay-mask p-overlay-mask-enter': modal,
                'p-overlay-center': modal && overlayResponsiveDirection === 'center',
                'p-overlay-top': modal && overlayResponsiveDirection === 'top',
                'p-overlay-top-start': modal && overlayResponsiveDirection === 'top-start',
                'p-overlay-top-end': modal && overlayResponsiveDirection === 'top-end',
                'p-overlay-bottom': modal && overlayResponsiveDirection === 'bottom',
                'p-overlay-bottom-start': modal && overlayResponsiveDirection === 'bottom-start',
                'p-overlay-bottom-end': modal && overlayResponsiveDirection === 'bottom-end',
                'p-overlay-left': modal && overlayResponsiveDirection === 'left',
                'p-overlay-left-start': modal && overlayResponsiveDirection === 'left-start',
                'p-overlay-left-end': modal && overlayResponsiveDirection === 'left-end',
                'p-overlay-right': modal && overlayResponsiveDirection === 'right',
                'p-overlay-right-start': modal && overlayResponsiveDirection === 'right-start',
                'p-overlay-right-end': modal && overlayResponsiveDirection === 'right-end'
            }"
            (click)="onOverlayClick()"
        >
            <div
                *ngIf="visible"
                #content
                [ngStyle]="contentStyle"
                [class]="contentStyleClass"
                [ngClass]="'p-overlay-content'"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{
                    value: 'visible',
                    params: {
                        showTransitionParams: showTransitionOptions,
                        hideTransitionParams: hideTransitionOptions,
                        transform: transformOptions[modal ? overlayResponsiveDirection : 'default']
                    }
                }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `,
        animations: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [OverlayStyle]
      }]
    }], ctorParameters: () => [{ type: OverlayService }, { type: NgZone }], propDecorators: { visible: [{
      type: Input
    }], mode: [{
      type: Input
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], contentStyle: [{
      type: Input
    }], contentStyleClass: [{
      type: Input
    }], target: [{
      type: Input
    }], autoZIndex: [{
      type: Input
    }], baseZIndex: [{
      type: Input
    }], showTransitionOptions: [{
      type: Input
    }], hideTransitionOptions: [{
      type: Input
    }], listener: [{
      type: Input
    }], responsive: [{
      type: Input
    }], options: [{
      type: Input
    }], visibleChange: [{
      type: Output
    }], onBeforeShow: [{
      type: Output
    }], onShow: [{
      type: Output
    }], onBeforeHide: [{
      type: Output
    }], onHide: [{
      type: Output
    }], onAnimationStart: [{
      type: Output
    }], onAnimationDone: [{
      type: Output
    }], overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }], contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }], contentTemplate: [{
      type: ContentChild,
      args: ["content", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    OverlayModule = class _OverlayModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _OverlayModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _OverlayModule, imports: [Overlay, SharedModule], exports: [Overlay, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _OverlayModule, imports: [Overlay, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: OverlayModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Overlay, SharedModule],
        exports: [Overlay, SharedModule]
      }]
    }] });
  }
});

// node_modules/primeng/fesm2022/primeng-scroller.mjs
var theme2, classes, ScrollerStyle, ScrollerClasses, Scroller, ScrollerModule;
var init_primeng_scroller = __esm({
  "node_modules/primeng/fesm2022/primeng-scroller.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_icons();
    init_primeng_base();
    theme2 = /*css*/
    `
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`;
    classes = {
      root: ({ instance }) => [
        "p-virtualscroller",
        {
          "p-virtualscroller-inline": instance.inline,
          "p-virtualscroller-both p-both-scroll": instance.both,
          "p-virtualscroller-horizontal p-horizontal-scroll": instance.horizontal
        }
      ],
      content: "p-virtualscroller-content",
      spacer: "p-virtualscroller-spacer",
      loader: ({ instance }) => [
        "p-virtualscroller-loader",
        {
          "p-virtualscroller-loader-mask": !instance.loaderTemplate
        }
      ],
      loadingIcon: "p-virtualscroller-loading-icon"
    };
    ScrollerStyle = class _ScrollerStyle extends BaseStyle {
      name = "virtualscroller";
      theme = theme2;
      classes = classes;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ScrollerStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ScrollerStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ScrollerStyle, decorators: [{
      type: Injectable
    }] });
    (function(ScrollerClasses2) {
      ScrollerClasses2["root"] = "p-virtualscroller";
      ScrollerClasses2["content"] = "p-virtualscroller-content";
      ScrollerClasses2["spacer"] = "p-virtualscroller-spacer";
      ScrollerClasses2["loader"] = "p-virtualscroller-loader";
      ScrollerClasses2["loadingIcon"] = "p-virtualscroller-loading-icon";
    })(ScrollerClasses || (ScrollerClasses = {}));
    Scroller = class _Scroller extends BaseComponent {
      zone;
      /**
       * Unique identifier of the element.
       * @group Props
       */
      get id() {
        return this._id;
      }
      set id(val) {
        this._id = val;
      }
      /**
       * Inline style of the component.
       * @group Props
       */
      get style() {
        return this._style;
      }
      set style(val) {
        this._style = val;
      }
      /**
       * Style class of the element.
       * @group Props
       */
      get styleClass() {
        return this._styleClass;
      }
      set styleClass(val) {
        this._styleClass = val;
      }
      /**
       * Index of the element in tabbing order.
       * @group Props
       */
      get tabindex() {
        return this._tabindex;
      }
      set tabindex(val) {
        this._tabindex = val;
      }
      /**
       * An array of objects to display.
       * @group Props
       */
      get items() {
        return this._items;
      }
      set items(val) {
        this._items = val;
      }
      /**
       * The height/width of item according to orientation.
       * @group Props
       */
      get itemSize() {
        return this._itemSize;
      }
      set itemSize(val) {
        this._itemSize = val;
      }
      /**
       * Height of the scroll viewport.
       * @group Props
       */
      get scrollHeight() {
        return this._scrollHeight;
      }
      set scrollHeight(val) {
        this._scrollHeight = val;
      }
      /**
       * Width of the scroll viewport.
       * @group Props
       */
      get scrollWidth() {
        return this._scrollWidth;
      }
      set scrollWidth(val) {
        this._scrollWidth = val;
      }
      /**
       * The orientation of scrollbar.
       * @group Props
       */
      get orientation() {
        return this._orientation;
      }
      set orientation(val) {
        this._orientation = val;
      }
      /**
       * Used to specify how many items to load in each load method in lazy mode.
       * @group Props
       */
      get step() {
        return this._step;
      }
      set step(val) {
        this._step = val;
      }
      /**
       * Delay in scroll before new data is loaded.
       * @group Props
       */
      get delay() {
        return this._delay;
      }
      set delay(val) {
        this._delay = val;
      }
      /**
       * Delay after window's resize finishes.
       * @group Props
       */
      get resizeDelay() {
        return this._resizeDelay;
      }
      set resizeDelay(val) {
        this._resizeDelay = val;
      }
      /**
       * Used to append each loaded item to top without removing any items from the DOM. Using very large data may cause the browser to crash.
       * @group Props
       */
      get appendOnly() {
        return this._appendOnly;
      }
      set appendOnly(val) {
        this._appendOnly = val;
      }
      /**
       * Specifies whether the scroller should be displayed inline or not.
       * @group Props
       */
      get inline() {
        return this._inline;
      }
      set inline(val) {
        this._inline = val;
      }
      /**
       * Defines if data is loaded and interacted with in lazy manner.
       * @group Props
       */
      get lazy() {
        return this._lazy;
      }
      set lazy(val) {
        this._lazy = val;
      }
      /**
       * If disabled, the scroller feature is eliminated and the content is displayed directly.
       * @group Props
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(val) {
        this._disabled = val;
      }
      /**
       * Used to implement a custom loader instead of using the loader feature in the scroller.
       * @group Props
       */
      get loaderDisabled() {
        return this._loaderDisabled;
      }
      set loaderDisabled(val) {
        this._loaderDisabled = val;
      }
      /**
       * Columns to display.
       * @group Props
       */
      get columns() {
        return this._columns;
      }
      set columns(val) {
        this._columns = val;
      }
      /**
       * Used to implement a custom spacer instead of using the spacer feature in the scroller.
       * @group Props
       */
      get showSpacer() {
        return this._showSpacer;
      }
      set showSpacer(val) {
        this._showSpacer = val;
      }
      /**
       * Defines whether to show loader.
       * @group Props
       */
      get showLoader() {
        return this._showLoader;
      }
      set showLoader(val) {
        this._showLoader = val;
      }
      /**
       * Determines how many additional elements to add to the DOM outside of the view. According to the scrolls made up and down, extra items are added in a certain algorithm in the form of multiples of this number. Default value is half the number of items shown in the view.
       * @group Props
       */
      get numToleratedItems() {
        return this._numToleratedItems;
      }
      set numToleratedItems(val) {
        this._numToleratedItems = val;
      }
      /**
       * Defines whether the data is loaded.
       * @group Props
       */
      get loading() {
        return this._loading;
      }
      set loading(val) {
        this._loading = val;
      }
      /**
       * Defines whether to dynamically change the height or width of scrollable container.
       * @group Props
       */
      get autoSize() {
        return this._autoSize;
      }
      set autoSize(val) {
        this._autoSize = val;
      }
      /**
       * Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.
       * @group Props
       */
      get trackBy() {
        return this._trackBy;
      }
      set trackBy(val) {
        this._trackBy = val;
      }
      /**
       * Defines whether to use the scroller feature. The properties of scroller component can be used like an object in it.
       * @group Props
       */
      get options() {
        return this._options;
      }
      set options(val) {
        this._options = val;
        if (val && typeof val === "object") {
          Object.entries(val).forEach(([k2, v]) => this[`_${k2}`] !== v && (this[`_${k2}`] = v));
          Object.entries(val).forEach(([k2, v]) => this[`${k2}`] !== v && (this[`${k2}`] = v));
        }
      }
      /**
       * Callback to invoke in lazy mode to load new data.
       * @param {ScrollerLazyLoadEvent} event - Custom lazy load event.
       * @group Emits
       */
      onLazyLoad = new EventEmitter();
      /**
       * Callback to invoke when scroll position changes.
       * @param {ScrollerScrollEvent} event - Custom scroll event.
       * @group Emits
       */
      onScroll = new EventEmitter();
      /**
       * Callback to invoke when scroll position and item's range in view changes.
       * @param {ScrollerScrollEvent} event - Custom scroll index change event.
       * @group Emits
       */
      onScrollIndexChange = new EventEmitter();
      elementViewChild;
      contentViewChild;
      height;
      _id;
      _style;
      _styleClass;
      _tabindex = 0;
      _items;
      _itemSize = 0;
      _scrollHeight;
      _scrollWidth;
      _orientation = "vertical";
      _step = 0;
      _delay = 0;
      _resizeDelay = 10;
      _appendOnly = false;
      _inline = false;
      _lazy = false;
      _disabled = false;
      _loaderDisabled = false;
      _columns;
      _showSpacer = true;
      _showLoader = false;
      _numToleratedItems;
      _loading;
      _autoSize = false;
      _trackBy;
      _options;
      d_loading = false;
      d_numToleratedItems;
      contentEl;
      /**
       * Content template of the component.
       * @group Templates
       */
      contentTemplate;
      /**
       * Item template of the component.
       * @group Templates
       */
      itemTemplate;
      /**
       * Loader template of the component.
       * @group Templates
       */
      loaderTemplate;
      /**
       * Loader icon template of the component.
       * @group Templates
       */
      loaderIconTemplate;
      templates;
      _contentTemplate;
      _itemTemplate;
      _loaderTemplate;
      _loaderIconTemplate;
      first = 0;
      last = 0;
      page = 0;
      isRangeChanged = false;
      numItemsInViewport = 0;
      lastScrollPos = 0;
      lazyLoadState = {};
      loaderArr = [];
      spacerStyle = {};
      contentStyle = {};
      scrollTimeout;
      resizeTimeout;
      initialized = false;
      windowResizeListener;
      defaultWidth;
      defaultHeight;
      defaultContentWidth;
      defaultContentHeight;
      _contentStyleClass;
      get contentStyleClass() {
        return this._contentStyleClass;
      }
      set contentStyleClass(val) {
        this._contentStyleClass = val;
      }
      get vertical() {
        return this._orientation === "vertical";
      }
      get horizontal() {
        return this._orientation === "horizontal";
      }
      get both() {
        return this._orientation === "both";
      }
      get loadedItems() {
        if (this._items && !this.d_loading) {
          if (this.both)
            return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map((item) => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));
          else if (this.horizontal && this._columns)
            return this._items;
          else
            return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
        }
        return [];
      }
      get loadedRows() {
        return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
      }
      get loadedColumns() {
        if (this._columns && (this.both || this.horizontal)) {
          return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
        }
        return this._columns;
      }
      _componentStyle = inject(ScrollerStyle);
      constructor(zone) {
        super();
        this.zone = zone;
      }
      ngOnInit() {
        super.ngOnInit();
        this.setInitialState();
      }
      ngOnChanges(simpleChanges) {
        super.ngOnChanges(simpleChanges);
        let isLoadingChanged = false;
        if (this.scrollHeight == "100%") {
          this.height = "100%";
        }
        if (simpleChanges.loading) {
          const { previousValue, currentValue } = simpleChanges.loading;
          if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
            this.d_loading = currentValue;
            isLoadingChanged = true;
          }
        }
        if (simpleChanges.orientation) {
          this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0;
        }
        if (simpleChanges.numToleratedItems) {
          const { previousValue, currentValue } = simpleChanges.numToleratedItems;
          if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
            this.d_numToleratedItems = currentValue;
          }
        }
        if (simpleChanges.options) {
          const { previousValue, currentValue } = simpleChanges.options;
          if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
            this.d_loading = currentValue.loading;
            isLoadingChanged = true;
          }
          if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
            this.d_numToleratedItems = currentValue.numToleratedItems;
          }
        }
        if (this.initialized) {
          const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
          if (isChanged) {
            this.init();
            this.calculateAutoSize();
          }
        }
      }
      ngAfterContentInit() {
        this.templates.forEach((item) => {
          switch (item.getType()) {
            case "content":
              this._contentTemplate = item.template;
              break;
            case "item":
              this._itemTemplate = item.template;
              break;
            case "loader":
              this._loaderTemplate = item.template;
              break;
            case "loadericon":
              this._loaderIconTemplate = item.template;
              break;
            default:
              this._itemTemplate = item.template;
              break;
          }
        });
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        Promise.resolve().then(() => {
          this.viewInit();
        });
      }
      ngAfterViewChecked() {
        if (!this.initialized) {
          this.viewInit();
        }
      }
      ngOnDestroy() {
        this.unbindResizeListener();
        this.contentEl = null;
        this.initialized = false;
        super.ngOnDestroy();
      }
      viewInit() {
        if (isPlatformBrowser(this.platformId) && !this.initialized) {
          if (et(this.elementViewChild?.nativeElement)) {
            this.setInitialState();
            this.setContentEl(this.contentEl);
            this.init();
            this.defaultWidth = Rt(this.elementViewChild?.nativeElement);
            this.defaultHeight = Tt(this.elementViewChild?.nativeElement);
            this.defaultContentWidth = Rt(this.contentEl);
            this.defaultContentHeight = Tt(this.contentEl);
            this.initialized = true;
          }
        }
      }
      init() {
        if (!this._disabled) {
          this.setSize();
          this.calculateOptions();
          this.setSpacerSize();
          this.bindResizeListener();
          this.cd.detectChanges();
        }
      }
      setContentEl(el) {
        this.contentEl = el || this.contentViewChild?.nativeElement || z(this.elementViewChild?.nativeElement, ".p-virtualscroller-content");
      }
      setInitialState() {
        this.first = this.both ? { rows: 0, cols: 0 } : 0;
        this.last = this.both ? { rows: 0, cols: 0 } : 0;
        this.numItemsInViewport = this.both ? { rows: 0, cols: 0 } : 0;
        this.lastScrollPos = this.both ? { top: 0, left: 0 } : 0;
        this.d_loading = this._loading || false;
        this.d_numToleratedItems = this._numToleratedItems;
        this.loaderArr = [];
      }
      getElementRef() {
        return this.elementViewChild;
      }
      getPageByFirst(first) {
        return Math.floor(((first ?? this.first) + this.d_numToleratedItems * 4) / (this._step || 1));
      }
      isPageChanged(first) {
        return this._step ? this.page !== this.getPageByFirst(first ?? this.first) : true;
      }
      scrollTo(options) {
        this.elementViewChild?.nativeElement?.scrollTo(options);
      }
      scrollToIndex(index, behavior = "auto") {
        const valid = this.both ? index.every((i) => i > -1) : index > -1;
        if (valid) {
          const first = this.first;
          const { scrollTop = 0, scrollLeft = 0 } = this.elementViewChild?.nativeElement;
          const { numToleratedItems } = this.calculateNumItems();
          const contentPos = this.getContentPosition();
          const itemSize = this.itemSize;
          const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
          const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
          const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
          let newFirst = this.both ? { rows: 0, cols: 0 } : 0;
          let isRangeChanged = false, isScrollChanged = false;
          if (this.both) {
            newFirst = {
              rows: calculateFirst(index[0], numToleratedItems[0]),
              cols: calculateFirst(index[1], numToleratedItems[1])
            };
            scrollTo(calculateCoord(newFirst.cols, itemSize[1], contentPos.left), calculateCoord(newFirst.rows, itemSize[0], contentPos.top));
            isScrollChanged = this.lastScrollPos.top !== scrollTop || this.lastScrollPos.left !== scrollLeft;
            isRangeChanged = newFirst.rows !== first.rows || newFirst.cols !== first.cols;
          } else {
            newFirst = calculateFirst(index, numToleratedItems);
            this.horizontal ? scrollTo(calculateCoord(newFirst, itemSize, contentPos.left), scrollTop) : scrollTo(scrollLeft, calculateCoord(newFirst, itemSize, contentPos.top));
            isScrollChanged = this.lastScrollPos !== (this.horizontal ? scrollLeft : scrollTop);
            isRangeChanged = newFirst !== first;
          }
          this.isRangeChanged = isRangeChanged;
          isScrollChanged && (this.first = newFirst);
        }
      }
      scrollInView(index, to, behavior = "auto") {
        if (to) {
          const { first, viewport } = this.getRenderedRange();
          const scrollTo = (left = 0, top = 0) => this.scrollTo({ left, top, behavior });
          const isToStart = to === "to-start";
          const isToEnd = to === "to-end";
          if (isToStart) {
            if (this.both) {
              if (viewport.first.rows - first.rows > index[0]) {
                scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
              } else if (viewport.first.cols - first.cols > index[1]) {
                scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
              }
            } else {
              if (viewport.first - first > index) {
                const pos = (viewport.first - 1) * this._itemSize;
                this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
              }
            }
          } else if (isToEnd) {
            if (this.both) {
              if (viewport.last.rows - first.rows <= index[0] + 1) {
                scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
              } else if (viewport.last.cols - first.cols <= index[1] + 1) {
                scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
              }
            } else {
              if (viewport.last - first <= index + 1) {
                const pos = (viewport.first + 1) * this._itemSize;
                this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
              }
            }
          }
        } else {
          this.scrollToIndex(index, behavior);
        }
      }
      getRenderedRange() {
        const calculateFirstInViewport = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
        let firstInViewport = this.first;
        let lastInViewport = 0;
        if (this.elementViewChild?.nativeElement) {
          const { scrollTop, scrollLeft } = this.elementViewChild.nativeElement;
          if (this.both) {
            firstInViewport = {
              rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
              cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
            };
            lastInViewport = {
              rows: firstInViewport.rows + this.numItemsInViewport.rows,
              cols: firstInViewport.cols + this.numItemsInViewport.cols
            };
          } else {
            const scrollPos = this.horizontal ? scrollLeft : scrollTop;
            firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
            lastInViewport = firstInViewport + this.numItemsInViewport;
          }
        }
        return {
          first: this.first,
          last: this.last,
          viewport: {
            first: firstInViewport,
            last: lastInViewport
          }
        };
      }
      calculateNumItems() {
        const contentPos = this.getContentPosition();
        const contentWidth = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0) || 0;
        const contentHeight = (this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0) || 0;
        const calculateNumItemsInViewport = (_contentSize, _itemSize) => _itemSize || _contentSize ? Math.ceil(_contentSize / (_itemSize || _contentSize)) : 0;
        const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
        const numItemsInViewport = this.both ? {
          rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
          cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
        } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
        const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
        return { numItemsInViewport, numToleratedItems };
      }
      calculateOptions() {
        const { numItemsInViewport, numToleratedItems } = this.calculateNumItems();
        const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
        const first = this.first;
        const last = this.both ? {
          rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
          cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
        } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
        this.last = last;
        this.numItemsInViewport = numItemsInViewport;
        this.d_numToleratedItems = numToleratedItems;
        if (this.showLoader) {
          this.loaderArr = this.both ? Array.from({ length: numItemsInViewport.rows }).map(() => Array.from({ length: numItemsInViewport.cols })) : Array.from({ length: numItemsInViewport });
        }
        if (this._lazy) {
          Promise.resolve().then(() => {
            this.lazyLoadState = {
              first: this._step ? this.both ? { rows: 0, cols: first.cols } : 0 : first,
              last: Math.min(this._step ? this._step : this.last, this.items.length)
            };
            this.handleEvents("onLazyLoad", this.lazyLoadState);
          });
        }
      }
      calculateAutoSize() {
        if (this._autoSize && !this.d_loading) {
          Promise.resolve().then(() => {
            if (this.contentEl) {
              this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto";
              this.contentEl.style.position = "relative";
              this.elementViewChild.nativeElement.style.contain = "none";
              const [contentWidth, contentHeight] = [Rt(this.contentEl), Tt(this.contentEl)];
              contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = "");
              contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = "");
              const [width, height] = [Rt(this.elementViewChild.nativeElement), Tt(this.elementViewChild.nativeElement)];
              (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + "px" : this._scrollWidth || this.defaultWidth + "px");
              (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + "px" : this._scrollHeight || this.defaultHeight + "px");
              this.contentEl.style.minHeight = this.contentEl.style.minWidth = "";
              this.contentEl.style.position = "";
              this.elementViewChild.nativeElement.style.contain = "";
            }
          });
        }
      }
      getLast(last = 0, isCols = false) {
        return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
      }
      getContentPosition() {
        if (this.contentEl) {
          const style5 = getComputedStyle(this.contentEl);
          const left = parseFloat(style5.paddingLeft) + Math.max(parseFloat(style5.left) || 0, 0);
          const right = parseFloat(style5.paddingRight) + Math.max(parseFloat(style5.right) || 0, 0);
          const top = parseFloat(style5.paddingTop) + Math.max(parseFloat(style5.top) || 0, 0);
          const bottom = parseFloat(style5.paddingBottom) + Math.max(parseFloat(style5.bottom) || 0, 0);
          return { left, right, top, bottom, x: left + right, y: top + bottom };
        }
        return { left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
      }
      setSize() {
        if (this.elementViewChild?.nativeElement) {
          const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
          const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
          const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
          const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
          if (this.both || this.horizontal) {
            setProp("height", height);
            setProp("width", width);
          } else {
            setProp("height", height);
          }
        }
      }
      setSpacerSize() {
        if (this._items) {
          const contentPos = this.getContentPosition();
          const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = __spreadValues(__spreadValues({}, this.spacerStyle), { [`${_name}`]: (_value || []).length * _size + _cpos + "px" });
          if (this.both) {
            setProp("height", this._items, this._itemSize[0], contentPos.y);
            setProp("width", this._columns || this._items[1], this._itemSize[1], contentPos.x);
          } else {
            this.horizontal ? setProp("width", this._columns || this._items, this._itemSize, contentPos.x) : setProp("height", this._items, this._itemSize, contentPos.y);
          }
        }
      }
      setContentPosition(pos) {
        if (this.contentEl && !this._appendOnly) {
          const first = pos ? pos.first : this.first;
          const calculateTranslateVal = (_first, _size) => _first * _size;
          const setTransform = (_x = 0, _y = 0) => this.contentStyle = __spreadValues(__spreadValues({}, this.contentStyle), { transform: `translate3d(${_x}px, ${_y}px, 0)` });
          if (this.both) {
            setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
          } else {
            const translateVal = calculateTranslateVal(first, this._itemSize);
            this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
          }
        }
      }
      onScrollPositionChange(event) {
        const target = event.target;
        const contentPos = this.getContentPosition();
        const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
        const calculateCurrentIndex = (_pos, _size) => _size || _pos ? Math.floor(_pos / (_size || _pos)) : 0;
        const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
          return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
        };
        const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
          if (_currentIndex <= _numT)
            return 0;
          else
            return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
        };
        const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
          let lastValue = _first + _num + 2 * _numT;
          if (_currentIndex >= _numT) {
            lastValue += _numT + 1;
          }
          return this.getLast(lastValue, _isCols);
        };
        const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
        const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
        let newFirst = this.both ? { rows: 0, cols: 0 } : 0;
        let newLast = this.last;
        let isRangeChanged = false;
        let newScrollPos = this.lastScrollPos;
        if (this.both) {
          const isScrollDown = this.lastScrollPos.top <= scrollTop;
          const isScrollRight = this.lastScrollPos.left <= scrollLeft;
          if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
            const currentIndex = {
              rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
              cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
            };
            const triggerIndex = {
              rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
              cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
            };
            newFirst = {
              rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
              cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
            };
            newLast = {
              rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
              cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
            };
            isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
            newScrollPos = { top: scrollTop, left: scrollLeft };
          }
        } else {
          const scrollPos = this.horizontal ? scrollLeft : scrollTop;
          const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
          if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
            const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
            const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
            newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
            newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
            isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
            newScrollPos = scrollPos;
          }
        }
        return {
          first: newFirst,
          last: newLast,
          isRangeChanged,
          scrollPos: newScrollPos
        };
      }
      onScrollChange(event) {
        const { first, last, isRangeChanged, scrollPos } = this.onScrollPositionChange(event);
        if (isRangeChanged) {
          const newState = { first, last };
          this.setContentPosition(newState);
          this.first = first;
          this.last = last;
          this.lastScrollPos = scrollPos;
          this.handleEvents("onScrollIndexChange", newState);
          if (this._lazy && this.isPageChanged(first)) {
            const lazyLoadState = {
              first: this._step ? Math.min(this.getPageByFirst(first) * this._step, this.items.length - this._step) : first,
              last: Math.min(this._step ? (this.getPageByFirst(first) + 1) * this._step : last, this.items.length)
            };
            const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
            isLazyStateChanged && this.handleEvents("onLazyLoad", lazyLoadState);
            this.lazyLoadState = lazyLoadState;
          }
        }
      }
      onContainerScroll(event) {
        this.handleEvents("onScroll", { originalEvent: event });
        if (this._delay && this.isPageChanged()) {
          if (this.scrollTimeout) {
            clearTimeout(this.scrollTimeout);
          }
          if (!this.d_loading && this.showLoader) {
            const { isRangeChanged } = this.onScrollPositionChange(event);
            const changed = isRangeChanged || (this._step ? this.isPageChanged() : false);
            if (changed) {
              this.d_loading = true;
              this.cd.detectChanges();
            }
          }
          this.scrollTimeout = setTimeout(() => {
            this.onScrollChange(event);
            if (this.d_loading && this.showLoader && (!this._lazy || this._loading === void 0)) {
              this.d_loading = false;
              this.page = this.getPageByFirst();
            }
            this.cd.detectChanges();
          }, this._delay);
        } else {
          !this.d_loading && this.onScrollChange(event);
        }
      }
      bindResizeListener() {
        if (isPlatformBrowser(this.platformId)) {
          if (!this.windowResizeListener) {
            this.zone.runOutsideAngular(() => {
              const window = this.document.defaultView;
              const event = Yt() ? "orientationchange" : "resize";
              this.windowResizeListener = this.renderer.listen(window, event, this.onWindowResize.bind(this));
            });
          }
        }
      }
      unbindResizeListener() {
        if (this.windowResizeListener) {
          this.windowResizeListener();
          this.windowResizeListener = null;
        }
      }
      onWindowResize() {
        if (this.resizeTimeout) {
          clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(() => {
          if (et(this.elementViewChild?.nativeElement)) {
            const [width, height] = [Rt(this.elementViewChild?.nativeElement), Tt(this.elementViewChild?.nativeElement)];
            const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
            const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
            reinit && this.zone.run(() => {
              this.d_numToleratedItems = this._numToleratedItems;
              this.defaultWidth = width;
              this.defaultHeight = height;
              this.defaultContentWidth = Rt(this.contentEl);
              this.defaultContentHeight = Tt(this.contentEl);
              this.init();
            });
          }
        }, this._resizeDelay);
      }
      handleEvents(name, params) {
        return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
      }
      getContentOptions() {
        return {
          contentStyleClass: `p-virtualscroller-content ${this.d_loading ? "p-virtualscroller-loading" : ""}`,
          items: this.loadedItems,
          getItemOptions: (index) => this.getOptions(index),
          loading: this.d_loading,
          getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
          itemSize: this._itemSize,
          rows: this.loadedRows,
          columns: this.loadedColumns,
          spacerStyle: this.spacerStyle,
          contentStyle: this.contentStyle,
          vertical: this.vertical,
          horizontal: this.horizontal,
          both: this.both
        };
      }
      getOptions(renderedIndex) {
        const count = (this._items || []).length;
        const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
        return {
          index,
          count,
          first: index === 0,
          last: index === count - 1,
          even: index % 2 === 0,
          odd: index % 2 !== 0
        };
      }
      getLoaderOptions(index, extOptions) {
        const count = this.loaderArr.length;
        return __spreadValues({
          index,
          count,
          first: index === 0,
          last: index === count - 1,
          even: index % 2 === 0,
          odd: index % 2 !== 0
        }, extOptions);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Scroller, deps: [{ token: NgZone }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.3", type: _Scroller, isStandalone: true, selector: "p-scroller, p-virtualscroller, p-virtual-scroller, p-virtualScroller", inputs: { id: "id", style: "style", styleClass: "styleClass", tabindex: "tabindex", items: "items", itemSize: "itemSize", scrollHeight: "scrollHeight", scrollWidth: "scrollWidth", orientation: "orientation", step: "step", delay: "delay", resizeDelay: "resizeDelay", appendOnly: "appendOnly", inline: "inline", lazy: "lazy", disabled: "disabled", loaderDisabled: "loaderDisabled", columns: "columns", showSpacer: "showSpacer", showLoader: "showLoader", numToleratedItems: "numToleratedItems", loading: "loading", autoSize: "autoSize", trackBy: "trackBy", options: "options" }, outputs: { onLazyLoad: "onLazyLoad", onScroll: "onScroll", onScrollIndexChange: "onScrollIndexChange" }, host: { properties: { "style.height": "this.height" } }, providers: [ScrollerStyle], queries: [{ propertyName: "contentTemplate", first: true, predicate: ["content"] }, { propertyName: "itemTemplate", first: true, predicate: ["item"] }, { propertyName: "loaderTemplate", first: true, predicate: ["loader"] }, { propertyName: "loaderIconTemplate", first: true, predicate: ["loadericon"] }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "elementViewChild", first: true, predicate: ["element"], descendants: true }, { propertyName: "contentViewChild", first: true, predicate: ["content"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: core_exports, template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div #element [attr.id]="_id" [attr.tabindex]="tabindex" [ngStyle]="_style" [class]="cn(cx('root'), styleClass)" (scroll)="onContainerScroll($event)" [attr.data-pc-name]="'scroller'" [attr.data-pc-section]="'root'">
                <ng-container *ngIf="contentTemplate || _contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: loadedItems, options: getContentOptions() }"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content [class]="cn(cx('content'), contentStyleClass)" [style]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy">
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item, options: getOptions(index) }"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" [class]="cx('spacer')" [ngStyle]="spacerStyle" [attr.data-pc-section]="'spacer'"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" [class]="cx('loader')" [attr.data-pc-section]="'loader'">
                    <ng-container *ngIf="loaderTemplate || _loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container
                                *ngTemplateOutlet="
                                    loaderTemplate || _loaderTemplate;
                                    context: {
                                        options: getLoaderOptions(index, both && { numCols: numItemsInViewport.cols })
                                    }
                                "
                            ></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate || _loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate || _loaderIconTemplate; context: { options: { styleClass: 'p-virtualscroller-loading-icon' } }"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <svg data-p-icon="spinner" [class]="cx('loadingIcon')" [spin]="true" [attr.data-pc-section]="'loadingIcon'" />
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate || _contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: items, options: { rows: _items, columns: loadedColumns } }"></ng-container>
            </ng-container>
        </ng-template>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: SpinnerIcon, selector: '[data-p-icon="spinner"]' }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.Default, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Scroller, decorators: [{
      type: Component,
      args: [{
        selector: "p-scroller, p-virtualscroller, p-virtual-scroller, p-virtualScroller",
        imports: [CommonModule, SpinnerIcon, SharedModule],
        standalone: true,
        template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div #element [attr.id]="_id" [attr.tabindex]="tabindex" [ngStyle]="_style" [class]="cn(cx('root'), styleClass)" (scroll)="onContainerScroll($event)" [attr.data-pc-name]="'scroller'" [attr.data-pc-section]="'root'">
                <ng-container *ngIf="contentTemplate || _contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: loadedItems, options: getContentOptions() }"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content [class]="cn(cx('content'), contentStyleClass)" [style]="contentStyle" [attr.data-pc-section]="'content'">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy">
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item, options: getOptions(index) }"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" [class]="cx('spacer')" [ngStyle]="spacerStyle" [attr.data-pc-section]="'spacer'"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" [class]="cx('loader')" [attr.data-pc-section]="'loader'">
                    <ng-container *ngIf="loaderTemplate || _loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container
                                *ngTemplateOutlet="
                                    loaderTemplate || _loaderTemplate;
                                    context: {
                                        options: getLoaderOptions(index, both && { numCols: numItemsInViewport.cols })
                                    }
                                "
                            ></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate || _loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate || _loaderIconTemplate; context: { options: { styleClass: 'p-virtualscroller-loading-icon' } }"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <svg data-p-icon="spinner" [class]="cx('loadingIcon')" [spin]="true" [attr.data-pc-section]="'loadingIcon'" />
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate || _contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: items, options: { rows: _items, columns: loadedColumns } }"></ng-container>
            </ng-container>
        </ng-template>
    `,
        changeDetection: ChangeDetectionStrategy.Default,
        encapsulation: ViewEncapsulation.None,
        providers: [ScrollerStyle]
      }]
    }], ctorParameters: () => [{ type: NgZone }], propDecorators: { id: [{
      type: Input
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], tabindex: [{
      type: Input
    }], items: [{
      type: Input
    }], itemSize: [{
      type: Input
    }], scrollHeight: [{
      type: Input
    }], scrollWidth: [{
      type: Input
    }], orientation: [{
      type: Input
    }], step: [{
      type: Input
    }], delay: [{
      type: Input
    }], resizeDelay: [{
      type: Input
    }], appendOnly: [{
      type: Input
    }], inline: [{
      type: Input
    }], lazy: [{
      type: Input
    }], disabled: [{
      type: Input
    }], loaderDisabled: [{
      type: Input
    }], columns: [{
      type: Input
    }], showSpacer: [{
      type: Input
    }], showLoader: [{
      type: Input
    }], numToleratedItems: [{
      type: Input
    }], loading: [{
      type: Input
    }], autoSize: [{
      type: Input
    }], trackBy: [{
      type: Input
    }], options: [{
      type: Input
    }], onLazyLoad: [{
      type: Output
    }], onScroll: [{
      type: Output
    }], onScrollIndexChange: [{
      type: Output
    }], elementViewChild: [{
      type: ViewChild,
      args: ["element"]
    }], contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }], height: [{
      type: HostBinding,
      args: ["style.height"]
    }], contentTemplate: [{
      type: ContentChild,
      args: ["content", { descendants: false }]
    }], itemTemplate: [{
      type: ContentChild,
      args: ["item", { descendants: false }]
    }], loaderTemplate: [{
      type: ContentChild,
      args: ["loader", { descendants: false }]
    }], loaderIconTemplate: [{
      type: ContentChild,
      args: ["loadericon", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    ScrollerModule = class _ScrollerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ScrollerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _ScrollerModule, imports: [Scroller, SharedModule], exports: [Scroller, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _ScrollerModule, imports: [Scroller, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: ScrollerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Scroller, SharedModule],
        exports: [Scroller, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/select/index.mjs
var style2;
var init_select = __esm({
  "node_modules/@primeuix/styles/dist/select/index.mjs"() {
    "use strict";
    style2 = "\n    .p-select {\n        display: inline-flex;\n        cursor: pointer;\n        position: relative;\n        user-select: none;\n        background: dt('select.background');\n        border: 1px solid dt('select.border.color');\n        transition:\n            background dt('select.transition.duration'),\n            color dt('select.transition.duration'),\n            border-color dt('select.transition.duration'),\n            outline-color dt('select.transition.duration'),\n            box-shadow dt('select.transition.duration');\n        border-radius: dt('select.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('select.shadow');\n    }\n\n    .p-select:not(.p-disabled):hover {\n        border-color: dt('select.hover.border.color');\n    }\n\n    .p-select:not(.p-disabled).p-focus {\n        border-color: dt('select.focus.border.color');\n        box-shadow: dt('select.focus.ring.shadow');\n        outline: dt('select.focus.ring.width') dt('select.focus.ring.style') dt('select.focus.ring.color');\n        outline-offset: dt('select.focus.ring.offset');\n    }\n\n    .p-select.p-variant-filled {\n        background: dt('select.filled.background');\n    }\n\n    .p-select.p-variant-filled:not(.p-disabled):hover {\n        background: dt('select.filled.hover.background');\n    }\n\n    .p-select.p-variant-filled:not(.p-disabled).p-focus {\n        background: dt('select.filled.focus.background');\n    }\n\n    .p-select.p-invalid {\n        border-color: dt('select.invalid.border.color');\n    }\n\n    .p-select.p-disabled {\n        opacity: 1;\n        background: dt('select.disabled.background');\n    }\n\n    .p-select-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        color: dt('select.clear.icon.color');\n        inset-inline-end: dt('select.dropdown.width');\n    }\n\n    .p-select-dropdown {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-shrink: 0;\n        background: transparent;\n        color: dt('select.dropdown.color');\n        width: dt('select.dropdown.width');\n        border-start-end-radius: dt('select.border.radius');\n        border-end-end-radius: dt('select.border.radius');\n    }\n\n    .p-select-label {\n        display: block;\n        white-space: nowrap;\n        overflow: hidden;\n        flex: 1 1 auto;\n        width: 1%;\n        padding: dt('select.padding.y') dt('select.padding.x');\n        text-overflow: ellipsis;\n        cursor: pointer;\n        color: dt('select.color');\n        background: transparent;\n        border: 0 none;\n        outline: 0 none;\n        font-size: 1rem;\n    }\n\n    .p-select-label.p-placeholder {\n        color: dt('select.placeholder.color');\n    }\n\n    .p-select.p-invalid .p-select-label.p-placeholder {\n        color: dt('select.invalid.placeholder.color');\n    }\n\n    .p-select:has(.p-select-clear-icon) .p-select-label {\n        padding-inline-end: calc(1rem + dt('select.padding.x'));\n    }\n\n    .p-select.p-disabled .p-select-label {\n        color: dt('select.disabled.color');\n    }\n\n    .p-select-label-empty {\n        overflow: hidden;\n        opacity: 0;\n    }\n\n    input.p-select-label {\n        cursor: default;\n    }\n\n    .p-select-overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: dt('select.overlay.background');\n        color: dt('select.overlay.color');\n        border: 1px solid dt('select.overlay.border.color');\n        border-radius: dt('select.overlay.border.radius');\n        box-shadow: dt('select.overlay.shadow');\n        min-width: 100%;\n    }\n\n    .p-select-header {\n        padding: dt('select.list.header.padding');\n    }\n\n    .p-select-filter {\n        width: 100%;\n    }\n\n    .p-select-list-container {\n        overflow: auto;\n    }\n\n    .p-select-option-group {\n        cursor: auto;\n        margin: 0;\n        padding: dt('select.option.group.padding');\n        background: dt('select.option.group.background');\n        color: dt('select.option.group.color');\n        font-weight: dt('select.option.group.font.weight');\n    }\n\n    .p-select-list {\n        margin: 0;\n        padding: 0;\n        list-style-type: none;\n        padding: dt('select.list.padding');\n        gap: dt('select.list.gap');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-select-option {\n        cursor: pointer;\n        font-weight: normal;\n        white-space: nowrap;\n        position: relative;\n        overflow: hidden;\n        display: flex;\n        align-items: center;\n        padding: dt('select.option.padding');\n        border: 0 none;\n        color: dt('select.option.color');\n        background: transparent;\n        transition:\n            background dt('select.transition.duration'),\n            color dt('select.transition.duration'),\n            border-color dt('select.transition.duration'),\n            box-shadow dt('select.transition.duration'),\n            outline-color dt('select.transition.duration');\n        border-radius: dt('select.option.border.radius');\n    }\n\n    .p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus {\n        background: dt('select.option.focus.background');\n        color: dt('select.option.focus.color');\n    }\n\n    .p-select-option.p-select-option-selected {\n        background: dt('select.option.selected.background');\n        color: dt('select.option.selected.color');\n    }\n\n    .p-select-option.p-select-option-selected.p-focus {\n        background: dt('select.option.selected.focus.background');\n        color: dt('select.option.selected.focus.color');\n    }\n\n    .p-select-option-blank-icon {\n        flex-shrink: 0;\n    }\n\n    .p-select-option-check-icon {\n        position: relative;\n        flex-shrink: 0;\n        margin-inline-start: dt('select.checkmark.gutter.start');\n        margin-inline-end: dt('select.checkmark.gutter.end');\n        color: dt('select.checkmark.color');\n    }\n\n    .p-select-empty-message {\n        padding: dt('select.empty.message.padding');\n    }\n\n    .p-select-fluid {\n        display: flex;\n        width: 100%;\n    }\n\n    .p-select-sm .p-select-label {\n        font-size: dt('select.sm.font.size');\n        padding-block: dt('select.sm.padding.y');\n        padding-inline: dt('select.sm.padding.x');\n    }\n\n    .p-select-sm .p-select-dropdown .p-icon {\n        font-size: dt('select.sm.font.size');\n        width: dt('select.sm.font.size');\n        height: dt('select.sm.font.size');\n    }\n\n    .p-select-lg .p-select-label {\n        font-size: dt('select.lg.font.size');\n        padding-block: dt('select.lg.padding.y');\n        padding-inline: dt('select.lg.padding.x');\n    }\n\n    .p-select-lg .p-select-dropdown .p-icon {\n        font-size: dt('select.lg.font.size');\n        width: dt('select.lg.font.size');\n        height: dt('select.lg.font.size');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-select.mjs
var theme3, classes2, SelectStyle, SelectClasses, SELECT_VALUE_ACCESSOR, SelectItem, Select, SelectModule;
var init_primeng_select = __esm({
  "node_modules/primeng/fesm2022/primeng-select.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_forms();
    init_dist();
    init_primeng_api();
    init_primeng_api();
    init_primeng_autofocus();
    init_primeng_basecomponent();
    init_primeng_baseinput();
    init_primeng_dom();
    init_primeng_iconfield();
    init_primeng_icons();
    init_primeng_inputicon();
    init_primeng_inputtext();
    init_primeng_overlay();
    init_primeng_ripple();
    init_primeng_scroller();
    init_primeng_tooltip();
    init_select();
    init_primeng_base();
    theme3 = /*css*/
    `
    ${style2}

    /* For PrimeNG */
    .p-select-label.p-placeholder {
        color: dt('select.placeholder.color');
    }

    .p-select.ng-invalid.ng-dirty {
        border-color: dt('select.invalid.border.color');
    }

    .p-dropdown.ng-invalid.ng-dirty .p-dropdown-label.p-placeholder,
    .p-select.ng-invalid.ng-dirty .p-select-label.p-placeholder {
        color: dt('select.invalid.placeholder.color');
    }
`;
    classes2 = {
      root: ({ instance }) => [
        "p-select p-component p-inputwrapper",
        {
          "p-disabled": instance.$disabled(),
          "p-variant-filled": instance.$variant() === "filled",
          "p-focus": instance.focused,
          "p-invalid": instance.invalid(),
          "p-inputwrapper-filled": instance.$filled(),
          "p-inputwrapper-focus": instance.focused || instance.overlayVisible,
          "p-select-open": instance.overlayVisible,
          "p-select-fluid": instance.hasFluid,
          "p-select-sm p-inputfield-sm": instance.size() === "small",
          "p-select-lg p-inputfield-lg": instance.size() === "large"
        }
      ],
      label: ({ instance }) => [
        "p-select-label",
        {
          "p-placeholder": instance.placeholder() && instance.label() === instance.placeholder(),
          "p-select-label-empty": !instance.editable && !instance.selectedItemTemplate && (instance.label() === void 0 || instance.label() === null || instance.label() === "p-emptylabel" || instance.label().length === 0)
        }
      ],
      clearIcon: "p-select-clear-icon",
      dropdown: "p-select-dropdown",
      loadingIcon: "p-select-loading-icon",
      dropdownIcon: "p-select-dropdown-icon",
      overlay: "p-select-overlay p-component-overlay p-component",
      header: "p-select-header",
      pcFilter: "p-select-filter",
      listContainer: "p-select-list-container",
      list: "p-select-list",
      optionGroup: "p-select-option-group",
      optionGroupLabel: "p-select-option-group-label",
      option: ({ instance }) => [
        "p-select-option",
        {
          "p-select-option-selected": instance.selected && !instance.checkmark,
          "p-disabled": instance.disabled,
          "p-focus": instance.focused
        }
      ],
      optionLabel: "p-select-option-label",
      optionCheckIcon: "p-select-option-check-icon",
      optionBlankIcon: "p-select-option-blank-icon",
      emptyMessage: "p-select-empty-message"
    };
    SelectStyle = class _SelectStyle extends BaseStyle {
      name = "select";
      theme = theme3;
      classes = classes2;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _SelectStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _SelectStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: SelectStyle, decorators: [{
      type: Injectable
    }] });
    (function(SelectClasses2) {
      SelectClasses2["root"] = "p-select";
      SelectClasses2["label"] = "p-select-label";
      SelectClasses2["clearIcon"] = "p-select-clear-icon";
      SelectClasses2["dropdown"] = "p-select-dropdown";
      SelectClasses2["loadingIcon"] = "p-select-loading-icon";
      SelectClasses2["dropdownIcon"] = "p-select-dropdown-icon";
      SelectClasses2["overlay"] = "p-select-overlay";
      SelectClasses2["header"] = "p-select-header";
      SelectClasses2["pcFilter"] = "p-select-filter";
      SelectClasses2["listContainer"] = "p-select-list-container";
      SelectClasses2["list"] = "p-select-list";
      SelectClasses2["optionGroup"] = "p-select-option-group";
      SelectClasses2["optionGroupLabel"] = "p-select-option-group-label";
      SelectClasses2["option"] = "p-select-option";
      SelectClasses2["optionLabel"] = "p-select-option-label";
      SelectClasses2["optionCheckIcon"] = "p-select-option-check-icon";
      SelectClasses2["optionBlankIcon"] = "p-select-option-blank-icon";
      SelectClasses2["emptyMessage"] = "p-select-empty-message";
    })(SelectClasses || (SelectClasses = {}));
    SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    };
    SelectItem = class _SelectItem extends BaseComponent {
      id;
      option;
      selected;
      focused;
      label;
      disabled;
      visible;
      itemSize;
      ariaPosInset;
      ariaSetSize;
      template;
      checkmark;
      onClick = new EventEmitter();
      onMouseEnter = new EventEmitter();
      _componentStyle = inject(SelectStyle);
      onOptionClick(event) {
        this.onClick.emit(event);
      }
      onOptionMouseEnter(event) {
        this.onMouseEnter.emit(event);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _SelectItem, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.1.3", type: _SelectItem, isStandalone: true, selector: "p-selectItem", inputs: { id: "id", option: "option", selected: ["selected", "selected", booleanAttribute], focused: ["focused", "focused", booleanAttribute], label: "label", disabled: ["disabled", "disabled", booleanAttribute], visible: ["visible", "visible", booleanAttribute], itemSize: ["itemSize", "itemSize", numberAttribute], ariaPosInset: "ariaPosInset", ariaSetSize: "ariaSetSize", template: "template", checkmark: ["checkmark", "checkmark", booleanAttribute] }, outputs: { onClick: "onClick", onMouseEnter: "onMouseEnter" }, providers: [SelectStyle], usesInheritance: true, ngImport: core_exports, template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [class]="cx('option')"
        >
            <ng-container *ngIf="checkmark">
                <svg data-p-icon="check" *ngIf="selected" [class]="cx('optionCheckIcon')" />
                <svg data-p-icon="blank" *ngIf="!selected" [class]="cx('optionBlankIcon')" />
            </ng-container>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "component", type: CheckIcon, selector: '[data-p-icon="check"]' }, { kind: "component", type: BlankIcon, selector: '[data-p-icon="blank"]' }] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: SelectItem, decorators: [{
      type: Component,
      args: [{
        selector: "p-selectItem",
        standalone: true,
        imports: [CommonModule, SharedModule, Ripple, CheckIcon, BlankIcon],
        template: `
        <li
            [id]="id"
            (click)="onOptionClick($event)"
            (mouseenter)="onOptionMouseEnter($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-setsize]="ariaSetSize"
            [attr.aria-posinset]="ariaPosInset"
            [attr.aria-selected]="selected"
            [attr.data-p-focused]="focused"
            [attr.data-p-highlight]="selected"
            [attr.data-p-disabled]="disabled"
            [ngStyle]="{ height: itemSize + 'px' }"
            [class]="cx('option')"
        >
            <ng-container *ngIf="checkmark">
                <svg data-p-icon="check" *ngIf="selected" [class]="cx('optionCheckIcon')" />
                <svg data-p-icon="blank" *ngIf="!selected" [class]="cx('optionBlankIcon')" />
            </ng-container>
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
        providers: [SelectStyle]
      }]
    }], propDecorators: { id: [{
      type: Input
    }], option: [{
      type: Input
    }], selected: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], focused: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], label: [{
      type: Input
    }], disabled: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], visible: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], itemSize: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], ariaPosInset: [{
      type: Input
    }], ariaSetSize: [{
      type: Input
    }], template: [{
      type: Input
    }], checkmark: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onClick: [{
      type: Output
    }], onMouseEnter: [{
      type: Output
    }] } });
    Select = class _Select extends BaseInput {
      zone;
      filterService;
      /**
       * Unique identifier of the component
       * @group Props
       */
      id;
      /**
       * Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
       * @group Props
       */
      scrollHeight = "200px";
      /**
       * When specified, displays an input field to filter the items on keyup.
       * @group Props
       */
      filter;
      /**
       * Inline style of the overlay panel element.
       * @group Props
       */
      panelStyle;
      /**
       * Style class of the element.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Style class of the overlay panel element.
       * @group Props
       */
      panelStyleClass;
      /**
       * When present, it specifies that the component cannot be edited.
       * @group Props
       */
      readonly;
      /**
       * When present, custom value instead of predefined options can be entered using the editable input field.
       * @group Props
       */
      editable;
      /**
       * Index of the element in tabbing order.
       * @group Props
       */
      tabindex = 0;
      /**
       * Default text to display when no option is selected.
       * @group Props
       */
      set placeholder(val) {
        this._placeholder.set(val);
      }
      get placeholder() {
        return this._placeholder.asReadonly();
      }
      /**
       * Icon to display in loading state.
       * @group Props
       */
      loadingIcon;
      /**
       * Placeholder text to show when filter input is empty.
       * @group Props
       */
      filterPlaceholder;
      /**
       * Locale to use in filtering. The default locale is the host environment's current locale.
       * @group Props
       */
      filterLocale;
      /**
       * Identifier of the accessible input element.
       * @group Props
       */
      inputId;
      /**
       * A property to uniquely identify a value in options.
       * @group Props
       */
      dataKey;
      /**
       * When filtering is enabled, filterBy decides which field or fields (comma separated) to search against.
       * @group Props
       */
      filterBy;
      /**
       * Fields used when filtering the options, defaults to optionLabel.
       * @group Props
       */
      filterFields;
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus;
      /**
       * Clears the filter value when hiding the select.
       * @group Props
       */
      resetFilterOnHide = false;
      /**
       * Whether the selected option will be shown with a check mark.
       * @group Props
       */
      checkmark = false;
      /**
       * Icon class of the select icon.
       * @group Props
       */
      dropdownIcon;
      /**
       * Whether the select is in loading state.
       * @group Props
       */
      loading = false;
      /**
       * Name of the label field of an option.
       * @group Props
       */
      optionLabel;
      /**
       * Name of the value field of an option.
       * @group Props
       */
      optionValue;
      /**
       * Name of the disabled field of an option.
       * @group Props
       */
      optionDisabled;
      /**
       * Name of the label field of an option group.
       * @group Props
       */
      optionGroupLabel = "label";
      /**
       * Name of the options field of an option group.
       * @group Props
       */
      optionGroupChildren = "items";
      /**
       * Whether to display options as grouped when nested options are provided.
       * @group Props
       */
      group;
      /**
       * When enabled, a clear icon is displayed to clear the value.
       * @group Props
       */
      showClear;
      /**
       * Text to display when filtering does not return any results. Defaults to global value in i18n translation configuration.
       * @group Props
       */
      emptyFilterMessage = "";
      /**
       * Text to display when there is no data. Defaults to global value in i18n translation configuration.
       * @group Props
       */
      emptyMessage = "";
      /**
       * Defines if data is loaded and interacted with in lazy manner.
       * @group Props
       */
      lazy = false;
      /**
       * Whether the data should be loaded on demand during scroll.
       * @group Props
       */
      virtualScroll;
      /**
       * Height of an item in the list for VirtualScrolling.
       * @group Props
       */
      virtualScrollItemSize;
      /**
       * Whether to use the scroller feature. The properties of scroller component can be used like an object in it.
       * @group Props
       */
      virtualScrollOptions;
      /**
       * Whether to use overlay API feature. The properties of overlay API can be used like an object in it.
       * @group Props
       */
      overlayOptions;
      /**
       * Defines a string that labels the filter input.
       * @group Props
       */
      ariaFilterLabel;
      /**
       * Used to define a aria label attribute the current element.
       * @group Props
       */
      ariaLabel;
      /**
       * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
       * @group Props
       */
      ariaLabelledBy;
      /**
       * Defines how the items are filtered.
       * @group Props
       */
      filterMatchMode = "contains";
      /**
       * Advisory information to display in a tooltip on hover.
       * @group Props
       */
      tooltip = "";
      /**
       * Position of the tooltip.
       * @group Props
       */
      tooltipPosition = "right";
      /**
       * Type of CSS position.
       * @group Props
       */
      tooltipPositionStyle = "absolute";
      /**
       * Style class of the tooltip.
       * @group Props
       */
      tooltipStyleClass;
      /**
       * Fields used when filtering the options, defaults to optionLabel.
       * @group Props
       */
      focusOnHover = true;
      /**
       * Determines if the option will be selected on focus.
       * @group Props
       */
      selectOnFocus = false;
      /**
       * Whether to focus on the first visible or selected element when the overlay panel is shown.
       * @group Props
       */
      autoOptionFocus = false;
      /**
       * Applies focus to the filter element when the overlay is shown.
       * @group Props
       */
      autofocusFilter = true;
      /**
       * When specified, filter displays with this value.
       * @group Props
       */
      get filterValue() {
        return this._filterValue();
      }
      set filterValue(val) {
        setTimeout(() => {
          this._filterValue.set(val);
        });
      }
      /**
       * An array of objects to display as the available options.
       * @group Props
       */
      get options() {
        const options = this._options();
        return options;
      }
      set options(val) {
        if (!y(val, this._options())) {
          this._options.set(val);
        }
      }
      /**
       * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @defaultValue 'self'
       * @group Props
       */
      appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : []);
      /**
       * Callback to invoke when value of select changes.
       * @param {SelectChangeEvent} event - custom change event.
       * @group Emits
       */
      onChange = new EventEmitter();
      /**
       * Callback to invoke when data is filtered.
       * @param {SelectFilterEvent} event - custom filter event.
       * @group Emits
       */
      onFilter = new EventEmitter();
      /**
       * Callback to invoke when select gets focus.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      onFocus = new EventEmitter();
      /**
       * Callback to invoke when select loses focus.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      onBlur = new EventEmitter();
      /**
       * Callback to invoke when component is clicked.
       * @param {MouseEvent} event - Mouse event.
       * @group Emits
       */
      onClick = new EventEmitter();
      /**
       * Callback to invoke when select overlay gets visible.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      onShow = new EventEmitter();
      /**
       * Callback to invoke when select overlay gets hidden.
       * @param {AnimationEvent} event - Animation event.
       * @group Emits
       */
      onHide = new EventEmitter();
      /**
       * Callback to invoke when select clears the value.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      onClear = new EventEmitter();
      /**
       * Callback to invoke in lazy mode to load new data.
       * @param {SelectLazyLoadEvent} event - Lazy load event.
       * @group Emits
       */
      onLazyLoad = new EventEmitter();
      _componentStyle = inject(SelectStyle);
      filterViewChild;
      focusInputViewChild;
      editableInputViewChild;
      itemsViewChild;
      scroller;
      overlayViewChild;
      firstHiddenFocusableElementOnOverlay;
      lastHiddenFocusableElementOnOverlay;
      itemsWrapper;
      $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : []);
      /**
       * Custom item template.
       * @group Templates
       */
      itemTemplate;
      /**
       * Custom group template.
       * @group Templates
       */
      groupTemplate;
      /**
       * Custom loader template.
       * @group Templates
       */
      loaderTemplate;
      /**
       * Custom selected item template.
       * @group Templates
       */
      selectedItemTemplate;
      /**
       * Custom header template.
       * @group Templates
       */
      headerTemplate;
      /**
       * Custom filter template.
       * @group Templates
       */
      filterTemplate;
      /**
       * Custom footer template.
       * @group Templates
       */
      footerTemplate;
      /**
       * Custom empty filter template.
       * @group Templates
       */
      emptyFilterTemplate;
      /**
       * Custom empty template.
       * @group Templates
       */
      emptyTemplate;
      /**
       * Custom dropdown icon template.
       * @group Templates
       */
      dropdownIconTemplate;
      /**
       * Custom loading icon template.
       * @group Templates
       */
      loadingIconTemplate;
      /**
       * Custom clear icon template.
       * @group Templates
       */
      clearIconTemplate;
      /**
       * Custom filter icon template.
       * @group Templates
       */
      filterIconTemplate;
      /**
       * Custom on icon template.
       * @group Templates
       */
      onIconTemplate;
      /**
       * Custom off icon template.
       * @group Templates
       */
      offIconTemplate;
      /**
       * Custom cancel icon template.
       * @group Templates
       */
      cancelIconTemplate;
      templates;
      _itemTemplate;
      _selectedItemTemplate;
      _headerTemplate;
      _filterTemplate;
      _footerTemplate;
      _emptyFilterTemplate;
      _emptyTemplate;
      _groupTemplate;
      _loaderTemplate;
      _dropdownIconTemplate;
      _loadingIconTemplate;
      _clearIconTemplate;
      _filterIconTemplate;
      _cancelIconTemplate;
      _onIconTemplate;
      _offIconTemplate;
      filterOptions;
      _options = signal(null, ...ngDevMode ? [{ debugName: "_options" }] : []);
      _placeholder = signal(void 0, ...ngDevMode ? [{ debugName: "_placeholder" }] : []);
      value;
      hover;
      focused;
      overlayVisible;
      optionsChanged;
      panel;
      dimensionsUpdated;
      hoveredItem;
      selectedOptionUpdated;
      _filterValue = signal(null, ...ngDevMode ? [{ debugName: "_filterValue" }] : []);
      searchValue;
      searchIndex;
      searchTimeout;
      previousSearchChar;
      currentSearchChar;
      preventModelTouched;
      focusedOptionIndex = signal(-1, ...ngDevMode ? [{ debugName: "focusedOptionIndex" }] : []);
      labelId;
      listId;
      clicked = signal(false, ...ngDevMode ? [{ debugName: "clicked" }] : []);
      get emptyMessageLabel() {
        return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
      }
      get emptyFilterMessageLabel() {
        return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
      }
      get isVisibleClearIcon() {
        return this.modelValue() != null && this.hasSelectedOption() && this.showClear && !this.$disabled();
      }
      get listLabel() {
        return this.config.getTranslation(TranslationKeys.ARIA)["listLabel"];
      }
      get focusedOptionId() {
        return this.focusedOptionIndex() !== -1 ? `${this.id}_${this.focusedOptionIndex()}` : null;
      }
      visibleOptions = computed(() => {
        const options = this.getAllVisibleAndNonVisibleOptions();
        if (this._filterValue()) {
          const _filterBy = this.filterBy || this.optionLabel;
          const filteredOptions = !_filterBy && !this.filterFields && !this.optionValue ? this.options.filter((option) => {
            if (option.label) {
              return option.label.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
            }
            return option.toString().toLowerCase().indexOf(this._filterValue().toLowerCase().trim()) !== -1;
          }) : this.filterService.filter(options, this.searchFields(), this._filterValue().trim(), this.filterMatchMode, this.filterLocale);
          if (this.group) {
            const optionGroups = this.options || [];
            const filtered = [];
            optionGroups.forEach((group) => {
              const groupChildren = this.getOptionGroupChildren(group);
              const filteredItems = groupChildren.filter((item) => filteredOptions.includes(item));
              if (filteredItems.length > 0)
                filtered.push(__spreadProps(__spreadValues({}, group), {
                  [typeof this.optionGroupChildren === "string" ? this.optionGroupChildren : "items"]: [...filteredItems]
                }));
            });
            return this.flatOptions(filtered);
          }
          return filteredOptions;
        }
        return options;
      }, ...ngDevMode ? [{ debugName: "visibleOptions" }] : []);
      label = computed(() => {
        const options = this.getAllVisibleAndNonVisibleOptions();
        const selectedOptionIndex = options.findIndex((option) => this.isOptionValueEqualsModelValue(option));
        return selectedOptionIndex !== -1 ? this.getOptionLabel(options[selectedOptionIndex]) : this.placeholder() || "p-emptylabel";
      }, ...ngDevMode ? [{ debugName: "label" }] : []);
      selectedOption;
      constructor(zone, filterService) {
        super();
        this.zone = zone;
        this.filterService = filterService;
        effect(() => {
          const modelValue = this.modelValue();
          const visibleOptions = this.visibleOptions();
          if (visibleOptions && s(visibleOptions)) {
            const selectedOptionIndex = this.findSelectedOptionIndex();
            if (selectedOptionIndex !== -1 || modelValue === void 0 || typeof modelValue === "string" && modelValue.length === 0 || this.isModelValueNotSet() || this.editable) {
              this.selectedOption = visibleOptions[selectedOptionIndex];
            }
          }
          if (a(visibleOptions) && (modelValue === void 0 || this.isModelValueNotSet()) && s(this.selectedOption)) {
            this.selectedOption = null;
          }
          if (modelValue !== void 0 && this.editable) {
            this.updateEditableLabel();
          }
          this.cd.markForCheck();
        });
      }
      isModelValueNotSet() {
        return this.modelValue() === null && !this.isOptionValueEqualsModelValue(this.selectedOption);
      }
      getAllVisibleAndNonVisibleOptions() {
        return this.group ? this.flatOptions(this.options) : this.options || [];
      }
      ngOnInit() {
        super.ngOnInit();
        this.id = this.id || s2("pn_id_");
        this.autoUpdateModel();
        if (this.filterBy) {
          this.filterOptions = {
            filter: (value) => this.onFilterInputChange(value),
            reset: () => this.resetFilter()
          };
        }
      }
      ngAfterContentInit() {
        this.templates.forEach((item) => {
          switch (item.getType()) {
            case "item":
              this._itemTemplate = item.template;
              break;
            case "selectedItem":
              this._selectedItemTemplate = item.template;
              break;
            case "header":
              this._headerTemplate = item.template;
              break;
            case "filter":
              this._filterTemplate = item.template;
              break;
            case "footer":
              this._footerTemplate = item.template;
              break;
            case "emptyfilter":
              this._emptyFilterTemplate = item.template;
              break;
            case "empty":
              this._emptyTemplate = item.template;
              break;
            case "group":
              this._groupTemplate = item.template;
              break;
            case "loader":
              this._loaderTemplate = item.template;
              break;
            case "dropdownicon":
              this._dropdownIconTemplate = item.template;
              break;
            case "loadingicon":
              this._loadingIconTemplate = item.template;
              break;
            case "clearicon":
              this._clearIconTemplate = item.template;
              break;
            case "filtericon":
              this._filterIconTemplate = item.template;
              break;
            case "cancelicon":
              this._cancelIconTemplate = item.template;
              break;
            case "onicon":
              this._onIconTemplate = item.template;
              break;
            case "officon":
              this._offIconTemplate = item.template;
              break;
            default:
              this._itemTemplate = item.template;
              break;
          }
        });
      }
      ngAfterViewChecked() {
        if (this.optionsChanged && this.overlayVisible) {
          this.optionsChanged = false;
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              if (this.overlayViewChild) {
                this.overlayViewChild.alignOverlay();
              }
            }, 1);
          });
        }
        if (this.selectedOptionUpdated && this.itemsWrapper) {
          let selectedItem = z(this.overlayViewChild?.overlayViewChild?.nativeElement, "li.p-select-option-selected");
          if (selectedItem) {
            Jt(this.itemsWrapper, selectedItem);
          }
          this.selectedOptionUpdated = false;
        }
      }
      flatOptions(options) {
        return (options || []).reduce((result, option, index) => {
          result.push({ optionGroup: option, group: true, index });
          const optionGroupChildren = this.getOptionGroupChildren(option);
          optionGroupChildren && optionGroupChildren.forEach((o) => result.push(o));
          return result;
        }, []);
      }
      autoUpdateModel() {
        if (this.selectOnFocus && this.autoOptionFocus && !this.hasSelectedOption()) {
          this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());
          this.onOptionSelect(null, this.visibleOptions()[this.focusedOptionIndex()], false);
        }
      }
      onOptionSelect(event, option, isHide = true, preventChange = false) {
        if (!this.isSelected(option)) {
          const value = this.getOptionValue(option);
          this.updateModel(value, event);
          this.focusedOptionIndex.set(this.findSelectedOptionIndex());
          preventChange === false && this.onChange.emit({ originalEvent: event, value });
        }
        if (isHide) {
          this.hide(true);
        }
      }
      onOptionMouseEnter(event, index) {
        if (this.focusOnHover) {
          this.changeFocusedOptionIndex(event, index);
        }
      }
      updateModel(value, event) {
        this.value = value;
        this.onModelChange(value);
        this.writeModelValue(value);
        this.selectedOptionUpdated = true;
      }
      allowModelChange() {
        return !!this.modelValue() && !this.placeholder() && (this.modelValue() === void 0 || this.modelValue() === null) && !this.editable && this.options && this.options.length;
      }
      isSelected(option) {
        return this.isOptionValueEqualsModelValue(option);
      }
      isOptionValueEqualsModelValue(option) {
        return this.isValidOption(option) && k(this.modelValue(), this.getOptionValue(option), this.equalityKey());
      }
      ngAfterViewInit() {
        super.ngAfterViewInit();
        if (this.editable) {
          this.updateEditableLabel();
        }
        this.updatePlaceHolderForFloatingLabel();
      }
      updatePlaceHolderForFloatingLabel() {
        const parentElement = this.el.nativeElement.parentElement;
        const isInFloatingLabel = parentElement?.classList.contains("p-float-label");
        if (parentElement && isInFloatingLabel && !this.selectedOption) {
          const label = parentElement.querySelector("label");
          if (label) {
            this._placeholder.set(label.textContent);
          }
        }
      }
      updateEditableLabel() {
        if (this.editableInputViewChild) {
          this.editableInputViewChild.nativeElement.value = this.getOptionLabel(this.selectedOption) || this.modelValue() || "";
        }
      }
      clearEditableLabel() {
        if (this.editableInputViewChild) {
          this.editableInputViewChild.nativeElement.value = "";
        }
      }
      getOptionIndex(index, scrollerOptions) {
        return this.virtualScrollerDisabled ? index : scrollerOptions && scrollerOptions.getItemOptions(index)["index"];
      }
      getOptionLabel(option) {
        return this.optionLabel !== void 0 && this.optionLabel !== null ? c(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
      }
      getOptionValue(option) {
        return this.optionValue && this.optionValue !== null ? c(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
      }
      isSelectedOptionEmpty() {
        return a(this.selectedOption);
      }
      isOptionDisabled(option) {
        if (this.getOptionValue(this.modelValue()) === this.getOptionValue(option) || this.getOptionLabel(this.modelValue() === this.getOptionLabel(option)) && option.disabled === false) {
          return false;
        } else {
          return this.optionDisabled ? c(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
        }
      }
      getOptionGroupLabel(optionGroup) {
        return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null ? c(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
      }
      getOptionGroupChildren(optionGroup) {
        return this.optionGroupChildren !== void 0 && this.optionGroupChildren !== null ? c(optionGroup, this.optionGroupChildren) : optionGroup.items;
      }
      getAriaPosInset(index) {
        return (this.optionGroupLabel ? index - this.visibleOptions().slice(0, index).filter((option) => this.isOptionGroup(option)).length : index) + 1;
      }
      get ariaSetSize() {
        return this.visibleOptions().filter((option) => !this.isOptionGroup(option)).length;
      }
      /**
       * Callback to invoke on filter reset.
       * @group Method
       */
      resetFilter() {
        this._filterValue.set(null);
        if (this.filterViewChild && this.filterViewChild.nativeElement) {
          this.filterViewChild.nativeElement.value = "";
        }
      }
      onContainerClick(event) {
        if (this.$disabled() || this.readonly || this.loading) {
          return;
        }
        this.focusInputViewChild?.nativeElement.focus({ preventScroll: true });
        if (event.target.tagName === "INPUT" || event.target.getAttribute("data-pc-section") === "clearicon" || event.target.closest('[data-pc-section="clearicon"]')) {
          return;
        } else if (!this.overlayViewChild || !this.overlayViewChild.el.nativeElement.contains(event.target)) {
          this.overlayVisible ? this.hide(true) : this.show(true);
        }
        this.onClick.emit(event);
        this.clicked.set(true);
        this.cd.detectChanges();
      }
      isEmpty() {
        return !this._options() || this.visibleOptions() && this.visibleOptions().length === 0;
      }
      onEditableInput(event) {
        const value = event.target.value;
        this.searchValue = "";
        const matched = this.searchOptions(event, value);
        !matched && this.focusedOptionIndex.set(-1);
        this.onModelChange(value);
        this.updateModel(value || null, event);
        setTimeout(() => {
          this.onChange.emit({ originalEvent: event, value });
        }, 1);
        !this.overlayVisible && s(value) && this.show();
      }
      /**
       * Displays the panel.
       * @group Method
       */
      show(isFocus) {
        this.overlayVisible = true;
        this.focusedOptionIndex.set(this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : this.editable ? -1 : this.findSelectedOptionIndex());
        if (isFocus) {
          bt(this.focusInputViewChild?.nativeElement);
        }
        this.cd.markForCheck();
      }
      onOverlayAnimationStart(event) {
        if (event.toState === "visible") {
          this.itemsWrapper = z(this.overlayViewChild?.overlayViewChild?.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-select-list-container");
          this.virtualScroll && this.scroller?.setContentEl(this.itemsViewChild?.nativeElement);
          if (this.options && this.options.length) {
            if (this.virtualScroll) {
              const selectedIndex = this.modelValue() ? this.focusedOptionIndex() : -1;
              if (selectedIndex !== -1) {
                this.scroller?.scrollToIndex(selectedIndex);
              }
            } else {
              let selectedListItem = z(this.itemsWrapper, ".p-select-option.p-select-option-selected");
              if (selectedListItem) {
                selectedListItem.scrollIntoView({ block: "nearest", inline: "nearest" });
              }
            }
          }
          if (this.filterViewChild && this.filterViewChild.nativeElement) {
            this.preventModelTouched = true;
            if (this.autofocusFilter && !this.editable) {
              this.filterViewChild.nativeElement.focus();
            }
          }
          this.onShow.emit(event);
        }
        if (event.toState === "void") {
          this.itemsWrapper = null;
          this.onModelTouched();
          this.onHide.emit(event);
        }
      }
      /**
       * Hides the panel.
       * @group Method
       */
      hide(isFocus) {
        this.overlayVisible = false;
        this.focusedOptionIndex.set(-1);
        this.clicked.set(false);
        this.searchValue = "";
        if (this.overlayOptions?.mode === "modal") {
          unblockBodyScroll();
        }
        if (this.filter && this.resetFilterOnHide) {
          this.resetFilter();
        }
        if (isFocus) {
          if (this.focusInputViewChild) {
            bt(this.focusInputViewChild?.nativeElement);
          }
          if (this.editable && this.editableInputViewChild) {
            bt(this.editableInputViewChild?.nativeElement);
          }
        }
        this.cd.markForCheck();
      }
      onInputFocus(event) {
        if (this.$disabled()) {
          return;
        }
        this.focused = true;
        const focusedOptionIndex = this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : this.overlayVisible && this.autoOptionFocus ? this.findFirstFocusedOptionIndex() : -1;
        this.focusedOptionIndex.set(focusedOptionIndex);
        this.overlayVisible && this.scrollInView(this.focusedOptionIndex());
        this.onFocus.emit(event);
      }
      onInputBlur(event) {
        this.focused = false;
        this.onBlur.emit(event);
        if (!this.preventModelTouched) {
          this.onModelTouched();
        }
        this.preventModelTouched = false;
      }
      onKeyDown(event, search = false) {
        if (this.$disabled() || this.readonly || this.loading) {
          return;
        }
        switch (event.code) {
          //down
          case "ArrowDown":
            this.onArrowDownKey(event);
            break;
          //up
          case "ArrowUp":
            this.onArrowUpKey(event, this.editable);
            break;
          case "ArrowLeft":
          case "ArrowRight":
            this.onArrowLeftKey(event, this.editable);
            break;
          case "Delete":
            this.onDeleteKey(event);
            break;
          case "Home":
            this.onHomeKey(event, this.editable);
            break;
          case "End":
            this.onEndKey(event, this.editable);
            break;
          case "PageDown":
            this.onPageDownKey(event);
            break;
          case "PageUp":
            this.onPageUpKey(event);
            break;
          //space
          case "Space":
            this.onSpaceKey(event, search);
            break;
          //enter
          case "Enter":
          case "NumpadEnter":
            this.onEnterKey(event);
            break;
          //escape and tab
          case "Escape":
            this.onEscapeKey(event);
            break;
          case "Tab":
            this.onTabKey(event);
            break;
          case "Backspace":
            this.onBackspaceKey(event, this.editable);
            break;
          case "ShiftLeft":
          case "ShiftRight":
            break;
          default:
            if (!event.metaKey && j2(event.key)) {
              !this.overlayVisible && this.show();
              !this.editable && this.searchOptions(event, event.key);
            }
            break;
        }
        this.clicked.set(false);
      }
      onFilterKeyDown(event) {
        switch (event.code) {
          case "ArrowDown":
            this.onArrowDownKey(event);
            break;
          case "ArrowUp":
            this.onArrowUpKey(event, true);
            break;
          case "ArrowLeft":
          case "ArrowRight":
            this.onArrowLeftKey(event, true);
            break;
          case "Home":
            this.onHomeKey(event, true);
            break;
          case "End":
            this.onEndKey(event, true);
            break;
          case "Enter":
          case "NumpadEnter":
            this.onEnterKey(event, true);
            break;
          case "Escape":
            this.onEscapeKey(event);
            break;
          case "Tab":
            this.onTabKey(event, true);
            break;
          default:
            break;
        }
      }
      onFilterBlur(event) {
        this.focusedOptionIndex.set(-1);
      }
      onArrowDownKey(event) {
        if (!this.overlayVisible) {
          this.show();
          this.editable && this.changeFocusedOptionIndex(event, this.findSelectedOptionIndex());
        } else {
          const optionIndex = this.focusedOptionIndex() !== -1 ? this.findNextOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findFirstOptionIndex() : this.findFirstFocusedOptionIndex();
          this.changeFocusedOptionIndex(event, optionIndex);
        }
        event.preventDefault();
        event.stopPropagation();
      }
      changeFocusedOptionIndex(event, index) {
        if (this.focusedOptionIndex() !== index) {
          this.focusedOptionIndex.set(index);
          this.scrollInView();
          if (this.selectOnFocus) {
            const option = this.visibleOptions()[index];
            this.onOptionSelect(event, option, false);
          }
        }
      }
      get virtualScrollerDisabled() {
        return !this.virtualScroll;
      }
      scrollInView(index = -1) {
        const id = index !== -1 ? `${this.id}_${index}` : this.focusedOptionId;
        if (this.itemsViewChild && this.itemsViewChild.nativeElement) {
          const element = z(this.itemsViewChild.nativeElement, `li[id="${id}"]`);
          if (element) {
            element.scrollIntoView && element.scrollIntoView({ block: "nearest", inline: "nearest" });
          } else if (!this.virtualScrollerDisabled) {
            setTimeout(() => {
              this.virtualScroll && this.scroller?.scrollToIndex(index !== -1 ? index : this.focusedOptionIndex());
            }, 0);
          }
        }
      }
      hasSelectedOption() {
        return this.modelValue() !== void 0;
      }
      isValidSelectedOption(option) {
        return this.isValidOption(option) && this.isSelected(option);
      }
      equalityKey() {
        return this.optionValue ? null : this.dataKey;
      }
      findFirstFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findFirstOptionIndex() : selectedIndex;
      }
      findFirstOptionIndex() {
        return this.visibleOptions().findIndex((option) => this.isValidOption(option));
      }
      findSelectedOptionIndex() {
        return this.hasSelectedOption() ? this.visibleOptions().findIndex((option) => this.isValidSelectedOption(option)) : -1;
      }
      findNextOptionIndex(index) {
        const matchedOptionIndex = index < this.visibleOptions().length - 1 ? this.visibleOptions().slice(index + 1).findIndex((option) => this.isValidOption(option)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex + index + 1 : index;
      }
      findPrevOptionIndex(index) {
        const matchedOptionIndex = index > 0 ? M(this.visibleOptions().slice(0, index), (option) => this.isValidOption(option)) : -1;
        return matchedOptionIndex > -1 ? matchedOptionIndex : index;
      }
      findLastOptionIndex() {
        return M(this.visibleOptions(), (option) => this.isValidOption(option));
      }
      findLastFocusedOptionIndex() {
        const selectedIndex = this.findSelectedOptionIndex();
        return selectedIndex < 0 ? this.findLastOptionIndex() : selectedIndex;
      }
      isValidOption(option) {
        return option !== void 0 && option !== null && !(this.isOptionDisabled(option) || this.isOptionGroup(option));
      }
      isOptionGroup(option) {
        return this.optionGroupLabel !== void 0 && this.optionGroupLabel !== null && option.optionGroup !== void 0 && option.optionGroup !== null && option.group;
      }
      onArrowUpKey(event, pressedInInputText = false) {
        if (event.altKey && !pressedInInputText) {
          if (this.focusedOptionIndex() !== -1) {
            const option = this.visibleOptions()[this.focusedOptionIndex()];
            this.onOptionSelect(event, option);
          }
          this.overlayVisible && this.hide();
        } else {
          const optionIndex = this.focusedOptionIndex() !== -1 ? this.findPrevOptionIndex(this.focusedOptionIndex()) : this.clicked() ? this.findLastOptionIndex() : this.findLastFocusedOptionIndex();
          this.changeFocusedOptionIndex(event, optionIndex);
          !this.overlayVisible && this.show();
        }
        event.preventDefault();
        event.stopPropagation();
      }
      onArrowLeftKey(event, pressedInInputText = false) {
        pressedInInputText && this.focusedOptionIndex.set(-1);
      }
      onDeleteKey(event) {
        if (this.showClear) {
          this.clear(event);
          event.preventDefault();
        }
      }
      onHomeKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
          const target = event.currentTarget;
          if (event.shiftKey) {
            target.setSelectionRange(0, target.value.length);
          } else {
            target.setSelectionRange(0, 0);
            this.focusedOptionIndex.set(-1);
          }
        } else {
          this.changeFocusedOptionIndex(event, this.findFirstOptionIndex());
          !this.overlayVisible && this.show();
        }
        event.preventDefault();
      }
      onEndKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
          const target = event.currentTarget;
          if (event.shiftKey) {
            target.setSelectionRange(0, target.value.length);
          } else {
            const len = target.value.length;
            target.setSelectionRange(len, len);
            this.focusedOptionIndex.set(-1);
          }
        } else {
          this.changeFocusedOptionIndex(event, this.findLastOptionIndex());
          !this.overlayVisible && this.show();
        }
        event.preventDefault();
      }
      onPageDownKey(event) {
        this.scrollInView(this.visibleOptions().length - 1);
        event.preventDefault();
      }
      onPageUpKey(event) {
        this.scrollInView(0);
        event.preventDefault();
      }
      onSpaceKey(event, pressedInInputText = false) {
        !this.editable && !pressedInInputText && this.onEnterKey(event);
      }
      onEnterKey(event, pressedInInput = false) {
        if (!this.overlayVisible) {
          this.focusedOptionIndex.set(-1);
          this.onArrowDownKey(event);
        } else {
          if (this.focusedOptionIndex() !== -1) {
            const option = this.visibleOptions()[this.focusedOptionIndex()];
            this.onOptionSelect(event, option);
          }
          !pressedInInput && this.hide();
        }
        event.preventDefault();
      }
      onEscapeKey(event) {
        this.overlayVisible && this.hide(true);
        event.preventDefault();
        event.stopPropagation();
      }
      onTabKey(event, pressedInInputText = false) {
        if (!pressedInInputText) {
          if (this.overlayVisible && this.hasFocusableElements()) {
            bt(event.shiftKey ? this.lastHiddenFocusableElementOnOverlay.nativeElement : this.firstHiddenFocusableElementOnOverlay.nativeElement);
            event.preventDefault();
          } else {
            if (this.focusedOptionIndex() !== -1 && this.overlayVisible) {
              const option = this.visibleOptions()[this.focusedOptionIndex()];
              this.onOptionSelect(event, option);
            }
            this.overlayVisible && this.hide(this.filter);
          }
        }
        event.stopPropagation();
      }
      onFirstHiddenFocus(event) {
        const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? vt(this.overlayViewChild.el?.nativeElement, ":not(.p-hidden-focusable)") : this.focusInputViewChild?.nativeElement;
        bt(focusableEl);
      }
      onLastHiddenFocus(event) {
        const focusableEl = event.relatedTarget === this.focusInputViewChild?.nativeElement ? Lt(this.overlayViewChild?.overlayViewChild?.nativeElement, ':not([data-p-hidden-focusable="true"])') : this.focusInputViewChild?.nativeElement;
        bt(focusableEl);
      }
      hasFocusableElements() {
        return b(this.overlayViewChild.overlayViewChild.nativeElement, ':not([data-p-hidden-focusable="true"])').length > 0;
      }
      onBackspaceKey(event, pressedInInputText = false) {
        if (pressedInInputText) {
          !this.overlayVisible && this.show();
        }
      }
      searchFields() {
        return this.filterBy?.split(",") || this.filterFields || [this.optionLabel];
      }
      searchOptions(event, char) {
        this.searchValue = (this.searchValue || "") + char;
        let optionIndex = -1;
        let matched = false;
        optionIndex = this.visibleOptions().findIndex((option) => this.isOptionMatched(option));
        if (optionIndex !== -1) {
          matched = true;
        }
        if (optionIndex === -1 && this.focusedOptionIndex() === -1) {
          optionIndex = this.findFirstFocusedOptionIndex();
        }
        if (optionIndex !== -1) {
          setTimeout(() => {
            this.changeFocusedOptionIndex(event, optionIndex);
          });
        }
        if (this.searchTimeout) {
          clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
          this.searchValue = "";
          this.searchTimeout = null;
        }, 500);
        return matched;
      }
      isOptionMatched(option) {
        return this.isValidOption(option) && this.getOptionLabel(option).toString().toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale));
      }
      onFilterInputChange(event) {
        let value = event.target.value;
        this._filterValue.set(value);
        this.focusedOptionIndex.set(-1);
        this.onFilter.emit({ originalEvent: event, filter: this._filterValue() });
        !this.virtualScrollerDisabled && this.scroller.scrollToIndex(0);
        setTimeout(() => {
          this.overlayViewChild.alignOverlay();
        });
        this.cd.markForCheck();
      }
      applyFocus() {
        if (this.editable)
          z(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
        else
          bt(this.focusInputViewChild?.nativeElement);
      }
      /**
       * Applies focus.
       * @group Method
       */
      focus() {
        this.applyFocus();
      }
      /**
       * Clears the model.
       * @group Method
       */
      clear(event) {
        this.updateModel(null, event);
        this.clearEditableLabel();
        this.onModelTouched();
        this.onChange.emit({ originalEvent: event, value: this.value });
        this.onClear.emit(event);
        this.resetFilter();
      }
      /**
       * @override
       *
       * @see {@link BaseEditableHolder.writeControlValue}
       * Writes the value to the control.
       */
      writeControlValue(value, setModelValue) {
        if (this.filter) {
          this.resetFilter();
        }
        this.value = value;
        this.allowModelChange() && this.onModelChange(value);
        setModelValue(this.value);
        this.updateEditableLabel();
        this.cd.markForCheck();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Select, deps: [{ token: NgZone }, { token: FilterService }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.1.3", type: _Select, isStandalone: true, selector: "p-select", inputs: { id: { classPropertyName: "id", publicName: "id", isSignal: false, isRequired: false, transformFunction: null }, scrollHeight: { classPropertyName: "scrollHeight", publicName: "scrollHeight", isSignal: false, isRequired: false, transformFunction: null }, filter: { classPropertyName: "filter", publicName: "filter", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, panelStyle: { classPropertyName: "panelStyle", publicName: "panelStyle", isSignal: false, isRequired: false, transformFunction: null }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, panelStyleClass: { classPropertyName: "panelStyleClass", publicName: "panelStyleClass", isSignal: false, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, editable: { classPropertyName: "editable", publicName: "editable", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, tabindex: { classPropertyName: "tabindex", publicName: "tabindex", isSignal: false, isRequired: false, transformFunction: numberAttribute }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: false, isRequired: false, transformFunction: null }, loadingIcon: { classPropertyName: "loadingIcon", publicName: "loadingIcon", isSignal: false, isRequired: false, transformFunction: null }, filterPlaceholder: { classPropertyName: "filterPlaceholder", publicName: "filterPlaceholder", isSignal: false, isRequired: false, transformFunction: null }, filterLocale: { classPropertyName: "filterLocale", publicName: "filterLocale", isSignal: false, isRequired: false, transformFunction: null }, inputId: { classPropertyName: "inputId", publicName: "inputId", isSignal: false, isRequired: false, transformFunction: null }, dataKey: { classPropertyName: "dataKey", publicName: "dataKey", isSignal: false, isRequired: false, transformFunction: null }, filterBy: { classPropertyName: "filterBy", publicName: "filterBy", isSignal: false, isRequired: false, transformFunction: null }, filterFields: { classPropertyName: "filterFields", publicName: "filterFields", isSignal: false, isRequired: false, transformFunction: null }, autofocus: { classPropertyName: "autofocus", publicName: "autofocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, resetFilterOnHide: { classPropertyName: "resetFilterOnHide", publicName: "resetFilterOnHide", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, checkmark: { classPropertyName: "checkmark", publicName: "checkmark", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, dropdownIcon: { classPropertyName: "dropdownIcon", publicName: "dropdownIcon", isSignal: false, isRequired: false, transformFunction: null }, loading: { classPropertyName: "loading", publicName: "loading", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, optionLabel: { classPropertyName: "optionLabel", publicName: "optionLabel", isSignal: false, isRequired: false, transformFunction: null }, optionValue: { classPropertyName: "optionValue", publicName: "optionValue", isSignal: false, isRequired: false, transformFunction: null }, optionDisabled: { classPropertyName: "optionDisabled", publicName: "optionDisabled", isSignal: false, isRequired: false, transformFunction: null }, optionGroupLabel: { classPropertyName: "optionGroupLabel", publicName: "optionGroupLabel", isSignal: false, isRequired: false, transformFunction: null }, optionGroupChildren: { classPropertyName: "optionGroupChildren", publicName: "optionGroupChildren", isSignal: false, isRequired: false, transformFunction: null }, group: { classPropertyName: "group", publicName: "group", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showClear: { classPropertyName: "showClear", publicName: "showClear", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, emptyFilterMessage: { classPropertyName: "emptyFilterMessage", publicName: "emptyFilterMessage", isSignal: false, isRequired: false, transformFunction: null }, emptyMessage: { classPropertyName: "emptyMessage", publicName: "emptyMessage", isSignal: false, isRequired: false, transformFunction: null }, lazy: { classPropertyName: "lazy", publicName: "lazy", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, virtualScroll: { classPropertyName: "virtualScroll", publicName: "virtualScroll", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, virtualScrollItemSize: { classPropertyName: "virtualScrollItemSize", publicName: "virtualScrollItemSize", isSignal: false, isRequired: false, transformFunction: numberAttribute }, virtualScrollOptions: { classPropertyName: "virtualScrollOptions", publicName: "virtualScrollOptions", isSignal: false, isRequired: false, transformFunction: null }, overlayOptions: { classPropertyName: "overlayOptions", publicName: "overlayOptions", isSignal: false, isRequired: false, transformFunction: null }, ariaFilterLabel: { classPropertyName: "ariaFilterLabel", publicName: "ariaFilterLabel", isSignal: false, isRequired: false, transformFunction: null }, ariaLabel: { classPropertyName: "ariaLabel", publicName: "ariaLabel", isSignal: false, isRequired: false, transformFunction: null }, ariaLabelledBy: { classPropertyName: "ariaLabelledBy", publicName: "ariaLabelledBy", isSignal: false, isRequired: false, transformFunction: null }, filterMatchMode: { classPropertyName: "filterMatchMode", publicName: "filterMatchMode", isSignal: false, isRequired: false, transformFunction: null }, tooltip: { classPropertyName: "tooltip", publicName: "tooltip", isSignal: false, isRequired: false, transformFunction: null }, tooltipPosition: { classPropertyName: "tooltipPosition", publicName: "tooltipPosition", isSignal: false, isRequired: false, transformFunction: null }, tooltipPositionStyle: { classPropertyName: "tooltipPositionStyle", publicName: "tooltipPositionStyle", isSignal: false, isRequired: false, transformFunction: null }, tooltipStyleClass: { classPropertyName: "tooltipStyleClass", publicName: "tooltipStyleClass", isSignal: false, isRequired: false, transformFunction: null }, focusOnHover: { classPropertyName: "focusOnHover", publicName: "focusOnHover", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, selectOnFocus: { classPropertyName: "selectOnFocus", publicName: "selectOnFocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, autoOptionFocus: { classPropertyName: "autoOptionFocus", publicName: "autoOptionFocus", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, autofocusFilter: { classPropertyName: "autofocusFilter", publicName: "autofocusFilter", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, filterValue: { classPropertyName: "filterValue", publicName: "filterValue", isSignal: false, isRequired: false, transformFunction: null }, options: { classPropertyName: "options", publicName: "options", isSignal: false, isRequired: false, transformFunction: null }, appendTo: { classPropertyName: "appendTo", publicName: "appendTo", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onChange: "onChange", onFilter: "onFilter", onFocus: "onFocus", onBlur: "onBlur", onClick: "onClick", onShow: "onShow", onHide: "onHide", onClear: "onClear", onLazyLoad: "onLazyLoad" }, host: { listeners: { "click": "onContainerClick($event)" }, properties: { "class": "cn(cx('root'), styleClass)", "attr.id": "id" } }, providers: [SELECT_VALUE_ACCESSOR, SelectStyle], queries: [{ propertyName: "itemTemplate", first: true, predicate: ["item"] }, { propertyName: "groupTemplate", first: true, predicate: ["group"] }, { propertyName: "loaderTemplate", first: true, predicate: ["loader"] }, { propertyName: "selectedItemTemplate", first: true, predicate: ["selectedItem"] }, { propertyName: "headerTemplate", first: true, predicate: ["header"] }, { propertyName: "filterTemplate", first: true, predicate: ["filter"] }, { propertyName: "footerTemplate", first: true, predicate: ["footer"] }, { propertyName: "emptyFilterTemplate", first: true, predicate: ["emptyfilter"] }, { propertyName: "emptyTemplate", first: true, predicate: ["empty"] }, { propertyName: "dropdownIconTemplate", first: true, predicate: ["dropdownicon"] }, { propertyName: "loadingIconTemplate", first: true, predicate: ["loadingicon"] }, { propertyName: "clearIconTemplate", first: true, predicate: ["clearicon"] }, { propertyName: "filterIconTemplate", first: true, predicate: ["filtericon"] }, { propertyName: "onIconTemplate", first: true, predicate: ["onicon"] }, { propertyName: "offIconTemplate", first: true, predicate: ["officon"] }, { propertyName: "cancelIconTemplate", first: true, predicate: ["cancelicon"] }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "filterViewChild", first: true, predicate: ["filter"], descendants: true }, { propertyName: "focusInputViewChild", first: true, predicate: ["focusInput"], descendants: true }, { propertyName: "editableInputViewChild", first: true, predicate: ["editableInput"], descendants: true }, { propertyName: "itemsViewChild", first: true, predicate: ["items"], descendants: true }, { propertyName: "scroller", first: true, predicate: ["scroller"], descendants: true }, { propertyName: "overlayViewChild", first: true, predicate: ["overlay"], descendants: true }, { propertyName: "firstHiddenFocusableElementOnOverlay", first: true, predicate: ["firstHiddenFocusableEl"], descendants: true }, { propertyName: "lastHiddenFocusableElementOnOverlay", first: true, predicate: ["lastHiddenFocusableEl"], descendants: true }], usesInheritance: true, ngImport: core_exports, template: `
        <span
            #focusInput
            [class]="cx('label')"
            *ngIf="!editable"
            [pTooltip]="tooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
            [attr.aria-disabled]="$disabled()"
            [attr.id]="inputId"
            role="combobox"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-expanded]="overlayVisible ?? false"
            [attr.aria-controls]="overlayVisible ? id + '_list' : null"
            [attr.tabindex]="!$disabled() ? tabindex : -1"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keydown)="onKeyDown($event)"
            [attr.aria-required]="required()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
        >
            <ng-container *ngIf="!selectedItemTemplate && !_selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
            <ng-container *ngIf="(selectedItemTemplate || _selectedItemTemplate) && !isSelectedOptionEmpty()" [ngTemplateOutlet]="selectedItemTemplate || _selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
            <ng-template #defaultPlaceholder>
                <span *ngIf="isSelectedOptionEmpty()">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
            </ng-template>
        </span>
        <input
            *ngIf="editable"
            #editableInput
            type="text"
            [attr.id]="inputId"
            [class]="cx('label')"
            [attr.aria-haspopup]="'listbox'"
            [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            (input)="onEditableInput($event)"
            (keydown)="onKeyDown($event)"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [attr.name]="name()"
            [attr.minlength]="minlength()"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.pattern]="pattern()"
            [attr.size]="inputSize()"
            [attr.maxlength]="maxlength()"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
        />
        <ng-container *ngIf="isVisibleClearIcon">
            <svg data-p-icon="times" [class]="cx('clearIcon')" (click)="clear($event)" *ngIf="!clearIconTemplate && !_clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
            <span [class]="cx('clearIcon')" (click)="clear($event)" *ngIf="clearIconTemplate || _clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate; context: { class: cx('clearIcon') }"></ng-template>
            </span>
        </ng-container>

        <div [class]="cx('dropdown')" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon)" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), 'pi pi-spinner pi-spin')" aria-hidden="true"></span>
                </ng-container>
            </ng-container>

            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span [class]="cn(cx('dropdownIcon'), dropdownIcon)" *ngIf="dropdownIcon"></span>
                    <svg data-p-icon="chevron-down" *ngIf="!dropdownIcon" [class]="cx('dropdownIcon')" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" [class]="cx('dropdownIcon')">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate; context: { class: cx('dropdownIcon') }"></ng-template>
                </span>
            </ng-template>
        </div>

        <p-overlay #overlay [hostAttrSelector]="attrSelector" [(visible)]="overlayVisible" [options]="overlayOptions" [target]="'@parent'" [appendTo]="$appendTo()" (onAnimationStart)="onOverlayAnimationStart($event)" (onHide)="hide()">
            <ng-template #content>
                <div [class]="cn(cx('overlay'), panelStyleClass)" [ngStyle]="panelStyle">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div [class]="cx('header')" *ngIf="filter" (click)="$event.stopPropagation()">
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-iconfield>
                                <input
                                    #filter
                                    pInputText
                                    [pSize]="size()"
                                    type="text"
                                    role="searchbox"
                                    autocomplete="off"
                                    [value]="_filterValue() || ''"
                                    [class]="cx('pcFilter')"
                                    [variant]="$variant()"
                                    [attr.placeholder]="filterPlaceholder"
                                    [attr.aria-owns]="id + '_list'"
                                    (input)="onFilterInputChange($event)"
                                    [attr.aria-label]="ariaFilterLabel"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    (keydown)="onFilterKeyDown($event)"
                                    (blur)="onFilterBlur($event)"
                                />
                                <p-inputicon>
                                    <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate || _filterIconTemplate">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div [class]="cx('listContainer')" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize"
                            [autoSize]="true"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" [class]="cn(cx('list'), scrollerOptions.contentStyleClass)" [style]="scrollerOptions.contentStyle" role="listbox">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [class]="cx('optionGroup')" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate && !_groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate || _groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-selectItem
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [checkmark]="checkmark"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            (onClick)="onOptionSelect($event, option)"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-selectItem>
                                    </ng-container>
                                </ng-template>
                                <li *ngIf="filterValue && isEmpty()" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!filterValue && isEmpty()" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: SelectItem, selector: "p-selectItem", inputs: ["id", "option", "selected", "focused", "label", "disabled", "visible", "itemSize", "ariaPosInset", "ariaSetSize", "template", "checkmark"], outputs: ["onClick", "onMouseEnter"] }, { kind: "component", type: Overlay, selector: "p-overlay", inputs: ["visible", "mode", "style", "styleClass", "contentStyle", "contentStyleClass", "target", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "listener", "responsive", "options", "appendTo", "hostAttrSelector"], outputs: ["visibleChange", "onBeforeShow", "onShow", "onBeforeHide", "onHide", "onAnimationStart", "onAnimationDone"] }, { kind: "directive", type: Tooltip, selector: "[pTooltip]", inputs: ["tooltipPosition", "tooltipEvent", "positionStyle", "tooltipStyleClass", "tooltipZIndex", "escape", "showDelay", "hideDelay", "life", "positionTop", "positionLeft", "autoHide", "fitContent", "hideOnEscape", "pTooltip", "tooltipDisabled", "tooltipOptions", "appendTo"] }, { kind: "directive", type: AutoFocus, selector: "[pAutoFocus]", inputs: ["pAutoFocus"] }, { kind: "component", type: TimesIcon, selector: '[data-p-icon="times"]' }, { kind: "component", type: ChevronDownIcon, selector: '[data-p-icon="chevron-down"]' }, { kind: "component", type: SearchIcon, selector: '[data-p-icon="search"]' }, { kind: "directive", type: InputText, selector: "[pInputText]", inputs: ["pSize", "variant", "fluid", "invalid"] }, { kind: "component", type: IconField, selector: "p-iconfield, p-iconField, p-icon-field", inputs: ["iconPosition", "styleClass"] }, { kind: "component", type: InputIcon, selector: "p-inputicon, p-inputIcon", inputs: ["styleClass"] }, { kind: "component", type: Scroller, selector: "p-scroller, p-virtualscroller, p-virtual-scroller, p-virtualScroller", inputs: ["id", "style", "styleClass", "tabindex", "items", "itemSize", "scrollHeight", "scrollWidth", "orientation", "step", "delay", "resizeDelay", "appendOnly", "inline", "lazy", "disabled", "loaderDisabled", "columns", "showSpacer", "showLoader", "numToleratedItems", "loading", "autoSize", "trackBy", "options"], outputs: ["onLazyLoad", "onScroll", "onScrollIndexChange"] }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Select, decorators: [{
      type: Component,
      args: [{
        selector: "p-select",
        standalone: true,
        imports: [CommonModule, SelectItem, Overlay, Tooltip, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, InputText, IconField, InputIcon, Scroller, SharedModule],
        template: `
        <span
            #focusInput
            [class]="cx('label')"
            *ngIf="!editable"
            [pTooltip]="tooltip"
            [tooltipPosition]="tooltipPosition"
            [positionStyle]="tooltipPositionStyle"
            [tooltipStyleClass]="tooltipStyleClass"
            [attr.aria-disabled]="$disabled()"
            [attr.id]="inputId"
            role="combobox"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-haspopup]="'listbox'"
            [attr.aria-expanded]="overlayVisible ?? false"
            [attr.aria-controls]="overlayVisible ? id + '_list' : null"
            [attr.tabindex]="!$disabled() ? tabindex : -1"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (keydown)="onKeyDown($event)"
            [attr.aria-required]="required()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
        >
            <ng-container *ngIf="!selectedItemTemplate && !_selectedItemTemplate; else defaultPlaceholder">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</ng-container>
            <ng-container *ngIf="(selectedItemTemplate || _selectedItemTemplate) && !isSelectedOptionEmpty()" [ngTemplateOutlet]="selectedItemTemplate || _selectedItemTemplate" [ngTemplateOutletContext]="{ $implicit: selectedOption }"></ng-container>
            <ng-template #defaultPlaceholder>
                <span *ngIf="isSelectedOptionEmpty()">{{ label() === 'p-emptylabel' ? '&nbsp;' : label() }}</span>
            </ng-template>
        </span>
        <input
            *ngIf="editable"
            #editableInput
            type="text"
            [attr.id]="inputId"
            [class]="cx('label')"
            [attr.aria-haspopup]="'listbox'"
            [attr.placeholder]="modelValue() === undefined || modelValue() === null ? placeholder() : undefined"
            [attr.aria-label]="ariaLabel || (label() === 'p-emptylabel' ? undefined : label())"
            (input)="onEditableInput($event)"
            (keydown)="onKeyDown($event)"
            [pAutoFocus]="autofocus"
            [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [attr.name]="name()"
            [attr.minlength]="minlength()"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.pattern]="pattern()"
            [attr.size]="inputSize()"
            [attr.maxlength]="maxlength()"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
        />
        <ng-container *ngIf="isVisibleClearIcon">
            <svg data-p-icon="times" [class]="cx('clearIcon')" (click)="clear($event)" *ngIf="!clearIconTemplate && !_clearIconTemplate" [attr.data-pc-section]="'clearicon'" />
            <span [class]="cx('clearIcon')" (click)="clear($event)" *ngIf="clearIconTemplate || _clearIconTemplate" [attr.data-pc-section]="'clearicon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate; context: { class: cx('clearIcon') }"></ng-template>
            </span>
        </ng-container>

        <div [class]="cx('dropdown')" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible ?? false" [attr.data-pc-section]="'trigger'">
            <ng-container *ngIf="loading; else elseBlock">
                <ng-container *ngIf="loadingIconTemplate || _loadingIconTemplate">
                    <ng-container *ngTemplateOutlet="loadingIconTemplate || _loadingIconTemplate"></ng-container>
                </ng-container>
                <ng-container *ngIf="!loadingIconTemplate && !_loadingIconTemplate">
                    <span *ngIf="loadingIcon" [class]="cn(cx('loadingIcon'), 'pi-spin' + loadingIcon)" aria-hidden="true"></span>
                    <span *ngIf="!loadingIcon" [class]="cn(cx('loadingIcon'), 'pi pi-spinner pi-spin')" aria-hidden="true"></span>
                </ng-container>
            </ng-container>

            <ng-template #elseBlock>
                <ng-container *ngIf="!dropdownIconTemplate && !_dropdownIconTemplate">
                    <span [class]="cn(cx('dropdownIcon'), dropdownIcon)" *ngIf="dropdownIcon"></span>
                    <svg data-p-icon="chevron-down" *ngIf="!dropdownIcon" [class]="cx('dropdownIcon')" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate || _dropdownIconTemplate" [class]="cx('dropdownIcon')">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate; context: { class: cx('dropdownIcon') }"></ng-template>
                </span>
            </ng-template>
        </div>

        <p-overlay #overlay [hostAttrSelector]="attrSelector" [(visible)]="overlayVisible" [options]="overlayOptions" [target]="'@parent'" [appendTo]="$appendTo()" (onAnimationStart)="onOverlayAnimationStart($event)" (onHide)="hide()">
            <ng-template #content>
                <div [class]="cn(cx('overlay'), panelStyleClass)" [ngStyle]="panelStyle">
                    <span
                        #firstHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onFirstHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    >
                    </span>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                    <div [class]="cx('header')" *ngIf="filter" (click)="$event.stopPropagation()">
                        <ng-container *ngIf="filterTemplate || _filterTemplate; else builtInFilterElement">
                            <ng-container *ngTemplateOutlet="filterTemplate || _filterTemplate; context: { options: filterOptions }"></ng-container>
                        </ng-container>
                        <ng-template #builtInFilterElement>
                            <p-iconfield>
                                <input
                                    #filter
                                    pInputText
                                    [pSize]="size()"
                                    type="text"
                                    role="searchbox"
                                    autocomplete="off"
                                    [value]="_filterValue() || ''"
                                    [class]="cx('pcFilter')"
                                    [variant]="$variant()"
                                    [attr.placeholder]="filterPlaceholder"
                                    [attr.aria-owns]="id + '_list'"
                                    (input)="onFilterInputChange($event)"
                                    [attr.aria-label]="ariaFilterLabel"
                                    [attr.aria-activedescendant]="focusedOptionId"
                                    (keydown)="onFilterKeyDown($event)"
                                    (blur)="onFilterBlur($event)"
                                />
                                <p-inputicon>
                                    <svg data-p-icon="search" *ngIf="!filterIconTemplate && !_filterIconTemplate" />
                                    <span *ngIf="filterIconTemplate || _filterIconTemplate">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate || _filterIconTemplate"></ng-template>
                                    </span>
                                </p-inputicon>
                            </p-iconfield>
                        </ng-template>
                    </div>
                    <div [class]="cx('listContainer')" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                        <p-scroller
                            *ngIf="virtualScroll"
                            #scroller
                            [items]="visibleOptions()"
                            [style]="{ height: scrollHeight }"
                            [itemSize]="virtualScrollItemSize"
                            [autoSize]="true"
                            [lazy]="lazy"
                            (onLazyLoad)="onLazyLoad.emit($event)"
                            [options]="virtualScrollOptions"
                        >
                            <ng-template #content let-items let-scrollerOptions="options">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                            </ng-template>
                            <ng-container *ngIf="loaderTemplate || _loaderTemplate">
                                <ng-template #loader let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="loaderTemplate || _loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                </ng-template>
                            </ng-container>
                        </p-scroller>
                        <ng-container *ngIf="!virtualScroll">
                            <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: visibleOptions(), options: {} }"></ng-container>
                        </ng-container>

                        <ng-template #buildInItems let-items let-scrollerOptions="options">
                            <ul #items [attr.id]="id + '_list'" [attr.aria-label]="listLabel" [class]="cn(cx('list'), scrollerOptions.contentStyleClass)" [style]="scrollerOptions.contentStyle" role="listbox">
                                <ng-template ngFor let-option [ngForOf]="items" let-i="index">
                                    <ng-container *ngIf="isOptionGroup(option)">
                                        <li [class]="cx('optionGroup')" [attr.id]="id + '_' + getOptionIndex(i, scrollerOptions)" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                            <span *ngIf="!groupTemplate && !_groupTemplate">{{ getOptionGroupLabel(option.optionGroup) }}</span>
                                            <ng-container *ngTemplateOutlet="groupTemplate || _groupTemplate; context: { $implicit: option.optionGroup }"></ng-container>
                                        </li>
                                    </ng-container>
                                    <ng-container *ngIf="!isOptionGroup(option)">
                                        <p-selectItem
                                            [id]="id + '_' + getOptionIndex(i, scrollerOptions)"
                                            [option]="option"
                                            [checkmark]="checkmark"
                                            [selected]="isSelected(option)"
                                            [label]="getOptionLabel(option)"
                                            [disabled]="isOptionDisabled(option)"
                                            [template]="itemTemplate || _itemTemplate"
                                            [focused]="focusedOptionIndex() === getOptionIndex(i, scrollerOptions)"
                                            [ariaPosInset]="getAriaPosInset(getOptionIndex(i, scrollerOptions))"
                                            [ariaSetSize]="ariaSetSize"
                                            (onClick)="onOptionSelect($event, option)"
                                            (onMouseEnter)="onOptionMouseEnter($event, getOptionIndex(i, scrollerOptions))"
                                        ></p-selectItem>
                                    </ng-container>
                                </ng-template>
                                <li *ngIf="filterValue && isEmpty()" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyFilterTemplate && !_emptyFilterTemplate && !emptyTemplate) {
                                        {{ emptyFilterMessageLabel }}
                                    } @else {
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || _emptyFilterTemplate || emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                                <li *ngIf="!filterValue && isEmpty()" [class]="cx('emptyMessage')" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }" role="option">
                                    @if (!emptyTemplate && !_emptyTemplate) {
                                        {{ emptyMessageLabel }}
                                    } @else {
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                                    }
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                    <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
                    <span
                        #lastHiddenFocusableEl
                        role="presentation"
                        class="p-hidden-accessible p-hidden-focusable"
                        [attr.tabindex]="0"
                        (focus)="onLastHiddenFocus($event)"
                        [attr.data-p-hidden-accessible]="true"
                        [attr.data-p-hidden-focusable]="true"
                    ></span>
                </div>
            </ng-template>
        </p-overlay>
    `,
        host: {
          "[class]": "cn(cx('root'), styleClass)",
          "[attr.id]": "id",
          "(click)": "onContainerClick($event)"
        },
        providers: [SELECT_VALUE_ACCESSOR, SelectStyle],
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None
      }]
    }], ctorParameters: () => [{ type: NgZone }, { type: FilterService }], propDecorators: { id: [{
      type: Input
    }], scrollHeight: [{
      type: Input
    }], filter: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], panelStyle: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], panelStyleClass: [{
      type: Input
    }], readonly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], editable: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], tabindex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], placeholder: [{
      type: Input
    }], loadingIcon: [{
      type: Input
    }], filterPlaceholder: [{
      type: Input
    }], filterLocale: [{
      type: Input
    }], inputId: [{
      type: Input
    }], dataKey: [{
      type: Input
    }], filterBy: [{
      type: Input
    }], filterFields: [{
      type: Input
    }], autofocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], resetFilterOnHide: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], checkmark: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], dropdownIcon: [{
      type: Input
    }], loading: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], optionLabel: [{
      type: Input
    }], optionValue: [{
      type: Input
    }], optionDisabled: [{
      type: Input
    }], optionGroupLabel: [{
      type: Input
    }], optionGroupChildren: [{
      type: Input
    }], group: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showClear: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], emptyFilterMessage: [{
      type: Input
    }], emptyMessage: [{
      type: Input
    }], lazy: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], virtualScroll: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], virtualScrollItemSize: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], virtualScrollOptions: [{
      type: Input
    }], overlayOptions: [{
      type: Input
    }], ariaFilterLabel: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }], ariaLabelledBy: [{
      type: Input
    }], filterMatchMode: [{
      type: Input
    }], tooltip: [{
      type: Input
    }], tooltipPosition: [{
      type: Input
    }], tooltipPositionStyle: [{
      type: Input
    }], tooltipStyleClass: [{
      type: Input
    }], focusOnHover: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], selectOnFocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], autoOptionFocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], autofocusFilter: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], filterValue: [{
      type: Input
    }], options: [{
      type: Input
    }], onChange: [{
      type: Output
    }], onFilter: [{
      type: Output
    }], onFocus: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], onClick: [{
      type: Output
    }], onShow: [{
      type: Output
    }], onHide: [{
      type: Output
    }], onClear: [{
      type: Output
    }], onLazyLoad: [{
      type: Output
    }], filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }], focusInputViewChild: [{
      type: ViewChild,
      args: ["focusInput"]
    }], editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }], itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }], scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }], overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }], firstHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["firstHiddenFocusableEl"]
    }], lastHiddenFocusableElementOnOverlay: [{
      type: ViewChild,
      args: ["lastHiddenFocusableEl"]
    }], itemTemplate: [{
      type: ContentChild,
      args: ["item", { descendants: false }]
    }], groupTemplate: [{
      type: ContentChild,
      args: ["group", { descendants: false }]
    }], loaderTemplate: [{
      type: ContentChild,
      args: ["loader", { descendants: false }]
    }], selectedItemTemplate: [{
      type: ContentChild,
      args: ["selectedItem", { descendants: false }]
    }], headerTemplate: [{
      type: ContentChild,
      args: ["header", { descendants: false }]
    }], filterTemplate: [{
      type: ContentChild,
      args: ["filter", { descendants: false }]
    }], footerTemplate: [{
      type: ContentChild,
      args: ["footer", { descendants: false }]
    }], emptyFilterTemplate: [{
      type: ContentChild,
      args: ["emptyfilter", { descendants: false }]
    }], emptyTemplate: [{
      type: ContentChild,
      args: ["empty", { descendants: false }]
    }], dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", { descendants: false }]
    }], loadingIconTemplate: [{
      type: ContentChild,
      args: ["loadingicon", { descendants: false }]
    }], clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", { descendants: false }]
    }], filterIconTemplate: [{
      type: ContentChild,
      args: ["filtericon", { descendants: false }]
    }], onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", { descendants: false }]
    }], offIconTemplate: [{
      type: ContentChild,
      args: ["officon", { descendants: false }]
    }], cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    SelectModule = class _SelectModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _SelectModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _SelectModule, imports: [Select, SharedModule], exports: [Select, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _SelectModule, imports: [Select, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: SelectModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Select, SharedModule],
        exports: [Select, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/inputnumber/index.mjs
var style3;
var init_inputnumber = __esm({
  "node_modules/@primeuix/styles/dist/inputnumber/index.mjs"() {
    "use strict";
    style3 = "\n    .p-inputnumber {\n        display: inline-flex;\n        position: relative;\n    }\n\n    .p-inputnumber-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex: 0 0 auto;\n        cursor: pointer;\n        background: dt('inputnumber.button.background');\n        color: dt('inputnumber.button.color');\n        width: dt('inputnumber.button.width');\n        transition:\n            background dt('inputnumber.transition.duration'),\n            color dt('inputnumber.transition.duration'),\n            border-color dt('inputnumber.transition.duration'),\n            outline-color dt('inputnumber.transition.duration');\n    }\n\n    .p-inputnumber-button:disabled {\n        cursor: auto;\n    }\n\n    .p-inputnumber-button:not(:disabled):hover {\n        background: dt('inputnumber.button.hover.background');\n        color: dt('inputnumber.button.hover.color');\n    }\n\n    .p-inputnumber-button:not(:disabled):active {\n        background: dt('inputnumber.button.active.background');\n        color: dt('inputnumber.button.active.color');\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button {\n        position: relative;\n        flex: 1 1 auto;\n        border: 0 none;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-button-group {\n        display: flex;\n        flex-direction: column;\n        position: absolute;\n        inset-block-start: 1px;\n        inset-inline-end: 1px;\n        height: calc(100% - 2px);\n        z-index: 1;\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-increment-button {\n        padding: 0;\n        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-decrement-button {\n        padding: 0;\n        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-increment-button {\n        order: 3;\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        border-inline-start: 0 none;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n    }\n\n    .p-inputnumber-horizontal .p-inputnumber-decrement-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-inline-end: 0 none;\n    }\n\n    .p-floatlabel:has(.p-inputnumber-horizontal) label {\n        margin-inline-start: dt('inputnumber.button.width');\n    }\n\n    .p-inputnumber-vertical {\n        flex-direction: column;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button {\n        border: 1px solid dt('inputnumber.button.border.color');\n        padding: dt('inputnumber.button.vertical.padding');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:hover {\n        border-color: dt('inputnumber.button.hover.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-button:active {\n        border-color: dt('inputnumber.button.active.border.color');\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-increment-button {\n        order: 1;\n        border-start-start-radius: dt('inputnumber.button.border.radius');\n        border-start-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-end: 0 none;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-input {\n        order: 2;\n        border-radius: 0;\n        text-align: center;\n    }\n\n    .p-inputnumber-vertical .p-inputnumber-decrement-button {\n        order: 3;\n        border-end-start-radius: dt('inputnumber.button.border.radius');\n        border-end-end-radius: dt('inputnumber.button.border.radius');\n        width: 100%;\n        border-block-start: 0 none;\n    }\n\n    .p-inputnumber-input {\n        flex: 1 1 auto;\n    }\n\n    .p-inputnumber-fluid {\n        width: 100%;\n    }\n\n    .p-inputnumber-fluid .p-inputnumber-input {\n        width: 1%;\n    }\n\n    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {\n        width: 100%;\n    }\n\n    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.sm.font.size');\n        width: dt('form.field.sm.font.size');\n        height: dt('form.field.sm.font.size');\n    }\n\n    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {\n        font-size: dt('form.field.lg.font.size');\n        width: dt('form.field.lg.font.size');\n        height: dt('form.field.lg.font.size');\n    }\n\n    .p-inputnumber-clear-icon {\n        position: absolute;\n        top: 50%;\n        margin-top: -0.5rem;\n        cursor: pointer;\n        inset-inline-end: dt('form.field.padding.x');\n        color: dt('form.field.icon.color');\n    }\n\n    .p-inputnumber-stacked .p-inputnumber-clear-icon, \n    .p-inputnumber-horizontal .p-inputnumber-clear-icon {\n        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-inputnumber.mjs
var theme4, classes3, InputNumberStyle, InputNumberClasses, INPUTNUMBER_VALUE_ACCESSOR, InputNumber, InputNumberModule;
var init_primeng_inputnumber = __esm({
  "node_modules/primeng/fesm2022/primeng-inputnumber.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_forms();
    init_dist();
    init_primeng_api();
    init_primeng_autofocus();
    init_primeng_baseinput();
    init_primeng_icons();
    init_primeng_inputtext();
    init_inputnumber();
    init_primeng_base();
    theme4 = /*css*/
    `
    ${style3}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;
    classes3 = {
      root: ({ instance }) => [
        "p-inputnumber p-component p-inputwrapper",
        {
          "p-inputwrapper-filled": instance.$filled() || instance.allowEmpty === false,
          "p-inputwrapper-focus": instance.focused,
          "p-inputnumber-stacked": instance.showButtons && instance.buttonLayout === "stacked",
          "p-inputnumber-horizontal": instance.showButtons && instance.buttonLayout === "horizontal",
          "p-inputnumber-vertical": instance.showButtons && instance.buttonLayout === "vertical",
          "p-inputnumber-fluid": instance.hasFluid,
          "p-invalid": instance.invalid()
        }
      ],
      pcInputText: "p-inputnumber-input",
      buttonGroup: "p-inputnumber-button-group",
      incrementButton: ({ instance }) => [
        "p-inputnumber-button p-inputnumber-increment-button",
        {
          "p-disabled": instance.showButtons && instance.max() != null && instance.maxlength()
        }
      ],
      decrementButton: ({ instance }) => [
        "p-inputnumber-button p-inputnumber-decrement-button",
        {
          "p-disabled": instance.showButtons && instance.min() != null && instance.minlength()
        }
      ],
      clearIcon: "p-inputnumber-clear-icon"
    };
    InputNumberStyle = class _InputNumberStyle extends BaseStyle {
      name = "inputnumber";
      theme = theme4;
      classes = classes3;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputNumberStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputNumberStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: InputNumberStyle, decorators: [{
      type: Injectable
    }] });
    (function(InputNumberClasses2) {
      InputNumberClasses2["root"] = "p-inputnumber";
      InputNumberClasses2["pcInputText"] = "p-inputnumber-input";
      InputNumberClasses2["buttonGroup"] = "p-inputnumber-button-group";
      InputNumberClasses2["incrementButton"] = "p-inputnumber-increment-button";
      InputNumberClasses2["decrementButton"] = "p-inputnumber-decrement-button";
      InputNumberClasses2["clearIcon"] = "p-autocomplete-clear-icon";
    })(InputNumberClasses || (InputNumberClasses = {}));
    INPUTNUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumber),
      multi: true
    };
    InputNumber = class _InputNumber extends BaseInput {
      injector;
      /**
       * Displays spinner buttons.
       * @group Props
       */
      showButtons = false;
      /**
       * Whether to format the value.
       * @group Props
       */
      format = true;
      /**
       * Layout of the buttons, valid values are "stacked" (default), "horizontal" and "vertical".
       * @group Props
       */
      buttonLayout = "stacked";
      /**
       * Identifier of the focus input to match a label defined for the component.
       * @group Props
       */
      inputId;
      /**
       * Style class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Advisory information to display on input.
       * @group Props
       */
      placeholder;
      /**
       * Specifies tab order of the element.
       * @group Props
       */
      tabindex;
      /**
       * Title text of the input text.
       * @group Props
       */
      title;
      /**
       * Specifies one or more IDs in the DOM that labels the input field.
       * @group Props
       */
      ariaLabelledBy;
      /**
       * Specifies one or more IDs in the DOM that describes the input field.
       * @group Props
       */
      ariaDescribedBy;
      /**
       * Used to define a string that labels the input element.
       * @group Props
       */
      ariaLabel;
      /**
       * Used to indicate that user input is required on an element before a form can be submitted.
       * @group Props
       */
      ariaRequired;
      /**
       * Used to define a string that autocomplete attribute the current element.
       * @group Props
       */
      autocomplete;
      /**
       * Style class of the increment button.
       * @group Props
       */
      incrementButtonClass;
      /**
       * Style class of the decrement button.
       * @group Props
       */
      decrementButtonClass;
      /**
       * Style class of the increment button.
       * @group Props
       */
      incrementButtonIcon;
      /**
       * Style class of the decrement button.
       * @group Props
       */
      decrementButtonIcon;
      /**
       * When present, it specifies that an input field is read-only.
       * @group Props
       */
      readonly;
      /**
       * Determines whether the input field is empty.
       * @group Props
       */
      allowEmpty = true;
      /**
       * Locale to be used in formatting.
       * @group Props
       */
      locale;
      /**
       * The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". See Locale Negotiation for details.
       * @group Props
       */
      localeMatcher;
      /**
       * Defines the behavior of the component, valid values are "decimal" and "currency".
       * @group Props
       */
      mode = "decimal";
      /**
       * The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. There is no default value; if the style is "currency", the currency property must be provided.
       * @group Props
       */
      currency;
      /**
       * How to display the currency in currency formatting. Possible values are "symbol" to use a localized currency symbol such as €, ü"code" to use the ISO currency code, "name" to use a localized currency name such as "dollar"; the default is "symbol".
       * @group Props
       */
      currencyDisplay;
      /**
       * Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators.
       * @group Props
       */
      useGrouping = true;
      /**
       * The minimum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number and percent formatting is 0; the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
       * @group Props
       */
      minFractionDigits;
      /**
       * The maximum number of fraction digits to use. Possible values are from 0 to 20; the default for plain number formatting is the larger of minimumFractionDigits and 3; the default for currency formatting is the larger of minimumFractionDigits and the number of minor unit digits provided by the ISO 4217 currency code list (2 if the list doesn't provide that information).
       * @group Props
       */
      maxFractionDigits;
      /**
       * Text to display before the value.
       * @group Props
       */
      prefix;
      /**
       * Text to display after the value.
       * @group Props
       */
      suffix;
      /**
       * Inline style of the input field.
       * @group Props
       */
      inputStyle;
      /**
       * Style class of the input field.
       * @group Props
       */
      inputStyleClass;
      /**
       * When enabled, a clear icon is displayed to clear the value.
       * @group Props
       */
      showClear = false;
      /**
       * When present, it specifies that the component should automatically get focus on load.
       * @group Props
       */
      autofocus;
      /**
       * Callback to invoke on input.
       * @param {InputNumberInputEvent} event - Custom input event.
       * @group Emits
       */
      onInput = new EventEmitter();
      /**
       * Callback to invoke when the component receives focus.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      onFocus = new EventEmitter();
      /**
       * Callback to invoke when the component loses focus.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      onBlur = new EventEmitter();
      /**
       * Callback to invoke on input key press.
       * @param {KeyboardEvent} event - Keyboard event.
       * @group Emits
       */
      onKeyDown = new EventEmitter();
      /**
       * Callback to invoke when clear token is clicked.
       * @group Emits
       */
      onClear = new EventEmitter();
      /**
       * Template of the clear icon.
       * @group Templates
       */
      clearIconTemplate;
      /**
       * Template of the increment button icon.
       * @group Templates
       */
      incrementButtonIconTemplate;
      /**
       * Template of the decrement button icon.
       * @group Templates
       */
      decrementButtonIconTemplate;
      templates;
      input;
      _clearIconTemplate;
      _incrementButtonIconTemplate;
      _decrementButtonIconTemplate;
      value;
      focused;
      initialized;
      groupChar = "";
      prefixChar = "";
      suffixChar = "";
      isSpecialChar;
      timer;
      lastValue;
      _numeral;
      numberFormat;
      _decimal;
      _decimalChar;
      _group;
      _minusSign;
      _currency;
      _prefix;
      _suffix;
      _index;
      _componentStyle = inject(InputNumberStyle);
      ngControl = null;
      constructor(injector) {
        super();
        this.injector = injector;
      }
      ngOnChanges(simpleChange) {
        super.ngOnChanges(simpleChange);
        const props = ["locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix"];
        if (props.some((p) => !!simpleChange[p])) {
          this.updateConstructParser();
        }
      }
      ngOnInit() {
        super.ngOnInit();
        this.ngControl = this.injector.get(NgControl, null, { optional: true });
        this.constructParser();
        this.initialized = true;
      }
      ngAfterContentInit() {
        this.templates.forEach((item) => {
          switch (item.getType()) {
            case "clearicon":
              this._clearIconTemplate = item.template;
              break;
            case "incrementbuttonicon":
              this._incrementButtonIconTemplate = item.template;
              break;
            case "decrementbuttonicon":
              this._decrementButtonIconTemplate = item.template;
              break;
          }
        });
      }
      getOptions() {
        return {
          localeMatcher: this.localeMatcher,
          style: this.mode,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          useGrouping: this.useGrouping,
          minimumFractionDigits: this.minFractionDigits ?? void 0,
          maximumFractionDigits: this.maxFractionDigits ?? void 0
        };
      }
      constructParser() {
        this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
        const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [d, i]));
        this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
        this._group = this.getGroupingExpression();
        this._minusSign = this.getMinusSignExpression();
        this._currency = this.getCurrencyExpression();
        this._decimal = this.getDecimalExpression();
        this._decimalChar = this.getDecimalChar();
        this._suffix = this.getSuffixExpression();
        this._prefix = this.getPrefixExpression();
        this._index = (d) => index.get(d);
      }
      updateConstructParser() {
        if (this.initialized) {
          this.constructParser();
        }
      }
      escapeRegExp(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      }
      getDecimalExpression() {
        const decimalChar = this.getDecimalChar();
        return new RegExp(`[${decimalChar}]`, "g");
      }
      getDecimalChar() {
        const formatter = new Intl.NumberFormat(this.locale, __spreadProps(__spreadValues({}, this.getOptions()), { useGrouping: false }));
        return formatter.format(1.1).replace(this._currency, "").trim().replace(this._numeral, "");
      }
      getGroupingExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true });
        this.groupChar = formatter.format(1e6).trim().replace(this._numeral, "").charAt(0);
        return new RegExp(`[${this.groupChar}]`, "g");
      }
      getMinusSignExpression() {
        const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
        return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
      }
      getCurrencyExpression() {
        if (this.currency) {
          const formatter = new Intl.NumberFormat(this.locale, {
            style: "currency",
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
          return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._group, "")}]`, "g");
        }
        return new RegExp(`[]`, "g");
      }
      getPrefixExpression() {
        if (this.prefix) {
          this.prefixChar = this.prefix;
        } else {
          const formatter = new Intl.NumberFormat(this.locale, {
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay
          });
          this.prefixChar = formatter.format(1).split("1")[0];
        }
        return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
      }
      getSuffixExpression() {
        if (this.suffix) {
          this.suffixChar = this.suffix;
        } else {
          const formatter = new Intl.NumberFormat(this.locale, {
            style: this.mode,
            currency: this.currency,
            currencyDisplay: this.currencyDisplay,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          });
          this.suffixChar = formatter.format(1).split("1")[1];
        }
        return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
      }
      formatValue(value) {
        if (value != null) {
          if (value === "-") {
            return value;
          }
          if (this.format) {
            let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
            let formattedValue = formatter.format(value);
            if (this.prefix && value != this.prefix) {
              formattedValue = this.prefix + formattedValue;
            }
            if (this.suffix && value != this.suffix) {
              formattedValue = formattedValue + this.suffix;
            }
            return formattedValue;
          }
          return value.toString();
        }
        return "";
      }
      parseValue(text) {
        const suffixRegex = new RegExp(this._suffix, "");
        const prefixRegex = new RegExp(this._prefix, "");
        const currencyRegex = new RegExp(this._currency, "");
        let filteredText = text.replace(suffixRegex, "").replace(prefixRegex, "").trim().replace(/\s/g, "").replace(currencyRegex, "").replace(this._group, "").replace(this._minusSign, "-").replace(this._decimal, ".").replace(this._numeral, this._index);
        if (filteredText) {
          if (filteredText === "-")
            return filteredText;
          let parsedValue = +filteredText;
          return isNaN(parsedValue) ? null : parsedValue;
        }
        return null;
      }
      repeat(event, interval, dir) {
        if (this.readonly) {
          return;
        }
        let i = interval || 500;
        this.clearTimer();
        this.timer = setTimeout(() => {
          this.repeat(event, 40, dir);
        }, i);
        this.spin(event, dir);
      }
      spin(event, dir) {
        let step = (this.step() ?? 1) * dir;
        let currentValue = this.parseValue(this.input?.nativeElement.value) || 0;
        let newValue = this.validateValue(currentValue + step);
        if (this.maxlength() && this.maxlength() < this.formatValue(newValue).length) {
          return;
        }
        this.updateInput(newValue, null, "spin", null);
        this.updateModel(event, newValue);
        this.handleOnInput(event, currentValue, newValue);
      }
      clear() {
        this.value = null;
        this.onModelChange(this.value);
        this.onClear.emit();
      }
      onUpButtonMouseDown(event) {
        if (event.button === 2) {
          this.clearTimer();
          return;
        }
        if (!this.$disabled()) {
          this.input?.nativeElement.focus();
          this.repeat(event, null, 1);
          event.preventDefault();
        }
      }
      onUpButtonMouseUp() {
        if (!this.$disabled()) {
          this.clearTimer();
        }
      }
      onUpButtonMouseLeave() {
        if (!this.$disabled()) {
          this.clearTimer();
        }
      }
      onUpButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
          this.repeat(event, null, 1);
        }
      }
      onUpButtonKeyUp() {
        if (!this.$disabled()) {
          this.clearTimer();
        }
      }
      onDownButtonMouseDown(event) {
        if (event.button === 2) {
          this.clearTimer();
          return;
        }
        if (!this.$disabled()) {
          this.input?.nativeElement.focus();
          this.repeat(event, null, -1);
          event.preventDefault();
        }
      }
      onDownButtonMouseUp() {
        if (!this.$disabled()) {
          this.clearTimer();
        }
      }
      onDownButtonMouseLeave() {
        if (!this.$disabled()) {
          this.clearTimer();
        }
      }
      onDownButtonKeyUp() {
        if (!this.$disabled()) {
          this.clearTimer();
        }
      }
      onDownButtonKeyDown(event) {
        if (event.keyCode === 32 || event.keyCode === 13) {
          this.repeat(event, null, -1);
        }
      }
      onUserInput(event) {
        if (this.readonly) {
          return;
        }
        if (this.isSpecialChar) {
          event.target.value = this.lastValue;
        }
        this.isSpecialChar = false;
      }
      onInputKeyDown(event) {
        if (this.readonly) {
          return;
        }
        this.lastValue = event.target.value;
        if (event.shiftKey || event.altKey) {
          this.isSpecialChar = true;
          return;
        }
        let selectionStart = event.target.selectionStart;
        let selectionEnd = event.target.selectionEnd;
        let inputValue = event.target.value;
        let newValueStr = null;
        if (event.altKey) {
          event.preventDefault();
        }
        switch (event.key) {
          case "ArrowUp":
            this.spin(event, 1);
            event.preventDefault();
            break;
          case "ArrowDown":
            this.spin(event, -1);
            event.preventDefault();
            break;
          case "ArrowLeft":
            for (let index = selectionStart; index <= inputValue.length; index++) {
              const previousCharIndex = index === 0 ? 0 : index - 1;
              if (this.isNumeralChar(inputValue.charAt(previousCharIndex))) {
                this.input.nativeElement.setSelectionRange(index, index);
                break;
              }
            }
            break;
          case "ArrowRight":
            for (let index = selectionEnd; index >= 0; index--) {
              if (this.isNumeralChar(inputValue.charAt(index))) {
                this.input.nativeElement.setSelectionRange(index, index);
                break;
              }
            }
            break;
          case "Tab":
          case "Enter":
            newValueStr = this.validateValue(this.parseValue(this.input.nativeElement.value));
            this.input.nativeElement.value = this.formatValue(newValueStr);
            this.input.nativeElement.setAttribute("aria-valuenow", newValueStr);
            this.updateModel(event, newValueStr);
            break;
          case "Backspace": {
            event.preventDefault();
            if (selectionStart === selectionEnd) {
              if (selectionStart == 1 && this.prefix || selectionStart == inputValue.length && this.suffix) {
                break;
              }
              const deleteChar = inputValue.charAt(selectionStart - 1);
              const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);
              if (this.isNumeralChar(deleteChar)) {
                const decimalLength = this.getDecimalLength(inputValue);
                if (this._group.test(deleteChar)) {
                  this._group.lastIndex = 0;
                  newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
                } else if (this._decimal.test(deleteChar)) {
                  this._decimal.lastIndex = 0;
                  if (decimalLength) {
                    this.input?.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                  }
                } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                  const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
                  newValueStr = inputValue.slice(0, selectionStart - 1) + insertedText + inputValue.slice(selectionStart);
                } else if (decimalCharIndexWithoutPrefix === 1) {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
                  newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
                } else {
                  newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
                }
              } else if (this.mode === "currency" && deleteChar.search(this._currency) != -1) {
                newValueStr = inputValue.slice(1);
              }
              this.updateValue(event, newValueStr, null, "delete-single");
            } else {
              newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, null, "delete-range");
            }
            break;
          }
          case "Delete":
            event.preventDefault();
            if (selectionStart === selectionEnd) {
              if (selectionStart == 0 && this.prefix || selectionStart == inputValue.length - 1 && this.suffix) {
                break;
              }
              const deleteChar = inputValue.charAt(selectionStart);
              const { decimalCharIndex, decimalCharIndexWithoutPrefix } = this.getDecimalCharIndexes(inputValue);
              if (this.isNumeralChar(deleteChar)) {
                const decimalLength = this.getDecimalLength(inputValue);
                if (this._group.test(deleteChar)) {
                  this._group.lastIndex = 0;
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
                } else if (this._decimal.test(deleteChar)) {
                  this._decimal.lastIndex = 0;
                  if (decimalLength) {
                    this.input?.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
                  } else {
                    newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                  }
                } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
                  const insertedText = this.isDecimalMode() && (this.minFractionDigits || 0) < decimalLength ? "" : "0";
                  newValueStr = inputValue.slice(0, selectionStart) + insertedText + inputValue.slice(selectionStart + 1);
                } else if (decimalCharIndexWithoutPrefix === 1) {
                  newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
                  newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
                } else {
                  newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
                }
              }
              this.updateValue(event, newValueStr, null, "delete-back-single");
            } else {
              newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
              this.updateValue(event, newValueStr, null, "delete-range");
            }
            break;
          case "Home":
            if (this.min()) {
              this.updateModel(event, this.min());
              event.preventDefault();
            }
            break;
          case "End":
            if (this.max()) {
              this.updateModel(event, this.max());
              event.preventDefault();
            }
            break;
          default:
            break;
        }
        this.onKeyDown.emit(event);
      }
      onInputKeyPress(event) {
        if (this.readonly) {
          return;
        }
        let code = event.which || event.keyCode;
        let char = String.fromCharCode(code);
        let isDecimalSign = this.isDecimalSign(char);
        const isMinusSign = this.isMinusSign(char);
        if (code != 13) {
          event.preventDefault();
        }
        if (!isDecimalSign && event.code === "NumpadDecimal") {
          isDecimalSign = true;
          char = this._decimalChar;
          code = char.charCodeAt(0);
        }
        const { value, selectionStart, selectionEnd } = this.input.nativeElement;
        const newValue = this.parseValue(value + char);
        const newValueStr = newValue != null ? newValue.toString() : "";
        const selectedValue = value.substring(selectionStart, selectionEnd);
        const selectedValueParsed = this.parseValue(selectedValue);
        const selectedValueStr = selectedValueParsed != null ? selectedValueParsed.toString() : "";
        if (selectionStart !== selectionEnd && selectedValueStr.length > 0) {
          this.insert(event, char, { isDecimalSign, isMinusSign });
          return;
        }
        if (this.maxlength() && newValueStr.length > this.maxlength()) {
          return;
        }
        if (48 <= code && code <= 57 || isMinusSign || isDecimalSign) {
          this.insert(event, char, { isDecimalSign, isMinusSign });
        }
      }
      onPaste(event) {
        if (!this.$disabled() && !this.readonly) {
          event.preventDefault();
          let data = (event.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
          if (data) {
            if (this.maxlength()) {
              data = data.toString().substring(0, this.maxlength());
            }
            let filteredData = this.parseValue(data);
            if (filteredData != null) {
              this.insert(event, filteredData.toString());
            }
          }
        }
      }
      allowMinusSign() {
        return this.min() == null || this.min() < 0;
      }
      isMinusSign(char) {
        if (this._minusSign.test(char) || char === "-") {
          this._minusSign.lastIndex = 0;
          return true;
        }
        return false;
      }
      isDecimalSign(char) {
        if (this._decimal.test(char)) {
          this._decimal.lastIndex = 0;
          return true;
        }
        return false;
      }
      isDecimalMode() {
        return this.mode === "decimal";
      }
      getDecimalCharIndexes(val) {
        let decimalCharIndex = val.search(this._decimal);
        this._decimal.lastIndex = 0;
        const filteredVal = val.replace(this._prefix, "").trim().replace(/\s/g, "").replace(this._currency, "");
        const decimalCharIndexWithoutPrefix = filteredVal.search(this._decimal);
        this._decimal.lastIndex = 0;
        return { decimalCharIndex, decimalCharIndexWithoutPrefix };
      }
      getCharIndexes(val) {
        const decimalCharIndex = val.search(this._decimal);
        this._decimal.lastIndex = 0;
        const minusCharIndex = val.search(this._minusSign);
        this._minusSign.lastIndex = 0;
        const suffixCharIndex = val.search(this._suffix);
        this._suffix.lastIndex = 0;
        const currencyCharIndex = val.search(this._currency);
        this._currency.lastIndex = 0;
        return { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex };
      }
      insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {
        const minusCharIndexOnText = text.search(this._minusSign);
        this._minusSign.lastIndex = 0;
        if (!this.allowMinusSign() && minusCharIndexOnText !== -1) {
          return;
        }
        let selectionStart = this.input?.nativeElement.selectionStart;
        let selectionEnd = this.input?.nativeElement.selectionEnd;
        let inputValue = this.input?.nativeElement.value.trim();
        const { decimalCharIndex, minusCharIndex, suffixCharIndex, currencyCharIndex } = this.getCharIndexes(inputValue);
        let newValueStr;
        if (sign.isMinusSign) {
          if (selectionStart === 0) {
            newValueStr = inputValue;
            if (minusCharIndex === -1 || selectionEnd !== 0) {
              newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
            }
            this.updateValue(event, newValueStr, text, "insert");
          }
        } else if (sign.isDecimalSign) {
          if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
            this.updateValue(event, inputValue, text, "insert");
          } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
            newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, text, "insert");
          } else if (decimalCharIndex === -1 && this.maxFractionDigits) {
            newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, text, "insert");
          }
        } else {
          const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
          const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";
          if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
            if (selectionStart + text.length - (decimalCharIndex + 1) <= maxFractionDigits) {
              const charIndex = currencyCharIndex >= selectionStart ? currencyCharIndex - 1 : suffixCharIndex >= selectionStart ? suffixCharIndex : inputValue.length;
              newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length, charIndex) + inputValue.slice(charIndex);
              this.updateValue(event, newValueStr, text, operation);
            }
          } else {
            newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
            this.updateValue(event, newValueStr, text, operation);
          }
        }
      }
      insertText(value, text, start, end) {
        let textSplit = text === "." ? text : text.split(".");
        if (textSplit.length === 2) {
          const decimalCharIndex = value.slice(start, end).search(this._decimal);
          this._decimal.lastIndex = 0;
          return decimalCharIndex > 0 ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : value || this.formatValue(text);
        } else if (end - start === value.length) {
          return this.formatValue(text);
        } else if (start === 0) {
          return text + value.slice(end);
        } else if (end === value.length) {
          return value.slice(0, start) + text;
        } else {
          return value.slice(0, start) + text + value.slice(end);
        }
      }
      deleteRange(value, start, end) {
        let newValueStr;
        if (end - start === value.length)
          newValueStr = "";
        else if (start === 0)
          newValueStr = value.slice(end);
        else if (end === value.length)
          newValueStr = value.slice(0, start);
        else
          newValueStr = value.slice(0, start) + value.slice(end);
        return newValueStr;
      }
      initCursor() {
        let selectionStart = this.input?.nativeElement.selectionStart;
        let selectionEnd = this.input?.nativeElement.selectionEnd;
        let inputValue = this.input?.nativeElement.value;
        let valueLength = inputValue.length;
        let index = null;
        let prefixLength = (this.prefixChar || "").length;
        inputValue = inputValue.replace(this._prefix, "");
        if (selectionStart === selectionEnd || selectionStart !== 0 || selectionEnd < prefixLength) {
          selectionStart -= prefixLength;
        }
        let char = inputValue.charAt(selectionStart);
        if (this.isNumeralChar(char)) {
          return selectionStart + prefixLength;
        }
        let i = selectionStart - 1;
        while (i >= 0) {
          char = inputValue.charAt(i);
          if (this.isNumeralChar(char)) {
            index = i + prefixLength;
            break;
          } else {
            i--;
          }
        }
        if (index !== null) {
          this.input?.nativeElement.setSelectionRange(index + 1, index + 1);
        } else {
          i = selectionStart;
          while (i < valueLength) {
            char = inputValue.charAt(i);
            if (this.isNumeralChar(char)) {
              index = i + prefixLength;
              break;
            } else {
              i++;
            }
          }
          if (index !== null) {
            this.input?.nativeElement.setSelectionRange(index, index);
          }
        }
        return index || 0;
      }
      onInputClick() {
        const currentValue = this.input?.nativeElement.value;
        if (!this.readonly && currentValue !== Mt()) {
          this.initCursor();
        }
      }
      isNumeralChar(char) {
        if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
          this.resetRegex();
          return true;
        }
        return false;
      }
      resetRegex() {
        this._numeral.lastIndex = 0;
        this._decimal.lastIndex = 0;
        this._group.lastIndex = 0;
        this._minusSign.lastIndex = 0;
      }
      updateValue(event, valueStr, insertedValueStr, operation) {
        let currentValue = this.input?.nativeElement.value;
        let newValue = null;
        if (valueStr != null) {
          newValue = this.parseValue(valueStr);
          newValue = !newValue && !this.allowEmpty ? 0 : newValue;
          this.updateInput(newValue, insertedValueStr, operation, valueStr);
          this.handleOnInput(event, currentValue, newValue);
        }
      }
      handleOnInput(event, currentValue, newValue) {
        if (this.isValueChanged(currentValue, newValue)) {
          this.input.nativeElement.value = this.formatValue(newValue);
          this.input?.nativeElement.setAttribute("aria-valuenow", newValue);
          this.updateModel(event, newValue);
          this.onInput.emit({ originalEvent: event, value: newValue, formattedValue: currentValue });
        }
      }
      isValueChanged(currentValue, newValue) {
        if (newValue === null && currentValue !== null) {
          return true;
        }
        if (newValue != null) {
          let parsedCurrentValue = typeof currentValue === "string" ? this.parseValue(currentValue) : currentValue;
          return newValue !== parsedCurrentValue;
        }
        return false;
      }
      validateValue(value) {
        if (value === "-" || value == null) {
          return null;
        }
        if (this.min() != null && value < this.min()) {
          return this.min();
        }
        if (this.max() != null && value > this.max()) {
          return this.max();
        }
        return value;
      }
      updateInput(value, insertedValueStr, operation, valueStr) {
        insertedValueStr = insertedValueStr || "";
        let inputValue = this.input?.nativeElement.value;
        let newValue = this.formatValue(value);
        let currentLength = inputValue.length;
        if (newValue !== valueStr) {
          newValue = this.concatValues(newValue, valueStr);
        }
        if (currentLength === 0) {
          this.input.nativeElement.value = newValue;
          this.input.nativeElement.setSelectionRange(0, 0);
          const index = this.initCursor();
          const selectionEnd = index + insertedValueStr.length;
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
        } else {
          let selectionStart = this.input.nativeElement.selectionStart;
          let selectionEnd = this.input.nativeElement.selectionEnd;
          if (this.maxlength() && newValue.length > this.maxlength()) {
            newValue = newValue.slice(0, this.maxlength());
            selectionStart = Math.min(selectionStart, this.maxlength());
            selectionEnd = Math.min(selectionEnd, this.maxlength());
          }
          if (this.maxlength() && this.maxlength() < newValue.length) {
            return;
          }
          this.input.nativeElement.value = newValue;
          let newLength = newValue.length;
          if (operation === "range-insert") {
            const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
            const startValueStr = startValue !== null ? startValue.toString() : "";
            const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
            const sRegex = new RegExp(startExpr, "g");
            sRegex.test(newValue);
            const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
            const tRegex = new RegExp(tExpr, "g");
            tRegex.test(newValue.slice(sRegex.lastIndex));
            selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
            this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
          } else if (newLength === currentLength) {
            if (operation === "insert" || operation === "delete-back-single")
              this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
            else if (operation === "delete-single")
              this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
            else if (operation === "delete-range" || operation === "spin")
              this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
          } else if (operation === "delete-back-single") {
            let prevChar = inputValue.charAt(selectionEnd - 1);
            let nextChar = inputValue.charAt(selectionEnd);
            let diff = currentLength - newLength;
            let isGroupChar = this._group.test(nextChar);
            if (isGroupChar && diff === 1) {
              selectionEnd += 1;
            } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
              selectionEnd += -1 * diff + 1;
            }
            this._group.lastIndex = 0;
            this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
          } else if (inputValue === "-" && operation === "insert") {
            this.input.nativeElement.setSelectionRange(0, 0);
            const index = this.initCursor();
            const selectionEnd2 = index + insertedValueStr.length + 1;
            this.input.nativeElement.setSelectionRange(selectionEnd2, selectionEnd2);
          } else {
            selectionEnd = selectionEnd + (newLength - currentLength);
            this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
          }
        }
        this.input.nativeElement.setAttribute("aria-valuenow", value);
      }
      concatValues(val1, val2) {
        if (val1 && val2) {
          let decimalCharIndex = val2.search(this._decimal);
          this._decimal.lastIndex = 0;
          if (this.suffixChar) {
            return decimalCharIndex !== -1 ? val1.replace(this.suffixChar, "").split(this._decimal)[0] + val2.replace(this.suffixChar, "").slice(decimalCharIndex) + this.suffixChar : val1;
          } else {
            return decimalCharIndex !== -1 ? val1.split(this._decimal)[0] + val2.slice(decimalCharIndex) : val1;
          }
        }
        return val1;
      }
      getDecimalLength(value) {
        if (value) {
          const valueSplit = value.split(this._decimal);
          if (valueSplit.length === 2) {
            return valueSplit[1].replace(this._suffix, "").trim().replace(/\s/g, "").replace(this._currency, "").length;
          }
        }
        return 0;
      }
      onInputFocus(event) {
        this.focused = true;
        this.onFocus.emit(event);
      }
      onInputBlur(event) {
        this.focused = false;
        const newValueNumber = this.validateValue(this.parseValue(this.input.nativeElement.value));
        const newValueString = newValueNumber?.toString();
        this.input.nativeElement.value = this.formatValue(newValueString);
        this.input.nativeElement.setAttribute("aria-valuenow", newValueString);
        this.updateModel(event, newValueNumber);
        this.onModelTouched();
        this.onBlur.emit(event);
      }
      formattedValue() {
        const val = !this.value && !this.allowEmpty ? 0 : this.value;
        return this.formatValue(val);
      }
      updateModel(event, value) {
        const isBlurUpdateOnMode = this.ngControl?.control?.updateOn === "blur";
        if (this.value !== value) {
          this.value = value;
          if (!(isBlurUpdateOnMode && this.focused)) {
            this.onModelChange(value);
          }
        } else if (isBlurUpdateOnMode) {
          this.onModelChange(value);
        }
      }
      /**
       * @override
       *
       * @see {@link BaseEditableHolder.writeControlValue}
       * Writes the value to the control.
       */
      writeControlValue(value, setModelValue) {
        this.value = value ? Number(value) : value;
        setModelValue(value);
        this.cd.markForCheck();
      }
      clearTimer() {
        if (this.timer) {
          clearInterval(this.timer);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputNumber, deps: [{ token: Injector }], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.1.3", type: _InputNumber, isStandalone: true, selector: "p-inputNumber, p-inputnumber, p-input-number", inputs: { showButtons: ["showButtons", "showButtons", booleanAttribute], format: ["format", "format", booleanAttribute], buttonLayout: "buttonLayout", inputId: "inputId", styleClass: "styleClass", placeholder: "placeholder", tabindex: ["tabindex", "tabindex", numberAttribute], title: "title", ariaLabelledBy: "ariaLabelledBy", ariaDescribedBy: "ariaDescribedBy", ariaLabel: "ariaLabel", ariaRequired: ["ariaRequired", "ariaRequired", booleanAttribute], autocomplete: "autocomplete", incrementButtonClass: "incrementButtonClass", decrementButtonClass: "decrementButtonClass", incrementButtonIcon: "incrementButtonIcon", decrementButtonIcon: "decrementButtonIcon", readonly: ["readonly", "readonly", booleanAttribute], allowEmpty: ["allowEmpty", "allowEmpty", booleanAttribute], locale: "locale", localeMatcher: "localeMatcher", mode: "mode", currency: "currency", currencyDisplay: "currencyDisplay", useGrouping: ["useGrouping", "useGrouping", booleanAttribute], minFractionDigits: ["minFractionDigits", "minFractionDigits", (value) => numberAttribute(value, null)], maxFractionDigits: ["maxFractionDigits", "maxFractionDigits", (value) => numberAttribute(value, null)], prefix: "prefix", suffix: "suffix", inputStyle: "inputStyle", inputStyleClass: "inputStyleClass", showClear: ["showClear", "showClear", booleanAttribute], autofocus: ["autofocus", "autofocus", booleanAttribute] }, outputs: { onInput: "onInput", onFocus: "onFocus", onBlur: "onBlur", onKeyDown: "onKeyDown", onClear: "onClear" }, host: { properties: { "attr.data-pc-name": "'inputnumber'", "attr.data-pc-section": "'root'", "class": "cn(cx('root'), styleClass)" } }, providers: [INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle], queries: [{ propertyName: "clearIconTemplate", first: true, predicate: ["clearicon"] }, { propertyName: "incrementButtonIconTemplate", first: true, predicate: ["incrementbuttonicon"] }, { propertyName: "decrementButtonIconTemplate", first: true, predicate: ["decrementbuttonicon"] }, { propertyName: "templates", predicate: PrimeTemplate }], viewQueries: [{ propertyName: "input", first: true, predicate: ["input"], descendants: true }], usesInheritance: true, usesOnChanges: true, ngImport: core_exports, template: `
        <input
            pInputText
            #input
            [attr.id]="inputId"
            role="spinbutton"
            [class]="cn(cx('pcInputText'), inputStyleClass)"
            [value]="formattedValue()"
            [ngStyle]="inputStyle"
            [variant]="$variant()"
            [invalid]="invalid()"
            [attr.aria-valuemin]="min()"
            [attr.aria-valuemax]="max()"
            [attr.aria-valuenow]="value"
            [attr.placeholder]="placeholder"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-describedby]="ariaDescribedBy"
            [attr.title]="title"
            [pSize]="size()"
            [attr.size]="inputSize()"
            [attr.name]="name()"
            [attr.autocomplete]="autocomplete"
            [attr.maxlength]="maxlength()"
            [attr.minlength]="minlength()"
            [attr.tabindex]="tabindex"
            [attr.aria-required]="ariaRequired"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.step]="step() ?? 1"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            inputmode="decimal"
            (input)="onUserInput($event)"
            (keydown)="onInputKeyDown($event)"
            (keypress)="onInputKeyPress($event)"
            (paste)="onPaste($event)"
            (click)="onInputClick()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [attr.data-pc-section]="'input'"
            [pAutoFocus]="autofocus"
            [fluid]="hasFluid"
        />
        <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" (click)="clear()" [class]="cx('clearIcon')" [attr.data-pc-section]="'clearIcon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <span [class]="cx('buttonGroup')" *ngIf="showButtons && buttonLayout === 'stacked'" [attr.data-pc-section]="'buttonGroup'">
            <button
                type="button"
                [class]="cn(cx('incrementButton'), incrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.aria-hidden]="true"
                [attr.data-pc-section]="'incrementbutton'"
            >
                <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <svg data-p-icon="angle-up" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>

            <button
                type="button"
                [class]="cn(cx('decrementButton'), decrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
                [attr.data-pc-section]="'decrementbutton'"
            >
                <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <svg data-p-icon="angle-down" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [class]="cx('incrementButton')"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onUpButtonMouseDown($event)"
            (mouseup)="onUpButtonMouseUp()"
            (mouseleave)="onUpButtonMouseLeave()"
            (keydown)="onUpButtonKeyDown($event)"
            (keyup)="onUpButtonKeyUp()"
            [attr.data-pc-section]="'incrementbutton'"
        >
            <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
            <ng-container *ngIf="!incrementButtonIcon">
                <svg data-p-icon="angle-up" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [class]="cx('decrementButton')"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onDownButtonMouseDown($event)"
            (mouseup)="onDownButtonMouseUp()"
            (mouseleave)="onDownButtonMouseLeave()"
            (keydown)="onDownButtonKeyDown($event)"
            (keyup)="onDownButtonKeyUp()"
            [attr.data-pc-section]="'decrementbutton'"
        >
            <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
            <ng-container *ngIf="!decrementButtonIcon">
                <svg data-p-icon="angle-down" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: InputText, selector: "[pInputText]", inputs: ["pSize", "variant", "fluid", "invalid"] }, { kind: "directive", type: AutoFocus, selector: "[pAutoFocus]", inputs: ["pAutoFocus"] }, { kind: "component", type: TimesIcon, selector: '[data-p-icon="times"]' }, { kind: "component", type: AngleUpIcon, selector: '[data-p-icon="angle-up"]' }, { kind: "component", type: AngleDownIcon, selector: '[data-p-icon="angle-down"]' }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: InputNumber, decorators: [{
      type: Component,
      args: [{
        selector: "p-inputNumber, p-inputnumber, p-input-number",
        standalone: true,
        imports: [CommonModule, InputText, AutoFocus, TimesIcon, AngleUpIcon, AngleDownIcon, SharedModule],
        template: `
        <input
            pInputText
            #input
            [attr.id]="inputId"
            role="spinbutton"
            [class]="cn(cx('pcInputText'), inputStyleClass)"
            [value]="formattedValue()"
            [ngStyle]="inputStyle"
            [variant]="$variant()"
            [invalid]="invalid()"
            [attr.aria-valuemin]="min()"
            [attr.aria-valuemax]="max()"
            [attr.aria-valuenow]="value"
            [attr.placeholder]="placeholder"
            [attr.aria-label]="ariaLabel"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-describedby]="ariaDescribedBy"
            [attr.title]="title"
            [pSize]="size()"
            [attr.size]="inputSize()"
            [attr.name]="name()"
            [attr.autocomplete]="autocomplete"
            [attr.maxlength]="maxlength()"
            [attr.minlength]="minlength()"
            [attr.tabindex]="tabindex"
            [attr.aria-required]="ariaRequired"
            [attr.min]="min()"
            [attr.max]="max()"
            [attr.step]="step() ?? 1"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            inputmode="decimal"
            (input)="onUserInput($event)"
            (keydown)="onInputKeyDown($event)"
            (keypress)="onInputKeyPress($event)"
            (paste)="onPaste($event)"
            (click)="onInputClick()"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            [attr.data-pc-section]="'input'"
            [pAutoFocus]="autofocus"
            [fluid]="hasFluid"
        />
        <ng-container *ngIf="buttonLayout != 'vertical' && showClear && value">
            <svg data-p-icon="times" *ngIf="!clearIconTemplate && !_clearIconTemplate" [class]="cx('clearIcon')" (click)="clear()" [attr.data-pc-section]="'clearIcon'" />
            <span *ngIf="clearIconTemplate || _clearIconTemplate" (click)="clear()" [class]="cx('clearIcon')" [attr.data-pc-section]="'clearIcon'">
                <ng-template *ngTemplateOutlet="clearIconTemplate || _clearIconTemplate"></ng-template>
            </span>
        </ng-container>
        <span [class]="cx('buttonGroup')" *ngIf="showButtons && buttonLayout === 'stacked'" [attr.data-pc-section]="'buttonGroup'">
            <button
                type="button"
                [class]="cn(cx('incrementButton'), incrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                (mousedown)="onUpButtonMouseDown($event)"
                (mouseup)="onUpButtonMouseUp()"
                (mouseleave)="onUpButtonMouseLeave()"
                (keydown)="onUpButtonKeyDown($event)"
                (keyup)="onUpButtonKeyUp()"
                [attr.aria-hidden]="true"
                [attr.data-pc-section]="'incrementbutton'"
            >
                <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
                <ng-container *ngIf="!incrementButtonIcon">
                    <svg data-p-icon="angle-up" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>

            <button
                type="button"
                [class]="cn(cx('decrementButton'), decrementButtonClass)"
                [attr.disabled]="$disabled() ? '' : undefined"
                tabindex="-1"
                [attr.aria-hidden]="true"
                (mousedown)="onDownButtonMouseDown($event)"
                (mouseup)="onDownButtonMouseUp()"
                (mouseleave)="onDownButtonMouseLeave()"
                (keydown)="onDownButtonKeyDown($event)"
                (keyup)="onDownButtonKeyUp()"
                [attr.data-pc-section]="'decrementbutton'"
            >
                <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
                <ng-container *ngIf="!decrementButtonIcon">
                    <svg data-p-icon="angle-down" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                    <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
                </ng-container>
            </button>
        </span>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [class]="cx('incrementButton')"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onUpButtonMouseDown($event)"
            (mouseup)="onUpButtonMouseUp()"
            (mouseleave)="onUpButtonMouseLeave()"
            (keydown)="onUpButtonKeyDown($event)"
            (keyup)="onUpButtonKeyUp()"
            [attr.data-pc-section]="'incrementbutton'"
        >
            <span *ngIf="incrementButtonIcon" [ngClass]="incrementButtonIcon" [attr.data-pc-section]="'incrementbuttonicon'"></span>
            <ng-container *ngIf="!incrementButtonIcon">
                <svg data-p-icon="angle-up" *ngIf="!incrementButtonIconTemplate && !_incrementButtonIconTemplate" [attr.data-pc-section]="'incrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="incrementButtonIconTemplate || _incrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
        <button
            *ngIf="showButtons && buttonLayout !== 'stacked'"
            type="button"
            [class]="cx('decrementButton')"
            [attr.disabled]="$disabled() ? '' : undefined"
            tabindex="-1"
            [attr.aria-hidden]="true"
            (mousedown)="onDownButtonMouseDown($event)"
            (mouseup)="onDownButtonMouseUp()"
            (mouseleave)="onDownButtonMouseLeave()"
            (keydown)="onDownButtonKeyDown($event)"
            (keyup)="onDownButtonKeyUp()"
            [attr.data-pc-section]="'decrementbutton'"
        >
            <span *ngIf="decrementButtonIcon" [ngClass]="decrementButtonIcon" [attr.data-pc-section]="'decrementbuttonicon'"></span>
            <ng-container *ngIf="!decrementButtonIcon">
                <svg data-p-icon="angle-down" *ngIf="!decrementButtonIconTemplate && !_decrementButtonIconTemplate" [attr.data-pc-section]="'decrementbuttonicon'" />
                <ng-template *ngTemplateOutlet="decrementButtonIconTemplate || _decrementButtonIconTemplate"></ng-template>
            </ng-container>
        </button>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [INPUTNUMBER_VALUE_ACCESSOR, InputNumberStyle],
        encapsulation: ViewEncapsulation.None,
        host: {
          "[attr.data-pc-name]": "'inputnumber'",
          "[attr.data-pc-section]": "'root'",
          "[class]": "cn(cx('root'), styleClass)"
        }
      }]
    }], ctorParameters: () => [{ type: Injector }], propDecorators: { showButtons: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], format: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], buttonLayout: [{
      type: Input
    }], inputId: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], placeholder: [{
      type: Input
    }], tabindex: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], title: [{
      type: Input
    }], ariaLabelledBy: [{
      type: Input
    }], ariaDescribedBy: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }], ariaRequired: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], autocomplete: [{
      type: Input
    }], incrementButtonClass: [{
      type: Input
    }], decrementButtonClass: [{
      type: Input
    }], incrementButtonIcon: [{
      type: Input
    }], decrementButtonIcon: [{
      type: Input
    }], readonly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], allowEmpty: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], locale: [{
      type: Input
    }], localeMatcher: [{
      type: Input
    }], mode: [{
      type: Input
    }], currency: [{
      type: Input
    }], currencyDisplay: [{
      type: Input
    }], useGrouping: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], minFractionDigits: [{
      type: Input,
      args: [{ transform: (value) => numberAttribute(value, null) }]
    }], maxFractionDigits: [{
      type: Input,
      args: [{ transform: (value) => numberAttribute(value, null) }]
    }], prefix: [{
      type: Input
    }], suffix: [{
      type: Input
    }], inputStyle: [{
      type: Input
    }], inputStyleClass: [{
      type: Input
    }], showClear: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], autofocus: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], onInput: [{
      type: Output
    }], onFocus: [{
      type: Output
    }], onBlur: [{
      type: Output
    }], onKeyDown: [{
      type: Output
    }], onClear: [{
      type: Output
    }], clearIconTemplate: [{
      type: ContentChild,
      args: ["clearicon", { descendants: false }]
    }], incrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["incrementbuttonicon", { descendants: false }]
    }], decrementButtonIconTemplate: [{
      type: ContentChild,
      args: ["decrementbuttonicon", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }], input: [{
      type: ViewChild,
      args: ["input"]
    }] } });
    InputNumberModule = class _InputNumberModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputNumberModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _InputNumberModule, imports: [InputNumber, SharedModule], exports: [InputNumber, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _InputNumberModule, imports: [InputNumber, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: InputNumberModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [InputNumber, SharedModule],
        exports: [InputNumber, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/paginator/index.mjs
var style4;
var init_paginator = __esm({
  "node_modules/@primeuix/styles/dist/paginator/index.mjs"() {
    "use strict";
    style4 = "\n    .p-paginator {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        background: dt('paginator.background');\n        color: dt('paginator.color');\n        padding: dt('paginator.padding');\n        border-radius: dt('paginator.border.radius');\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-wrap: wrap;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-content-start {\n        margin-inline-end: auto;\n    }\n\n    .p-paginator-content-end {\n        margin-inline-start: auto;\n    }\n\n    .p-paginator-page,\n    .p-paginator-next,\n    .p-paginator-last,\n    .p-paginator-first,\n    .p-paginator-prev {\n        cursor: pointer;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        line-height: 1;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        background: dt('paginator.nav.button.background');\n        border: 0 none;\n        color: dt('paginator.nav.button.color');\n        min-width: dt('paginator.nav.button.width');\n        height: dt('paginator.nav.button.height');\n        transition:\n            background dt('paginator.transition.duration'),\n            color dt('paginator.transition.duration'),\n            outline-color dt('paginator.transition.duration'),\n            box-shadow dt('paginator.transition.duration');\n        border-radius: dt('paginator.nav.button.border.radius');\n        padding: 0;\n        margin: 0;\n    }\n\n    .p-paginator-page:focus-visible,\n    .p-paginator-next:focus-visible,\n    .p-paginator-last:focus-visible,\n    .p-paginator-first:focus-visible,\n    .p-paginator-prev:focus-visible {\n        box-shadow: dt('paginator.nav.button.focus.ring.shadow');\n        outline: dt('paginator.nav.button.focus.ring.width') dt('paginator.nav.button.focus.ring.style') dt('paginator.nav.button.focus.ring.color');\n        outline-offset: dt('paginator.nav.button.focus.ring.offset');\n    }\n\n    .p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,\n    .p-paginator-first:not(.p-disabled):hover,\n    .p-paginator-prev:not(.p-disabled):hover,\n    .p-paginator-next:not(.p-disabled):hover,\n    .p-paginator-last:not(.p-disabled):hover {\n        background: dt('paginator.nav.button.hover.background');\n        color: dt('paginator.nav.button.hover.color');\n    }\n\n    .p-paginator-page.p-paginator-page-selected {\n        background: dt('paginator.nav.button.selected.background');\n        color: dt('paginator.nav.button.selected.color');\n    }\n\n    .p-paginator-current {\n        color: dt('paginator.current.page.report.color');\n    }\n\n    .p-paginator-pages {\n        display: flex;\n        align-items: center;\n        gap: dt('paginator.gap');\n    }\n\n    .p-paginator-jtp-input .p-inputtext {\n        max-width: dt('paginator.jump.to.page.input.max.width');\n    }\n\n    .p-paginator-first:dir(rtl),\n    .p-paginator-prev:dir(rtl),\n    .p-paginator-next:dir(rtl),\n    .p-paginator-last:dir(rtl) {\n        transform: rotate(180deg);\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-paginator.mjs
var classes4, PaginatorStyle, PaginatorClasses, Paginator, PaginatorModule;
var init_primeng_paginator = __esm({
  "node_modules/primeng/fesm2022/primeng-paginator.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_forms();
    init_forms();
    init_primeng_api();
    init_primeng_api();
    init_primeng_basecomponent();
    init_primeng_select();
    init_primeng_icons();
    init_primeng_inputnumber();
    init_primeng_ripple();
    init_paginator();
    init_primeng_base();
    classes4 = {
      paginator: ({ instance }) => ["p-paginator p-component"],
      content: "p-paginator-content",
      contentStart: "p-paginator-content-start",
      contentEnd: "p-paginator-content-end",
      first: ({ instance }) => [
        "p-paginator-first",
        {
          "p-disabled": instance.isFirstPage() || instance.empty()
        }
      ],
      firstIcon: "p-paginator-first-icon",
      prev: ({ instance }) => [
        "p-paginator-prev",
        {
          "p-disabled": instance.isFirstPage() || instance.empty()
        }
      ],
      prevIcon: "p-paginator-prev-icon",
      next: ({ instance }) => [
        "p-paginator-next",
        {
          "p-disabled": instance.isLastPage() || instance.empty()
        }
      ],
      nextIcon: "p-paginator-next-icon",
      last: ({ instance }) => [
        "p-paginator-last",
        {
          "p-disabled": instance.isLastPage() || instance.empty()
        }
      ],
      lastIcon: "p-paginator-last-icon",
      pages: "p-paginator-pages",
      page: ({ instance, pageLink }) => [
        "p-paginator-page",
        {
          "p-paginator-page-selected": pageLink - 1 == instance.getPage()
        }
      ],
      current: "p-paginator-current",
      pcRowPerPageDropdown: "p-paginator-rpp-dropdown",
      pcJumpToPageDropdown: "p-paginator-jtp-dropdown",
      pcJumpToPageInput: "p-paginator-jtp-input"
    };
    PaginatorStyle = class _PaginatorStyle extends BaseStyle {
      name = "paginator";
      theme = style4;
      classes = classes4;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _PaginatorStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _PaginatorStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: PaginatorStyle, decorators: [{
      type: Injectable
    }] });
    (function(PaginatorClasses2) {
      PaginatorClasses2["paginator"] = "p-paginator";
      PaginatorClasses2["contentStart"] = "p-paginator-content-start";
      PaginatorClasses2["contentEnd"] = "p-paginator-content-end";
      PaginatorClasses2["first"] = "p-paginator-first";
      PaginatorClasses2["firstIcon"] = "p-paginator-first-icon";
      PaginatorClasses2["prev"] = "p-paginator-prev";
      PaginatorClasses2["prevIcon"] = "p-paginator-prev-icon";
      PaginatorClasses2["next"] = "p-paginator-next";
      PaginatorClasses2["nextIcon"] = "p-paginator-next-icon";
      PaginatorClasses2["last"] = "p-paginator-last";
      PaginatorClasses2["lastIcon"] = "p-paginator-last-icon";
      PaginatorClasses2["pages"] = "p-paginator-pages";
      PaginatorClasses2["page"] = "p-paginator-page";
      PaginatorClasses2["current"] = "p-paginator-current";
      PaginatorClasses2["pcRowPerPageDropdown"] = "p-paginator-rpp-dropdown";
      PaginatorClasses2["pcJumpToPageDropdown"] = "p-paginator-jtp-dropdown";
      PaginatorClasses2["pcJumpToPageInput"] = "p-paginator-jtp-input";
    })(PaginatorClasses || (PaginatorClasses = {}));
    Paginator = class _Paginator extends BaseComponent {
      /**
       * Number of page links to display.
       * @group Props
       */
      pageLinkSize = 5;
      /**
       * Style class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Whether to show it even there is only one page.
       * @group Props
       */
      alwaysShow = true;
      /**
       * Target element to attach the dropdown overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @deprecated since v20.0.0. Use `appendTo` instead.
       * @group Props
       */
      dropdownAppendTo;
      /**
       * Template instance to inject into the left side of the paginator.
       * @param {PaginatorState} context - Paginator state.
       * @group Props
       */
      templateLeft;
      /**
       * Template instance to inject into the right side of the paginator.
       * @param {PaginatorState} context - Paginator state.
       * @group Props
       */
      templateRight;
      /**
       * Dropdown height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.
       * @group Props
       */
      dropdownScrollHeight = "200px";
      /**
       * Template of the current page report element. Available placeholders are {currentPage},{totalPages},{rows},{first},{last} and {totalRecords}
       * @group Props
       */
      currentPageReportTemplate = "{currentPage} of {totalPages}";
      /**
       * Whether to display current page report.
       * @group Props
       */
      showCurrentPageReport;
      /**
       * When enabled, icons are displayed on paginator to go first and last page.
       * @group Props
       */
      showFirstLastIcon = true;
      /**
       * Number of total records.
       * @group Props
       */
      totalRecords = 0;
      /**
       * Data count to display per page.
       * @group Props
       */
      rows = 0;
      /**
       * Array of integer/object values to display inside rows per page dropdown. A object that have 'showAll' key can be added to it to show all data. Exp; [10,20,30,{showAll:'All'}]
       * @group Props
       */
      rowsPerPageOptions;
      /**
       * Whether to display a dropdown to navigate to any page.
       * @group Props
       */
      showJumpToPageDropdown;
      /**
       * Whether to display a input to navigate to any page.
       * @group Props
       */
      showJumpToPageInput;
      /**
       * Template instance to inject into the jump to page dropdown item inside in the paginator.
       * @param {Object} context - item instance.
       * @group Props
       */
      jumpToPageItemTemplate;
      /**
       * Whether to show page links.
       * @group Props
       */
      showPageLinks = true;
      /**
       * Locale to be used in formatting.
       * @group Props
       */
      locale;
      /**
       * Template instance to inject into the rows per page dropdown item inside in the paginator.
       * @param {Object} context - item instance.
       * @group Props
       */
      dropdownItemTemplate;
      /**
       * Zero-relative number of the first row to be displayed.
       * @group Props
       */
      get first() {
        return this._first;
      }
      set first(val) {
        this._first = val;
      }
      /**
       * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
       * @defaultValue 'self'
       * @group Props
       */
      appendTo = input(void 0, ...ngDevMode ? [{ debugName: "appendTo" }] : []);
      /**
       * Callback to invoke when page changes, the event object contains information about the new state.
       * @param {PaginatorState} event - Paginator state.
       * @group Emits
       */
      onPageChange = new EventEmitter();
      /**
       * Template for the dropdown icon.
       * @group Templates
       */
      dropdownIconTemplate;
      /**
       * Template for the first page link icon.
       * @group Templates
       */
      firstPageLinkIconTemplate;
      /**
       * Template for the previous page link icon.
       * @group Templates
       */
      previousPageLinkIconTemplate;
      /**
       * Template for the last page link icon.
       * @group Templates
       */
      lastPageLinkIconTemplate;
      /**
       * Template for the next page link icon.
       * @group Templates
       */
      nextPageLinkIconTemplate;
      templates;
      _dropdownIconTemplate;
      _firstPageLinkIconTemplate;
      _previousPageLinkIconTemplate;
      _lastPageLinkIconTemplate;
      _nextPageLinkIconTemplate;
      pageLinks;
      pageItems;
      rowsPerPageItems;
      paginatorState;
      _first = 0;
      _page = 0;
      _componentStyle = inject(PaginatorStyle);
      $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{ debugName: "$appendTo" }] : []);
      get display() {
        return this.alwaysShow || this.pageLinks && this.pageLinks.length > 1 ? null : "none";
      }
      constructor() {
        super();
      }
      ngOnInit() {
        super.ngOnInit();
        this.updatePaginatorState();
      }
      ngAfterContentInit() {
        this.templates.forEach((item) => {
          switch (item.getType()) {
            case "dropdownicon":
              this._dropdownIconTemplate = item.template;
              break;
            case "firstpagelinkicon":
              this._firstPageLinkIconTemplate = item.template;
              break;
            case "previouspagelinkicon":
              this._previousPageLinkIconTemplate = item.template;
              break;
            case "lastpagelinkicon":
              this._lastPageLinkIconTemplate = item.template;
              break;
            case "nextpagelinkicon":
              this._nextPageLinkIconTemplate = item.template;
              break;
          }
        });
      }
      getAriaLabel(labelType) {
        return this.config.translation.aria ? this.config.translation.aria[labelType] : void 0;
      }
      getPageAriaLabel(value) {
        return this.config.translation.aria ? this.config.translation.aria.pageLabel.replace(/{page}/g, `${value}`) : void 0;
      }
      getLocalization(digit) {
        const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse();
        const index = new Map(numerals.map((d, i) => [i, d]));
        if (digit > 9) {
          const numbers = String(digit).split("");
          return numbers.map((number) => index.get(Number(number))).join("");
        } else {
          return index.get(digit);
        }
      }
      ngOnChanges(simpleChange) {
        super.ngOnChanges(simpleChange);
        if (simpleChange.totalRecords) {
          this.updatePageLinks();
          this.updatePaginatorState();
          this.updateFirst();
          this.updateRowsPerPageOptions();
        }
        if (simpleChange.first) {
          this._first = simpleChange.first.currentValue;
          this.updatePageLinks();
          this.updatePaginatorState();
        }
        if (simpleChange.rows) {
          this.updatePageLinks();
          this.updatePaginatorState();
        }
        if (simpleChange.rowsPerPageOptions) {
          this.updateRowsPerPageOptions();
        }
        if (simpleChange.pageLinkSize) {
          this.updatePageLinks();
        }
      }
      updateRowsPerPageOptions() {
        if (this.rowsPerPageOptions) {
          this.rowsPerPageItems = [];
          let showAllItem = null;
          for (let opt of this.rowsPerPageOptions) {
            if (typeof opt == "object" && opt["showAll"]) {
              showAllItem = { label: opt["showAll"], value: this.totalRecords };
            } else {
              this.rowsPerPageItems.push({ label: String(this.getLocalization(opt)), value: opt });
            }
          }
          if (showAllItem) {
            this.rowsPerPageItems.push(showAllItem);
          }
        }
      }
      isFirstPage() {
        return this.getPage() === 0;
      }
      isLastPage() {
        return this.getPage() === this.getPageCount() - 1;
      }
      getPageCount() {
        return Math.ceil(this.totalRecords / this.rows);
      }
      calculatePageLinkBoundaries() {
        let numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        let start = Math.max(0, Math.ceil(this.getPage() - visiblePages / 2)), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
      }
      updatePageLinks() {
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (let i = start; i <= end; i++) {
          this.pageLinks.push(i + 1);
        }
        if (this.showJumpToPageDropdown) {
          this.pageItems = [];
          for (let i = 0; i < this.getPageCount(); i++) {
            this.pageItems.push({ label: String(i + 1), value: i });
          }
        }
      }
      changePage(p) {
        var pc = this.getPageCount();
        if (p >= 0 && p < pc) {
          this._first = this.rows * p;
          var state = {
            page: p,
            first: this.first,
            rows: this.rows,
            pageCount: pc
          };
          this.updatePageLinks();
          this.onPageChange.emit(state);
          this.updatePaginatorState();
        }
      }
      updateFirst() {
        const page = this.getPage();
        if (page > 0 && this.totalRecords && this.first >= this.totalRecords) {
          Promise.resolve(null).then(() => this.changePage(page - 1));
        }
      }
      getPage() {
        return Math.floor(this.first / this.rows);
      }
      changePageToFirst(event) {
        if (!this.isFirstPage()) {
          this.changePage(0);
        }
        event.preventDefault();
      }
      changePageToPrev(event) {
        this.changePage(this.getPage() - 1);
        event.preventDefault();
      }
      changePageToNext(event) {
        this.changePage(this.getPage() + 1);
        event.preventDefault();
      }
      changePageToLast(event) {
        if (!this.isLastPage()) {
          this.changePage(this.getPageCount() - 1);
        }
        event.preventDefault();
      }
      onPageLinkClick(event, page) {
        this.changePage(page);
        event.preventDefault();
      }
      onRppChange(event) {
        this.changePage(this.getPage());
      }
      onPageDropdownChange(event) {
        this.changePage(event.value);
      }
      updatePaginatorState() {
        this.paginatorState = {
          page: this.getPage(),
          pageCount: this.getPageCount(),
          rows: this.rows,
          first: this.first,
          totalRecords: this.totalRecords
        };
      }
      empty() {
        return this.getPageCount() === 0;
      }
      currentPage() {
        return this.getPageCount() > 0 ? this.getPage() + 1 : 0;
      }
      get currentPageReport() {
        return this.currentPageReportTemplate.replace("{currentPage}", String(this.currentPage())).replace("{totalPages}", String(this.getPageCount())).replace("{first}", String(this.totalRecords > 0 ? this._first + 1 : 0)).replace("{last}", String(Math.min(this._first + this.rows, this.totalRecords))).replace("{rows}", String(this.rows)).replace("{totalRecords}", String(this.totalRecords));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Paginator, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.1.0", version: "20.1.3", type: _Paginator, isStandalone: true, selector: "p-paginator", inputs: { pageLinkSize: { classPropertyName: "pageLinkSize", publicName: "pageLinkSize", isSignal: false, isRequired: false, transformFunction: numberAttribute }, styleClass: { classPropertyName: "styleClass", publicName: "styleClass", isSignal: false, isRequired: false, transformFunction: null }, alwaysShow: { classPropertyName: "alwaysShow", publicName: "alwaysShow", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, dropdownAppendTo: { classPropertyName: "dropdownAppendTo", publicName: "dropdownAppendTo", isSignal: false, isRequired: false, transformFunction: null }, templateLeft: { classPropertyName: "templateLeft", publicName: "templateLeft", isSignal: false, isRequired: false, transformFunction: null }, templateRight: { classPropertyName: "templateRight", publicName: "templateRight", isSignal: false, isRequired: false, transformFunction: null }, dropdownScrollHeight: { classPropertyName: "dropdownScrollHeight", publicName: "dropdownScrollHeight", isSignal: false, isRequired: false, transformFunction: null }, currentPageReportTemplate: { classPropertyName: "currentPageReportTemplate", publicName: "currentPageReportTemplate", isSignal: false, isRequired: false, transformFunction: null }, showCurrentPageReport: { classPropertyName: "showCurrentPageReport", publicName: "showCurrentPageReport", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showFirstLastIcon: { classPropertyName: "showFirstLastIcon", publicName: "showFirstLastIcon", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, totalRecords: { classPropertyName: "totalRecords", publicName: "totalRecords", isSignal: false, isRequired: false, transformFunction: numberAttribute }, rows: { classPropertyName: "rows", publicName: "rows", isSignal: false, isRequired: false, transformFunction: numberAttribute }, rowsPerPageOptions: { classPropertyName: "rowsPerPageOptions", publicName: "rowsPerPageOptions", isSignal: false, isRequired: false, transformFunction: null }, showJumpToPageDropdown: { classPropertyName: "showJumpToPageDropdown", publicName: "showJumpToPageDropdown", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, showJumpToPageInput: { classPropertyName: "showJumpToPageInput", publicName: "showJumpToPageInput", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, jumpToPageItemTemplate: { classPropertyName: "jumpToPageItemTemplate", publicName: "jumpToPageItemTemplate", isSignal: false, isRequired: false, transformFunction: null }, showPageLinks: { classPropertyName: "showPageLinks", publicName: "showPageLinks", isSignal: false, isRequired: false, transformFunction: booleanAttribute }, locale: { classPropertyName: "locale", publicName: "locale", isSignal: false, isRequired: false, transformFunction: null }, dropdownItemTemplate: { classPropertyName: "dropdownItemTemplate", publicName: "dropdownItemTemplate", isSignal: false, isRequired: false, transformFunction: null }, first: { classPropertyName: "first", publicName: "first", isSignal: false, isRequired: false, transformFunction: null }, appendTo: { classPropertyName: "appendTo", publicName: "appendTo", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { onPageChange: "onPageChange" }, host: { properties: { "attr.data-pc-name": "'paginator'", "attr.data-pc-section": "'root'", "class": "cn(cx('paginator'), styleClass)", "style.display": "this.display" } }, providers: [PaginatorStyle], queries: [{ propertyName: "dropdownIconTemplate", first: true, predicate: ["dropdownicon"] }, { propertyName: "firstPageLinkIconTemplate", first: true, predicate: ["firstpagelinkicon"] }, { propertyName: "previousPageLinkIconTemplate", first: true, predicate: ["previouspagelinkicon"] }, { propertyName: "lastPageLinkIconTemplate", first: true, predicate: ["lastpagelinkicon"] }, { propertyName: "nextPageLinkIconTemplate", first: true, predicate: ["nextpagelinkicon"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, usesOnChanges: true, ngImport: core_exports, template: `
        <div [class]="cx('contentStart')" *ngIf="templateLeft" [attr.data-pc-section]="'start'">
            <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>
        </div>
        <span [class]="cx('current')" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>
        <button *ngIf="showFirstLastIcon" type="button" (click)="changePageToFirst($event)" pRipple [class]="cx('first')" [attr.aria-label]="getAriaLabel('firstPageLabel')">
            <svg data-p-icon="angle-double-left" *ngIf="!firstPageLinkIconTemplate && !_firstPageLinkIconTemplate" [class]="cx('firstIcon')" />
            <span [class]="cx('firstIcon')" *ngIf="firstPageLinkIconTemplate || _firstPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate || _firstPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <button type="button" [disabled]="isFirstPage() || empty()" (click)="changePageToPrev($event)" pRipple [class]="cx('prev')" [attr.aria-label]="getAriaLabel('prevPageLabel')">
            <svg data-p-icon="angle-left" *ngIf="!previousPageLinkIconTemplate && !_previousPageLinkIconTemplate" [class]="cx('prevIcon')" />
            <span [class]="cx('prevIcon')" *ngIf="previousPageLinkIconTemplate || _previousPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate || _previousPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <span [class]="cx('pages')" *ngIf="showPageLinks">
            <button
                type="button"
                *ngFor="let pageLink of pageLinks"
                [class]="cx('page', { pageLink })"
                [attr.aria-label]="getPageAriaLabel(pageLink)"
                [attr.aria-current]="pageLink - 1 == getPage() ? 'page' : undefined"
                (click)="onPageLinkClick($event, pageLink - 1)"
                pRipple
            >
                {{ getLocalization(pageLink) }}
            </button>
        </span>
        <p-select
            [options]="pageItems"
            [ngModel]="getPage()"
            *ngIf="showJumpToPageDropdown"
            [disabled]="empty()"
            [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
            [styleClass]="cx('pcJumpToPageDropdown')"
            (onChange)="onPageDropdownChange($event)"
            [appendTo]="dropdownAppendTo || $appendTo()"
            [scrollHeight]="dropdownScrollHeight"
        >
            <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>
            <ng-container *ngIf="jumpToPageItemTemplate">
                <ng-template let-item pTemplate="item">
                    <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"></ng-container>
                </ng-template>
            </ng-container>
            <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
            </ng-template>
        </p-select>
        <button type="button" [disabled]="isLastPage() || empty()" (click)="changePageToNext($event)" pRipple [class]="cx('next')" [attr.aria-label]="getAriaLabel('nextPageLabel')">
            <svg data-p-icon="angle-right" *ngIf="!nextPageLinkIconTemplate && !_nextPageLinkIconTemplate" [class]="cx('nextIcon')" />
            <span [class]="cx('nextIcon')" *ngIf="nextPageLinkIconTemplate || _nextPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate || _nextPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <button *ngIf="showFirstLastIcon" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToLast($event)" pRipple [class]="cx('last')" [attr.aria-label]="getAriaLabel('lastPageLabel')">
            <svg data-p-icon="angle-double-right" *ngIf="!lastPageLinkIconTemplate && !_lastPageLinkIconTemplate" [class]="cx('lastIcon')" />
            <span [class]="cx('lastIcon')" *ngIf="lastPageLinkIconTemplate || _lastPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate || _lastPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <p-inputnumber *ngIf="showJumpToPageInput" [ngModel]="currentPage()" [class]="cx('pcJumpToPageInput')" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputnumber>
        <p-select
            [options]="rowsPerPageItems"
            [(ngModel)]="rows"
            *ngIf="rowsPerPageOptions"
            [styleClass]="cx('pcRowPerPageDropdown')"
            [disabled]="empty()"
            (onChange)="onRppChange($event)"
            [appendTo]="dropdownAppendTo || $appendTo()"
            [scrollHeight]="dropdownScrollHeight"
            [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
        >
            <ng-container *ngIf="dropdownItemTemplate">
                <ng-template let-item pTemplate="item">
                    <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"></ng-container>
                </ng-template>
            </ng-container>
            <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
            </ng-template>
        </p-select>
        <div [class]="cx('contentEnd')" *ngIf="templateRight" [attr.data-pc-section]="'end'">
            <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: Select, selector: "p-select", inputs: ["id", "scrollHeight", "filter", "panelStyle", "styleClass", "panelStyleClass", "readonly", "editable", "tabindex", "placeholder", "loadingIcon", "filterPlaceholder", "filterLocale", "inputId", "dataKey", "filterBy", "filterFields", "autofocus", "resetFilterOnHide", "checkmark", "dropdownIcon", "loading", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "focusOnHover", "selectOnFocus", "autoOptionFocus", "autofocusFilter", "filterValue", "options", "appendTo"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "component", type: InputNumber, selector: "p-inputNumber, p-inputnumber, p-input-number", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "placeholder", "tabindex", "title", "ariaLabelledBy", "ariaDescribedBy", "ariaLabel", "ariaRequired", "autocomplete", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "autofocus"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: Ripple, selector: "[pRipple]" }, { kind: "component", type: AngleDoubleLeftIcon, selector: '[data-p-icon="angle-double-left"]' }, { kind: "component", type: AngleDoubleRightIcon, selector: '[data-p-icon="angle-double-right"]' }, { kind: "component", type: AngleLeftIcon, selector: '[data-p-icon="angle-left"]' }, { kind: "component", type: AngleRightIcon, selector: '[data-p-icon="angle-right"]' }, { kind: "ngmodule", type: SharedModule }, { kind: "directive", type: PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Paginator, decorators: [{
      type: Component,
      args: [{
        selector: "p-paginator",
        standalone: true,
        imports: [CommonModule, Select, InputNumber, FormsModule, Ripple, AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon, SharedModule],
        template: `
        <div [class]="cx('contentStart')" *ngIf="templateLeft" [attr.data-pc-section]="'start'">
            <ng-container *ngTemplateOutlet="templateLeft; context: { $implicit: paginatorState }"></ng-container>
        </div>
        <span [class]="cx('current')" *ngIf="showCurrentPageReport">{{ currentPageReport }}</span>
        <button *ngIf="showFirstLastIcon" type="button" (click)="changePageToFirst($event)" pRipple [class]="cx('first')" [attr.aria-label]="getAriaLabel('firstPageLabel')">
            <svg data-p-icon="angle-double-left" *ngIf="!firstPageLinkIconTemplate && !_firstPageLinkIconTemplate" [class]="cx('firstIcon')" />
            <span [class]="cx('firstIcon')" *ngIf="firstPageLinkIconTemplate || _firstPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="firstPageLinkIconTemplate || _firstPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <button type="button" [disabled]="isFirstPage() || empty()" (click)="changePageToPrev($event)" pRipple [class]="cx('prev')" [attr.aria-label]="getAriaLabel('prevPageLabel')">
            <svg data-p-icon="angle-left" *ngIf="!previousPageLinkIconTemplate && !_previousPageLinkIconTemplate" [class]="cx('prevIcon')" />
            <span [class]="cx('prevIcon')" *ngIf="previousPageLinkIconTemplate || _previousPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="previousPageLinkIconTemplate || _previousPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <span [class]="cx('pages')" *ngIf="showPageLinks">
            <button
                type="button"
                *ngFor="let pageLink of pageLinks"
                [class]="cx('page', { pageLink })"
                [attr.aria-label]="getPageAriaLabel(pageLink)"
                [attr.aria-current]="pageLink - 1 == getPage() ? 'page' : undefined"
                (click)="onPageLinkClick($event, pageLink - 1)"
                pRipple
            >
                {{ getLocalization(pageLink) }}
            </button>
        </span>
        <p-select
            [options]="pageItems"
            [ngModel]="getPage()"
            *ngIf="showJumpToPageDropdown"
            [disabled]="empty()"
            [attr.aria-label]="getAriaLabel('jumpToPageDropdownLabel')"
            [styleClass]="cx('pcJumpToPageDropdown')"
            (onChange)="onPageDropdownChange($event)"
            [appendTo]="dropdownAppendTo || $appendTo()"
            [scrollHeight]="dropdownScrollHeight"
        >
            <ng-template pTemplate="selectedItem">{{ currentPageReport }}</ng-template>
            <ng-container *ngIf="jumpToPageItemTemplate">
                <ng-template let-item pTemplate="item">
                    <ng-container *ngTemplateOutlet="jumpToPageItemTemplate; context: { $implicit: item }"></ng-container>
                </ng-template>
            </ng-container>
            <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
            </ng-template>
        </p-select>
        <button type="button" [disabled]="isLastPage() || empty()" (click)="changePageToNext($event)" pRipple [class]="cx('next')" [attr.aria-label]="getAriaLabel('nextPageLabel')">
            <svg data-p-icon="angle-right" *ngIf="!nextPageLinkIconTemplate && !_nextPageLinkIconTemplate" [class]="cx('nextIcon')" />
            <span [class]="cx('nextIcon')" *ngIf="nextPageLinkIconTemplate || _nextPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="nextPageLinkIconTemplate || _nextPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <button *ngIf="showFirstLastIcon" type="button" [disabled]="isLastPage() || empty()" (click)="changePageToLast($event)" pRipple [class]="cx('last')" [attr.aria-label]="getAriaLabel('lastPageLabel')">
            <svg data-p-icon="angle-double-right" *ngIf="!lastPageLinkIconTemplate && !_lastPageLinkIconTemplate" [class]="cx('lastIcon')" />
            <span [class]="cx('lastIcon')" *ngIf="lastPageLinkIconTemplate || _lastPageLinkIconTemplate">
                <ng-template *ngTemplateOutlet="lastPageLinkIconTemplate || _lastPageLinkIconTemplate"></ng-template>
            </span>
        </button>
        <p-inputnumber *ngIf="showJumpToPageInput" [ngModel]="currentPage()" [class]="cx('pcJumpToPageInput')" [disabled]="empty()" (ngModelChange)="changePage($event - 1)"></p-inputnumber>
        <p-select
            [options]="rowsPerPageItems"
            [(ngModel)]="rows"
            *ngIf="rowsPerPageOptions"
            [styleClass]="cx('pcRowPerPageDropdown')"
            [disabled]="empty()"
            (onChange)="onRppChange($event)"
            [appendTo]="dropdownAppendTo || $appendTo()"
            [scrollHeight]="dropdownScrollHeight"
            [ariaLabel]="getAriaLabel('rowsPerPageLabel')"
        >
            <ng-container *ngIf="dropdownItemTemplate">
                <ng-template let-item pTemplate="item">
                    <ng-container *ngTemplateOutlet="dropdownItemTemplate; context: { $implicit: item }"></ng-container>
                </ng-template>
            </ng-container>
            <ng-template pTemplate="dropdownicon" *ngIf="dropdownIconTemplate || _dropdownIconTemplate">
                <ng-container *ngTemplateOutlet="dropdownIconTemplate || _dropdownIconTemplate"></ng-container>
            </ng-template>
        </p-select>
        <div [class]="cx('contentEnd')" *ngIf="templateRight" [attr.data-pc-section]="'end'">
            <ng-container *ngTemplateOutlet="templateRight; context: { $implicit: paginatorState }"></ng-container>
        </div>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [PaginatorStyle],
        host: {
          "[attr.data-pc-name]": "'paginator'",
          "[attr.data-pc-section]": "'root'",
          "[class]": "cn(cx('paginator'), styleClass)"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { pageLinkSize: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], styleClass: [{
      type: Input
    }], alwaysShow: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], dropdownAppendTo: [{
      type: Input
    }], templateLeft: [{
      type: Input
    }], templateRight: [{
      type: Input
    }], dropdownScrollHeight: [{
      type: Input
    }], currentPageReportTemplate: [{
      type: Input
    }], showCurrentPageReport: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showFirstLastIcon: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], totalRecords: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], rows: [{
      type: Input,
      args: [{ transform: numberAttribute }]
    }], rowsPerPageOptions: [{
      type: Input
    }], showJumpToPageDropdown: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], showJumpToPageInput: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], jumpToPageItemTemplate: [{
      type: Input
    }], showPageLinks: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], locale: [{
      type: Input
    }], dropdownItemTemplate: [{
      type: Input
    }], first: [{
      type: Input
    }], onPageChange: [{
      type: Output
    }], dropdownIconTemplate: [{
      type: ContentChild,
      args: ["dropdownicon", { descendants: false }]
    }], firstPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["firstpagelinkicon", { descendants: false }]
    }], previousPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["previouspagelinkicon", { descendants: false }]
    }], lastPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["lastpagelinkicon", { descendants: false }]
    }], nextPageLinkIconTemplate: [{
      type: ContentChild,
      args: ["nextpagelinkicon", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }], display: [{
      type: HostBinding,
      args: ["style.display"]
    }] } });
    PaginatorModule = class _PaginatorModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _PaginatorModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _PaginatorModule, imports: [Paginator, SharedModule], exports: [Paginator, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _PaginatorModule, imports: [Paginator, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: PaginatorModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Paginator, SharedModule],
        exports: [Paginator, SharedModule]
      }]
    }] });
  }
});

// src/app/pages/view-repo/view-repo.ts
var ViewRepo;
var init_view_repo2 = __esm({
  "src/app/pages/view-repo/view-repo.ts"() {
    "use strict";
    init_tslib_es6();
    init_view_repo();
    init_core();
    init_esm();
    init_primeng_paginator();
    init_primeng_progressspinner();
    init_primeng_iconfield();
    init_primeng_inputicon();
    init_components();
    init_github();
    init_core();
    ViewRepo = class ViewRepo2 {
      username = input.required();
      totalRecords = signal(0);
      isLoading = signal(true);
      isError = signal(false);
      repos = signal([]);
      paginatorState$ = new BehaviorSubject({
        first: 0,
        rows: 10
      });
      rowsPerPageOptions = computed(() => {
        const total = this.totalRecords();
        const options = [10, 30, 50, 100];
        if (total > 0 && total < options[0]) {
          return [total, ...options];
        }
        return options;
      });
      githubService = inject(GithubService);
      constructor() {
        effect(() => {
          this.isLoading.set(true);
          this.isError.set(false);
          combineLatest([this.paginatorState$]).pipe(switchMap(() => this.githubService.getUserDetails(this.username())), switchMap((userDetails) => {
            this.totalRecords.set(userDetails.public_repos);
            const state = this.paginatorState$.value;
            const page = (state.first ?? 0) / (state.rows ?? 10) + 1;
            const perPage = state.rows ?? 10;
            return this.githubService.getUserRepos(this.username(), perPage, page);
          }), catchError((err) => {
            this.isLoading.set(false);
            this.isError.set(true);
            return EMPTY;
          })).subscribe((repos) => {
            this.repos.set(repos);
            this.isLoading.set(false);
          });
        });
      }
      onPageChange(event) {
        this.paginatorState$.next(event);
      }
      static ctorParameters = () => [];
      static propDecorators = {
        username: [{ type: Input, args: [{ isSignal: true, alias: "username", required: true, transform: void 0 }] }]
      };
    };
    ViewRepo = __decorate([
      Component({
        selector: "app-view-repo",
        standalone: true,
        imports: [
          PaginatorModule,
          ProgressSpinnerModule,
          IconFieldModule,
          InputIconModule,
          RepoCard,
          ErrorMessage,
          Loader
        ],
        template: view_repo_default
      })
    ], ViewRepo);
  }
});

// src/app/pages/view-repo/view-repo.spec.ts
var require_view_repo_spec = __commonJS({
  "src/app/pages/view-repo/view-repo.spec.ts"(exports) {
    init_testing();
    init_view_repo2();
    describe("ViewRepo", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [ViewRepo]
        }).compileComponents();
        fixture = TestBed.createComponent(ViewRepo);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_view_repo_spec();
//# sourceMappingURL=spec-app-pages-view-repo-view-repo.spec.js.map
