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

export { GetMonitoredSubscriptionArgs, GetMonitoredSubscriptionResult, GetMonitoredSubscriptionOutputArgs } from "./getMonitoredSubscription";
export const getMonitoredSubscription: typeof import("./getMonitoredSubscription").getMonitoredSubscription = null as any;
export const getMonitoredSubscriptionOutput: typeof import("./getMonitoredSubscription").getMonitoredSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getMonitoredSubscription","getMonitoredSubscriptionOutput"], () => require("./getMonitoredSubscription"));

export { GetOpenAIArgs, GetOpenAIResult, GetOpenAIOutputArgs } from "./getOpenAI";
export const getOpenAI: typeof import("./getOpenAI").getOpenAI = null as any;
export const getOpenAIOutput: typeof import("./getOpenAI").getOpenAIOutput = null as any;
utilities.lazyLoad(exports, ["getOpenAI","getOpenAIOutput"], () => require("./getOpenAI"));

export { GetOpenAIStatusArgs, GetOpenAIStatusResult, GetOpenAIStatusOutputArgs } from "./getOpenAIStatus";
export const getOpenAIStatus: typeof import("./getOpenAIStatus").getOpenAIStatus = null as any;
export const getOpenAIStatusOutput: typeof import("./getOpenAIStatus").getOpenAIStatusOutput = null as any;
utilities.lazyLoad(exports, ["getOpenAIStatus","getOpenAIStatusOutput"], () => require("./getOpenAIStatus"));

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

export { ListListAssociatedTrafficFilterArgs, ListListAssociatedTrafficFilterResult, ListListAssociatedTrafficFilterOutputArgs } from "./listListAssociatedTrafficFilter";
export const listListAssociatedTrafficFilter: typeof import("./listListAssociatedTrafficFilter").listListAssociatedTrafficFilter = null as any;
export const listListAssociatedTrafficFilterOutput: typeof import("./listListAssociatedTrafficFilter").listListAssociatedTrafficFilterOutput = null as any;
utilities.lazyLoad(exports, ["listListAssociatedTrafficFilter","listListAssociatedTrafficFilterOutput"], () => require("./listListAssociatedTrafficFilter"));

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

export { MonitorArgs } from "./monitor";
export type Monitor = import("./monitor").Monitor;
export const Monitor: typeof import("./monitor").Monitor = null as any;
utilities.lazyLoad(exports, ["Monitor"], () => require("./monitor"));

export { MonitoredSubscriptionArgs } from "./monitoredSubscription";
export type MonitoredSubscription = import("./monitoredSubscription").MonitoredSubscription;
export const MonitoredSubscription: typeof import("./monitoredSubscription").MonitoredSubscription = null as any;
utilities.lazyLoad(exports, ["MonitoredSubscription"], () => require("./monitoredSubscription"));

export { OpenAIArgs } from "./openAI";
export type OpenAI = import("./openAI").OpenAI;
export const OpenAI: typeof import("./openAI").OpenAI = null as any;
utilities.lazyLoad(exports, ["OpenAI"], () => require("./openAI"));

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
            case "azure-native:elastic:Monitor":
                return new Monitor(name, <any>undefined, { urn })
            case "azure-native:elastic:MonitoredSubscription":
                return new MonitoredSubscription(name, <any>undefined, { urn })
            case "azure-native:elastic:OpenAI":
                return new OpenAI(name, <any>undefined, { urn })
            case "azure-native:elastic:TagRule":
                return new TagRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "elastic", _module)