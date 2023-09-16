import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AttestationAtResourceArgs } from "./attestationAtResource";
export type AttestationAtResource = import("./attestationAtResource").AttestationAtResource;
export const AttestationAtResource: typeof import("./attestationAtResource").AttestationAtResource = null as any;
utilities.lazyLoad(exports, ["AttestationAtResource"], () => require("./attestationAtResource"));

export { AttestationAtResourceGroupArgs } from "./attestationAtResourceGroup";
export type AttestationAtResourceGroup = import("./attestationAtResourceGroup").AttestationAtResourceGroup;
export const AttestationAtResourceGroup: typeof import("./attestationAtResourceGroup").AttestationAtResourceGroup = null as any;
utilities.lazyLoad(exports, ["AttestationAtResourceGroup"], () => require("./attestationAtResourceGroup"));

export { AttestationAtSubscriptionArgs } from "./attestationAtSubscription";
export type AttestationAtSubscription = import("./attestationAtSubscription").AttestationAtSubscription;
export const AttestationAtSubscription: typeof import("./attestationAtSubscription").AttestationAtSubscription = null as any;
utilities.lazyLoad(exports, ["AttestationAtSubscription"], () => require("./attestationAtSubscription"));

export { GetAttestationAtResourceArgs, GetAttestationAtResourceResult, GetAttestationAtResourceOutputArgs } from "./getAttestationAtResource";
export const getAttestationAtResource: typeof import("./getAttestationAtResource").getAttestationAtResource = null as any;
export const getAttestationAtResourceOutput: typeof import("./getAttestationAtResource").getAttestationAtResourceOutput = null as any;
utilities.lazyLoad(exports, ["getAttestationAtResource","getAttestationAtResourceOutput"], () => require("./getAttestationAtResource"));

export { GetAttestationAtResourceGroupArgs, GetAttestationAtResourceGroupResult, GetAttestationAtResourceGroupOutputArgs } from "./getAttestationAtResourceGroup";
export const getAttestationAtResourceGroup: typeof import("./getAttestationAtResourceGroup").getAttestationAtResourceGroup = null as any;
export const getAttestationAtResourceGroupOutput: typeof import("./getAttestationAtResourceGroup").getAttestationAtResourceGroupOutput = null as any;
utilities.lazyLoad(exports, ["getAttestationAtResourceGroup","getAttestationAtResourceGroupOutput"], () => require("./getAttestationAtResourceGroup"));

export { GetAttestationAtSubscriptionArgs, GetAttestationAtSubscriptionResult, GetAttestationAtSubscriptionOutputArgs } from "./getAttestationAtSubscription";
export const getAttestationAtSubscription: typeof import("./getAttestationAtSubscription").getAttestationAtSubscription = null as any;
export const getAttestationAtSubscriptionOutput: typeof import("./getAttestationAtSubscription").getAttestationAtSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getAttestationAtSubscription","getAttestationAtSubscriptionOutput"], () => require("./getAttestationAtSubscription"));


// Export enums:
export * from "../types/enums/v20220901";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:policyinsights/v20220901:AttestationAtResource":
                return new AttestationAtResource(name, <any>undefined, { urn })
            case "azure-native:policyinsights/v20220901:AttestationAtResourceGroup":
                return new AttestationAtResourceGroup(name, <any>undefined, { urn })
            case "azure-native:policyinsights/v20220901:AttestationAtSubscription":
                return new AttestationAtSubscription(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "policyinsights/v20220901", _module)
