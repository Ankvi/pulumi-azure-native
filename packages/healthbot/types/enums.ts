export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The identity type. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the Azure Health Bot
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SkuName = {
    F0: "F0",
    S1: "S1",
    C0: "C0",
    PES: "PES",
    C1: "C1",
} as const;

/**
 * The name of the Azure Health Bot SKU
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
