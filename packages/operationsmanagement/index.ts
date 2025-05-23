import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetManagementAssociationArgs, GetManagementAssociationResult, GetManagementAssociationOutputArgs } from "./getManagementAssociation";
export const getManagementAssociation: typeof import("./getManagementAssociation").getManagementAssociation = null as any;
export const getManagementAssociationOutput: typeof import("./getManagementAssociation").getManagementAssociationOutput = null as any;
utilities.lazyLoad(exports, ["getManagementAssociation","getManagementAssociationOutput"], () => require("./getManagementAssociation"));

export { GetManagementConfigurationArgs, GetManagementConfigurationResult, GetManagementConfigurationOutputArgs } from "./getManagementConfiguration";
export const getManagementConfiguration: typeof import("./getManagementConfiguration").getManagementConfiguration = null as any;
export const getManagementConfigurationOutput: typeof import("./getManagementConfiguration").getManagementConfigurationOutput = null as any;
utilities.lazyLoad(exports, ["getManagementConfiguration","getManagementConfigurationOutput"], () => require("./getManagementConfiguration"));

export { GetSolutionArgs, GetSolutionResult, GetSolutionOutputArgs } from "./getSolution";
export const getSolution: typeof import("./getSolution").getSolution = null as any;
export const getSolutionOutput: typeof import("./getSolution").getSolutionOutput = null as any;
utilities.lazyLoad(exports, ["getSolution","getSolutionOutput"], () => require("./getSolution"));

export { ManagementAssociationArgs } from "./managementAssociation";
export type ManagementAssociation = import("./managementAssociation").ManagementAssociation;
export const ManagementAssociation: typeof import("./managementAssociation").ManagementAssociation = null as any;
utilities.lazyLoad(exports, ["ManagementAssociation"], () => require("./managementAssociation"));

export { ManagementConfigurationArgs } from "./managementConfiguration";
export type ManagementConfiguration = import("./managementConfiguration").ManagementConfiguration;
export const ManagementConfiguration: typeof import("./managementConfiguration").ManagementConfiguration = null as any;
utilities.lazyLoad(exports, ["ManagementConfiguration"], () => require("./managementConfiguration"));

export { SolutionArgs } from "./solution";
export type Solution = import("./solution").Solution;
export const Solution: typeof import("./solution").Solution = null as any;
utilities.lazyLoad(exports, ["Solution"], () => require("./solution"));


const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:operationsmanagement:ManagementAssociation":
                return new ManagementAssociation(name, <any>undefined, { urn })
            case "azure-native:operationsmanagement:ManagementConfiguration":
                return new ManagementConfiguration(name, <any>undefined, { urn })
            case "azure-native:operationsmanagement:Solution":
                return new Solution(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "operationsmanagement", _module)