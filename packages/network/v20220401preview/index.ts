import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DefaultUserRuleArgs } from "./defaultUserRule";
export type DefaultUserRule = import("./defaultUserRule").DefaultUserRule;
export const DefaultUserRule: typeof import("./defaultUserRule").DefaultUserRule = null as any;
utilities.lazyLoad(exports, ["DefaultUserRule"], () => require("./defaultUserRule"));

export { EndpointArgs } from "./endpoint";
export type Endpoint = import("./endpoint").Endpoint;
export const Endpoint: typeof import("./endpoint").Endpoint = null as any;
utilities.lazyLoad(exports, ["Endpoint"], () => require("./endpoint"));

export { GetDefaultUserRuleArgs, GetDefaultUserRuleResult, GetDefaultUserRuleOutputArgs } from "./getDefaultUserRule";
export const getDefaultUserRule: typeof import("./getDefaultUserRule").getDefaultUserRule = null as any;
export const getDefaultUserRuleOutput: typeof import("./getDefaultUserRule").getDefaultUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDefaultUserRule","getDefaultUserRuleOutput"], () => require("./getDefaultUserRule"));

export { GetEndpointArgs, GetEndpointResult, GetEndpointOutputArgs } from "./getEndpoint";
export const getEndpoint: typeof import("./getEndpoint").getEndpoint = null as any;
export const getEndpointOutput: typeof import("./getEndpoint").getEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getEndpoint","getEndpointOutput"], () => require("./getEndpoint"));

export { GetNetworkGroupArgs, GetNetworkGroupResult, GetNetworkGroupOutputArgs } from "./getNetworkGroup";
export const getNetworkGroup: typeof import("./getNetworkGroup").getNetworkGroup = null as any;
export const getNetworkGroupOutput: typeof import("./getNetworkGroup").getNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkGroup","getNetworkGroupOutput"], () => require("./getNetworkGroup"));

export { GetProfileArgs, GetProfileResult, GetProfileOutputArgs } from "./getProfile";
export const getProfile: typeof import("./getProfile").getProfile = null as any;
export const getProfileOutput: typeof import("./getProfile").getProfileOutput = null as any;
utilities.lazyLoad(exports, ["getProfile","getProfileOutput"], () => require("./getProfile"));

export { GetSecurityUserConfigurationArgs, GetSecurityUserConfigurationResult, GetSecurityUserConfigurationOutputArgs } from "./getSecurityUserConfiguration";
export const getSecurityUserConfiguration: typeof import("./getSecurityUserConfiguration").getSecurityUserConfiguration = null as any;
export const getSecurityUserConfigurationOutput: typeof import("./getSecurityUserConfiguration").getSecurityUserConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityUserConfiguration","getSecurityUserConfigurationOutput"], () => require("./getSecurityUserConfiguration"));

export { GetTrafficManagerUserMetricsKeyArgs, GetTrafficManagerUserMetricsKeyResult } from "./getTrafficManagerUserMetricsKey";
export const getTrafficManagerUserMetricsKey: typeof import("./getTrafficManagerUserMetricsKey").getTrafficManagerUserMetricsKey = null as any;
export const getTrafficManagerUserMetricsKeyOutput: typeof import("./getTrafficManagerUserMetricsKey").getTrafficManagerUserMetricsKeyOutput = null as any;
utilities.lazyLoad(exports, ["getTrafficManagerUserMetricsKey","getTrafficManagerUserMetricsKeyOutput"], () => require("./getTrafficManagerUserMetricsKey"));

export { GetUserRuleArgs, GetUserRuleResult, GetUserRuleOutputArgs } from "./getUserRule";
export const getUserRule: typeof import("./getUserRule").getUserRule = null as any;
export const getUserRuleOutput: typeof import("./getUserRule").getUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["getUserRule","getUserRuleOutput"], () => require("./getUserRule"));

export { GetUserRuleCollectionArgs, GetUserRuleCollectionResult, GetUserRuleCollectionOutputArgs } from "./getUserRuleCollection";
export const getUserRuleCollection: typeof import("./getUserRuleCollection").getUserRuleCollection = null as any;
export const getUserRuleCollectionOutput: typeof import("./getUserRuleCollection").getUserRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getUserRuleCollection","getUserRuleCollectionOutput"], () => require("./getUserRuleCollection"));

export { ListActiveSecurityUserRulesArgs, ListActiveSecurityUserRulesResult, ListActiveSecurityUserRulesOutputArgs } from "./listActiveSecurityUserRules";
export const listActiveSecurityUserRules: typeof import("./listActiveSecurityUserRules").listActiveSecurityUserRules = null as any;
export const listActiveSecurityUserRulesOutput: typeof import("./listActiveSecurityUserRules").listActiveSecurityUserRulesOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityUserRules","listActiveSecurityUserRulesOutput"], () => require("./listActiveSecurityUserRules"));

export { ListEffectiveVirtualNetworkByNetworkManagerArgs, ListEffectiveVirtualNetworkByNetworkManagerResult, ListEffectiveVirtualNetworkByNetworkManagerOutputArgs } from "./listEffectiveVirtualNetworkByNetworkManager";
export const listEffectiveVirtualNetworkByNetworkManager: typeof import("./listEffectiveVirtualNetworkByNetworkManager").listEffectiveVirtualNetworkByNetworkManager = null as any;
export const listEffectiveVirtualNetworkByNetworkManagerOutput: typeof import("./listEffectiveVirtualNetworkByNetworkManager").listEffectiveVirtualNetworkByNetworkManagerOutput = null as any;
utilities.lazyLoad(exports, ["listEffectiveVirtualNetworkByNetworkManager","listEffectiveVirtualNetworkByNetworkManagerOutput"], () => require("./listEffectiveVirtualNetworkByNetworkManager"));

export { ListListEffectiveVirtualNetworkByNetworkGroupArgs, ListListEffectiveVirtualNetworkByNetworkGroupResult, ListListEffectiveVirtualNetworkByNetworkGroupOutputArgs } from "./listListEffectiveVirtualNetworkByNetworkGroup";
export const listListEffectiveVirtualNetworkByNetworkGroup: typeof import("./listListEffectiveVirtualNetworkByNetworkGroup").listListEffectiveVirtualNetworkByNetworkGroup = null as any;
export const listListEffectiveVirtualNetworkByNetworkGroupOutput: typeof import("./listListEffectiveVirtualNetworkByNetworkGroup").listListEffectiveVirtualNetworkByNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["listListEffectiveVirtualNetworkByNetworkGroup","listListEffectiveVirtualNetworkByNetworkGroupOutput"], () => require("./listListEffectiveVirtualNetworkByNetworkGroup"));

export { ListNetworkManagerEffectiveConnectivityConfigurationsArgs, ListNetworkManagerEffectiveConnectivityConfigurationsResult, ListNetworkManagerEffectiveConnectivityConfigurationsOutputArgs } from "./listNetworkManagerEffectiveConnectivityConfigurations";
export const listNetworkManagerEffectiveConnectivityConfigurations: typeof import("./listNetworkManagerEffectiveConnectivityConfigurations").listNetworkManagerEffectiveConnectivityConfigurations = null as any;
export const listNetworkManagerEffectiveConnectivityConfigurationsOutput: typeof import("./listNetworkManagerEffectiveConnectivityConfigurations").listNetworkManagerEffectiveConnectivityConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerEffectiveConnectivityConfigurations","listNetworkManagerEffectiveConnectivityConfigurationsOutput"], () => require("./listNetworkManagerEffectiveConnectivityConfigurations"));

export { ListNetworkManagerEffectiveSecurityAdminRulesArgs, ListNetworkManagerEffectiveSecurityAdminRulesResult, ListNetworkManagerEffectiveSecurityAdminRulesOutputArgs } from "./listNetworkManagerEffectiveSecurityAdminRules";
export const listNetworkManagerEffectiveSecurityAdminRules: typeof import("./listNetworkManagerEffectiveSecurityAdminRules").listNetworkManagerEffectiveSecurityAdminRules = null as any;
export const listNetworkManagerEffectiveSecurityAdminRulesOutput: typeof import("./listNetworkManagerEffectiveSecurityAdminRules").listNetworkManagerEffectiveSecurityAdminRulesOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerEffectiveSecurityAdminRules","listNetworkManagerEffectiveSecurityAdminRulesOutput"], () => require("./listNetworkManagerEffectiveSecurityAdminRules"));

export { NetworkGroupArgs } from "./networkGroup";
export type NetworkGroup = import("./networkGroup").NetworkGroup;
export const NetworkGroup: typeof import("./networkGroup").NetworkGroup = null as any;
utilities.lazyLoad(exports, ["NetworkGroup"], () => require("./networkGroup"));

export { ProfileArgs } from "./profile";
export type Profile = import("./profile").Profile;
export const Profile: typeof import("./profile").Profile = null as any;
utilities.lazyLoad(exports, ["Profile"], () => require("./profile"));

export { SecurityUserConfigurationArgs } from "./securityUserConfiguration";
export type SecurityUserConfiguration = import("./securityUserConfiguration").SecurityUserConfiguration;
export const SecurityUserConfiguration: typeof import("./securityUserConfiguration").SecurityUserConfiguration = null as any;
utilities.lazyLoad(exports, ["SecurityUserConfiguration"], () => require("./securityUserConfiguration"));

export { TrafficManagerUserMetricsKeyArgs } from "./trafficManagerUserMetricsKey";
export type TrafficManagerUserMetricsKey = import("./trafficManagerUserMetricsKey").TrafficManagerUserMetricsKey;
export const TrafficManagerUserMetricsKey: typeof import("./trafficManagerUserMetricsKey").TrafficManagerUserMetricsKey = null as any;
utilities.lazyLoad(exports, ["TrafficManagerUserMetricsKey"], () => require("./trafficManagerUserMetricsKey"));

export { UserRuleArgs } from "./userRule";
export type UserRule = import("./userRule").UserRule;
export const UserRule: typeof import("./userRule").UserRule = null as any;
utilities.lazyLoad(exports, ["UserRule"], () => require("./userRule"));

export { UserRuleCollectionArgs } from "./userRuleCollection";
export type UserRuleCollection = import("./userRuleCollection").UserRuleCollection;
export const UserRuleCollection: typeof import("./userRuleCollection").UserRuleCollection = null as any;
utilities.lazyLoad(exports, ["UserRuleCollection"], () => require("./userRuleCollection"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20220401preview:DefaultUserRule":
                return new DefaultUserRule(name, <any>undefined, { urn })
            case "azure-native:network/v20220401preview:Endpoint":
                return new Endpoint(name, <any>undefined, { urn })
            case "azure-native:network/v20220401preview:NetworkGroup":
                return new NetworkGroup(name, <any>undefined, { urn })
            case "azure-native:network/v20220401preview:Profile":
                return new Profile(name, <any>undefined, { urn })
            case "azure-native:network/v20220401preview:SecurityUserConfiguration":
                return new SecurityUserConfiguration(name, <any>undefined, { urn })
            case "azure-native:network/v20220401preview:TrafficManagerUserMetricsKey":
                return new TrafficManagerUserMetricsKey(name, <any>undefined, { urn })
            case "azure-native:network/v20220401preview:UserRule":
                return new UserRule(name, <any>undefined, { urn })
            case "azure-native:network/v20220401preview:UserRuleCollection":
                return new UserRuleCollection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20220401preview", _module)