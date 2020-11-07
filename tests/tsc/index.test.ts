import Injector, { Injectable } from "../../src";

test("Inject simple dependency", () => {
    @Injectable
    class Dependency {}

    @Injectable
    class Component {
        constructor(private dep: Dependency) {}

        get dependency() {
            return this.dep;
        }
    }

    const injected = Injector.get(Component);

    expect(injected).toBeDefined();
    expect(injected).toBe(Injector.get(Component));

    expect(injected.dependency).toBeDefined();
    expect(injected.dependency).toBe(Injector.get(Dependency));
});

test("Inject multiple dependencies", () => {
    @Injectable
    class DependencyA {}

    @Injectable
    class DependencyB {}

    @Injectable
    class Component {
        constructor(private depA: DependencyA, private depB: DependencyB) {}

        get dependencyA() {
            return this.depA;
        }

        get dependencyB() {
            return this.depB;
        }
    }

    const component = Injector.get(Component);

    expect(component).toBeDefined();
    expect(component).toBe(Injector.get(Component));

    expect(component.dependencyA).toBeDefined();
    expect(component.dependencyA).toBe(Injector.get(DependencyA));

    expect(component.dependencyB).toBeDefined();
    expect(component.dependencyB).toBe(Injector.get(DependencyB));
});

test("Inject deep dependency", () => {
    @Injectable
    class DependencyA {}

    @Injectable
    class DependencyB {
        constructor(private dep: DependencyA) {}

        get dependency() {
            return this.dep;
        }
    }

    @Injectable
    class Component {
        constructor(private dep: DependencyB) {}

        get dependency() {
            return this.dep;
        }
    }

    const component = Injector.get(Component);
    expect(component).toBeDefined();
    expect(component).toBe(Injector.get(Component));

    expect(component.dependency).toBeDefined();
    expect(component.dependency).toBe(Injector.get(DependencyB));

    expect(component.dependency.dependency).toBeDefined();
    expect(component.dependency.dependency).toBe(Injector.get(DependencyA));
});
