# Dependency Injection : Static Code

<pre><code data-line-numbers>import {QGService} from "./QService";
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
