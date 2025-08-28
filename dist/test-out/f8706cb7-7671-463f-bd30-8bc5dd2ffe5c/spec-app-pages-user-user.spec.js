import {
  UserSocials,
  init_components
} from "./chunk-XRHJ3CBC.js";
import {
  GithubService,
  init_github
} from "./chunk-DZOGRK4R.js";
import "./chunk-E2CWIQEH.js";
import "./chunk-WGD7ETYN.js";
import {
  UserAliases
} from "./chunk-WEAFEU76.js";
import {
  UserBio
} from "./chunk-3IXB2B7Z.js";
import "./chunk-PVR5ZDFD.js";
import {
  UserStats
} from "./chunk-4NVC6HZR.js";
import {
  ErrorMessage
} from "./chunk-IQJJM67C.js";
import "./chunk-K7TGSAN2.js";
import {
  Loader,
  ProgressSpinnerModule,
  init_primeng_progressspinner
} from "./chunk-FU45V4IG.js";
import {
  ButtonModule,
  init_primeng_button
} from "./chunk-PJEHBBWW.js";
import "./chunk-GM2Q5ZIG.js";
import "./chunk-QKCPCY2R.js";
import {
  RouterLink,
  init_router
} from "./chunk-V3N65XNH.js";
import "./chunk-3LYCJGDS.js";
import {
  RippleModule,
  init_primeng_ripple
} from "./chunk-F5XSVYHG.js";
import {
  BaseComponent,
  BaseStyle,
  Footer,
  Header,
  PrimeTemplate,
  SharedModule,
  init_dist,
  init_primeng_api,
  init_primeng_base,
  init_primeng_basecomponent,
  k2 as k
} from "./chunk-WJSIDV3S.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  init_common
} from "./chunk-HINAUQGB.js";
import {
  RepoList
} from "./chunk-DBTO2K6A.js";
import "./chunk-KHYIDAXO.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EMPTY,
  EventEmitter,
  FactoryTarget,
  Injectable,
  Input,
  NgModule,
  Output,
  TestBed,
  ViewEncapsulation,
  __decorate,
  booleanAttribute,
  catchError,
  core_exports,
  effect,
  forkJoin,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  input,
  map,
  signal,
  tap,
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

// angular:jit:template:src/app/pages/user/user.html
var user_default;
var init_user = __esm({
  "angular:jit:template:src/app/pages/user/user.html"() {
    user_default = `<main
  class="flex flex-col justify-center items-center min-h-screen p-4 md:p-8 lg:p-12 mb-[100px] md:mb-[120px] lg:mb-[150px]"
>
  @if (combinedData$ | async; as data) {

  <!-- User Details -->
  <p-card
    [style]="{ overflow: 'hidden' }"
    class="w-full h-full lg:w-3/4 xl:w-2/3 border-none shadow-none bg-zinc-100 dark:bg-zinc-900/50"
  >
    <div class="flex flex-col items-center space-x-0">
      <!-- Avatar -->
      <div class="flex flex-col items-center space-y-4">
        <p-avatar
          [image]="data.user.avatar_url"
          [style]="{ width: '10rem', height: '10rem' }"
          class="border-4 border-primary-500/20"
          shape="circle"
        />

        <!-- Aliases -->
        <app-user-aliases [name]="data.user.name" [login]="data.user.login" />

        <!-- Bio -->
        @if (data.user.bio) {
        <app-user-bio [bio]="data.user.bio" />
        }

        <!-- Socials -->
        <app-user-socials [socials]="data.socials" />
      </div>

      <div class="flex-1 w-full mt-8">
        <!-- Stats -->
        <app-user-stats [stats]="data.userStats" />

        <p-divider class="my-6"></p-divider>

        <!-- Repositories -->
        <app-repo-list [repos]="data.repos" />

        <!-- View All Repositories Button -->
        @if (data.repos.length > 0) {
        <div class="w-full flex justify-center mt-6">
          <p-button
            label="View More Repos"
            [routerLink]="'/user/' + data.user.login + '/repos'"
          />
        </div>
        }
      </div>
    </div>
  </p-card>

  } @else if (isError()) {

  <app-error-message
    message="Could not find the user or an issue occurred. Please check the username
      and try again."
  />
  } @else if (isLoading()) {

  <app-loader label="Loading user data..." />
  }
</main>
`;
  }
});

// node_modules/@primeuix/styles/dist/card/index.mjs
var style;
var init_card = __esm({
  "node_modules/@primeuix/styles/dist/card/index.mjs"() {
    "use strict";
    style = "\n    .p-card {\n        background: dt('card.background');\n        color: dt('card.color');\n        box-shadow: dt('card.shadow');\n        border-radius: dt('card.border.radius');\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-card-caption {\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.caption.gap');\n    }\n\n    .p-card-body {\n        padding: dt('card.body.padding');\n        display: flex;\n        flex-direction: column;\n        gap: dt('card.body.gap');\n    }\n\n    .p-card-title {\n        font-size: dt('card.title.font.size');\n        font-weight: dt('card.title.font.weight');\n    }\n\n    .p-card-subtitle {\n        color: dt('card.subtitle.color');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-card.mjs
var theme, classes, CardStyle, CardClasses, Card, CardModule;
var init_primeng_card = __esm({
  "node_modules/primeng/fesm2022/primeng-card.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_dist();
    init_primeng_api();
    init_primeng_basecomponent();
    init_card();
    init_primeng_base();
    theme = /*css*/
    `
    ${style}

    .p-card {
        display: block;
    }
`;
    classes = {
      root: "p-card p-component",
      header: "p-card-header",
      body: "p-card-body",
      caption: "p-card-caption",
      title: "p-card-title",
      subtitle: "p-card-subtitle",
      content: "p-card-content",
      footer: "p-card-footer"
    };
    CardStyle = class _CardStyle extends BaseStyle {
      name = "card";
      theme = theme;
      classes = classes;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _CardStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _CardStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: CardStyle, decorators: [{
      type: Injectable
    }] });
    (function(CardClasses2) {
      CardClasses2["root"] = "p-card";
      CardClasses2["header"] = "p-card-header";
      CardClasses2["body"] = "p-card-body";
      CardClasses2["caption"] = "p-card-caption";
      CardClasses2["title"] = "p-card-title";
      CardClasses2["subtitle"] = "p-card-subtitle";
      CardClasses2["content"] = "p-card-content";
      CardClasses2["footer"] = "p-card-footer";
    })(CardClasses || (CardClasses = {}));
    Card = class _Card extends BaseComponent {
      /**
       * Header of the card.
       * @group Props
       */
      header;
      /**
       * Subheader of the card.
       * @group Props
       */
      subheader;
      /**
       * Inline style of the element.
       * @group Props
       */
      set style(value) {
        if (!k(this._style(), value)) {
          this._style.set(value);
        }
      }
      /**
       * Class of the element.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      headerFacet;
      footerFacet;
      headerTemplate;
      titleTemplate;
      subtitleTemplate;
      contentTemplate;
      footerTemplate;
      _headerTemplate;
      _titleTemplate;
      _subtitleTemplate;
      _contentTemplate;
      _footerTemplate;
      _style = signal(null, ...ngDevMode ? [{ debugName: "_style" }] : []);
      _componentStyle = inject(CardStyle);
      getBlockableElement() {
        return this.el.nativeElement.children[0];
      }
      templates;
      ngAfterContentInit() {
        this.templates.forEach((item) => {
          switch (item.getType()) {
            case "header":
              this._headerTemplate = item.template;
              break;
            case "title":
              this._titleTemplate = item.template;
              break;
            case "subtitle":
              this._subtitleTemplate = item.template;
              break;
            case "content":
              this._contentTemplate = item.template;
              break;
            case "footer":
              this._footerTemplate = item.template;
              break;
            default:
              this._contentTemplate = item.template;
              break;
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Card, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.3", type: _Card, isStandalone: true, selector: "p-card", inputs: { header: "header", subheader: "subheader", style: "style", styleClass: "styleClass" }, host: { properties: { "class": "cn(cx('root'), styleClass)", "attr.data-pc-name": '"card"', "style": "_style()" } }, providers: [CardStyle], queries: [{ propertyName: "headerFacet", first: true, predicate: Header, descendants: true }, { propertyName: "footerFacet", first: true, predicate: Footer, descendants: true }, { propertyName: "headerTemplate", first: true, predicate: ["header"] }, { propertyName: "titleTemplate", first: true, predicate: ["title"] }, { propertyName: "subtitleTemplate", first: true, predicate: ["subtitle"] }, { propertyName: "contentTemplate", first: true, predicate: ["content"] }, { propertyName: "footerTemplate", first: true, predicate: ["footer"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: core_exports, template: `
        <div [class]="cx('header')" *ngIf="headerFacet || headerTemplate || _headerTemplate">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        </div>
        <div [class]="cx('body')">
            <div [class]="cx('title')" *ngIf="header || titleTemplate || _titleTemplate">
                <ng-container *ngIf="header && !_titleTemplate && !titleTemplate">{{ header }}</ng-container>
                <ng-container *ngTemplateOutlet="titleTemplate || _titleTemplate"></ng-container>
            </div>
            <div [class]="cx('subtitle')" *ngIf="subheader || subtitleTemplate || _subtitleTemplate">
                <ng-container *ngIf="subheader && !_subtitleTemplate && !subtitleTemplate">{{ subheader }}</ng-container>
                <ng-container *ngTemplateOutlet="subtitleTemplate || _subtitleTemplate"></ng-container>
            </div>
            <div [class]="cx('content')">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
            <div [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Card, decorators: [{
      type: Component,
      args: [{
        selector: "p-card",
        standalone: true,
        imports: [CommonModule, SharedModule],
        template: `
        <div [class]="cx('header')" *ngIf="headerFacet || headerTemplate || _headerTemplate">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
        </div>
        <div [class]="cx('body')">
            <div [class]="cx('title')" *ngIf="header || titleTemplate || _titleTemplate">
                <ng-container *ngIf="header && !_titleTemplate && !titleTemplate">{{ header }}</ng-container>
                <ng-container *ngTemplateOutlet="titleTemplate || _titleTemplate"></ng-container>
            </div>
            <div [class]="cx('subtitle')" *ngIf="subheader || subtitleTemplate || _subtitleTemplate">
                <ng-container *ngIf="subheader && !_subtitleTemplate && !subtitleTemplate">{{ subheader }}</ng-container>
                <ng-container *ngTemplateOutlet="subtitleTemplate || _subtitleTemplate"></ng-container>
            </div>
            <div [class]="cx('content')">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
            </div>
            <div [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
                <ng-content select="p-footer"></ng-content>
                <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
            </div>
        </div>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [CardStyle],
        host: {
          "[class]": "cn(cx('root'), styleClass)",
          "[attr.data-pc-name]": '"card"',
          "[style]": "_style()"
        }
      }]
    }], propDecorators: { header: [{
      type: Input
    }], subheader: [{
      type: Input
    }], style: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], headerFacet: [{
      type: ContentChild,
      args: [Header]
    }], footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }], headerTemplate: [{
      type: ContentChild,
      args: ["header", { descendants: false }]
    }], titleTemplate: [{
      type: ContentChild,
      args: ["title", { descendants: false }]
    }], subtitleTemplate: [{
      type: ContentChild,
      args: ["subtitle", { descendants: false }]
    }], contentTemplate: [{
      type: ContentChild,
      args: ["content", { descendants: false }]
    }], footerTemplate: [{
      type: ContentChild,
      args: ["footer", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    CardModule = class _CardModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _CardModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _CardModule, imports: [Card, SharedModule], exports: [Card, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _CardModule, imports: [Card, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: CardModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Card, SharedModule],
        exports: [Card, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/tag/index.mjs
var style2;
var init_tag = __esm({
  "node_modules/@primeuix/styles/dist/tag/index.mjs"() {
    "use strict";
    style2 = "\n    .p-tag {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('tag.primary.background');\n        color: dt('tag.primary.color');\n        font-size: dt('tag.font.size');\n        font-weight: dt('tag.font.weight');\n        padding: dt('tag.padding');\n        border-radius: dt('tag.border.radius');\n        gap: dt('tag.gap');\n    }\n\n    .p-tag-icon {\n        font-size: dt('tag.icon.size');\n        width: dt('tag.icon.size');\n        height: dt('tag.icon.size');\n    }\n\n    .p-tag-rounded {\n        border-radius: dt('tag.rounded.border.radius');\n    }\n\n    .p-tag-success {\n        background: dt('tag.success.background');\n        color: dt('tag.success.color');\n    }\n\n    .p-tag-info {\n        background: dt('tag.info.background');\n        color: dt('tag.info.color');\n    }\n\n    .p-tag-warn {\n        background: dt('tag.warn.background');\n        color: dt('tag.warn.color');\n    }\n\n    .p-tag-danger {\n        background: dt('tag.danger.background');\n        color: dt('tag.danger.color');\n    }\n\n    .p-tag-secondary {\n        background: dt('tag.secondary.background');\n        color: dt('tag.secondary.color');\n    }\n\n    .p-tag-contrast {\n        background: dt('tag.contrast.background');\n        color: dt('tag.contrast.color');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-tag.mjs
var classes2, TagStyle, TagClasses, Tag, TagModule;
var init_primeng_tag = __esm({
  "node_modules/primeng/fesm2022/primeng-tag.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_primeng_api();
    init_primeng_basecomponent();
    init_tag();
    init_primeng_base();
    classes2 = {
      root: ({ instance }) => [
        "p-tag p-component",
        {
          "p-tag-info": instance.severity === "info",
          "p-tag-success": instance.severity === "success",
          "p-tag-warn": instance.severity === "warn",
          "p-tag-danger": instance.severity === "danger",
          "p-tag-secondary": instance.severity === "secondary",
          "p-tag-contrast": instance.severity === "contrast",
          "p-tag-rounded": instance.rounded
        }
      ],
      icon: "p-tag-icon",
      label: "p-tag-label"
    };
    TagStyle = class _TagStyle extends BaseStyle {
      name = "tag";
      theme = style2;
      classes = classes2;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _TagStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _TagStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: TagStyle, decorators: [{
      type: Injectable
    }] });
    (function(TagClasses2) {
      TagClasses2["root"] = "p-tag";
      TagClasses2["icon"] = "p-tag-icon";
      TagClasses2["label"] = "p-tag-label";
    })(TagClasses || (TagClasses = {}));
    Tag = class _Tag extends BaseComponent {
      /**
       * Style class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Severity type of the tag.
       * @group Props
       */
      severity;
      /**
       * Value to display inside the tag.
       * @group Props
       */
      value;
      /**
       * Icon of the tag to display next to the value.
       * @group Props
       */
      icon;
      /**
       * Whether the corners of the tag are rounded.
       * @group Props
       */
      rounded;
      iconTemplate;
      templates;
      _iconTemplate;
      _componentStyle = inject(TagStyle);
      ngAfterContentInit() {
        this.templates?.forEach((item) => {
          switch (item.getType()) {
            case "icon":
              this._iconTemplate = item.template;
              break;
          }
        });
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Tag, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.1.3", type: _Tag, isStandalone: true, selector: "p-tag", inputs: { styleClass: "styleClass", severity: "severity", value: "value", icon: "icon", rounded: ["rounded", "rounded", booleanAttribute] }, host: { properties: { "class": "cn(cx('root'), styleClass)" } }, providers: [TagStyle], queries: [{ propertyName: "iconTemplate", first: true, predicate: ["icon"] }, { propertyName: "templates", predicate: PrimeTemplate }], usesInheritance: true, ngImport: core_exports, template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span [class]="cx('icon')" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span [class]="cx('icon')" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span [class]="cx('label')">{{ value }}</span>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Tag, decorators: [{
      type: Component,
      args: [{
        selector: "p-tag",
        standalone: true,
        imports: [CommonModule, SharedModule],
        template: `
        <ng-content></ng-content>
        <ng-container *ngIf="!iconTemplate && !_iconTemplate">
            <span [class]="cx('icon')" [ngClass]="icon" *ngIf="icon"></span>
        </ng-container>
        <span [class]="cx('icon')" *ngIf="iconTemplate || _iconTemplate">
            <ng-template *ngTemplateOutlet="iconTemplate || _iconTemplate"></ng-template>
        </span>
        <span [class]="cx('label')">{{ value }}</span>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [TagStyle],
        host: {
          "[class]": "cn(cx('root'), styleClass)"
        }
      }]
    }], propDecorators: { styleClass: [{
      type: Input
    }], severity: [{
      type: Input
    }], value: [{
      type: Input
    }], icon: [{
      type: Input
    }], rounded: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], iconTemplate: [{
      type: ContentChild,
      args: ["icon", { descendants: false }]
    }], templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }] } });
    TagModule = class _TagModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _TagModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _TagModule, imports: [Tag, SharedModule], exports: [Tag, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _TagModule, imports: [Tag, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: TagModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Tag, SharedModule],
        exports: [Tag, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/avatar/index.mjs
var style3;
var init_avatar = __esm({
  "node_modules/@primeuix/styles/dist/avatar/index.mjs"() {
    "use strict";
    style3 = "\n    .p-avatar {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: dt('avatar.width');\n        height: dt('avatar.height');\n        font-size: dt('avatar.font.size');\n        background: dt('avatar.background');\n        color: dt('avatar.color');\n        border-radius: dt('avatar.border.radius');\n    }\n\n    .p-avatar-image {\n        background: transparent;\n    }\n\n    .p-avatar-circle {\n        border-radius: 50%;\n    }\n\n    .p-avatar-circle img {\n        border-radius: 50%;\n    }\n\n    .p-avatar-icon {\n        font-size: dt('avatar.icon.size');\n        width: dt('avatar.icon.size');\n        height: dt('avatar.icon.size');\n    }\n\n    .p-avatar img {\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-avatar-lg {\n        width: dt('avatar.lg.width');\n        height: dt('avatar.lg.width');\n        font-size: dt('avatar.lg.font.size');\n    }\n\n    .p-avatar-lg .p-avatar-icon {\n        font-size: dt('avatar.lg.icon.size');\n        width: dt('avatar.lg.icon.size');\n        height: dt('avatar.lg.icon.size');\n    }\n\n    .p-avatar-xl {\n        width: dt('avatar.xl.width');\n        height: dt('avatar.xl.width');\n        font-size: dt('avatar.xl.font.size');\n    }\n\n    .p-avatar-xl .p-avatar-icon {\n        font-size: dt('avatar.xl.icon.size');\n        width: dt('avatar.xl.icon.size');\n        height: dt('avatar.xl.icon.size');\n    }\n\n    .p-avatar-group {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-avatar-group .p-avatar + .p-avatar {\n        margin-inline-start: dt('avatar.group.offset');\n    }\n\n    .p-avatar-group .p-avatar {\n        border: 2px solid dt('avatar.group.border.color');\n    }\n\n    .p-avatar-group .p-avatar-lg + .p-avatar-lg {\n        margin-inline-start: dt('avatar.lg.group.offset');\n    }\n\n    .p-avatar-group .p-avatar-xl + .p-avatar-xl {\n        margin-inline-start: dt('avatar.xl.group.offset');\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-avatar.mjs
var classes3, AvatarStyle, AvatarClasses, Avatar, AvatarModule;
var init_primeng_avatar = __esm({
  "node_modules/primeng/fesm2022/primeng-avatar.mjs"() {
    "use strict";
    init_common();
    init_common();
    init_core();
    init_core();
    init_primeng_api();
    init_primeng_basecomponent();
    init_avatar();
    init_primeng_base();
    classes3 = {
      root: ({ instance }) => [
        "p-avatar p-component",
        {
          "p-avatar-image": instance.image != null,
          "p-avatar-circle": instance.shape === "circle",
          "p-avatar-lg": instance.size === "large",
          "p-avatar-xl": instance.size === "xlarge"
        }
      ],
      label: "p-avatar-label",
      icon: "p-avatar-icon"
    };
    AvatarStyle = class _AvatarStyle extends BaseStyle {
      name = "avatar";
      theme = style3;
      classes = classes3;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AvatarStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AvatarStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: AvatarStyle, decorators: [{
      type: Injectable
    }] });
    (function(AvatarClasses2) {
      AvatarClasses2["root"] = "p-avatar";
      AvatarClasses2["label"] = "p-avatar-label";
      AvatarClasses2["icon"] = "p-avatar-icon";
    })(AvatarClasses || (AvatarClasses = {}));
    Avatar = class _Avatar extends BaseComponent {
      /**
       * Defines the text to display.
       * @group Props
       */
      label;
      /**
       * Defines the icon to display.
       * @group Props
       */
      icon;
      /**
       * Defines the image to display.
       * @group Props
       */
      image;
      /**
       * Size of the element.
       * @group Props
       */
      size = "normal";
      /**
       * Shape of the element.
       * @group Props
       */
      shape = "square";
      /**
       * Class of the element.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Establishes a string value that labels the component.
       * @group Props
       */
      ariaLabel;
      /**
       * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
       * @group Props
       */
      ariaLabelledBy;
      /**
       * This event is triggered if an error occurs while loading an image file.
       * @param {Event} event - Browser event.
       * @group Emits
       */
      onImageError = new EventEmitter();
      _componentStyle = inject(AvatarStyle);
      imageError(event) {
        this.onImageError.emit(event);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Avatar, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.3", type: _Avatar, isStandalone: true, selector: "p-avatar", inputs: { label: "label", icon: "icon", image: "image", size: "size", shape: "shape", styleClass: "styleClass", ariaLabel: "ariaLabel", ariaLabelledBy: "ariaLabelledBy" }, outputs: { onImageError: "onImageError" }, host: { properties: { "class": "cn(cx('root'), styleClass)", "attr.data-pc-name": '"avatar"', "attr.aria-label": "ariaLabel", "attr.aria-labelledby": "ariaLabelledBy" } }, providers: [AvatarStyle], usesInheritance: true, ngImport: core_exports, template: `
        <ng-content></ng-content>
        <span [class]="cx('label')" *ngIf="label; else iconTemplate">{{ label }}</span>
        <ng-template #iconTemplate><span [class]="icon" [ngClass]="cx('icon')" *ngIf="icon; else imageTemplate"></span></ng-template>
        <ng-template #imageTemplate> <img [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Avatar, decorators: [{
      type: Component,
      args: [{
        selector: "p-avatar",
        standalone: true,
        imports: [CommonModule, SharedModule],
        template: `
        <ng-content></ng-content>
        <span [class]="cx('label')" *ngIf="label; else iconTemplate">{{ label }}</span>
        <ng-template #iconTemplate><span [class]="icon" [ngClass]="cx('icon')" *ngIf="icon; else imageTemplate"></span></ng-template>
        <ng-template #imageTemplate> <img [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        host: {
          "[class]": "cn(cx('root'), styleClass)",
          "[attr.data-pc-name]": '"avatar"',
          "[attr.aria-label]": "ariaLabel",
          "[attr.aria-labelledby]": "ariaLabelledBy"
        },
        providers: [AvatarStyle]
      }]
    }], propDecorators: { label: [{
      type: Input
    }], icon: [{
      type: Input
    }], image: [{
      type: Input
    }], size: [{
      type: Input
    }], shape: [{
      type: Input
    }], styleClass: [{
      type: Input
    }], ariaLabel: [{
      type: Input
    }], ariaLabelledBy: [{
      type: Input
    }], onImageError: [{
      type: Output
    }] } });
    AvatarModule = class _AvatarModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AvatarModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _AvatarModule, imports: [Avatar, SharedModule], exports: [Avatar, SharedModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _AvatarModule, imports: [Avatar, SharedModule, SharedModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: AvatarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Avatar, SharedModule],
        exports: [Avatar, SharedModule]
      }]
    }] });
  }
});

// node_modules/@primeuix/styles/dist/divider/index.mjs
var style4;
var init_divider = __esm({
  "node_modules/@primeuix/styles/dist/divider/index.mjs"() {
    "use strict";
    style4 = "\n    .p-divider-horizontal {\n        display: flex;\n        width: 100%;\n        position: relative;\n        align-items: center;\n        margin: dt('divider.horizontal.margin');\n        padding: dt('divider.horizontal.padding');\n    }\n\n    .p-divider-horizontal:before {\n        position: absolute;\n        display: block;\n        inset-block-start: 50%;\n        inset-inline-start: 0;\n        width: 100%;\n        content: '';\n        border-block-start: 1px solid dt('divider.border.color');\n    }\n\n    .p-divider-horizontal .p-divider-content {\n        padding: dt('divider.horizontal.content.padding');\n    }\n\n    .p-divider-vertical {\n        min-height: 100%;\n        display: flex;\n        position: relative;\n        justify-content: center;\n        margin: dt('divider.vertical.margin');\n        padding: dt('divider.vertical.padding');\n    }\n\n    .p-divider-vertical:before {\n        position: absolute;\n        display: block;\n        inset-block-start: 0;\n        inset-inline-start: 50%;\n        height: 100%;\n        content: '';\n        border-inline-start: 1px solid dt('divider.border.color');\n    }\n\n    .p-divider.p-divider-vertical .p-divider-content {\n        padding: dt('divider.vertical.content.padding');\n    }\n\n    .p-divider-content {\n        z-index: 1;\n        background: dt('divider.content.background');\n        color: dt('divider.content.color');\n    }\n\n    .p-divider-solid.p-divider-horizontal:before {\n        border-block-start-style: solid;\n    }\n\n    .p-divider-solid.p-divider-vertical:before {\n        border-inline-start-style: solid;\n    }\n\n    .p-divider-dashed.p-divider-horizontal:before {\n        border-block-start-style: dashed;\n    }\n\n    .p-divider-dashed.p-divider-vertical:before {\n        border-inline-start-style: dashed;\n    }\n\n    .p-divider-dotted.p-divider-horizontal:before {\n        border-block-start-style: dotted;\n    }\n\n    .p-divider-dotted.p-divider-vertical:before {\n        border-inline-start-style: dotted;\n    }\n\n    .p-divider-left:dir(rtl),\n    .p-divider-right:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n";
  }
});

// node_modules/primeng/fesm2022/primeng-divider.mjs
var inlineStyles, classes4, DividerStyle, DividerClasses, Divider, DividerModule;
var init_primeng_divider = __esm({
  "node_modules/primeng/fesm2022/primeng-divider.mjs"() {
    "use strict";
    init_common();
    init_core();
    init_core();
    init_primeng_api();
    init_primeng_basecomponent();
    init_divider();
    init_primeng_base();
    inlineStyles = {
      root: ({ instance }) => ({
        justifyContent: instance.layout === "horizontal" ? instance.align === "center" || instance.align == null ? "center" : instance.align === "left" ? "flex-start" : instance.align === "right" ? "flex-end" : null : null,
        alignItems: instance.layout === "vertical" ? instance.align === "center" || instance.align == null ? "center" : instance.align === "top" ? "flex-start" : instance.align === "bottom" ? "flex-end" : null : null
      })
    };
    classes4 = {
      root: ({ instance }) => [
        "p-divider p-component",
        "p-divider-" + instance.layout,
        "p-divider-" + instance.type,
        { "p-divider-left": instance.layout === "horizontal" && (!instance.align || instance.align === "left") },
        { "p-divider-center": instance.layout === "horizontal" && instance.align === "center" },
        { "p-divider-right": instance.layout === "horizontal" && instance.align === "right" },
        { "p-divider-top": instance.layout === "vertical" && instance.align === "top" },
        { "p-divider-center": instance.layout === "vertical" && (!instance.align || instance.align === "center") },
        { "p-divider-bottom": instance.layout === "vertical" && instance.align === "bottom" }
      ],
      content: "p-divider-content"
    };
    DividerStyle = class _DividerStyle extends BaseStyle {
      name = "divider";
      theme = style4;
      classes = classes4;
      inlineStyles = inlineStyles;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DividerStyle, deps: null, target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DividerStyle });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: DividerStyle, decorators: [{
      type: Injectable
    }] });
    (function(DividerClasses2) {
      DividerClasses2["root"] = "p-divider";
      DividerClasses2["content"] = "p-divider-content";
    })(DividerClasses || (DividerClasses = {}));
    Divider = class _Divider extends BaseComponent {
      /**
       * Style class of the component.
       * @deprecated since v20.0.0, use `class` instead.
       * @group Props
       */
      styleClass;
      /**
       * Specifies the orientation.
       * @group Props
       */
      layout = "horizontal";
      /**
       * Border style type.
       * @group Props
       */
      type = "solid";
      /**
       * Alignment of the content.
       * @group Props
       */
      align;
      _componentStyle = inject(DividerStyle);
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _Divider, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.1.3", type: _Divider, isStandalone: true, selector: "p-divider", inputs: { styleClass: "styleClass", layout: "layout", type: "type", align: "align" }, host: { attributes: { "data-pc-name": "divider", "role": "separator" }, properties: { "attr.aria-orientation": "layout", "class": "cn(cx('root'), styleClass)", "style": "sx('root')" } }, providers: [DividerStyle], usesInheritance: true, ngImport: core_exports, template: `
        <div [class]="cx('content')">
            <ng-content></ng-content>
        </div>
    `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: SharedModule }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: Divider, decorators: [{
      type: Component,
      args: [{
        selector: "p-divider",
        standalone: true,
        imports: [CommonModule, SharedModule],
        template: `
        <div [class]="cx('content')">
            <ng-content></ng-content>
        </div>
    `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        host: {
          "[attr.aria-orientation]": "layout",
          "data-pc-name": "divider",
          role: "separator",
          "[class]": "cn(cx('root'), styleClass)",
          "[style]": "sx('root')"
        },
        providers: [DividerStyle]
      }]
    }], propDecorators: { styleClass: [{
      type: Input
    }], layout: [{
      type: Input
    }], type: [{
      type: Input
    }], align: [{
      type: Input
    }] } });
    DividerModule = class _DividerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DividerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.1.3", ngImport: core_exports, type: _DividerModule, imports: [Divider], exports: [Divider] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: _DividerModule, imports: [Divider] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.1.3", ngImport: core_exports, type: DividerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Divider],
        exports: [Divider]
      }]
    }] });
  }
});

// src/app/pages/user/user.ts
var User;
var init_user2 = __esm({
  "src/app/pages/user/user.ts"() {
    "use strict";
    init_tslib_es6();
    init_user();
    init_core();
    init_common();
    init_router();
    init_esm();
    init_primeng_progressspinner();
    init_primeng_card();
    init_primeng_tag();
    init_primeng_button();
    init_primeng_avatar();
    init_primeng_divider();
    init_primeng_ripple();
    init_components();
    init_github();
    init_core();
    User = class User2 {
      username = input.required();
      isLoading = signal(true);
      isError = signal(false);
      combinedData$;
      githubService = inject(GithubService);
      constructor() {
        effect(() => {
          this.isLoading.set(true);
          this.isError.set(false);
          this.combinedData$ = forkJoin({
            user: this.githubService.getUserDetails(this.username()),
            repos: this.githubService.getUserRepos(this.username()),
            socials: this.githubService.getUserSocials(this.username())
          }).pipe(map((data) => {
            const userStats = [
              { label: "Public Repos", value: data.user.public_repos },
              { label: "Followers", value: data.user.followers },
              { label: "Following", value: data.user.following },
              { label: "Public Gists", value: data.user.public_gists }
            ];
            return {
              user: data.user,
              repos: data.repos.slice(0, 5),
              socials: [...data.socials, { url: data.user.html_url, provider: "GitHub" }],
              userStats
            };
          }), catchError((err) => {
            console.error("Failed to load user data:", err);
            this.isLoading.set(false);
            this.isError.set(true);
            return EMPTY;
          }), tap(() => {
            this.isLoading.set(false);
          }));
        });
      }
      static ctorParameters = () => [];
      static propDecorators = {
        username: [{ type: Input, args: [{ isSignal: true, alias: "username", required: true, transform: void 0 }] }]
      };
    };
    User = __decorate([
      Component({
        selector: "app-user",
        standalone: true,
        imports: [
          AsyncPipe,
          ProgressSpinnerModule,
          CardModule,
          TagModule,
          ButtonModule,
          AvatarModule,
          DividerModule,
          RippleModule,
          RouterLink,
          RepoList,
          UserStats,
          UserSocials,
          UserAliases,
          UserBio,
          Loader,
          ErrorMessage
        ],
        template: user_default
      })
    ], User);
  }
});

// src/app/pages/user/user.spec.ts
var require_user_spec = __commonJS({
  "src/app/pages/user/user.spec.ts"(exports) {
    init_testing();
    init_user2();
    describe("User", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [User]
        }).compileComponents();
        fixture = TestBed.createComponent(User);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_user_spec();
//# sourceMappingURL=spec-app-pages-user-user.spec.js.map
