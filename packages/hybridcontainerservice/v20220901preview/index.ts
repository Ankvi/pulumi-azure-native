import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AgentPoolArgs } from "./agentPool";
export type AgentPool = import("./agentPool").AgentPool;
export const AgentPool: typeof import("./agentPool").AgentPool = null as any;
utilities.lazyLoad(exports, ["AgentPool"], () => require("./agentPool"));

export { GetAgentPoolArgs, GetAgentPoolResult, GetAgentPoolOutputArgs } from "./getAgentPool";
export const getAgentPool: typeof import("./getAgentPool").getAgentPool = null as any;
export const getAgentPoolOutput: typeof import("./getAgentPool").getAgentPoolOutput = null as any;
utilities.lazyLoad(exports, ["getAgentPool","getAgentPoolOutput"], () => require("./getAgentPool"));

export { GetHybridIdentityMetadatumArgs, GetHybridIdentityMetadatumResult, GetHybridIdentityMetadatumOutputArgs } from "./getHybridIdentityMetadatum";
export const getHybridIdentityMetadatum: typeof import("./getHybridIdentityMetadatum").getHybridIdentityMetadatum = null as any;
export const getHybridIdentityMetadatumOutput: typeof import("./getHybridIdentityMetadatum").getHybridIdentityMetadatumOutput = null as any;
utilities.lazyLoad(exports, ["getHybridIdentityMetadatum","getHybridIdentityMetadatumOutput"], () => require("./getHybridIdentityMetadatum"));

export { GetProvisionedClusterArgs, GetProvisionedClusterResult, GetProvisionedClusterOutputArgs } from "./getProvisionedCluster";
export const getProvisionedCluster: typeof import("./getProvisionedCluster").getProvisionedCluster = null as any;
export const getProvisionedClusterOutput: typeof import("./getProvisionedCluster").getProvisionedClusterOutput = null as any;
utilities.lazyLoad(exports, ["getProvisionedCluster","getProvisionedClusterOutput"], () => require("./getProvisionedCluster"));

export { GetStorageSpaceRetrieveArgs, GetStorageSpaceRetrieveResult, GetStorageSpaceRetrieveOutputArgs } from "./getStorageSpaceRetrieve";
export const getStorageSpaceRetrieve: typeof import("./getStorageSpaceRetrieve").getStorageSpaceRetrieve = null as any;
export const getStorageSpaceRetrieveOutput: typeof import("./getStorageSpaceRetrieve").getStorageSpaceRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getStorageSpaceRetrieve","getStorageSpaceRetrieveOutput"], () => require("./getStorageSpaceRetrieve"));

export { GetVirtualNetworkRetrieveArgs, GetVirtualNetworkRetrieveResult, GetVirtualNetworkRetrieveOutputArgs } from "./getVirtualNetworkRetrieve";
export const getVirtualNetworkRetrieve: typeof import("./getVirtualNetworkRetrieve").getVirtualNetworkRetrieve = null as any;
export const getVirtualNetworkRetrieveOutput: typeof import("./getVirtualNetworkRetrieve").getVirtualNetworkRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkRetrieve","getVirtualNetworkRetrieveOutput"], () => require("./getVirtualNetworkRetrieve"));

export { HybridIdentityMetadatumArgs } from "./hybridIdentityMetadatum";
export type HybridIdentityMetadatum = import("./hybridIdentityMetadatum").HybridIdentityMetadatum;
export const HybridIdentityMetadatum: typeof import("./hybridIdentityMetadatum").HybridIdentityMetadatum = null as any;
utilities.lazyLoad(exports, ["HybridIdentityMetadatum"], () => require("./hybridIdentityMetadatum"));

export { ProvisionedClusterArgs } from "./provisionedCluster";
export type ProvisionedCluster = import("./provisionedCluster").ProvisionedCluster;
export const ProvisionedCluster: typeof import("./provisionedCluster").ProvisionedCluster = null as any;
utilities.lazyLoad(exports, ["ProvisionedCluster"], () => require("./provisionedCluster"));

export { StorageSpaceRetrieveArgs } from "./storageSpaceRetrieve";
export type StorageSpaceRetrieve = import("./storageSpaceRetrieve").StorageSpaceRetrieve;
export const StorageSpaceRetrieve: typeof import("./storageSpaceRetrieve").StorageSpaceRetrieve = null as any;
utilities.lazyLoad(exports, ["StorageSpaceRetrieve"], () => require("./storageSpaceRetrieve"));

export { VirtualNetworkRetrieveArgs } from "./virtualNetworkRetrieve";
export type VirtualNetworkRetrieve = import("./virtualNetworkRetrieve").VirtualNetworkRetrieve;
export const VirtualNetworkRetrieve: typeof import("./virtualNetworkRetrieve").VirtualNetworkRetrieve = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkRetrieve"], () => require("./virtualNetworkRetrieve"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridcontainerservice/v20220901preview:AgentPool":
                return new AgentPool(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20220901preview:HybridIdentityMetadatum":
                return new HybridIdentityMetadatum(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20220901preview:ProvisionedCluster":
                return new ProvisionedCluster(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20220901preview:StorageSpaceRetrieve":
                return new StorageSpaceRetrieve(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20220901preview:VirtualNetworkRetrieve":
                return new VirtualNetworkRetrieve(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridcontainerservice/v20220901preview", _module)