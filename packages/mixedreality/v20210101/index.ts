import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRemoteRenderingAccountArgs, GetRemoteRenderingAccountResult, GetRemoteRenderingAccountOutputArgs } from "./getRemoteRenderingAccount";
export const getRemoteRenderingAccount: typeof import("./getRemoteRenderingAccount").getRemoteRenderingAccount = null as any;
export const getRemoteRenderingAccountOutput: typeof import("./getRemoteRenderingAccount").getRemoteRenderingAccountOutput = null as any;
utilities.lazyLoad(exports, ["getRemoteRenderingAccount","getRemoteRenderingAccountOutput"], () => require("./getRemoteRenderingAccount"));

export { GetSpatialAnchorsAccountArgs, GetSpatialAnchorsAccountResult, GetSpatialAnchorsAccountOutputArgs } from "./getSpatialAnchorsAccount";
export const getSpatialAnchorsAccount: typeof import("./getSpatialAnchorsAccount").getSpatialAnchorsAccount = null as any;
export const getSpatialAnchorsAccountOutput: typeof import("./getSpatialAnchorsAccount").getSpatialAnchorsAccountOutput = null as any;
utilities.lazyLoad(exports, ["getSpatialAnchorsAccount","getSpatialAnchorsAccountOutput"], () => require("./getSpatialAnchorsAccount"));

export { ListRemoteRenderingAccountKeysArgs, ListRemoteRenderingAccountKeysResult, ListRemoteRenderingAccountKeysOutputArgs } from "./listRemoteRenderingAccountKeys";
export const listRemoteRenderingAccountKeys: typeof import("./listRemoteRenderingAccountKeys").listRemoteRenderingAccountKeys = null as any;
export const listRemoteRenderingAccountKeysOutput: typeof import("./listRemoteRenderingAccountKeys").listRemoteRenderingAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listRemoteRenderingAccountKeys","listRemoteRenderingAccountKeysOutput"], () => require("./listRemoteRenderingAccountKeys"));

export { ListSpatialAnchorsAccountKeysArgs, ListSpatialAnchorsAccountKeysResult, ListSpatialAnchorsAccountKeysOutputArgs } from "./listSpatialAnchorsAccountKeys";
export const listSpatialAnchorsAccountKeys: typeof import("./listSpatialAnchorsAccountKeys").listSpatialAnchorsAccountKeys = null as any;
export const listSpatialAnchorsAccountKeysOutput: typeof import("./listSpatialAnchorsAccountKeys").listSpatialAnchorsAccountKeysOutput = null as any;
utilities.lazyLoad(exports, ["listSpatialAnchorsAccountKeys","listSpatialAnchorsAccountKeysOutput"], () => require("./listSpatialAnchorsAccountKeys"));

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
            case "azure-native:mixedreality/v20210101:RemoteRenderingAccount":
                return new RemoteRenderingAccount(name, <any>undefined, { urn })
            case "azure-native:mixedreality/v20210101:SpatialAnchorsAccount":
                return new SpatialAnchorsAccount(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "mixedreality/v20210101", _module)