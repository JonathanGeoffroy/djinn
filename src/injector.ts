import { METADATA_INJECTED } from "./constants";

function get(type: any) {
    return Reflect.getMetadata(METADATA_INJECTED, type);
}

export { get };
