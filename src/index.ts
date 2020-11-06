import "reflect-metadata";

export function Injectable<T extends { new (...args: any[]): {} }>(
    constructor: T
): T {
    const injected: T = Reflect.getMetadata("djinn:injected", constructor);
    if (injected) {
        return injected;
    }

    const constructed = Reflect.construct(constructor, []);

    const properties = Reflect.ownKeys(constructed);
    const paramTypes = Reflect.getMetadata("design:paramtypes", constructor);

    if (properties.length > paramTypes) {
        throw new Error("Circular dependency detected");
    }

    for (let i = 0; i < properties.length; i++) {
        const paramType = paramTypes[i];
        const property = properties[i];
        const injected = Injectable(paramType);
        constructed[property] = injected;
    }

    Reflect.defineMetadata("djinn:injected", constructed, constructor);

    return class extends constructor {
        constructor(...args: any[]) {
            super(args);

            for (let i = 0; i < properties.length; i++) {
                const property = properties[i];
                const paramType = paramTypes[i];
                const injected = Reflect.getMetadata(
                    "djinn:injected",
                    paramType
                );

                // @ts-ignore
                this[property] = injected;
            }
        }
    };
}
