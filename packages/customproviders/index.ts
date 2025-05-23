import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssociationArgs } from "./association";
export type Association = import("./association").Association;
export const Association: typeof import("./association").Association = null as any;
utilities.lazyLoad(exports, ["Association"], () => require("./association"));

export { CustomResourceProviderArgs } from "./customResourceProvider";
export type CustomResourceProvider = import("./customResourceProvider").CustomResourceProvider;
export const CustomResourceProvider: typeof import("./customResourceProvider").CustomResourceProvider = null as any;
utilities.lazyLoad(exports, ["CustomResourceProvider"], () => require("./customResourceProvider"));

export { GetAssociationArgs, GetAssociationResult, GetAssociationOutputArgs } from "./getAssociation";
export const getAssociation: typeof import("./getAssociation").getAssociation = null as any;
export const getAssociationOutput: typeof import("./getAssociation").getAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getAssociation","getAssociationOutput"], () => require("./getAssociation"));

export { GetCustomResourceProviderArgs, GetCustomResourceProviderResult, GetCustomResourceProviderOutputArgs } from "./getCustomResourceProvider";
export const getCustomResourceProvider: typeof import("./getCustomResourceProvider").getCustomResourceProvider = null as any;
export const getCustomResourceProviderOutput: typeof import("./getCustomResourceProvider").getCustomResourceProviderOutput = null as any;
utilities.lazyLoad(exports, ["getCustomResourceProvider","getCustomResourceProviderOutput"], () => require("./getCustomResourceProvider"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:customproviders:Association":
                return new Association(name, <any>undefined, { urn })
            case "azure-native:customproviders:CustomResourceProvider":
                return new CustomResourceProvider(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "customproviders", _module)