import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DdosProtectionPlanArgs } from "./ddosProtectionPlan";
export type DdosProtectionPlan = import("./ddosProtectionPlan").DdosProtectionPlan;
export const DdosProtectionPlan: typeof import("./ddosProtectionPlan").DdosProtectionPlan = null as any;
utilities.lazyLoad(exports, ["DdosProtectionPlan"], () => require("./ddosProtectionPlan"));

export { GetDdosProtectionPlanArgs, GetDdosProtectionPlanResult, GetDdosProtectionPlanOutputArgs } from "./getDdosProtectionPlan";
export const getDdosProtectionPlan: typeof import("./getDdosProtectionPlan").getDdosProtectionPlan = null as any;
export const getDdosProtectionPlanOutput: typeof import("./getDdosProtectionPlan").getDdosProtectionPlanOutput = null as any;
utilities.lazyLoad(exports, ["getDdosProtectionPlan","getDdosProtectionPlanOutput"], () => require("./getDdosProtectionPlan"));

export { GetNetworkWatcherArgs, GetNetworkWatcherResult, GetNetworkWatcherOutputArgs } from "./getNetworkWatcher";
export const getNetworkWatcher: typeof import("./getNetworkWatcher").getNetworkWatcher = null as any;
export const getNetworkWatcherOutput: typeof import("./getNetworkWatcher").getNetworkWatcherOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkWatcher","getNetworkWatcherOutput"], () => require("./getNetworkWatcher"));

export { GetPolicyArgs, GetPolicyResult, GetPolicyOutputArgs } from "./getPolicy";
export const getPolicy: typeof import("./getPolicy").getPolicy = null as any;
export const getPolicyOutput: typeof import("./getPolicy").getPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPolicy","getPolicyOutput"], () => require("./getPolicy"));

export { NetworkWatcherArgs } from "./networkWatcher";
export type NetworkWatcher = import("./networkWatcher").NetworkWatcher;
export const NetworkWatcher: typeof import("./networkWatcher").NetworkWatcher = null as any;
utilities.lazyLoad(exports, ["NetworkWatcher"], () => require("./networkWatcher"));

export { PolicyArgs } from "./policy";
export type Policy = import("./policy").Policy;
export const Policy: typeof import("./policy").Policy = null as any;
utilities.lazyLoad(exports, ["Policy"], () => require("./policy"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20220501:DdosProtectionPlan":
                return new DdosProtectionPlan(name, <any>undefined, { urn })
            case "azure-native:network/v20220501:NetworkWatcher":
                return new NetworkWatcher(name, <any>undefined, { urn })
            case "azure-native:network/v20220501:Policy":
                return new Policy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20220501", _module)