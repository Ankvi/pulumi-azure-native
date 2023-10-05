export const FilterType = {
    Simple: "Simple",
} as const;

/**
 * Enum that discriminates between filter types. Currently only `Simple` type is supported.
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * String of the resource identity type.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SelectorType = {
    List: "List",
    Query: "Query",
} as const;

/**
 * Enum of the selector type.
 */
export type SelectorType = (typeof SelectorType)[keyof typeof SelectorType];

export const TargetReferenceType = {
    ChaosTarget: "ChaosTarget",
} as const;

/**
 * Enum of the Target reference type.
 */
export type TargetReferenceType = (typeof TargetReferenceType)[keyof typeof TargetReferenceType];
