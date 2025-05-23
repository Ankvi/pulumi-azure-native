import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { ComputePolicyArgs } from "./computePolicy";
export type ComputePolicy = import("./computePolicy").ComputePolicy;
export const ComputePolicy: typeof import("./computePolicy").ComputePolicy = null as any;
utilities.lazyLoad(exports, ["ComputePolicy"], () => require("./computePolicy"));

export { FirewallRuleArgs } from "./firewallRule";
export type FirewallRule = import("./firewallRule").FirewallRule;
export const FirewallRule: typeof import("./firewallRule").FirewallRule = null as any;
utilities.lazyLoad(exports, ["FirewallRule"], () => require("./firewallRule"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetComputePolicyArgs, GetComputePolicyResult, GetComputePolicyOutputArgs } from "./getComputePolicy";
export const getComputePolicy: typeof import("./getComputePolicy").getComputePolicy = null as any;
export const getComputePolicyOutput: typeof import("./getComputePolicy").getComputePolicyOutput = null as any;
utilities.lazyLoad(exports, ["getComputePolicy","getComputePolicyOutput"], () => require("./getComputePolicy"));

export { GetFirewallRuleArgs, GetFirewallRuleResult, GetFirewallRuleOutputArgs } from "./getFirewallRule";
export const getFirewallRule: typeof import("./getFirewallRule").getFirewallRule = null as any;
export const getFirewallRuleOutput: typeof import("./getFirewallRule").getFirewallRuleOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallRule","getFirewallRuleOutput"], () => require("./getFirewallRule"));

export { ListStorageAccountSasTokensArgs, ListStorageAccountSasTokensResult, ListStorageAccountSasTokensOutputArgs } from "./listStorageAccountSasTokens";
export const listStorageAccountSasTokens: typeof import("./listStorageAccountSasTokens").listStorageAccountSasTokens = null as any;
export const listStorageAccountSasTokensOutput: typeof import("./listStorageAccountSasTokens").listStorageAccountSasTokensOutput = null as any;
utilities.lazyLoad(exports, ["listStorageAccountSasTokens","listStorageAccountSasTokensOutput"], () => require("./listStorageAccountSasTokens"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datalakeanalytics:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:datalakeanalytics:ComputePolicy":
                return new ComputePolicy(name, <any>undefined, { urn })
            case "azure-native:datalakeanalytics:FirewallRule":
                return new FirewallRule(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datalakeanalytics", _module)