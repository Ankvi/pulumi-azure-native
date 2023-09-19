import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { DataCollectionEndpointArgs } from "./dataCollectionEndpoint";
export type DataCollectionEndpoint = import("./dataCollectionEndpoint").DataCollectionEndpoint;
export const DataCollectionEndpoint: typeof import("./dataCollectionEndpoint").DataCollectionEndpoint = null as any;
utilities.lazyLoad(exports, ["DataCollectionEndpoint"], () => require("./dataCollectionEndpoint"));

export { DataCollectionRuleArgs } from "./dataCollectionRule";
export type DataCollectionRule = import("./dataCollectionRule").DataCollectionRule;
export const DataCollectionRule: typeof import("./dataCollectionRule").DataCollectionRule = null as any;
utilities.lazyLoad(exports, ["DataCollectionRule"], () => require("./dataCollectionRule"));

export { DataCollectionRuleAssociationArgs } from "./dataCollectionRuleAssociation";
export type DataCollectionRuleAssociation = import("./dataCollectionRuleAssociation").DataCollectionRuleAssociation;
export const DataCollectionRuleAssociation: typeof import("./dataCollectionRuleAssociation").DataCollectionRuleAssociation = null as any;
utilities.lazyLoad(exports, ["DataCollectionRuleAssociation"], () => require("./dataCollectionRuleAssociation"));

export { GetDataCollectionEndpointArgs, GetDataCollectionEndpointResult, GetDataCollectionEndpointOutputArgs } from "./getDataCollectionEndpoint";
export const getDataCollectionEndpoint: typeof import("./getDataCollectionEndpoint").getDataCollectionEndpoint = null as any;
export const getDataCollectionEndpointOutput: typeof import("./getDataCollectionEndpoint").getDataCollectionEndpointOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionEndpoint","getDataCollectionEndpointOutput"], () => require("./getDataCollectionEndpoint"));

export { GetDataCollectionRuleArgs, GetDataCollectionRuleResult, GetDataCollectionRuleOutputArgs } from "./getDataCollectionRule";
export const getDataCollectionRule: typeof import("./getDataCollectionRule").getDataCollectionRule = null as any;
export const getDataCollectionRuleOutput: typeof import("./getDataCollectionRule").getDataCollectionRuleOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionRule","getDataCollectionRuleOutput"], () => require("./getDataCollectionRule"));

export { GetDataCollectionRuleAssociationArgs, GetDataCollectionRuleAssociationResult, GetDataCollectionRuleAssociationOutputArgs } from "./getDataCollectionRuleAssociation";
export const getDataCollectionRuleAssociation: typeof import("./getDataCollectionRuleAssociation").getDataCollectionRuleAssociation = null as any;
export const getDataCollectionRuleAssociationOutput: typeof import("./getDataCollectionRuleAssociation").getDataCollectionRuleAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getDataCollectionRuleAssociation","getDataCollectionRuleAssociationOutput"], () => require("./getDataCollectionRuleAssociation"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:insights/v20220601:DataCollectionEndpoint":
                return new DataCollectionEndpoint(name, <any>undefined, { urn })
            case "azure-native:insights/v20220601:DataCollectionRule":
                return new DataCollectionRule(name, <any>undefined, { urn })
            case "azure-native:insights/v20220601:DataCollectionRuleAssociation":
                return new DataCollectionRuleAssociation(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "insights/v20220601", _module)
