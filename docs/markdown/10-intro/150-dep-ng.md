# Dependency Injection : Angular

<pre><code data-line-numbers="1-100|1-1">@Injectable()
export class QGService {};

@Injectable()
export class HeroService() {}

export class AppComponent() {
    constructor(private heroService : HeroService) {}
}
</code></pre>
<!-- .element:  class="with-code-dark" -->
