export const InfrastructureEncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enabling/Disabling the Double Encryption state
 */
export type InfrastructureEncryptionState = (typeof InfrastructureEncryptionState)[keyof typeof InfrastructureEncryptionState];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SkuName = {
    Standard: "Standard",
    RS0: "RS0",
} as const;

/**
 * The Sku name.
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];
