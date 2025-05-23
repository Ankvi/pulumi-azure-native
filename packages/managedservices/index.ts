import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { GetRegistrationAssignmentArgs, GetRegistrationAssignmentResult, GetRegistrationAssignmentOutputArgs } from "./getRegistrationAssignment";
export const getRegistrationAssignment: typeof import("./getRegistrationAssignment").getRegistrationAssignment = null as any;
export const getRegistrationAssignmentOutput: typeof import("./getRegistrationAssignment").getRegistrationAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getRegistrationAssignment","getRegistrationAssignmentOutput"], () => require("./getRegistrationAssignment"));

export { GetRegistrationDefinitionArgs, GetRegistrationDefinitionResult, GetRegistrationDefinitionOutputArgs } from "./getRegistrationDefinition";
export const getRegistrationDefinition: typeof import("./getRegistrationDefinition").getRegistrationDefinition = null as any;
export const getRegistrationDefinitionOutput: typeof import("./getRegistrationDefinition").getRegistrationDefinitionOutput = null as any;
utilities.lazyLoad(exports, ["getRegistrationDefinition","getRegistrationDefinitionOutput"], () => require("./getRegistrationDefinition"));

export { RegistrationAssignmentArgs } from "./registrationAssignment";
export type RegistrationAssignment = import("./registrationAssignment").RegistrationAssignment;
export const RegistrationAssignment: typeof import("./registrationAssignment").RegistrationAssignment = null as any;
utilities.lazyLoad(exports, ["RegistrationAssignment"], () => require("./registrationAssignment"));

export { RegistrationDefinitionArgs } from "./registrationDefinition";
export type RegistrationDefinition = import("./registrationDefinition").RegistrationDefinition;
export const RegistrationDefinition: typeof import("./registrationDefinition").RegistrationDefinition = null as any;
utilities.lazyLoad(exports, ["RegistrationDefinition"], () => require("./registrationDefinition"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:managedservices:RegistrationAssignment":
                return new RegistrationAssignment(name, <any>undefined, { urn })
            case "azure-native:managedservices:RegistrationDefinition":
                return new RegistrationDefinition(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "managedservices", _module)