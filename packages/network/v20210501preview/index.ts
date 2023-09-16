import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AdminRuleArgs } from "./adminRule";
export type AdminRule = import("./adminRule").AdminRule;
export const AdminRule: typeof import("./adminRule").AdminRule = null as any;
utilities.lazyLoad(exports, ["AdminRule"], () => require("./adminRule"));

export { AdminRuleCollectionArgs } from "./adminRuleCollection";
export type AdminRuleCollection = import("./adminRuleCollection").AdminRuleCollection;
export const AdminRuleCollection: typeof import("./adminRuleCollection").AdminRuleCollection = null as any;
utilities.lazyLoad(exports, ["AdminRuleCollection"], () => require("./adminRuleCollection"));

export { ConnectivityConfigurationArgs } from "./connectivityConfiguration";
export type ConnectivityConfiguration = import("./connectivityConfiguration").ConnectivityConfiguration;
export const ConnectivityConfiguration: typeof import("./connectivityConfiguration").ConnectivityConfiguration = null as any;
utilities.lazyLoad(exports, ["ConnectivityConfiguration"], () => require("./connectivityConfiguration"));

export { DefaultAdminRuleArgs } from "./defaultAdminRule";
export type DefaultAdminRule = import("./defaultAdminRule").DefaultAdminRule;
export const DefaultAdminRule: typeof import("./defaultAdminRule").DefaultAdminRule = null as any;
utilities.lazyLoad(exports, ["DefaultAdminRule"], () => require("./defaultAdminRule"));

export { DefaultUserRuleArgs } from "./defaultUserRule";
export type DefaultUserRule = import("./defaultUserRule").DefaultUserRule;
export const DefaultUserRule: typeof import("./defaultUserRule").DefaultUserRule = null as any;
utilities.lazyLoad(exports, ["DefaultUserRule"], () => require("./defaultUserRule"));

export { GetAdminRuleArgs, GetAdminRuleResult, GetAdminRuleOutputArgs } from "./getAdminRule";
export const getAdminRule: typeof import("./getAdminRule").getAdminRule = null as any;
export const getAdminRuleOutput: typeof import("./getAdminRule").getAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["getAdminRule","getAdminRuleOutput"], () => require("./getAdminRule"));

export { GetAdminRuleCollectionArgs, GetAdminRuleCollectionResult, GetAdminRuleCollectionOutputArgs } from "./getAdminRuleCollection";
export const getAdminRuleCollection: typeof import("./getAdminRuleCollection").getAdminRuleCollection = null as any;
export const getAdminRuleCollectionOutput: typeof import("./getAdminRuleCollection").getAdminRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getAdminRuleCollection","getAdminRuleCollectionOutput"], () => require("./getAdminRuleCollection"));

export { GetConnectivityConfigurationArgs, GetConnectivityConfigurationResult, GetConnectivityConfigurationOutputArgs } from "./getConnectivityConfiguration";
export const getConnectivityConfiguration: typeof import("./getConnectivityConfiguration").getConnectivityConfiguration = null as any;
export const getConnectivityConfigurationOutput: typeof import("./getConnectivityConfiguration").getConnectivityConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getConnectivityConfiguration","getConnectivityConfigurationOutput"], () => require("./getConnectivityConfiguration"));

export { GetDefaultAdminRuleArgs, GetDefaultAdminRuleResult, GetDefaultAdminRuleOutputArgs } from "./getDefaultAdminRule";
export const getDefaultAdminRule: typeof import("./getDefaultAdminRule").getDefaultAdminRule = null as any;
export const getDefaultAdminRuleOutput: typeof import("./getDefaultAdminRule").getDefaultAdminRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDefaultAdminRule","getDefaultAdminRuleOutput"], () => require("./getDefaultAdminRule"));

export { GetDefaultUserRuleArgs, GetDefaultUserRuleResult, GetDefaultUserRuleOutputArgs } from "./getDefaultUserRule";
export const getDefaultUserRule: typeof import("./getDefaultUserRule").getDefaultUserRule = null as any;
export const getDefaultUserRuleOutput: typeof import("./getDefaultUserRule").getDefaultUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDefaultUserRule","getDefaultUserRuleOutput"], () => require("./getDefaultUserRule"));

export { GetNetworkGroupArgs, GetNetworkGroupResult, GetNetworkGroupOutputArgs } from "./getNetworkGroup";
export const getNetworkGroup: typeof import("./getNetworkGroup").getNetworkGroup = null as any;
export const getNetworkGroupOutput: typeof import("./getNetworkGroup").getNetworkGroupOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkGroup","getNetworkGroupOutput"], () => require("./getNetworkGroup"));

export { GetNetworkManagerArgs, GetNetworkManagerResult, GetNetworkManagerOutputArgs } from "./getNetworkManager";
export const getNetworkManager: typeof import("./getNetworkManager").getNetworkManager = null as any;
export const getNetworkManagerOutput: typeof import("./getNetworkManager").getNetworkManagerOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkManager","getNetworkManagerOutput"], () => require("./getNetworkManager"));

export { GetSecurityAdminConfigurationArgs, GetSecurityAdminConfigurationResult, GetSecurityAdminConfigurationOutputArgs } from "./getSecurityAdminConfiguration";
export const getSecurityAdminConfiguration: typeof import("./getSecurityAdminConfiguration").getSecurityAdminConfiguration = null as any;
export const getSecurityAdminConfigurationOutput: typeof import("./getSecurityAdminConfiguration").getSecurityAdminConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityAdminConfiguration","getSecurityAdminConfigurationOutput"], () => require("./getSecurityAdminConfiguration"));

export { GetSecurityUserConfigurationArgs, GetSecurityUserConfigurationResult, GetSecurityUserConfigurationOutputArgs } from "./getSecurityUserConfiguration";
export const getSecurityUserConfiguration: typeof import("./getSecurityUserConfiguration").getSecurityUserConfiguration = null as any;
export const getSecurityUserConfigurationOutput: typeof import("./getSecurityUserConfiguration").getSecurityUserConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getSecurityUserConfiguration","getSecurityUserConfigurationOutput"], () => require("./getSecurityUserConfiguration"));

export { GetUserRuleArgs, GetUserRuleResult, GetUserRuleOutputArgs } from "./getUserRule";
export const getUserRule: typeof import("./getUserRule").getUserRule = null as any;
export const getUserRuleOutput: typeof import("./getUserRule").getUserRuleOutput = null as any;
utilities.lazyLoad(exports, ["getUserRule","getUserRuleOutput"], () => require("./getUserRule"));

export { GetUserRuleCollectionArgs, GetUserRuleCollectionResult, GetUserRuleCollectionOutputArgs } from "./getUserRuleCollection";
export const getUserRuleCollection: typeof import("./getUserRuleCollection").getUserRuleCollection = null as any;
export const getUserRuleCollectionOutput: typeof import("./getUserRuleCollection").getUserRuleCollectionOutput = null as any;
utilities.lazyLoad(exports, ["getUserRuleCollection","getUserRuleCollectionOutput"], () => require("./getUserRuleCollection"));

export { ListActiveConnectivityConfigurationsArgs, ListActiveConnectivityConfigurationsResult, ListActiveConnectivityConfigurationsOutputArgs } from "./listActiveConnectivityConfigurations";
export const listActiveConnectivityConfigurations: typeof import("./listActiveConnectivityConfigurations").listActiveConnectivityConfigurations = null as any;
export const listActiveConnectivityConfigurationsOutput: typeof import("./listActiveConnectivityConfigurations").listActiveConnectivityConfigurationsOutput = null as any;
utilities.lazyLoad(exports, ["listActiveConnectivityConfigurations","listActiveConnectivityConfigurationsOutput"], () => require("./listActiveConnectivityConfigurations"));

export { ListActiveSecurityAdminRulesArgs, ListActiveSecurityAdminRulesResult, ListActiveSecurityAdminRulesOutputArgs } from "./listActiveSecurityAdminRules";
export const listActiveSecurityAdminRules: typeof import("./listActiveSecurityAdminRules").listActiveSecurityAdminRules = null as any;
export const listActiveSecurityAdminRulesOutput: typeof import("./listActiveSecurityAdminRules").listActiveSecurityAdminRulesOutput = null as any;
utilities.lazyLoad(exports, ["listActiveSecurityAdminRules","listActiveSecurityAdminRulesOutput"], () => require("./listActiveSecurityAdminRules"));

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

export { ListNetworkManagerDeploymentStatusArgs, ListNetworkManagerDeploymentStatusResult, ListNetworkManagerDeploymentStatusOutputArgs } from "./listNetworkManagerDeploymentStatus";
export const listNetworkManagerDeploymentStatus: typeof import("./listNetworkManagerDeploymentStatus").listNetworkManagerDeploymentStatus = null as any;
export const listNetworkManagerDeploymentStatusOutput: typeof import("./listNetworkManagerDeploymentStatus").listNetworkManagerDeploymentStatusOutput = null as any;
utilities.lazyLoad(exports, ["listNetworkManagerDeploymentStatus","listNetworkManagerDeploymentStatusOutput"], () => require("./listNetworkManagerDeploymentStatus"));

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

export { NetworkManagerArgs } from "./networkManager";
export type NetworkManager = import("./networkManager").NetworkManager;
export const NetworkManager: typeof import("./networkManager").NetworkManager = null as any;
utilities.lazyLoad(exports, ["NetworkManager"], () => require("./networkManager"));

export { SecurityAdminConfigurationArgs } from "./securityAdminConfiguration";
export type SecurityAdminConfiguration = import("./securityAdminConfiguration").SecurityAdminConfiguration;
export const SecurityAdminConfiguration: typeof import("./securityAdminConfiguration").SecurityAdminConfiguration = null as any;
utilities.lazyLoad(exports, ["SecurityAdminConfiguration"], () => require("./securityAdminConfiguration"));

export { SecurityUserConfigurationArgs } from "./securityUserConfiguration";
export type SecurityUserConfiguration = import("./securityUserConfiguration").SecurityUserConfiguration;
export const SecurityUserConfiguration: typeof import("./securityUserConfiguration").SecurityUserConfiguration = null as any;
utilities.lazyLoad(exports, ["SecurityUserConfiguration"], () => require("./securityUserConfiguration"));

export { UserRuleArgs } from "./userRule";
export type UserRule = import("./userRule").UserRule;
export const UserRule: typeof import("./userRule").UserRule = null as any;
utilities.lazyLoad(exports, ["UserRule"], () => require("./userRule"));

export { UserRuleCollectionArgs } from "./userRuleCollection";
export type UserRuleCollection = import("./userRuleCollection").UserRuleCollection;
export const UserRuleCollection: typeof import("./userRuleCollection").UserRuleCollection = null as any;
utilities.lazyLoad(exports, ["UserRuleCollection"], () => require("./userRuleCollection"));


// Export enums:
export * from "../types/enums/v20210501preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20210501preview:AdminRule":
                return new AdminRule(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:AdminRuleCollection":
                return new AdminRuleCollection(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:ConnectivityConfiguration":
                return new ConnectivityConfiguration(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:DefaultAdminRule":
                return new DefaultAdminRule(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:DefaultUserRule":
                return new DefaultUserRule(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:NetworkGroup":
                return new NetworkGroup(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:NetworkManager":
                return new NetworkManager(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:SecurityAdminConfiguration":
                return new SecurityAdminConfiguration(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:SecurityUserConfiguration":
                return new SecurityUserConfiguration(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:UserRule":
                return new UserRule(name, <any>undefined, { urn })
            case "azure-native:network/v20210501preview:UserRuleCollection":
                return new UserRuleCollection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20210501preview", _module)
