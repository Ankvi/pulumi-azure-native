import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetSubscriptionFeatureRegistrationArgs, GetSubscriptionFeatureRegistrationResult, GetSubscriptionFeatureRegistrationOutputArgs } from "./getSubscriptionFeatureRegistration";
export const getSubscriptionFeatureRegistration: typeof import("./getSubscriptionFeatureRegistration").getSubscriptionFeatureRegistration = null as any;
export const getSubscriptionFeatureRegistrationOutput: typeof import("./getSubscriptionFeatureRegistration").getSubscriptionFeatureRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getSubscriptionFeatureRegistration","getSubscriptionFeatureRegistrationOutput"], () => require("./getSubscriptionFeatureRegistration"));

export { SubscriptionFeatureRegistrationArgs } from "./subscriptionFeatureRegistration";
export type SubscriptionFeatureRegistration = import("./subscriptionFeatureRegistration").SubscriptionFeatureRegistration;
export const SubscriptionFeatureRegistration: typeof import("./subscriptionFeatureRegistration").SubscriptionFeatureRegistration = null as any;
utilities.lazyLoad(exports, ["SubscriptionFeatureRegistration"], () => require("./subscriptionFeatureRegistration"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:features/v20210701:SubscriptionFeatureRegistration":
                return new SubscriptionFeatureRegistration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "features/v20210701", _module)