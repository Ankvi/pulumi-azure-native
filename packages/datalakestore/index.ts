import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { FirewallRuleArgs } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetFirewallRuleArgs, GetFirewallRuleResult, GetFirewallRuleOutputArgs } from "./getFirewallRule";
export const getFirewallRule: typeof import("./getFirewallRule").getFirewallRule = null as any;
export const getFirewallRuleOutput: typeof import("./getFirewallRule").getFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallRule","getFirewallRuleOutput"], () => require("./getFirewallRule"));

export { GetTrustedIdProviderArgs, GetTrustedIdProviderResult, GetTrustedIdProviderOutputArgs } from "./getTrustedIdProvider";
export const getTrustedIdProvider: typeof import("./getTrustedIdProvider").getTrustedIdProvider = null as any;
export const getTrustedIdProviderOutput: typeof import("./getTrustedIdProvider").getTrustedIdProviderOutput = null as any;
utilities.lazyLoad(exports, ["getTrustedIdProvider","getTrustedIdProviderOutput"], () => require("./getTrustedIdProvider"));

export { GetVirtualNetworkRuleArgs, GetVirtualNetworkRuleResult, GetVirtualNetworkRuleOutputArgs } from "./getVirtualNetworkRule";
export const getVirtualNetworkRule: typeof import("./getVirtualNetworkRule").getVirtualNetworkRule = null as any;
export const getVirtualNetworkRuleOutput: typeof import("./getVirtualNetworkRule").getVirtualNetworkRuleOutput = null as any;
utilities.lazyLoad(exports, ["getVirtualNetworkRule","getVirtualNetworkRuleOutput"], () => require("./getVirtualNetworkRule"));

export { TrustedIdProviderArgs } from "./trustedIdProvider";
export type TrustedIdProvider = import("./trustedIdProvider").TrustedIdProvider;
export const TrustedIdProvider: typeof import("./trustedIdProvider").TrustedIdProvider = null as any;
utilities.lazyLoad(exports, ["TrustedIdProvider"], () => require("./trustedIdProvider"));

export { VirtualNetworkRuleArgs } from "./virtualNetworkRule";
export type VirtualNetworkRule = import("./virtualNetworkRule").VirtualNetworkRule;
export const VirtualNetworkRule: typeof import("./virtualNetworkRule").VirtualNetworkRule = null as any;
utilities.lazyLoad(exports, ["VirtualNetworkRule"], () => require("./virtualNetworkRule"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datalakestore:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:datalakestore:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            case "azure-native:datalakestore:TrustedIdProvider":
                return new TrustedIdProvider(name, <any>undefined, { urn })
            case "azure-native:datalakestore:VirtualNetworkRule":
                return new VirtualNetworkRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datalakestore", _module)