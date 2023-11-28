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

export { GetKubernetesVersionsArgs, GetKubernetesVersionsResult, GetKubernetesVersionsOutputArgs } from "./getKubernetesVersions";
export const getKubernetesVersions: typeof import("./getKubernetesVersions").getKubernetesVersions = null as any;
export const getKubernetesVersionsOutput: typeof import("./getKubernetesVersions").getKubernetesVersionsOutput = null as any;
utilities.lazyLoad(exports, ["getKubernetesVersions","getKubernetesVersionsOutput"], () => require("./getKubernetesVersions"));

export { GetProvisionedClusterInstanceArgs, GetProvisionedClusterInstanceResult, GetProvisionedClusterInstanceOutputArgs } from "./getProvisionedClusterInstance";
export const getProvisionedClusterInstance: typeof import("./getProvisionedClusterInstance").getProvisionedClusterInstance = null as any;
export const getProvisionedClusterInstanceOutput: typeof import("./getProvisionedClusterInstance").getProvisionedClusterInstanceOutput = null as any;
utilities.lazyLoad(exports, ["getProvisionedClusterInstance","getProvisionedClusterInstanceOutput"], () => require("./getProvisionedClusterInstance"));

export { GetVMSkusArgs, GetVMSkusResult, GetVMSkusOutputArgs } from "./getVMSkus";
export const getVMSkus: typeof import("./getVMSkus").getVMSkus = null as any;
export const getVMSkusOutput: typeof import("./getVMSkus").getVMSkusOutput = null as any;
utilities.lazyLoad(exports, ["getVMSkus","getVMSkusOutput"], () => require("./getVMSkus"));

export { GetVirtualNetworkRetrieveArgs, GetVirtualNetworkRetrieveResult, GetVirtualNetworkRetrieveOutputArgs } from "./getVirtualNetworkRetrieve";
export const getVirtualNetworkRetrieve: typeof import("./getVirtualNetworkRetrieve").getVirtualNetworkRetrieve = null as any;
export const getVirtualNetworkRetrieveOutput: typeof import("./getVirtualNetworkRetrieve").getVirtualNetworkRetrieveOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkRetrieve","getVirtualNetworkRetrieveOutput"], () => require("./getVirtualNetworkRetrieve"));

export { HybridIdentityMetadatumArgs } from "./hybridIdentityMetadatum";
export type HybridIdentityMetadatum = import("./hybridIdentityMetadatum").HybridIdentityMetadatum;
export const HybridIdentityMetadatum: typeof import("./hybridIdentityMetadatum").HybridIdentityMetadatum = null as any;
utilities.lazyLoad(exports, ["HybridIdentityMetadatum"], () => require("./hybridIdentityMetadatum"));

export { KubernetesVersionsArgs } from "./kubernetesVersions";
export type KubernetesVersions = import("./kubernetesVersions").KubernetesVersions;
export const KubernetesVersions: typeof import("./kubernetesVersions").KubernetesVersions = null as any;
utilities.lazyLoad(exports, ["KubernetesVersions"], () => require("./kubernetesVersions"));

export { ListprovisionedClusterInstanceAdminKubeconfigArgs, ListprovisionedClusterInstanceAdminKubeconfigResult, ListprovisionedClusterInstanceAdminKubeconfigOutputArgs } from "./listprovisionedClusterInstanceAdminKubeconfig";
export const listprovisionedClusterInstanceAdminKubeconfig: typeof import("./listprovisionedClusterInstanceAdminKubeconfig").listprovisionedClusterInstanceAdminKubeconfig = null as any;
export const listprovisionedClusterInstanceAdminKubeconfigOutput: typeof import("./listprovisionedClusterInstanceAdminKubeconfig").listprovisionedClusterInstanceAdminKubeconfigOutput = null as any;
utilities.lazyLoad(exports, ["listprovisionedClusterInstanceAdminKubeconfig","listprovisionedClusterInstanceAdminKubeconfigOutput"], () => require("./listprovisionedClusterInstanceAdminKubeconfig"));

export { ListprovisionedClusterInstanceUserKubeconfigArgs, ListprovisionedClusterInstanceUserKubeconfigResult, ListprovisionedClusterInstanceUserKubeconfigOutputArgs } from "./listprovisionedClusterInstanceUserKubeconfig";
export const listprovisionedClusterInstanceUserKubeconfig: typeof import("./listprovisionedClusterInstanceUserKubeconfig").listprovisionedClusterInstanceUserKubeconfig = null as any;
export const listprovisionedClusterInstanceUserKubeconfigOutput: typeof import("./listprovisionedClusterInstanceUserKubeconfig").listprovisionedClusterInstanceUserKubeconfigOutput = null as any;
utilities.lazyLoad(exports, ["listprovisionedClusterInstanceUserKubeconfig","listprovisionedClusterInstanceUserKubeconfigOutput"], () => require("./listprovisionedClusterInstanceUserKubeconfig"));

export { ProvisionedClusterInstanceArgs } from "./provisionedClusterInstance";
export type ProvisionedClusterInstance = import("./provisionedClusterInstance").ProvisionedClusterInstance;
export const ProvisionedClusterInstance: typeof import("./provisionedClusterInstance").ProvisionedClusterInstance = null as any;
utilities.lazyLoad(exports, ["ProvisionedClusterInstance"], () => require("./provisionedClusterInstance"));

export { VirtualNetworkRetrieveArgs } from "./virtualNetworkRetrieve";
export type VirtualNetworkRetrieve = import("./virtualNetworkRetrieve").VirtualNetworkRetrieve;
export const VirtualNetworkRetrieve: typeof import("./virtualNetworkRetrieve").VirtualNetworkRetrieve = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkRetrieve"], () => require("./virtualNetworkRetrieve"));

export { VMSkusArgs } from "./vmskus";
export type VMSkus = import("./vmskus").VMSkus;
export const VMSkus: typeof import("./vmskus").VMSkus = null as any;
utilities.lazyLoad(exports, ["VMSkus"], () => require("./vmskus"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:hybridcontainerservice/v20231115preview:AgentPool":
                return new AgentPool(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20231115preview:HybridIdentityMetadatum":
                return new HybridIdentityMetadatum(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20231115preview:KubernetesVersions":
                return new KubernetesVersions(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20231115preview:ProvisionedClusterInstance":
                return new ProvisionedClusterInstance(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20231115preview:VMSkus":
                return new VMSkus(name, <any>undefined, { urn })
            case "azure-native:hybridcontainerservice/v20231115preview:VirtualNetworkRetrieve":
                return new VirtualNetworkRetrieve(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "hybridcontainerservice/v20231115preview", _module)
