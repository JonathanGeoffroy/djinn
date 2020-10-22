import "reflect-metadata";

type Store = {
    [key: string]: Function;
};
let store: Store = {};

export function Injectable<T extends { new (...args: any[]): {} }>(
    constructor: T
): T {
    const name = constructor.name;
    if (store[name]) {
        return store[name] as T;
    }
    const constructed = Reflect.construct(constructor, []);
    store[name] = constructed;

    const properties = Reflect.ownKeys(constructed);
    const paramTypes = Reflect.getMetadata("design:paramtypes", constructor);

    if (properties.length > paramTypes) {
        throw new Error("Circular dependency detected");
    }

    for (let i = 0; i < properties.length; i++) {
        const paramType = paramTypes[i];
        const property = properties[i];
        if (store[paramType.name]) {
            store[paramType.name] = Injectable(paramType);
        }
        constructed[property] = store[paramType.name];
    }

    return class extends constructor {
        constructor(...args: any[]) {
            super(args);

            for (let i = 0; i < properties.length; i++) {
                const property = properties[i];
                const paramType = paramTypes[i];
                const injected = store[paramType.name];

                // @ts-ignore
                this[property] = injected;
            }
        }
    };
}
