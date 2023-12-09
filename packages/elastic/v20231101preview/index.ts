import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetBillingInfoArgs, GetBillingInfoResult, GetBillingInfoOutputArgs } from "./getBillingInfo";
export const getBillingInfo: typeof import("./getBillingInfo").getBillingInfo = null as any;
export const getBillingInfoOutput: typeof import("./getBillingInfo").getBillingInfoOutput = null as any;
utilities.lazyLoad(exports, ["getBillingInfo","getBillingInfoOutput"], () => require("./getBillingInfo"));

export { GetMonitorArgs, GetMonitorResult, GetMonitorOutputArgs } from "./getMonitor";
export const getMonitor: typeof import("./getMonitor").getMonitor = null as any;
export const getMonitorOutput: typeof import("./getMonitor").getMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getMonitor","getMonitorOutput"], () => require("./getMonitor"));

export { GetOrganizationApiKeyArgs, GetOrganizationApiKeyResult, GetOrganizationApiKeyOutputArgs } from "./getOrganizationApiKey";
export const getOrganizationApiKey: typeof import("./getOrganizationApiKey").getOrganizationApiKey = null as any;
export const getOrganizationApiKeyOutput: typeof import("./getOrganizationApiKey").getOrganizationApiKeyOutput = null as any;
utilities.lazyLoad(exports, ["getOrganizationApiKey","getOrganizationApiKeyOutput"], () => require("./getOrganizationApiKey"));

export { GetOrganizationElasticToAzureSubscriptionMappingArgs, GetOrganizationElasticToAzureSubscriptionMappingResult } from "./getOrganizationElasticToAzureSubscriptionMapping";
export const getOrganizationElasticToAzureSubscriptionMapping: typeof import("./getOrganizationElasticToAzureSubscriptionMapping").getOrganizationElasticToAzureSubscriptionMapping = null as any;
export const getOrganizationElasticToAzureSubscriptionMappingOutput: typeof import("./getOrganizationElasticToAzureSubscriptionMapping").getOrganizationElasticToAzureSubscriptionMappingOutput = null as any;
utilities.lazyLoad(exports, ["getOrganizationElasticToAzureSubscriptionMapping","getOrganizationElasticToAzureSubscriptionMappingOutput"], () => require("./getOrganizationElasticToAzureSubscriptionMapping"));

export { GetTagRuleArgs, GetTagRuleResult, GetTagRuleOutputArgs } from "./getTagRule";
export const getTagRule: typeof import("./getTagRule").getTagRule = null as any;
export const getTagRuleOutput: typeof import("./getTagRule").getTagRuleOutput = null as any;
utilities.lazyLoad(exports, ["getTagRule","getTagRuleOutput"], () => require("./getTagRule"));

export { ListAllTrafficFilterArgs, ListAllTrafficFilterResult, ListAllTrafficFilterOutputArgs } from "./listAllTrafficFilter";
export const listAllTrafficFilter: typeof import("./listAllTrafficFilter").listAllTrafficFilter = null as any;
export const listAllTrafficFilterOutput: typeof import("./listAllTrafficFilter").listAllTrafficFilterOutput = null as any;
utilities.lazyLoad(exports, ["listAllTrafficFilter","listAllTrafficFilterOutput"], () => require("./listAllTrafficFilter"));

export { ListConnectedPartnerResourceArgs, ListConnectedPartnerResourceResult, ListConnectedPartnerResourceOutputArgs } from "./listConnectedPartnerResource";
export const listConnectedPartnerResource: typeof import("./listConnectedPartnerResource").listConnectedPartnerResource = null as any;
export const listConnectedPartnerResourceOutput: typeof import("./listConnectedPartnerResource").listConnectedPartnerResourceOutput = null as any;
utilities.lazyLoad(exports, ["listConnectedPartnerResource","listConnectedPartnerResourceOutput"], () => require("./listConnectedPartnerResource"));

export { ListDeploymentInfoArgs, ListDeploymentInfoResult, ListDeploymentInfoOutputArgs } from "./listDeploymentInfo";
export const listDeploymentInfo: typeof import("./listDeploymentInfo").listDeploymentInfo = null as any;
export const listDeploymentInfoOutput: typeof import("./listDeploymentInfo").listDeploymentInfoOutput = null as any;
utilities.lazyLoad(exports, ["listDeploymentInfo","listDeploymentInfoOutput"], () => require("./listDeploymentInfo"));

export { ListMonitoredResourceArgs, ListMonitoredResourceResult, ListMonitoredResourceOutputArgs } from "./listMonitoredResource";
export const listMonitoredResource: typeof import("./listMonitoredResource").listMonitoredResource = null as any;
export const listMonitoredResourceOutput: typeof import("./listMonitoredResource").listMonitoredResourceOutput = null as any;
utilities.lazyLoad(exports, ["listMonitoredResource","listMonitoredResourceOutput"], () => require("./listMonitoredResource"));

export { ListUpgradableVersionDetailsArgs, ListUpgradableVersionDetailsResult, ListUpgradableVersionDetailsOutputArgs } from "./listUpgradableVersionDetails";
export const listUpgradableVersionDetails: typeof import("./listUpgradableVersionDetails").listUpgradableVersionDetails = null as any;
export const listUpgradableVersionDetailsOutput: typeof import("./listUpgradableVersionDetails").listUpgradableVersionDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listUpgradableVersionDetails","listUpgradableVersionDetailsOutput"], () => require("./listUpgradableVersionDetails"));

export { ListVMHostArgs, ListVMHostResult, ListVMHostOutputArgs } from "./listVMHost";
export const listVMHost: typeof import("./listVMHost").listVMHost = null as any;
export const listVMHostOutput: typeof import("./listVMHost").listVMHostOutput = null as any;
utilities.lazyLoad(exports, ["listVMHost","listVMHostOutput"], () => require("./listVMHost"));

export { ListlistAssociatedTrafficFilterArgs, ListlistAssociatedTrafficFilterResult, ListlistAssociatedTrafficFilterOutputArgs } from "./listlistAssociatedTrafficFilter";
export const listlistAssociatedTrafficFilter: typeof import("./listlistAssociatedTrafficFilter").listlistAssociatedTrafficFilter = null as any;
export const listlistAssociatedTrafficFilterOutput: typeof import("./listlistAssociatedTrafficFilter").listlistAssociatedTrafficFilterOutput = null as any;
utilities.lazyLoad(exports, ["listlistAssociatedTrafficFilter","listlistAssociatedTrafficFilterOutput"], () => require("./listlistAssociatedTrafficFilter"));

export { MonitorArgs } from "./monitor";
export type Monitor = import("./monitor").Monitor;
export const Monitor: typeof import("./monitor").Monitor = null as any;
utilities.lazyLoad(exports, ["Monitor"], () => require("./monitor"));

export { TagRuleArgs } from "./tagRule";
export type TagRule = import("./tagRule").TagRule;
export const TagRule: typeof import("./tagRule").TagRule = null as any;
utilities.lazyLoad(exports, ["TagRule"], () => require("./tagRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:elastic/v20231101preview:Monitor":
                return new Monitor(name, <any>undefined, { urn })
            case "azure-native:elastic/v20231101preview:TagRule":
                return new TagRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "elastic/v20231101preview", _module)
