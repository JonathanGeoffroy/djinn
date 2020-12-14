# How ?

<p>Seal an object</p>

<pre><code data-line-numbers="1-7|1-1">@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
   }
}
</pre></code>
<!-- .element:  class="with-code-dark" -->


<pre><code data-line-numbers="1-4|1-1|2-3">function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
</pre></code>
<!-- .element:  class="with-code-dark" -->
