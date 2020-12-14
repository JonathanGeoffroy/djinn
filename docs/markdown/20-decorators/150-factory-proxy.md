# Factory ?

<p>Proxified</p>

<pre><code data-line-numbers="1-1">@color(“blue”)
class Colorful {
    message: string;
    constructor(message: string) {
        this.message = message;
   }
}
</pre></code>
<!-- .element:  class="with-code-dark" -->


<pre><code data-line-numbers="2-6|2-2|3-3|4-5">function color(value: string) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)
            this.color = value;
        }
    };
}
</pre></code>
<!-- .element:  class="with-code-dark" -->
