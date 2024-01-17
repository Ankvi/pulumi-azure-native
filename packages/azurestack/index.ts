import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { CustomerSubscriptionArgs } from "./customerSubscription";
export type CustomerSubscription = import("./customerSubscription").CustomerSubscription;
export const CustomerSubscription: typeof import("./customerSubscription").CustomerSubscription = null as any;
utilities.lazyLoad(exports, ["CustomerSubscription"], () => require("./customerSubscription"));

export { GetCustomerSubscriptionArgs, GetCustomerSubscriptionResult, GetCustomerSubscriptionOutputArgs } from "./getCustomerSubscription";
export const getCustomerSubscription: typeof import("./getCustomerSubscription").getCustomerSubscription = null as any;
export const getCustomerSubscriptionOutput: typeof import("./getCustomerSubscription").getCustomerSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getCustomerSubscription","getCustomerSubscriptionOutput"], () => require("./getCustomerSubscription"));

export { GetLinkedSubscriptionArgs, GetLinkedSubscriptionResult, GetLinkedSubscriptionOutputArgs } from "./getLinkedSubscription";
export const getLinkedSubscription: typeof import("./getLinkedSubscription").getLinkedSubscription = null as any;
export const getLinkedSubscriptionOutput: typeof import("./getLinkedSubscription").getLinkedSubscriptionOutput = null as any;
utilities.lazyLoad(exports, ["getLinkedSubscription","getLinkedSubscriptionOutput"], () => require("./getLinkedSubscription"));

export { GetProductArgs, GetProductResult, GetProductOutputArgs } from "./getProduct";
export const getProduct: typeof import("./getProduct").getProduct = null as any;
export const getProductOutput: typeof import("./getProduct").getProductOutput = null as any;
utilities.lazyLoad(exports, ["getProduct","getProductOutput"], () => require("./getProduct"));

export { GetProductsArgs, GetProductsResult, GetProductsOutputArgs } from "./getProducts";
export const getProducts: typeof import("./getProducts").getProducts = null as any;
export const getProductsOutput: typeof import("./getProducts").getProductsOutput = null as any;
utilities.lazyLoad(exports, ["getProducts","getProductsOutput"], () => require("./getProducts"));

export { GetRegistrationArgs, GetRegistrationResult, GetRegistrationOutputArgs } from "./getRegistration";
export const getRegistration: typeof import("./getRegistration").getRegistration = null as any;
export const getRegistrationOutput: typeof import("./getRegistration").getRegistrationOutput = null as any;
utilities.lazyLoad(exports, ["getRegistration","getRegistrationOutput"], () => require("./getRegistration"));

export { GetRegistrationActivationKeyArgs, GetRegistrationActivationKeyResult, GetRegistrationActivationKeyOutputArgs } from "./getRegistrationActivationKey";
export const getRegistrationActivationKey: typeof import("./getRegistrationActivationKey").getRegistrationActivationKey = null as any;
export const getRegistrationActivationKeyOutput: typeof import("./getRegistrationActivationKey").getRegistrationActivationKeyOutput = null as any;
utilities.lazyLoad(exports, ["getRegistrationActivationKey","getRegistrationActivationKeyOutput"], () => require("./getRegistrationActivationKey"));

export { LinkedSubscriptionArgs } from "./linkedSubscription";
export type LinkedSubscription = import("./linkedSubscription").LinkedSubscription;
export const LinkedSubscription: typeof import("./linkedSubscription").LinkedSubscription = null as any;
utilities.lazyLoad(exports, ["LinkedSubscription"], () => require("./linkedSubscription"));

export { ListProductDetailsArgs, ListProductDetailsResult, ListProductDetailsOutputArgs } from "./listProductDetails";
export const listProductDetails: typeof import("./listProductDetails").listProductDetails = null as any;
export const listProductDetailsOutput: typeof import("./listProductDetails").listProductDetailsOutput = null as any;
utilities.lazyLoad(exports, ["listProductDetails","listProductDetailsOutput"], () => require("./listProductDetails"));

export { ListProductsArgs, ListProductsResult, ListProductsOutputArgs } from "./listProducts";
export const listProducts: typeof import("./listProducts").listProducts = null as any;
export const listProductsOutput: typeof import("./listProducts").listProductsOutput = null as any;
utilities.lazyLoad(exports, ["listProducts","listProductsOutput"], () => require("./listProducts"));

export { RegistrationArgs } from "./registration";
export type Registration = import("./registration").Registration;
export const Registration: typeof import("./registration").Registration = null as any;
utilities.lazyLoad(exports, ["Registration"], () => require("./registration"));


// Export enums:
export * from "./types/enums";


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:azurestack:CustomerSubscription":
                return new CustomerSubscription(name, <any>undefined, { urn })
            case "azure-native:azurestack:LinkedSubscription":
                return new LinkedSubscription(name, <any>undefined, { urn })
            case "azure-native:azurestack:Registration":
                return new Registration(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "azurestack", _module)
