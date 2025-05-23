export const InfrastructureEncryption = {
    Enabled: "enabled",
    Disabled: "disabled",
} as const;

/**
 * (Optional) Discouraged to include in resource definition. Only needed where it is possible to disable platform (AKA infrastructure) encryption. Azure SQL TDE is an example of this. Values are enabled and disabled.
 */
export type InfrastructureEncryption = (typeof InfrastructureEncryption)[keyof typeof InfrastructureEncryption];

export const Kind = {
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
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const Name = {
    G2: "G2",
} as const;

/**
 * The name of the SKU, in standard format (such as G2).
 */
export type Name = (typeof Name)[keyof typeof Name];

export const PrivateEndpointServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
} as const;

/**
 * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
 */
export type PrivateEndpointServiceConnectionStatus = (typeof PrivateEndpointServiceConnectionStatus)[keyof typeof PrivateEndpointServiceConnectionStatus];

export const SigningKey = {
    PrimaryKey: "primaryKey",
    SecondaryKey: "secondaryKey",
    ManagedIdentity: "managedIdentity",
} as const;

/**
 * The Maps account key to use for signing. Picking `primaryKey` or `secondaryKey` will use the Maps account Shared Keys, and using `managedIdentity` will use the auto-renewed private key to sign the SAS.
 */
export type SigningKey = (typeof SigningKey)[keyof typeof SigningKey];
