import "reflect-metadata";
import { METADATA_INJECTED } from "./constants";

export function Injectable<T extends { new (...args: any[]): {} }>(
    constructor: T
): void {
    if (Reflect.hasMetadata(METADATA_INJECTED, constructor)) {
        return;
    }

    const paramTypes = Reflect.getMetadata("design:paramtypes", constructor);
    const deps = paramTypes
        ? paramTypes.map((type: any) =>
              Reflect.getMetadata(METADATA_INJECTED, type)
          )
        : [];

    const constructed = Reflect.construct(constructor, deps);
    Reflect.defineMetadata(METADATA_INJECTED, constructed, constructor);
}
