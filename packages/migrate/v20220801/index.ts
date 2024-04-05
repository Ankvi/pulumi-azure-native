import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMoveCollectionArgs, GetMoveCollectionResult, GetMoveCollectionOutputArgs } from "./getMoveCollection";
export const getMoveCollection: typeof import("./getMoveCollection").getMoveCollection = null as any;
export const getMoveCollectionOutput: typeof import("./getMoveCollection").getMoveCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getMoveCollection","getMoveCollectionOutput"], () => require("./getMoveCollection"));

export { GetMoveResourceArgs, GetMoveResourceResult, GetMoveResourceOutputArgs } from "./getMoveResource";
export const getMoveResource: typeof import("./getMoveResource").getMoveResource = null as any;
export const getMoveResourceOutput: typeof import("./getMoveResource").getMoveResourceOutput = null as any;
utilities.lazyLoad(exports, ["getMoveResource","getMoveResourceOutput"], () => require("./getMoveResource"));

export { MoveCollectionArgs } from "./moveCollection";
export type MoveCollection = import("./moveCollection").MoveCollection;
export const MoveCollection: typeof import("./moveCollection").MoveCollection = null as any;
utilities.lazyLoad(exports, ["MoveCollection"], () => require("./moveCollection"));

export { MoveResourceArgs } from "./moveResource";
export type MoveResource = import("./moveResource").MoveResource;
export const MoveResource: typeof import("./moveResource").MoveResource = null as any;
utilities.lazyLoad(exports, ["MoveResource"], () => require("./moveResource"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:migrate/v20220801:MoveCollection":
                return new MoveCollection(name, <any>undefined, { urn })
            case "azure-native:migrate/v20220801:MoveResource":
                return new MoveResource(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "migrate/v20220801", _module)