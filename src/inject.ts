import { METADATA_DEPS } from "./constants";

export function Inject(target: any, propertyKey: string) {
    const propertyType = Reflect.getMetadata(
        "design:type",
        target,
        propertyKey
    );

    const targetDeps =
        Reflect.getMetadata(METADATA_DEPS, target.constructor) || {};
    targetDeps[propertyKey] = propertyType;

    Reflect.defineMetadata(METADATA_DEPS, targetDeps, target.constructor);
}
