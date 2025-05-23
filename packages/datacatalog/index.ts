import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ADCCatalogArgs } from "./adccatalog";
export type ADCCatalog = import("./adccatalog").ADCCatalog;
export const ADCCatalog: typeof import("./adccatalog").ADCCatalog = null as any;
utilities.lazyLoad(exports, ["ADCCatalog"], () => require("./adccatalog"));

export { GetADCCatalogArgs, GetADCCatalogResult, GetADCCatalogOutputArgs } from "./getADCCatalog";
export const getADCCatalog: typeof import("./getADCCatalog").getADCCatalog = null as any;
export const getADCCatalogOutput: typeof import("./getADCCatalog").getADCCatalogOutput = null as any;
utilities.lazyLoad(exports, ["getADCCatalog","getADCCatalogOutput"], () => require("./getADCCatalog"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:datacatalog:ADCCatalog":
                return new ADCCatalog(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "datacatalog", _module)