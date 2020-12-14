# Dependency Injection : Static Code

<div style="display:flex; justify-content: space-between">

<pre><code>@Injectable()
export class QGService {};

@Injectable()
export class HeroService() {}

export class AppComponent() {
    constructor(private heroService : HeroService) {}
}
</code></pre>
<!-- .element:  class="with-code-dark too-long" -->

<div class="arrow" style="font-size:4em; flex-shrink: 0; align-self: center;">&#8594;</div>

<pre><code>import {QGService} from "./QService";
import {HeroServiceA} from "./HeroServiceA";
import {HeroServiceB} from "./HeroServiceB";
import {HeroServiceC} from "./HeroServiceC";
import {HeroServiceD} from "./HeroServiceD";
import {HeroServiceE} from "./HeroServiceE";

const qgService = new QGService();
const heroServiceA = new HeroServiceA(qgService);
const heroServiceB = new HeroServiceB(qgService);
const heroServiceC = new HeroServiceC(qgService);
const heroServiceD = new HeroServiceD(qgService);
const heroServiceE = new HeroServiceE(qgService);

function get&lt;T&gt;(target: any): T {
// return instance of `target`
}
</code></pre>

<!-- .element:  class="with-code-dark too-long" -->
</div>
