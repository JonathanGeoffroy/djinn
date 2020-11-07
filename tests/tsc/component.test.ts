import Injector, { Inject, Injectable, Component } from "../../src";

test("Create component without dependencies", () => {
    @Component
    class MyComponent {}

    const component = new MyComponent();

    expect(component).toBeDefined();
    expect(component).not.toBe(new MyComponent());
});

test("Create component with dependency", () => {
    @Injectable
    class Dependency {}

    @Component
    class MyComponent {
        constructor(private dep?: Dependency) {}

        get dependency() {
            return this.dep;
        }
    }

    const component = new MyComponent();

    expect(component).toBeDefined();
    expect(component).not.toBe(new MyComponent());

    expect(component.dependency).toBeDefined();
    expect(component.dependency).toBe(Injector.get(Dependency));
    expect(component.dependency).toBe(new MyComponent().dependency);
});

test("Create component with multiple dependencies", () => {
    @Injectable
    class DependencyC {}

    @Injectable
    class DependencyB {
        constructor(private dep: DependencyC) {}

        get dependency() {
            return this.dep;
        }
    }

    @Injectable
    class DependencyA {
        constructor(private dep: DependencyB) {}

        get dependency() {
            return this.dep;
        }
    }

    @Component
    class MyComponent {
        constructor(
            private depA?: DependencyA,
            private depB?: DependencyB,
            private depC?: DependencyC
        ) {}

        get dependencyA() {
            return this.depA;
        }

        get dependencyB() {
            return this.depB;
        }

        get dependencyC() {
            return this.depC;
        }
    }

    const component = new MyComponent();

    expect(component).toBeDefined();
    expect(component).not.toBe(new MyComponent());

    expect(component.dependencyA).toBeDefined();
    expect(component.dependencyA).toBe(Injector.get(DependencyA));
    expect(component.dependencyA).toBe(new MyComponent().dependencyA);

    expect(component.dependencyB).toBeDefined();
    expect(component.dependencyB).toBe(Injector.get(DependencyB));
    expect(component.dependencyB).toBe(new MyComponent().dependencyB);
    expect(component.dependencyA?.dependency).toBe(component.dependencyB);

    expect(component.dependencyC).toBeDefined();
    expect(component.dependencyC).toBe(Injector.get(DependencyC));
    expect(component.dependencyC).toBe(new MyComponent().dependencyC);
    expect(component.dependencyB?.dependency).toBe(component.dependencyC);
});

test("Create component with `inject` dependency", () => {
    @Injectable
    class Dependency {}

    @Component
    class MyComponent {
        @Inject
        dependency!: Dependency;
    }

    const component = new MyComponent();

    expect(component).toBeDefined();
    expect(component).not.toBe(new MyComponent());

    expect(component.dependency).toBeDefined();
    expect(component.dependency).toBe(Injector.get(Dependency));
    expect(component.dependency).toBe(new MyComponent().dependency);
});

test("Create component with mixing constructor and `inject` dependencies", () => {
    @Injectable
    class Dependency {}

    @Component
    class MyComponent {
        @Inject
        dependency!: Dependency;

        constructor(private dep?: Dependency) {}

        get constructorDep() {
            return this.dep;
        }
    }

    const component = new MyComponent();

    expect(component).toBeDefined();
    expect(component).not.toBe(new MyComponent());

    expect(component.dependency).toBeDefined();
    expect(component.dependency).toBe(Injector.get(Dependency));
    expect(component.dependency).toBe(new MyComponent().dependency);

    expect(component.constructorDep).toBeDefined();
    expect(component.constructorDep).toBe(Injector.get(Dependency));
    expect(component.constructorDep).toBe(new MyComponent().constructorDep);
});
