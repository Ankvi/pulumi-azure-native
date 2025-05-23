import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DiskPoolArgs } from "./diskPool";
export type DiskPool = import("./diskPool").DiskPool;
export const DiskPool: typeof import("./diskPool").DiskPool = null as any;
utilities.lazyLoad(exports, ["DiskPool"], () => require("./diskPool"));

export { GetDiskPoolArgs, GetDiskPoolResult, GetDiskPoolOutputArgs } from "./getDiskPool";
export const getDiskPool: typeof import("./getDiskPool").getDiskPool = null as any;
export const getDiskPoolOutput: typeof import("./getDiskPool").getDiskPoolOutput = null as any;
utilities.lazyLoad(exports, ["getDiskPool","getDiskPoolOutput"], () => require("./getDiskPool"));

export { GetIscsiTargetArgs, GetIscsiTargetResult, GetIscsiTargetOutputArgs } from "./getIscsiTarget";
export const getIscsiTarget: typeof import("./getIscsiTarget").getIscsiTarget = null as any;
export const getIscsiTargetOutput: typeof import("./getIscsiTarget").getIscsiTargetOutput = null as any;
utilities.lazyLoad(exports, ["getIscsiTarget","getIscsiTargetOutput"], () => require("./getIscsiTarget"));

export { IscsiTargetArgs } from "./iscsiTarget";
export type IscsiTarget = import("./iscsiTarget").IscsiTarget;
export const IscsiTarget: typeof import("./iscsiTarget").IscsiTarget = null as any;
utilities.lazyLoad(exports, ["IscsiTarget"], () => require("./iscsiTarget"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storagepool:DiskPool":
                return new DiskPool(name, <any>undefined, { urn })
            case "azure-native:storagepool:IscsiTarget":
                return new IscsiTarget(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storagepool", _module)