# Factory ?

<p>Parameterized</p>

<pre><code data-line-numbers="1-7|1-1">@color(“blue”)
class Colorful {
    message: string;
    constructor(message: string) {
        this.message = message;
   }
}
</pre></code>
<!-- .element:  class="with-code-dark" -->


<pre><code data-line-numbers="1-5|1-1|2-2|3-3">function color(value: string) {
    return function (target: any) {
        // My Decorator behavior here
    };
}
</pre></code>
<!-- .element:  class="with-code-dark" -->
