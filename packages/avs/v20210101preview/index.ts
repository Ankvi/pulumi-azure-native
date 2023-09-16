import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AddonArgs } from "./addon";
export type Addon = import("./addon").Addon;
export const Addon: typeof import("./addon").Addon = null as any;
utilities.lazyLoad(exports, ["Addon"], () => require("./addon"));

export { GetAddonArgs, GetAddonResult, GetAddonOutputArgs } from "./getAddon";
export const getAddon: typeof import("./getAddon").getAddon = null as any;
export const getAddonOutput: typeof import("./getAddon").getAddonOutput = null as any;
utilities.lazyLoad(exports, ["getAddon","getAddonOutput"], () => require("./getAddon"));

export { GetWorkloadNetworkDhcpArgs, GetWorkloadNetworkDhcpResult, GetWorkloadNetworkDhcpOutputArgs } from "./getWorkloadNetworkDhcp";
export const getWorkloadNetworkDhcp: typeof import("./getWorkloadNetworkDhcp").getWorkloadNetworkDhcp = null as any;
export const getWorkloadNetworkDhcpOutput: typeof import("./getWorkloadNetworkDhcp").getWorkloadNetworkDhcpOutput = null as any;
utilities.lazyLoad(exports, ["getWorkloadNetworkDhcp","getWorkloadNetworkDhcpOutput"], () => require("./getWorkloadNetworkDhcp"));

export { WorkloadNetworkDhcpArgs } from "./workloadNetworkDhcp";
export type WorkloadNetworkDhcp = import("./workloadNetworkDhcp").WorkloadNetworkDhcp;
export const WorkloadNetworkDhcp: typeof import("./workloadNetworkDhcp").WorkloadNetworkDhcp = null as any;
utilities.lazyLoad(exports, ["WorkloadNetworkDhcp"], () => require("./workloadNetworkDhcp"));


// Export enums:
export * from "../types/enums/v20210101preview";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:avs/v20210101preview:Addon":
                return new Addon(name, <any>undefined, { urn })
            case "azure-native:avs/v20210101preview:WorkloadNetworkDhcp":
                return new WorkloadNetworkDhcp(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "avs/v20210101preview", _module)
