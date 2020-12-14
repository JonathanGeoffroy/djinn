# Dependency Injection : Static Code

<pre><code data-line-numbers>import {QGService} from "./QService";
import {HeroService} from "./HeroService";
const qgService = new QGService();
const heroService = new HeroService( qgService );

function get&lt;T&gt; (target: any): T {
    // return instance of `target`
}
</code></pre>
<!-- .element:  class="with-code-dark" -->
