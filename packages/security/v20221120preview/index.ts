import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { APICollectionArgs } from "./apicollection";
export type APICollection = import("./apicollection").APICollection;
export const APICollection: typeof import("./apicollection").APICollection = null as any;
utilities.lazyLoad(exports, ["APICollection"], () => require("./apicollection"));

export { GetAPICollectionArgs, GetAPICollectionResult, GetAPICollectionOutputArgs } from "./getAPICollection";
export const getAPICollection: typeof import("./getAPICollection").getAPICollection = null as any;
export const getAPICollectionOutput: typeof import("./getAPICollection").getAPICollectionOutput = null as any;
utilities.lazyLoad(exports, ["getAPICollection","getAPICollectionOutput"], () => require("./getAPICollection"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:security/v20221120preview:APICollection":
                return new APICollection(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "security/v20221120preview", _module)
