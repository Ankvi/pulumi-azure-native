import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetObjectAnchorsAccountArgs, GetObjectAnchorsAccountResult, GetObjectAnchorsAccountOutputArgs } from "./getObjectAnchorsAccount";
export const getObjectAnchorsAccount: typeof import("./getObjectAnchorsAccount").getObjectAnchorsAccount = null as any;
export const getObjectAnchorsAccountOutput: typeof import("./getObjectAnchorsAccount").getObjectAnchorsAccountOutput = null as any;
utilities.lazyLoad(exports, ["getObjectAnchorsAccount","getObjectAnchorsAccountOutput"], () => require("./getObjectAnchorsAccount"));

export { GetRemoteRenderingAccountArgs, GetRemoteRenderingAccountResult, GetRemoteRenderingAccountOutputArgs } from "./getRemoteRenderingAccount";
export const getRemoteRenderingAccount: typeof import("./getRemoteRenderingAccount").getRemoteRenderingAccount = null as any;
export const getRemoteRenderingAccountOutput: typeof import("./getRemoteRenderingAccount").getRemoteRenderingAccountOutput = null as any;
utilities.lazyLoad(exports, ["getRemoteRenderingAccount","getRemoteRenderingAccountOutput"], () => require("./getRemoteRenderingAccount"));

export { GetSpatialAnchorsAccountArgs, GetSpatialAnchorsAccountResult, GetSpatialAnchorsAccountOutputArgs } from "./getSpatialAnchorsAccount";
export const getSpatialAnchorsAccount: typeof import("./getSpatialAnchorsAccount").getSpatialAnchorsAccount = null as any;
export const getSpatialAnchorsAccountOutput: typeof import("./getSpatialAnchorsAccount").getSpatialAnchorsAccountOutput = null as any;
utilities.lazyLoad(exports, ["getSpatialAnchorsAccount","getSpatialAnchorsAccountOutput"], () => require("./getSpatialAnchorsAccount"));

export { ListObjectAnchorsAccountKeysArgs, ListObjectAnchorsAccountKeysResult, ListObjectAnchorsAccountKeysOutputArgs } from "./listObjectAnchorsAccountKeys";
export const listObjectAnchorsAccountKeys: typeof import("./listObjectAnchorsAccountKeys").listObjectAnchorsAccountKeys = null as any;
export const listObjectAnchorsAccountKeysOutput: typeof import("./listObjectAnchorsAccountKeys").listObjectAnchorsAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listObjectAnchorsAccountKeys","listObjectAnchorsAccountKeysOutput"], () => require("./listObjectAnchorsAccountKeys"));

export { ListRemoteRenderingAccountKeysArgs, ListRemoteRenderingAccountKeysResult, ListRemoteRenderingAccountKeysOutputArgs } from "./listRemoteRenderingAccountKeys";
export const listRemoteRenderingAccountKeys: typeof import("./listRemoteRenderingAccountKeys").listRemoteRenderingAccountKeys = null as any;
export const listRemoteRenderingAccountKeysOutput: typeof import("./listRemoteRenderingAccountKeys").listRemoteRenderingAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listRemoteRenderingAccountKeys","listRemoteRenderingAccountKeysOutput"], () => require("./listRemoteRenderingAccountKeys"));

export { ListSpatialAnchorsAccountKeysArgs, ListSpatialAnchorsAccountKeysResult, ListSpatialAnchorsAccountKeysOutputArgs } from "./listSpatialAnchorsAccountKeys";
export const listSpatialAnchorsAccountKeys: typeof import("./listSpatialAnchorsAccountKeys").listSpatialAnchorsAccountKeys = null as any;
export const listSpatialAnchorsAccountKeysOutput: typeof import("./listSpatialAnchorsAccountKeys").listSpatialAnchorsAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listSpatialAnchorsAccountKeys","listSpatialAnchorsAccountKeysOutput"], () => require("./listSpatialAnchorsAccountKeys"));

export { ObjectAnchorsAccountArgs } from "./objectAnchorsAccount";
export type ObjectAnchorsAccount = import("./objectAnchorsAccount").ObjectAnchorsAccount;
export const ObjectAnchorsAccount: typeof import("./objectAnchorsAccount").ObjectAnchorsAccount = null as any;
utilities.lazyLoad(exports, ["ObjectAnchorsAccount"], () => require("./objectAnchorsAccount"));

export { RemoteRenderingAccountArgs } from "./remoteRenderingAccount";
export type RemoteRenderingAccount = import("./remoteRenderingAccount").RemoteRenderingAccount;
export const RemoteRenderingAccount: typeof import("./remoteRenderingAccount").RemoteRenderingAccount = null as any;
utilities.lazyLoad(exports, ["RemoteRenderingAccount"], () => require("./remoteRenderingAccount"));

export { SpatialAnchorsAccountArgs } from "./spatialAnchorsAccount";
export type SpatialAnchorsAccount = import("./spatialAnchorsAccount").SpatialAnchorsAccount;
export const SpatialAnchorsAccount: typeof import("./spatialAnchorsAccount").SpatialAnchorsAccount = null as any;
utilities.lazyLoad(exports, ["SpatialAnchorsAccount"], () => require("./spatialAnchorsAccount"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:mixedreality:ObjectAnchorsAccount":
                return new ObjectAnchorsAccount(name, <any>undefined, { urn })
            case "azure-native:mixedreality:RemoteRenderingAccount":
                return new RemoteRenderingAccount(name, <any>undefined, { urn })
            case "azure-native:mixedreality:SpatialAnchorsAccount":
                return new SpatialAnchorsAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mixedreality", _module)