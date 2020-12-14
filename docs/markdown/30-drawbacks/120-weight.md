# Metadata inscreases weight

<pre><code data-line-numbers="1-47|2-26|27-29|30-41|42-45">"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", { value: true });
const di_1 = require("./di");
const HeroService_1 = require("./HeroService");
let HeroComponent = class HeroComponent {
  constructor(heroService) {
    this.heroService = heroService;
  }
  sayHello() {
    console.log("I'm the Hero component");
    if (!this.heroService) {
      throw new Error("Seems injection didn't work ...");
    }
    this.heroService.sayHi();
  }
};
HeroComponent = __decorate(
  [di_1.Component, __metadata("design:paramtypes", [HeroService_1.default])],
  HeroComponent
);
exports.default = HeroComponent;
//# sourceMappingURL=HeroComponent.js.map
</code></pre>
<!-- .element class="with-code-dark too-long" -->

± \*2.5

<!-- .element class="code-info" -->
