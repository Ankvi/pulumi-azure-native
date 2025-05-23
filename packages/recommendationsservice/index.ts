import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AccountArgs } from "./account";
export type Account = import("./account").Account;
export const Account: typeof import("./account").Account = null as any;
utilities.lazyLoad(exports, ["Account"], () => require("./account"));

export { GetAccountArgs, GetAccountResult, GetAccountOutputArgs } from "./getAccount";
export const getAccount: typeof import("./getAccount").getAccount = null as any;
export const getAccountOutput: typeof import("./getAccount").getAccountOutput = null as any;
utilities.lazyLoad(exports, ["getAccount","getAccountOutput"], () => require("./getAccount"));

export { GetModelingArgs, GetModelingResult, GetModelingOutputArgs } from "./getModeling";
export const getModeling: typeof import("./getModeling").getModeling = null as any;
export const getModelingOutput: typeof import("./getModeling").getModelingOutput = null as any;
utilities.lazyLoad(exports, ["getModeling","getModelingOutput"], () => require("./getModeling"));

export { GetServiceEndpointArgs, GetServiceEndpointResult, GetServiceEndpointOutputArgs } from "./getServiceEndpoint";
export const getServiceEndpoint: typeof import("./getServiceEndpoint").getServiceEndpoint = null as any;
export const getServiceEndpointOutput: typeof import("./getServiceEndpoint").getServiceEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getServiceEndpoint","getServiceEndpointOutput"], () => require("./getServiceEndpoint"));

export { ModelingArgs } from "./modeling";
export type Modeling = import("./modeling").Modeling;
export const Modeling: typeof import("./modeling").Modeling = null as any;
utilities.lazyLoad(exports, ["Modeling"], () => require("./modeling"));

export { ServiceEndpointArgs } from "./serviceEndpoint";
export type ServiceEndpoint = import("./serviceEndpoint").ServiceEndpoint;
export const ServiceEndpoint: typeof import("./serviceEndpoint").ServiceEndpoint = null as any;
utilities.lazyLoad(exports, ["ServiceEndpoint"], () => require("./serviceEndpoint"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:recommendationsservice:Account":
                return new Account(name, <any>undefined, { urn })
            case "azure-native:recommendationsservice:Modeling":
                return new Modeling(name, <any>undefined, { urn })
            case "azure-native:recommendationsservice:ServiceEndpoint":
                return new ServiceEndpoint(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "recommendationsservice", _module)