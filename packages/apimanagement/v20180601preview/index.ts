import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiArgs } from "./api";
export type Api = import("./api").Api;
export const Api: typeof import("./api").Api = null as any;
utilities.lazyLoad(exports, ["Api"], () => require("./api"));

export { ApiOperationPolicyArgs } from "./apiOperationPolicy";
export type ApiOperationPolicy = import("./apiOperationPolicy").ApiOperationPolicy;
export const ApiOperationPolicy: typeof import("./apiOperationPolicy").ApiOperationPolicy = null as any;
utilities.lazyLoad(exports, ["ApiOperationPolicy"], () => require("./apiOperationPolicy"));

export { ApiPolicyArgs } from "./apiPolicy";
export type ApiPolicy = import("./apiPolicy").ApiPolicy;
export const ApiPolicy: typeof import("./apiPolicy").ApiPolicy = null as any;
utilities.lazyLoad(exports, ["ApiPolicy"], () => require("./apiPolicy"));

export { GetApiArgs, GetApiResult, GetApiOutputArgs } from "./getApi";
export const getApi: typeof import("./getApi").getApi = null as any;
export const getApiOutput: typeof import("./getApi").getApiOutput = null as any;
utilities.lazyLoad(exports, ["getApi","getApiOutput"], () => require("./getApi"));

export { GetApiOperationPolicyArgs, GetApiOperationPolicyResult, GetApiOperationPolicyOutputArgs } from "./getApiOperationPolicy";
export const getApiOperationPolicy: typeof import("./getApiOperationPolicy").getApiOperationPolicy = null as any;
export const getApiOperationPolicyOutput: typeof import("./getApiOperationPolicy").getApiOperationPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getApiOperationPolicy","getApiOperationPolicyOutput"], () => require("./getApiOperationPolicy"));

export { GetApiPolicyArgs, GetApiPolicyResult, GetApiPolicyOutputArgs } from "./getApiPolicy";
export const getApiPolicy: typeof import("./getApiPolicy").getApiPolicy = null as any;
export const getApiPolicyOutput: typeof import("./getApiPolicy").getApiPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getApiPolicy","getApiPolicyOutput"], () => require("./getApiPolicy"));

export { GetPolicyArgs, GetPolicyResult, GetPolicyOutputArgs } from "./getPolicy";
export const getPolicy: typeof import("./getPolicy").getPolicy = null as any;
export const getPolicyOutput: typeof import("./getPolicy").getPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getPolicy","getPolicyOutput"], () => require("./getPolicy"));

export { GetProductPolicyArgs, GetProductPolicyResult, GetProductPolicyOutputArgs } from "./getProductPolicy";
export const getProductPolicy: typeof import("./getProductPolicy").getProductPolicy = null as any;
export const getProductPolicyOutput: typeof import("./getProductPolicy").getProductPolicyOutput = null as any;
utilities.lazyLoad(exports, ["getProductPolicy","getProductPolicyOutput"], () => require("./getProductPolicy"));

export { GetTagDescriptionArgs, GetTagDescriptionResult, GetTagDescriptionOutputArgs } from "./getTagDescription";
export const getTagDescription: typeof import("./getTagDescription").getTagDescription = null as any;
export const getTagDescriptionOutput: typeof import("./getTagDescription").getTagDescriptionOutput = null as any;
utilities.lazyLoad(exports, ["getTagDescription","getTagDescriptionOutput"], () => require("./getTagDescription"));

export { PolicyArgs } from "./policy";
export type Policy = import("./policy").Policy;
export const Policy: typeof import("./policy").Policy = null as any;
utilities.lazyLoad(exports, ["Policy"], () => require("./policy"));

export { ProductApiArgs } from "./productApi";
export type ProductApi = import("./productApi").ProductApi;
export const ProductApi: typeof import("./productApi").ProductApi = null as any;
utilities.lazyLoad(exports, ["ProductApi"], () => require("./productApi"));

export { ProductPolicyArgs } from "./productPolicy";
export type ProductPolicy = import("./productPolicy").ProductPolicy;
export const ProductPolicy: typeof import("./productPolicy").ProductPolicy = null as any;
utilities.lazyLoad(exports, ["ProductPolicy"], () => require("./productPolicy"));

export { TagDescriptionArgs } from "./tagDescription";
export type TagDescription = import("./tagDescription").TagDescription;
export const TagDescription: typeof import("./tagDescription").TagDescription = null as any;
utilities.lazyLoad(exports, ["TagDescription"], () => require("./tagDescription"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement/v20180601preview:Api":
                return new Api(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180601preview:ApiOperationPolicy":
                return new ApiOperationPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180601preview:ApiPolicy":
                return new ApiPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180601preview:Policy":
                return new Policy(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180601preview:ProductApi":
                return new ProductApi(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180601preview:ProductPolicy":
                return new ProductPolicy(name, <any>undefined, { urn })
            case "azure-native:apimanagement/v20180601preview:TagDescription":
                return new TagDescription(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20180601preview", _module)