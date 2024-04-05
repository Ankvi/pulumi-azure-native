import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DiskArgs } from "./disk";
export type Disk = import("./disk").Disk;
export const Disk: typeof import("./disk").Disk = null as any;
utilities.lazyLoad(exports, ["Disk"], () => require("./disk"));

export { DiskAccessArgs } from "./diskAccess";
export type DiskAccess = import("./diskAccess").DiskAccess;
export const DiskAccess: typeof import("./diskAccess").DiskAccess = null as any;
utilities.lazyLoad(exports, ["DiskAccess"], () => require("./diskAccess"));

export { DiskAccessAPrivateEndpointConnectionArgs } from "./diskAccessAPrivateEndpointConnection";
export type DiskAccessAPrivateEndpointConnection = import("./diskAccessAPrivateEndpointConnection").DiskAccessAPrivateEndpointConnection;
export const DiskAccessAPrivateEndpointConnection: typeof import("./diskAccessAPrivateEndpointConnection").DiskAccessAPrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["DiskAccessAPrivateEndpointConnection"], () => require("./diskAccessAPrivateEndpointConnection"));

export { DiskEncryptionSetArgs } from "./diskEncryptionSet";
export type DiskEncryptionSet = import("./diskEncryptionSet").DiskEncryptionSet;
export const DiskEncryptionSet: typeof import("./diskEncryptionSet").DiskEncryptionSet = null as any;
utilities.lazyLoad(exports, ["DiskEncryptionSet"], () => require("./diskEncryptionSet"));

export { GetDiskArgs, GetDiskResult, GetDiskOutputArgs } from "./getDisk";
export const getDisk: typeof import("./getDisk").getDisk = null as any;
export const getDiskOutput: typeof import("./getDisk").getDiskOutput = null as any;
utilities.lazyLoad(exports, ["getDisk","getDiskOutput"], () => require("./getDisk"));

export { GetDiskAccessArgs, GetDiskAccessResult, GetDiskAccessOutputArgs } from "./getDiskAccess";
export const getDiskAccess: typeof import("./getDiskAccess").getDiskAccess = null as any;
export const getDiskAccessOutput: typeof import("./getDiskAccess").getDiskAccessOutput = null as any;
utilities.lazyLoad(exports, ["getDiskAccess","getDiskAccessOutput"], () => require("./getDiskAccess"));

export { GetDiskAccessAPrivateEndpointConnectionArgs, GetDiskAccessAPrivateEndpointConnectionResult, GetDiskAccessAPrivateEndpointConnectionOutputArgs } from "./getDiskAccessAPrivateEndpointConnection";
export const getDiskAccessAPrivateEndpointConnection: typeof import("./getDiskAccessAPrivateEndpointConnection").getDiskAccessAPrivateEndpointConnection = null as any;
export const getDiskAccessAPrivateEndpointConnectionOutput: typeof import("./getDiskAccessAPrivateEndpointConnection").getDiskAccessAPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getDiskAccessAPrivateEndpointConnection","getDiskAccessAPrivateEndpointConnectionOutput"], () => require("./getDiskAccessAPrivateEndpointConnection"));

export { GetDiskEncryptionSetArgs, GetDiskEncryptionSetResult, GetDiskEncryptionSetOutputArgs } from "./getDiskEncryptionSet";
export const getDiskEncryptionSet: typeof import("./getDiskEncryptionSet").getDiskEncryptionSet = null as any;
export const getDiskEncryptionSetOutput: typeof import("./getDiskEncryptionSet").getDiskEncryptionSetOutput = null as any;
utilities.lazyLoad(exports, ["getDiskEncryptionSet","getDiskEncryptionSetOutput"], () => require("./getDiskEncryptionSet"));

export { GetSnapshotArgs, GetSnapshotResult, GetSnapshotOutputArgs } from "./getSnapshot";
export const getSnapshot: typeof import("./getSnapshot").getSnapshot = null as any;
export const getSnapshotOutput: typeof import("./getSnapshot").getSnapshotOutput = null as any;
utilities.lazyLoad(exports, ["getSnapshot","getSnapshotOutput"], () => require("./getSnapshot"));

export { SnapshotArgs } from "./snapshot";
export type Snapshot = import("./snapshot").Snapshot;
export const Snapshot: typeof import("./snapshot").Snapshot = null as any;
utilities.lazyLoad(exports, ["Snapshot"], () => require("./snapshot"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:compute/v20230102:Disk":
                return new Disk(name, <any>undefined, { urn })
            case "azure-native:compute/v20230102:DiskAccess":
                return new DiskAccess(name, <any>undefined, { urn })
            case "azure-native:compute/v20230102:DiskAccessAPrivateEndpointConnection":
                return new DiskAccessAPrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:compute/v20230102:DiskEncryptionSet":
                return new DiskEncryptionSet(name, <any>undefined, { urn })
            case "azure-native:compute/v20230102:Snapshot":
                return new Snapshot(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "compute/v20230102", _module)