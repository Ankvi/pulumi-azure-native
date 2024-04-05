import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetApiManagementServiceDomainOwnershipIdentifierArgs, GetApiManagementServiceDomainOwnershipIdentifierResult } from "./getApiManagementServiceDomainOwnershipIdentifier";
export const getApiManagementServiceDomainOwnershipIdentifier: typeof import("./getApiManagementServiceDomainOwnershipIdentifier").getApiManagementServiceDomainOwnershipIdentifier = null as any;
export const getApiManagementServiceDomainOwnershipIdentifierOutput: typeof import("./getApiManagementServiceDomainOwnershipIdentifier").getApiManagementServiceDomainOwnershipIdentifierOutput = null as any;
utilities.lazyLoad(exports, ["getApiManagementServiceDomainOwnershipIdentifier","getApiManagementServiceDomainOwnershipIdentifierOutput"], () => require("./getApiManagementServiceDomainOwnershipIdentifier"));

export { GetSchemaArgs, GetSchemaResult, GetSchemaOutputArgs } from "./getSchema";
export const getSchema: typeof import("./getSchema").getSchema = null as any;
export const getSchemaOutput: typeof import("./getSchema").getSchemaOutput = null as any;
utilities.lazyLoad(exports, ["getSchema","getSchemaOutput"], () => require("./getSchema"));

export { SchemaArgs } from "./schema";
export type Schema = import("./schema").Schema;
export const Schema: typeof import("./schema").Schema = null as any;
utilities.lazyLoad(exports, ["Schema"], () => require("./schema"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:apimanagement/v20210401preview:Schema":
                return new Schema(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "apimanagement/v20210401preview", _module)