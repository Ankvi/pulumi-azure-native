import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetPoolArgs, GetPoolResult, GetPoolOutputArgs } from "./getPool";
export const getPool: typeof import("./getPool").getPool = null as any;
export const getPoolOutput: typeof import("./getPool").getPoolOutput = null as any;
utilities.lazyLoad(exports, ["getPool","getPoolOutput"], () => require("./getPool"));

export { GetSnapshotArgs, GetSnapshotResult, GetSnapshotOutputArgs } from "./getSnapshot";
export const getSnapshot: typeof import("./getSnapshot").getSnapshot = null as any;
export const getSnapshotOutput: typeof import("./getSnapshot").getSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshot","getSnapshotOutput"], () => require("./getSnapshot"));

export { GetVolumeArgs, GetVolumeResult, GetVolumeOutputArgs } from "./getVolume";
export const getVolume: typeof import("./getVolume").getVolume = null as any;
export const getVolumeOutput: typeof import("./getVolume").getVolumeOutput = null as any;
utilities.lazyLoad(exports, ["getVolume","getVolumeOutput"], () => require("./getVolume"));

export { PoolArgs } from "./pool";
export type Pool = import("./pool").Pool;
export const Pool: typeof import("./pool").Pool = null as any;
utilities.lazyLoad(exports, ["Pool"], () => require("./pool"));

export { SnapshotArgs } from "./snapshot";
export type Snapshot = import("./snapshot").Snapshot;
export const Snapshot: typeof import("./snapshot").Snapshot = null as any;
utilities.lazyLoad(exports, ["Snapshot"], () => require("./snapshot"));

export { VolumeArgs } from "./volume";
export type Volume = import("./volume").Volume;
export const Volume: typeof import("./volume").Volume = null as any;
utilities.lazyLoad(exports, ["Volume"], () => require("./volume"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:containerstorage:Pool":
                return new Pool(name, <any>undefined, { urn })
            case "azure-native:containerstorage:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            case "azure-native:containerstorage:Volume":
                return new Volume(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "containerstorage", _module)