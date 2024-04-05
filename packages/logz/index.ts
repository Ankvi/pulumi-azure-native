import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMetricsSourceArgs, GetMetricsSourceResult, GetMetricsSourceOutputArgs } from "./getMetricsSource";
export const getMetricsSource: typeof import("./getMetricsSource").getMetricsSource = null as any;
export const getMetricsSourceOutput: typeof import("./getMetricsSource").getMetricsSourceOutput = null as any;
utilities.lazyLoad(exports, ["getMetricsSource","getMetricsSourceOutput"], () => require("./getMetricsSource"));

export { GetMetricsSourceTagRuleArgs, GetMetricsSourceTagRuleResult, GetMetricsSourceTagRuleOutputArgs } from "./getMetricsSourceTagRule";
export const getMetricsSourceTagRule: typeof import("./getMetricsSourceTagRule").getMetricsSourceTagRule = null as any;
export const getMetricsSourceTagRuleOutput: typeof import("./getMetricsSourceTagRule").getMetricsSourceTagRuleOutput = null as any;
utilities.lazyLoad(exports, ["getMetricsSourceTagRule","getMetricsSourceTagRuleOutput"], () => require("./getMetricsSourceTagRule"));

export { GetMonitorArgs, GetMonitorResult, GetMonitorOutputArgs } from "./getMonitor";
export const getMonitor: typeof import("./getMonitor").getMonitor = null as any;
export const getMonitorOutput: typeof import("./getMonitor").getMonitorOutput = null as any;
utilities.lazyLoad(exports, ["getMonitor","getMonitorOutput"], () => require("./getMonitor"));

export { GetSubAccountArgs, GetSubAccountResult, GetSubAccountOutputArgs } from "./getSubAccount";
export const getSubAccount: typeof import("./getSubAccount").getSubAccount = null as any;
export const getSubAccountOutput: typeof import("./getSubAccount").getSubAccountOutput = null as any;
utilities.lazyLoad(exports, ["getSubAccount","getSubAccountOutput"], () => require("./getSubAccount"));

export { GetSubAccountTagRuleArgs, GetSubAccountTagRuleResult, GetSubAccountTagRuleOutputArgs } from "./getSubAccountTagRule";
export const getSubAccountTagRule: typeof import("./getSubAccountTagRule").getSubAccountTagRule = null as any;
export const getSubAccountTagRuleOutput: typeof import("./getSubAccountTagRule").getSubAccountTagRuleOutput = null as any;
utilities.lazyLoad(exports, ["getSubAccountTagRule","getSubAccountTagRuleOutput"], () => require("./getSubAccountTagRule"));

export { GetTagRuleArgs, GetTagRuleResult, GetTagRuleOutputArgs } from "./getTagRule";
export const getTagRule: typeof import("./getTagRule").getTagRule = null as any;
export const getTagRuleOutput: typeof import("./getTagRule").getTagRuleOutput = null as any;
utilities.lazyLoad(exports, ["getTagRule","getTagRuleOutput"], () => require("./getTagRule"));

export { ListMonitorMonitoredResourcesArgs, ListMonitorMonitoredResourcesResult, ListMonitorMonitoredResourcesOutputArgs } from "./listMonitorMonitoredResources";
export const listMonitorMonitoredResources: typeof import("./listMonitorMonitoredResources").listMonitorMonitoredResources = null as any;
export const listMonitorMonitoredResourcesOutput: typeof import("./listMonitorMonitoredResources").listMonitorMonitoredResourcesOutput = null as any;
utilities.lazyLoad(exports, ["listMonitorMonitoredResources","listMonitorMonitoredResourcesOutput"], () => require("./listMonitorMonitoredResources"));

export { ListMonitorUserRolesArgs, ListMonitorUserRolesResult, ListMonitorUserRolesOutputArgs } from "./listMonitorUserRoles";
export const listMonitorUserRoles: typeof import("./listMonitorUserRoles").listMonitorUserRoles = null as any;
export const listMonitorUserRolesOutput: typeof import("./listMonitorUserRoles").listMonitorUserRolesOutput = null as any;
utilities.lazyLoad(exports, ["listMonitorUserRoles","listMonitorUserRolesOutput"], () => require("./listMonitorUserRoles"));

export { ListMonitorVMHostsArgs, ListMonitorVMHostsResult, ListMonitorVMHostsOutputArgs } from "./listMonitorVMHosts";
export const listMonitorVMHosts: typeof import("./listMonitorVMHosts").listMonitorVMHosts = null as any;
export const listMonitorVMHostsOutput: typeof import("./listMonitorVMHosts").listMonitorVMHostsOutput = null as any;
utilities.lazyLoad(exports, ["listMonitorVMHosts","listMonitorVMHostsOutput"], () => require("./listMonitorVMHosts"));

export { ListSubAccountMonitoredResourcesArgs, ListSubAccountMonitoredResourcesResult, ListSubAccountMonitoredResourcesOutputArgs } from "./listSubAccountMonitoredResources";
export const listSubAccountMonitoredResources: typeof import("./listSubAccountMonitoredResources").listSubAccountMonitoredResources = null as any;
export const listSubAccountMonitoredResourcesOutput: typeof import("./listSubAccountMonitoredResources").listSubAccountMonitoredResourcesOutput = null as any;
utilities.lazyLoad(exports, ["listSubAccountMonitoredResources","listSubAccountMonitoredResourcesOutput"], () => require("./listSubAccountMonitoredResources"));

export { ListSubAccountVMHostsArgs, ListSubAccountVMHostsResult, ListSubAccountVMHostsOutputArgs } from "./listSubAccountVMHosts";
export const listSubAccountVMHosts: typeof import("./listSubAccountVMHosts").listSubAccountVMHosts = null as any;
export const listSubAccountVMHostsOutput: typeof import("./listSubAccountVMHosts").listSubAccountVMHostsOutput = null as any;
utilities.lazyLoad(exports, ["listSubAccountVMHosts","listSubAccountVMHostsOutput"], () => require("./listSubAccountVMHosts"));

export { MetricsSourceArgs } from "./metricsSource";
export type MetricsSource = import("./metricsSource").MetricsSource;
export const MetricsSource: typeof import("./metricsSource").MetricsSource = null as any;
utilities.lazyLoad(exports, ["MetricsSource"], () => require("./metricsSource"));

export { MetricsSourceTagRuleArgs } from "./metricsSourceTagRule";
export type MetricsSourceTagRule = import("./metricsSourceTagRule").MetricsSourceTagRule;
export const MetricsSourceTagRule: typeof import("./metricsSourceTagRule").MetricsSourceTagRule = null as any;
utilities.lazyLoad(exports, ["MetricsSourceTagRule"], () => require("./metricsSourceTagRule"));

export { MonitorArgs } from "./monitor";
export type Monitor = import("./monitor").Monitor;
export const Monitor: typeof import("./monitor").Monitor = null as any;
utilities.lazyLoad(exports, ["Monitor"], () => require("./monitor"));

export { SubAccountArgs } from "./subAccount";
export type SubAccount = import("./subAccount").SubAccount;
export const SubAccount: typeof import("./subAccount").SubAccount = null as any;
utilities.lazyLoad(exports, ["SubAccount"], () => require("./subAccount"));

export { SubAccountTagRuleArgs } from "./subAccountTagRule";
export type SubAccountTagRule = import("./subAccountTagRule").SubAccountTagRule;
export const SubAccountTagRule: typeof import("./subAccountTagRule").SubAccountTagRule = null as any;
utilities.lazyLoad(exports, ["SubAccountTagRule"], () => require("./subAccountTagRule"));

export { TagRuleArgs } from "./tagRule";
export type TagRule = import("./tagRule").TagRule;
export const TagRule: typeof import("./tagRule").TagRule = null as any;
utilities.lazyLoad(exports, ["TagRule"], () => require("./tagRule"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as v20220101preview from "./v20220101preview";

export {
    v20220101preview,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:logz:MetricsSource":
                return new MetricsSource(name, <any>undefined, { urn })
            case "azure-native:logz:MetricsSourceTagRule":
                return new MetricsSourceTagRule(name, <any>undefined, { urn })
            case "azure-native:logz:Monitor":
                return new Monitor(name, <any>undefined, { urn })
            case "azure-native:logz:SubAccount":
                return new SubAccount(name, <any>undefined, { urn })
            case "azure-native:logz:SubAccountTagRule":
                return new SubAccountTagRule(name, <any>undefined, { urn })
            case "azure-native:logz:TagRule":
                return new TagRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "logz", _module)