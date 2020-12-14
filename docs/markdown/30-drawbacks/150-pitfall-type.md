# Some Pitfalls

## Types

```
Reflect.getMetadata(“design:type”, Service, “myProperty”);
```

<!-- .element class="with-code-dark" -->

| Static Type    | Metadata Type | Result     |
| -------------- | ------------- | ---------- |
| String         | String        | Ok         |
| String?        | String        | Loose “?”  |
| String \| null | Object        | Loose type |
