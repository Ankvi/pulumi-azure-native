import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AzureFirewallArgs } from "./azureFirewall";
export type AzureFirewall = import("./azureFirewall").AzureFirewall;
export const AzureFirewall: typeof import("./azureFirewall").AzureFirewall = null as any;
utilities.lazyLoad(exports, ["AzureFirewall"], () => require("./azureFirewall"));

export { FirewallPolicyArgs } from "./firewallPolicy";
export type FirewallPolicy = import("./firewallPolicy").FirewallPolicy;
export const FirewallPolicy: typeof import("./firewallPolicy").FirewallPolicy = null as any;
utilities.lazyLoad(exports, ["FirewallPolicy"], () => require("./firewallPolicy"));

export { FirewallPolicyRuleGroupArgs } from "./firewallPolicyRuleGroup";
export type FirewallPolicyRuleGroup = import("./firewallPolicyRuleGroup").FirewallPolicyRuleGroup;
export const FirewallPolicyRuleGroup: typeof import("./firewallPolicyRuleGroup").FirewallPolicyRuleGroup = null as any;
utilities.lazyLoad(exports, ["FirewallPolicyRuleGroup"], () => require("./firewallPolicyRuleGroup"));

export { GetAzureFirewallArgs, GetAzureFirewallResult, GetAzureFirewallOutputArgs } from "./getAzureFirewall";
export const getAzureFirewall: typeof import("./getAzureFirewall").getAzureFirewall = null as any;
export const getAzureFirewallOutput: typeof import("./getAzureFirewall").getAzureFirewallOutput = null as any;
utilities.lazyLoad(exports, ["getAzureFirewall","getAzureFirewallOutput"], () => require("./getAzureFirewall"));

export { GetFirewallPolicyArgs, GetFirewallPolicyResult, GetFirewallPolicyOutputArgs } from "./getFirewallPolicy";
export const getFirewallPolicy: typeof import("./getFirewallPolicy").getFirewallPolicy = null as any;
export const getFirewallPolicyOutput: typeof import("./getFirewallPolicy").getFirewallPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicy","getFirewallPolicyOutput"], () => require("./getFirewallPolicy"));

export { GetFirewallPolicyRuleGroupArgs, GetFirewallPolicyRuleGroupResult, GetFirewallPolicyRuleGroupOutputArgs } from "./getFirewallPolicyRuleGroup";
export const getFirewallPolicyRuleGroup: typeof import("./getFirewallPolicyRuleGroup").getFirewallPolicyRuleGroup = null as any;
export const getFirewallPolicyRuleGroupOutput: typeof import("./getFirewallPolicyRuleGroup").getFirewallPolicyRuleGroupOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicyRuleGroup","getFirewallPolicyRuleGroupOutput"], () => require("./getFirewallPolicyRuleGroup"));

export { GetNetworkVirtualApplianceArgs, GetNetworkVirtualApplianceResult, GetNetworkVirtualApplianceOutputArgs } from "./getNetworkVirtualAppliance";
export const getNetworkVirtualAppliance: typeof import("./getNetworkVirtualAppliance").getNetworkVirtualAppliance = null as any;
export const getNetworkVirtualApplianceOutput: typeof import("./getNetworkVirtualAppliance").getNetworkVirtualApplianceOutput = null as any;
utilities.lazyLoad(exports, ["getNetworkVirtualAppliance","getNetworkVirtualApplianceOutput"], () => require("./getNetworkVirtualAppliance"));

export { GetVirtualHubArgs, GetVirtualHubResult, GetVirtualHubOutputArgs } from "./getVirtualHub";
export const getVirtualHub: typeof import("./getVirtualHub").getVirtualHub = null as any;
export const getVirtualHubOutput: typeof import("./getVirtualHub").getVirtualHubOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualHub","getVirtualHubOutput"], () => require("./getVirtualHub"));

export { NetworkVirtualApplianceArgs } from "./networkVirtualAppliance";
export type NetworkVirtualAppliance = import("./networkVirtualAppliance").NetworkVirtualAppliance;
export const NetworkVirtualAppliance: typeof import("./networkVirtualAppliance").NetworkVirtualAppliance = null as any;
utilities.lazyLoad(exports, ["NetworkVirtualAppliance"], () => require("./networkVirtualAppliance"));

export { VirtualHubArgs } from "./virtualHub";
export type VirtualHub = import("./virtualHub").VirtualHub;
export const VirtualHub: typeof import("./virtualHub").VirtualHub = null as any;
utilities.lazyLoad(exports, ["VirtualHub"], () => require("./virtualHub"));


// Export enums:
export * from "../types/enums/v20200401";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20200401:AzureFirewall":
                return new AzureFirewall(name, <any>undefined, { urn })
            case "azure-native:network/v20200401:FirewallPolicy":
                return new FirewallPolicy(name, <any>undefined, { urn })
            case "azure-native:network/v20200401:FirewallPolicyRuleGroup":
                return new FirewallPolicyRuleGroup(name, <any>undefined, { urn })
            case "azure-native:network/v20200401:NetworkVirtualAppliance":
                return new NetworkVirtualAppliance(name, <any>undefined, { urn })
            case "azure-native:network/v20200401:VirtualHub":
                return new VirtualHub(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20200401", _module)
