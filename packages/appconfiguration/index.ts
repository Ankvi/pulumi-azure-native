import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ConfigurationStoreArgs } from "./configurationStore";
export type ConfigurationStore = import("./configurationStore").ConfigurationStore;
export const ConfigurationStore: typeof import("./configurationStore").ConfigurationStore = null as any;
utilities.lazyLoad(exports, ["ConfigurationStore"], () => require("./configurationStore"));

export { GetConfigurationStoreArgs, GetConfigurationStoreResult, GetConfigurationStoreOutputArgs } from "./getConfigurationStore";
export const getConfigurationStore: typeof import("./getConfigurationStore").getConfigurationStore = null as any;
export const getConfigurationStoreOutput: typeof import("./getConfigurationStore").getConfigurationStoreOutput = null as any;
utilities.lazyLoad(exports, ["getConfigurationStore","getConfigurationStoreOutput"], () => require("./getConfigurationStore"));

export { GetKeyValueArgs, GetKeyValueResult, GetKeyValueOutputArgs } from "./getKeyValue";
export const getKeyValue: typeof import("./getKeyValue").getKeyValue = null as any;
export const getKeyValueOutput: typeof import("./getKeyValue").getKeyValueOutput = null as any;
utilities.lazyLoad(exports, ["getKeyValue","getKeyValueOutput"], () => require("./getKeyValue"));

export { GetPrivateEndpointConnectionArgs, GetPrivateEndpointConnectionResult, GetPrivateEndpointConnectionOutputArgs } from "./getPrivateEndpointConnection";
export const getPrivateEndpointConnection: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnection = null as any;
export const getPrivateEndpointConnectionOutput: typeof import("./getPrivateEndpointConnection").getPrivateEndpointConnectionOutput = null as any;
utilities.lazyLoad(exports, ["getPrivateEndpointConnection","getPrivateEndpointConnectionOutput"], () => require("./getPrivateEndpointConnection"));

export { GetReplicaArgs, GetReplicaResult, GetReplicaOutputArgs } from "./getReplica";
export const getReplica: typeof import("./getReplica").getReplica = null as any;
export const getReplicaOutput: typeof import("./getReplica").getReplicaOutput = null as any;
utilities.lazyLoad(exports, ["getReplica","getReplicaOutput"], () => require("./getReplica"));

export { KeyValueArgs } from "./keyValue";
export type KeyValue = import("./keyValue").KeyValue;
export const KeyValue: typeof import("./keyValue").KeyValue = null as any;
utilities.lazyLoad(exports, ["KeyValue"], () => require("./keyValue"));

export { ListConfigurationStoreKeysArgs, ListConfigurationStoreKeysResult, ListConfigurationStoreKeysOutputArgs } from "./listConfigurationStoreKeys";
export const listConfigurationStoreKeys: typeof import("./listConfigurationStoreKeys").listConfigurationStoreKeys = null as any;
export const listConfigurationStoreKeysOutput: typeof import("./listConfigurationStoreKeys").listConfigurationStoreKeysOutput = null as any;
utilities.lazyLoad(exports, ["listConfigurationStoreKeys","listConfigurationStoreKeysOutput"], () => require("./listConfigurationStoreKeys"));

export { PrivateEndpointConnectionArgs } from "./privateEndpointConnection";
export type PrivateEndpointConnection = import("./privateEndpointConnection").PrivateEndpointConnection;
export const PrivateEndpointConnection: typeof import("./privateEndpointConnection").PrivateEndpointConnection = null as any;
utilities.lazyLoad(exports, ["PrivateEndpointConnection"], () => require("./privateEndpointConnection"));

export { ReplicaArgs } from "./replica";
export type Replica = import("./replica").Replica;
export const Replica: typeof import("./replica").Replica = null as any;
utilities.lazyLoad(exports, ["Replica"], () => require("./replica"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:appconfiguration:ConfigurationStore":
                return new ConfigurationStore(name, <any>undefined, { urn })
            case "azure-native:appconfiguration:KeyValue":
                return new KeyValue(name, <any>undefined, { urn })
            case "azure-native:appconfiguration:PrivateEndpointConnection":
                return new PrivateEndpointConnection(name, <any>undefined, { urn })
            case "azure-native:appconfiguration:Replica":
                return new Replica(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "appconfiguration", _module)