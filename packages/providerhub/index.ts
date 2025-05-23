import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DefaultRolloutArgs } from "./defaultRollout";
export type DefaultRollout = import("./defaultRollout").DefaultRollout;
export const DefaultRollout: typeof import("./defaultRollout").DefaultRollout = null as any;
utilities.lazyLoad(exports, ["DefaultRollout"], () => require("./defaultRollout"));

export { GetDefaultRolloutArgs, GetDefaultRolloutResult, GetDefaultRolloutOutputArgs } from "./getDefaultRollout";
export const getDefaultRollout: typeof import("./getDefaultRollout").getDefaultRollout = null as any;
export const getDefaultRolloutOutput: typeof import("./getDefaultRollout").getDefaultRolloutOutput = null as any;
utilities.lazyLoad(exports, ["getDefaultRollout","getDefaultRolloutOutput"], () => require("./getDefaultRollout"));

export { GetNotificationRegistrationArgs, GetNotificationRegistrationResult, GetNotificationRegistrationOutputArgs } from "./getNotificationRegistration";
export const getNotificationRegistration: typeof import("./getNotificationRegistration").getNotificationRegistration = null as any;
export const getNotificationRegistrationOutput: typeof import("./getNotificationRegistration").getNotificationRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getNotificationRegistration","getNotificationRegistrationOutput"], () => require("./getNotificationRegistration"));

export { GetProviderRegistrationArgs, GetProviderRegistrationResult, GetProviderRegistrationOutputArgs } from "./getProviderRegistration";
export const getProviderRegistration: typeof import("./getProviderRegistration").getProviderRegistration = null as any;
export const getProviderRegistrationOutput: typeof import("./getProviderRegistration").getProviderRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getProviderRegistration","getProviderRegistrationOutput"], () => require("./getProviderRegistration"));

export { GetResourceTypeRegistrationArgs, GetResourceTypeRegistrationResult, GetResourceTypeRegistrationOutputArgs } from "./getResourceTypeRegistration";
export const getResourceTypeRegistration: typeof import("./getResourceTypeRegistration").getResourceTypeRegistration = null as any;
export const getResourceTypeRegistrationOutput: typeof import("./getResourceTypeRegistration").getResourceTypeRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getResourceTypeRegistration","getResourceTypeRegistrationOutput"], () => require("./getResourceTypeRegistration"));

export { GetSkusArgs, GetSkusResult, GetSkusOutputArgs } from "./getSkus";
export const getSkus: typeof import("./getSkus").getSkus = null as any;
export const getSkusOutput: typeof import("./getSkus").getSkusOutput = null as any;
utilities.lazyLoad(exports, ["getSkus","getSkusOutput"], () => require("./getSkus"));

export { GetSkusNestedResourceTypeFirstArgs, GetSkusNestedResourceTypeFirstResult, GetSkusNestedResourceTypeFirstOutputArgs } from "./getSkusNestedResourceTypeFirst";
export const getSkusNestedResourceTypeFirst: typeof import("./getSkusNestedResourceTypeFirst").getSkusNestedResourceTypeFirst = null as any;
export const getSkusNestedResourceTypeFirstOutput: typeof import("./getSkusNestedResourceTypeFirst").getSkusNestedResourceTypeFirstOutput = null as any;
utilities.lazyLoad(exports, ["getSkusNestedResourceTypeFirst","getSkusNestedResourceTypeFirstOutput"], () => require("./getSkusNestedResourceTypeFirst"));

export { GetSkusNestedResourceTypeSecondArgs, GetSkusNestedResourceTypeSecondResult, GetSkusNestedResourceTypeSecondOutputArgs } from "./getSkusNestedResourceTypeSecond";
export const getSkusNestedResourceTypeSecond: typeof import("./getSkusNestedResourceTypeSecond").getSkusNestedResourceTypeSecond = null as any;
export const getSkusNestedResourceTypeSecondOutput: typeof import("./getSkusNestedResourceTypeSecond").getSkusNestedResourceTypeSecondOutput = null as any;
utilities.lazyLoad(exports, ["getSkusNestedResourceTypeSecond","getSkusNestedResourceTypeSecondOutput"], () => require("./getSkusNestedResourceTypeSecond"));

export { GetSkusNestedResourceTypeThirdArgs, GetSkusNestedResourceTypeThirdResult, GetSkusNestedResourceTypeThirdOutputArgs } from "./getSkusNestedResourceTypeThird";
export const getSkusNestedResourceTypeThird: typeof import("./getSkusNestedResourceTypeThird").getSkusNestedResourceTypeThird = null as any;
export const getSkusNestedResourceTypeThirdOutput: typeof import("./getSkusNestedResourceTypeThird").getSkusNestedResourceTypeThirdOutput = null as any;
utilities.lazyLoad(exports, ["getSkusNestedResourceTypeThird","getSkusNestedResourceTypeThirdOutput"], () => require("./getSkusNestedResourceTypeThird"));

export { NotificationRegistrationArgs } from "./notificationRegistration";
export type NotificationRegistration = import("./notificationRegistration").NotificationRegistration;
export const NotificationRegistration: typeof import("./notificationRegistration").NotificationRegistration = null as any;
utilities.lazyLoad(exports, ["NotificationRegistration"], () => require("./notificationRegistration"));

export { OperationByProviderRegistrationArgs } from "./operationByProviderRegistration";
export type OperationByProviderRegistration = import("./operationByProviderRegistration").OperationByProviderRegistration;
export const OperationByProviderRegistration: typeof import("./operationByProviderRegistration").OperationByProviderRegistration = null as any;
utilities.lazyLoad(exports, ["OperationByProviderRegistration"], () => require("./operationByProviderRegistration"));

export { ProviderRegistrationArgs } from "./providerRegistration";
export type ProviderRegistration = import("./providerRegistration").ProviderRegistration;
export const ProviderRegistration: typeof import("./providerRegistration").ProviderRegistration = null as any;
utilities.lazyLoad(exports, ["ProviderRegistration"], () => require("./providerRegistration"));

export { ResourceTypeRegistrationArgs } from "./resourceTypeRegistration";
export type ResourceTypeRegistration = import("./resourceTypeRegistration").ResourceTypeRegistration;
export const ResourceTypeRegistration: typeof import("./resourceTypeRegistration").ResourceTypeRegistration = null as any;
utilities.lazyLoad(exports, ["ResourceTypeRegistration"], () => require("./resourceTypeRegistration"));

export { SkusArgs } from "./skus";
export type Skus = import("./skus").Skus;
export const Skus: typeof import("./skus").Skus = null as any;
utilities.lazyLoad(exports, ["Skus"], () => require("./skus"));

export { SkusNestedResourceTypeFirstArgs } from "./skusNestedResourceTypeFirst";
export type SkusNestedResourceTypeFirst = import("./skusNestedResourceTypeFirst").SkusNestedResourceTypeFirst;
export const SkusNestedResourceTypeFirst: typeof import("./skusNestedResourceTypeFirst").SkusNestedResourceTypeFirst = null as any;
utilities.lazyLoad(exports, ["SkusNestedResourceTypeFirst"], () => require("./skusNestedResourceTypeFirst"));

export { SkusNestedResourceTypeSecondArgs } from "./skusNestedResourceTypeSecond";
export type SkusNestedResourceTypeSecond = import("./skusNestedResourceTypeSecond").SkusNestedResourceTypeSecond;
export const SkusNestedResourceTypeSecond: typeof import("./skusNestedResourceTypeSecond").SkusNestedResourceTypeSecond = null as any;
utilities.lazyLoad(exports, ["SkusNestedResourceTypeSecond"], () => require("./skusNestedResourceTypeSecond"));

export { SkusNestedResourceTypeThirdArgs } from "./skusNestedResourceTypeThird";
export type SkusNestedResourceTypeThird = import("./skusNestedResourceTypeThird").SkusNestedResourceTypeThird;
export const SkusNestedResourceTypeThird: typeof import("./skusNestedResourceTypeThird").SkusNestedResourceTypeThird = null as any;
utilities.lazyLoad(exports, ["SkusNestedResourceTypeThird"], () => require("./skusNestedResourceTypeThird"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:providerhub:DefaultRollout":
                return new DefaultRollout(name, <any>undefined, { urn })
            case "azure-native:providerhub:NotificationRegistration":
                return new NotificationRegistration(name, <any>undefined, { urn })
            case "azure-native:providerhub:OperationByProviderRegistration":
                return new OperationByProviderRegistration(name, <any>undefined, { urn })
            case "azure-native:providerhub:ProviderRegistration":
                return new ProviderRegistration(name, <any>undefined, { urn })
            case "azure-native:providerhub:ResourceTypeRegistration":
                return new ResourceTypeRegistration(name, <any>undefined, { urn })
            case "azure-native:providerhub:Skus":
                return new Skus(name, <any>undefined, { urn })
            case "azure-native:providerhub:SkusNestedResourceTypeFirst":
                return new SkusNestedResourceTypeFirst(name, <any>undefined, { urn })
            case "azure-native:providerhub:SkusNestedResourceTypeSecond":
                return new SkusNestedResourceTypeSecond(name, <any>undefined, { urn })
            case "azure-native:providerhub:SkusNestedResourceTypeThird":
                return new SkusNestedResourceTypeThird(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "providerhub", _module)