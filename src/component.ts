import "reflect-metadata";
import * as Injector from "./injector";

export function Component<T extends { new (...args: any[]): {} }>(
    constructor: T
): T {
    return class extends constructor {
        constructor(...args: any[]) {
            const dependencies = Reflect.getMetadata(
                "design:paramtypes",
                constructor
            );

            const injectedArgs: any[] = dependencies
                ? dependencies.map(Injector.get)
                : [];
            super(...injectedArgs);
        }
    };
}
