// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

// Export sub-modules:
import * as v20230415preview from "./v20230415preview";

export {
    v20230415preview,
};

export const FilterType = {
    Simple: "Simple",
} as const;

export type FilterType = (typeof FilterType)[keyof typeof FilterType];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SelectorType = {
    List: "List",
    Query: "Query",
} as const;

export type SelectorType = (typeof SelectorType)[keyof typeof SelectorType];

export const TargetReferenceType = {
    ChaosTarget: "ChaosTarget",
} as const;

export type TargetReferenceType = (typeof TargetReferenceType)[keyof typeof TargetReferenceType];
