export const FilterType = {
    Simple: "Simple",
} as const;

/**
 * Enum that discriminates between filter types. Currently only `Simple` type is supported.
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const PublicNetworkAccessOption = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Public Network Access Control for PrivateAccess resource.
 */
export type PublicNetworkAccessOption = (typeof PublicNetworkAccessOption)[keyof typeof PublicNetworkAccessOption];

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
