import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CloudEndpointArgs } from "./cloudEndpoint";
export type CloudEndpoint = import("./cloudEndpoint").CloudEndpoint;
export const CloudEndpoint: typeof import("./cloudEndpoint").CloudEndpoint = null as any;
utilities.lazyLoad(exports, ["CloudEndpoint"], () => require("./cloudEndpoint"));

export { GetCloudEndpointArgs, GetCloudEndpointResult, GetCloudEndpointOutputArgs } from "./getCloudEndpoint";
export const getCloudEndpoint: typeof import("./getCloudEndpoint").getCloudEndpoint = null as any;
export const getCloudEndpointOutput: typeof import("./getCloudEndpoint").getCloudEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getCloudEndpoint","getCloudEndpointOutput"], () => require("./getCloudEndpoint"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetRegisteredServerArgs, GetRegisteredServerResult, GetRegisteredServerOutputArgs } from "./getRegisteredServer";
export const getRegisteredServer: typeof import("./getRegisteredServer").getRegisteredServer = null as any;
export const getRegisteredServerOutput: typeof import("./getRegisteredServer").getRegisteredServerOutput = null as any;
utilities.lazyLoad(exports, ["getRegisteredServer","getRegisteredServerOutput"], () => require("./getRegisteredServer"));

export { GetServerEndpointArgs, GetServerEndpointResult, GetServerEndpointOutputArgs } from "./getServerEndpoint";
export const getServerEndpoint: typeof import("./getServerEndpoint").getServerEndpoint = null as any;
export const getServerEndpointOutput: typeof import("./getServerEndpoint").getServerEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getServerEndpoint","getServerEndpointOutput"], () => require("./getServerEndpoint"));

export { GetStorageSyncServiceArgs, GetStorageSyncServiceResult, GetStorageSyncServiceOutputArgs } from "./getStorageSyncService";
export const getStorageSyncService: typeof import("./getStorageSyncService").getStorageSyncService = null as any;
export const getStorageSyncServiceOutput: typeof import("./getStorageSyncService").getStorageSyncServiceOutput = null as any;
utilities.lazyLoad(exports, ["getStorageSyncService","getStorageSyncServiceOutput"], () => require("./getStorageSyncService"));

export { GetSyncGroupArgs, GetSyncGroupResult, GetSyncGroupOutputArgs } from "./getSyncGroup";
export const getSyncGroup: typeof import("./getSyncGroup").getSyncGroup = null as any;
export const getSyncGroupOutput: typeof import("./getSyncGroup").getSyncGroupOutput = null as any;
utilities.lazyLoad(exports, ["getSyncGroup","getSyncGroupOutput"], () => require("./getSyncGroup"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { RegisteredServerArgs } from "./registeredServer";
export type RegisteredServer = import("./registeredServer").RegisteredServer;
export const RegisteredServer: typeof import("./registeredServer").RegisteredServer = null as any;
utilities.lazyLoad(exports, ["RegisteredServer"], () => require("./registeredServer"));

export { ServerEndpointArgs } from "./serverEndpoint";
export type ServerEndpoint = import("./serverEndpoint").ServerEndpoint;
export const ServerEndpoint: typeof import("./serverEndpoint").ServerEndpoint = null as any;
utilities.lazyLoad(exports, ["ServerEndpoint"], () => require("./serverEndpoint"));

export { StorageSyncServiceArgs } from "./storageSyncService";
export type StorageSyncService = import("./storageSyncService").StorageSyncService;
export const StorageSyncService: typeof import("./storageSyncService").StorageSyncService = null as any;
utilities.lazyLoad(exports, ["StorageSyncService"], () => require("./storageSyncService"));

export { SyncGroupArgs } from "./syncGroup";
export type SyncGroup = import("./syncGroup").SyncGroup;
export const SyncGroup: typeof import("./syncGroup").SyncGroup = null as any;
utilities.lazyLoad(exports, ["SyncGroup"], () => require("./syncGroup"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:storagesync:CloudEndpoint":
                return new CloudEndpoint(name, <any>undefined, { urn })
            case "azure-native:storagesync:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:storagesync:RegisteredServer":
                return new RegisteredServer(name, <any>undefined, { urn })
            case "azure-native:storagesync:ServerEndpoint":
                return new ServerEndpoint(name, <any>undefined, { urn })
            case "azure-native:storagesync:StorageSyncService":
                return new StorageSyncService(name, <any>undefined, { urn })
            case "azure-native:storagesync:SyncGroup":
                return new SyncGroup(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "storagesync", _module)