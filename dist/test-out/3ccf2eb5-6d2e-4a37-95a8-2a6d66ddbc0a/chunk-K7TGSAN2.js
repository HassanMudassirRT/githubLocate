import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-56THSHHT.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/components/footer/footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src/app/components/footer/footer.html"() {
    footer_default = '<footer class="fixed bottom-0 start-0 w-screen backdrop-blur-md border-t border-zinc-400/50">\n  <article class="p-6">\n    <nav>\n      <h2 class="text-xs md:text-sm lg:text-lg xl:text-xl text-center">\n        &copy; 2025 githubLocate. All rights reserved.\n      </h2>\n    </nav>\n  </article>\n</footer>\n';
  }
});

// src/app/components/footer/footer.ts
var Footer;
var init_footer2 = __esm({
  "src/app/components/footer/footer.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_core();
    Footer = class Footer2 {
    };
    Footer = __decorate([
      Component({
        selector: "app-footer",
        imports: [],
        template: footer_default
      })
    ], Footer);
  }
});

export {
  Footer,
  init_footer2 as init_footer
};
//# sourceMappingURL=chunk-K7TGSAN2.js.map
