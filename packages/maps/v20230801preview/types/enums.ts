export const IdentityType = {
    SystemAssignedIdentity: "systemAssignedIdentity",
    UserAssignedIdentity: "userAssignedIdentity",
    DelegatedResourceIdentity: "delegatedResourceIdentity",
} as const;

/**
 * Values can be systemAssignedIdentity or userAssignedIdentity
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const InfrastructureEncryption = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * Values are enabled and disabled.
 */
export type InfrastructureEncryption = (typeof InfrastructureEncryption)[keyof typeof InfrastructureEncryption];

export const Kind = {
    Gen1: "Gen1",
    Gen2: "Gen2",
} as const;

/**
 * Get or Set Kind property.
 */
export type Kind = (typeof Kind)[keyof typeof Kind];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const Name = {
    S0: "S0",
    S1: "S1",
    G2: "G2",
} as const;

/**
 * The name of the SKU, in standard format (such as S0).
 */
export type Name = (typeof Name)[keyof typeof Name];

export const SigningKey = {
    PrimaryKey: "primaryKey",
    SecondaryKey: "secondaryKey",
    ManagedIdentity: "managedIdentity",
} as const;

/**
 * The Map account key to use for signing. Picking `primaryKey` or `secondaryKey` will use the Map account Shared Keys, and using `managedIdentity` will use the auto-renewed private key to sign the SAS.
 */
export type SigningKey = (typeof SigningKey)[keyof typeof SigningKey];