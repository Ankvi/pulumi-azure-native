import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetMongoDBResourceMongoRoleDefinitionArgs, GetMongoDBResourceMongoRoleDefinitionResult, GetMongoDBResourceMongoRoleDefinitionOutputArgs } from "./getMongoDBResourceMongoRoleDefinition";
export const getMongoDBResourceMongoRoleDefinition: typeof import("./getMongoDBResourceMongoRoleDefinition").getMongoDBResourceMongoRoleDefinition = null as any;
export const getMongoDBResourceMongoRoleDefinitionOutput: typeof import("./getMongoDBResourceMongoRoleDefinition").getMongoDBResourceMongoRoleDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getMongoDBResourceMongoRoleDefinition","getMongoDBResourceMongoRoleDefinitionOutput"], () => require("./getMongoDBResourceMongoRoleDefinition"));

export { MongoDBResourceMongoRoleDefinitionArgs } from "./mongoDBResourceMongoRoleDefinition";
export type MongoDBResourceMongoRoleDefinition = import("./mongoDBResourceMongoRoleDefinition").MongoDBResourceMongoRoleDefinition;
export const MongoDBResourceMongoRoleDefinition: typeof import("./mongoDBResourceMongoRoleDefinition").MongoDBResourceMongoRoleDefinition = null as any;
utilities.lazyLoad(exports, ["MongoDBResourceMongoRoleDefinition"], () => require("./mongoDBResourceMongoRoleDefinition"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:documentdb/v20230301preview:MongoDBResourceMongoRoleDefinition":
                return new MongoDBResourceMongoRoleDefinition(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "documentdb/v20230301preview", _module)
