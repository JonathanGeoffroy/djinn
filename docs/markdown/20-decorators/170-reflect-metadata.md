# Reflect-Metadata to the Rescue !

<pre><code data-line-numbers="1-4|4-4|6-6|8-8">Reflect.defineMetadata(
    metadataKey, 
    metadataValue, 
    Service.prototype, "method");

Reflect.getMetadata(metadataKey, obj, "method");

Reflect.construct(Service.prototype, [arguments]);
</pre></code>
<!-- .element:  class="with-code-dark" -->