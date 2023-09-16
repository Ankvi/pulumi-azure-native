import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ApiArgs } from "./api";
export type Api = import("./api").Api;
export const Api: typeof import("./api").Api = null as any;
utilities.lazyLoad(exports, ["Api"], () => require("./api"));

export { GetApiArgs, GetApiResult, GetApiOutputArgs } from "./getApi";
export const getApi: typeof import("./getApi").getApi = null as any;
export const getApiOutput: typeof import("./getApi").getApiOutput = null as any;
utilities.lazyLoad(exports, ["getApi","getApiOutput"], () => require("./getApi"));

export { GetApiManagementServiceDomainOwnershipIdentifierArgs, GetApiManagementServiceDomainOwnershipIdentifierResult } from "./getApiManagementServiceDomainOwnershipIdentifier";
export const getApiManagementServiceDomainOwnershipIdentifier: typeof import("./getApiManagementServiceDomainOwnershipIdentifier").getApiManagementServiceDomainOwnershipIdentifier = null as any;
export const getApiManagementServiceDomainOwnershipIdentifierOutput: typeof import("./getApiManagementServiceDomainOwnershipIdentifier").getApiManagementServiceDomainOwnershipIdentifierOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementServiceDomainOwnershipIdentifier","getApiManagementServiceDomainOwnershipIdentifierOutput"], () => require("./getApiManagementServiceDomainOwnershipIdentifier"));


// Export enums:
export * from "../types/enums/v20201201";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement/v20201201:Api":
                return new Api(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20201201", _module)
