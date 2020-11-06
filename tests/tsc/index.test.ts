import { Injectable } from "../../src";

test("Inject simple dependency", () => {
    @Injectable
    class Dependency {}

    @Injectable
    class ComponentA {
        constructor(private dep: Dependency) {}

        get dependency() {
            return this.dep;
        }
    }

    expect(Reflect.construct(ComponentA, []).dependency).toBeDefined();
    expect(new ComponentA(new Dependency()).dependency).toBe(
        new ComponentA(new Dependency()).dependency
    );
});

test("Inject multiple dependencies", () => {
    @Injectable
    class DependencyA {}

    @Injectable
    class DependencyB {}

    @Injectable
    class ComponentB {
        constructor(private depA: DependencyA, private depB: DependencyB) {}

        get dependencyA() {
            return this.depA;
        }

        get dependencyB() {
            return this.depB;
        }
    }

    const component = Reflect.construct(ComponentB, []);
    expect(component.dependencyA).toBeDefined();
    expect(component.dependencyB).toBeDefined();
});

test("Inject deep dependency", () => {
    @Injectable
    class DependencyAA {}

    @Injectable
    class DependencyAB {
        constructor(private dep: DependencyAA) {}

        get dependency() {
            return this.dep;
        }
    }

    @Injectable
    class ComponentC {
        constructor(private dep: DependencyAB) {}

        get dependency() {
            return this.dep;
        }
    }

    const component = Reflect.construct(ComponentC, []);
    expect(component.dependency).toBeDefined();
    expect(component.dependency.dependency).toBeDefined();
});
