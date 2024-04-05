import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { FirewallPolicyArgs } from "./firewallPolicy";
export type FirewallPolicy = import("./firewallPolicy").FirewallPolicy;
export const FirewallPolicy: typeof import("./firewallPolicy").FirewallPolicy = null as any;
utilities.lazyLoad(exports, ["FirewallPolicy"], () => require("./firewallPolicy"));

export { GetFirewallPolicyArgs, GetFirewallPolicyResult, GetFirewallPolicyOutputArgs } from "./getFirewallPolicy";
export const getFirewallPolicy: typeof import("./getFirewallPolicy").getFirewallPolicy = null as any;
export const getFirewallPolicyOutput: typeof import("./getFirewallPolicy").getFirewallPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getFirewallPolicy","getFirewallPolicyOutput"], () => require("./getFirewallPolicy"));

export { ListFirewallPolicyIdpsSignatureArgs, ListFirewallPolicyIdpsSignatureResult, ListFirewallPolicyIdpsSignatureOutputArgs } from "./listFirewallPolicyIdpsSignature";
export const listFirewallPolicyIdpsSignature: typeof import("./listFirewallPolicyIdpsSignature").listFirewallPolicyIdpsSignature = null as any;
export const listFirewallPolicyIdpsSignatureOutput: typeof import("./listFirewallPolicyIdpsSignature").listFirewallPolicyIdpsSignatureOutput = null as any;
utilities.lazyLoad(exports, ["listFirewallPolicyIdpsSignature","listFirewallPolicyIdpsSignatureOutput"], () => require("./listFirewallPolicyIdpsSignature"));

export { ListFirewallPolicyIdpsSignaturesFilterValueArgs, ListFirewallPolicyIdpsSignaturesFilterValueResult, ListFirewallPolicyIdpsSignaturesFilterValueOutputArgs } from "./listFirewallPolicyIdpsSignaturesFilterValue";
export const listFirewallPolicyIdpsSignaturesFilterValue: typeof import("./listFirewallPolicyIdpsSignaturesFilterValue").listFirewallPolicyIdpsSignaturesFilterValue = null as any;
export const listFirewallPolicyIdpsSignaturesFilterValueOutput: typeof import("./listFirewallPolicyIdpsSignaturesFilterValue").listFirewallPolicyIdpsSignaturesFilterValueOutput = null as any;
utilities.lazyLoad(exports, ["listFirewallPolicyIdpsSignaturesFilterValue","listFirewallPolicyIdpsSignaturesFilterValueOutput"], () => require("./listFirewallPolicyIdpsSignaturesFilterValue"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:network/v20210801:FirewallPolicy":
                return new FirewallPolicy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "network/v20210801", _module)