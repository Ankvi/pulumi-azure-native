import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { AssignmentArgs } from "./assignment";
export type Assignment = import("./assignment").Assignment;
export const Assignment: typeof import("./assignment").Assignment = null as any;
utilities.lazyLoad(exports, ["Assignment"], () => require("./assignment"));

export { BlueprintArgs } from "./blueprint";
export type Blueprint = import("./blueprint").Blueprint;
export const Blueprint: typeof import("./blueprint").Blueprint = null as any;
utilities.lazyLoad(exports, ["Blueprint"], () => require("./blueprint"));

export { GetAssignmentArgs, GetAssignmentResult, GetAssignmentOutputArgs } from "./getAssignment";
export const getAssignment: typeof import("./getAssignment").getAssignment = null as any;
export const getAssignmentOutput: typeof import("./getAssignment").getAssignmentOutput = null as any;
utilities.lazyLoad(exports, ["getAssignment","getAssignmentOutput"], () => require("./getAssignment"));

export { GetBlueprintArgs, GetBlueprintResult, GetBlueprintOutputArgs } from "./getBlueprint";
export const getBlueprint: typeof import("./getBlueprint").getBlueprint = null as any;
export const getBlueprintOutput: typeof import("./getBlueprint").getBlueprintOutput = null as any;
utilities.lazyLoad(exports, ["getBlueprint","getBlueprintOutput"], () => require("./getBlueprint"));

export { GetPolicyAssignmentArtifactArgs, GetPolicyAssignmentArtifactResult, GetPolicyAssignmentArtifactOutputArgs } from "./getPolicyAssignmentArtifact";
export const getPolicyAssignmentArtifact: typeof import("./getPolicyAssignmentArtifact").getPolicyAssignmentArtifact = null as any;
export const getPolicyAssignmentArtifactOutput: typeof import("./getPolicyAssignmentArtifact").getPolicyAssignmentArtifactOutput = null as any;
utilities.lazyLoad(exports, ["getPolicyAssignmentArtifact","getPolicyAssignmentArtifactOutput"], () => require("./getPolicyAssignmentArtifact"));

export { GetPublishedBlueprintArgs, GetPublishedBlueprintResult, GetPublishedBlueprintOutputArgs } from "./getPublishedBlueprint";
export const getPublishedBlueprint: typeof import("./getPublishedBlueprint").getPublishedBlueprint = null as any;
export const getPublishedBlueprintOutput: typeof import("./getPublishedBlueprint").getPublishedBlueprintOutput = null as any;
utilities.lazyLoad(exports, ["getPublishedBlueprint","getPublishedBlueprintOutput"], () => require("./getPublishedBlueprint"));

export { GetRoleAssignmentArtifactArgs, GetRoleAssignmentArtifactResult, GetRoleAssignmentArtifactOutputArgs } from "./getRoleAssignmentArtifact";
export const getRoleAssignmentArtifact: typeof import("./getRoleAssignmentArtifact").getRoleAssignmentArtifact = null as any;
export const getRoleAssignmentArtifactOutput: typeof import("./getRoleAssignmentArtifact").getRoleAssignmentArtifactOutput = null as any;
utilities.lazyLoad(exports, ["getRoleAssignmentArtifact","getRoleAssignmentArtifactOutput"], () => require("./getRoleAssignmentArtifact"));

export { GetTemplateArtifactArgs, GetTemplateArtifactResult, GetTemplateArtifactOutputArgs } from "./getTemplateArtifact";
export const getTemplateArtifact: typeof import("./getTemplateArtifact").getTemplateArtifact = null as any;
export const getTemplateArtifactOutput: typeof import("./getTemplateArtifact").getTemplateArtifactOutput = null as any;
utilities.lazyLoad(exports, ["getTemplateArtifact","getTemplateArtifactOutput"], () => require("./getTemplateArtifact"));

export { PolicyAssignmentArtifactArgs } from "./policyAssignmentArtifact";
export type PolicyAssignmentArtifact = import("./policyAssignmentArtifact").PolicyAssignmentArtifact;
export const PolicyAssignmentArtifact: typeof import("./policyAssignmentArtifact").PolicyAssignmentArtifact = null as any;
utilities.lazyLoad(exports, ["PolicyAssignmentArtifact"], () => require("./policyAssignmentArtifact"));

export { PublishedBlueprintArgs } from "./publishedBlueprint";
export type PublishedBlueprint = import("./publishedBlueprint").PublishedBlueprint;
export const PublishedBlueprint: typeof import("./publishedBlueprint").PublishedBlueprint = null as any;
utilities.lazyLoad(exports, ["PublishedBlueprint"], () => require("./publishedBlueprint"));

export { RoleAssignmentArtifactArgs } from "./roleAssignmentArtifact";
export type RoleAssignmentArtifact = import("./roleAssignmentArtifact").RoleAssignmentArtifact;
export const RoleAssignmentArtifact: typeof import("./roleAssignmentArtifact").RoleAssignmentArtifact = null as any;
utilities.lazyLoad(exports, ["RoleAssignmentArtifact"], () => require("./roleAssignmentArtifact"));

export { TemplateArtifactArgs } from "./templateArtifact";
export type TemplateArtifact = import("./templateArtifact").TemplateArtifact;
export const TemplateArtifact: typeof import("./templateArtifact").TemplateArtifact = null as any;
utilities.lazyLoad(exports, ["TemplateArtifact"], () => require("./templateArtifact"));


// Export enums:
export * from "./types/enums";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "azure-native:blueprint:Assignment":
                return new Assignment(name, <any>undefined, { urn })
            case "azure-native:blueprint:Blueprint":
                return new Blueprint(name, <any>undefined, { urn })
            case "azure-native:blueprint:PolicyAssignmentArtifact":
                return new PolicyAssignmentArtifact(name, <any>undefined, { urn })
            case "azure-native:blueprint:PublishedBlueprint":
                return new PublishedBlueprint(name, <any>undefined, { urn })
            case "azure-native:blueprint:RoleAssignmentArtifact":
                return new RoleAssignmentArtifact(name, <any>undefined, { urn })
            case "azure-native:blueprint:TemplateArtifact":
                return new TemplateArtifact(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("azure-native", "blueprint", _module)