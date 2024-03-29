export const KustoOfferingType = {
    /**
     * The Azure Data Explorer cluster Kusto offering.
     */
    Adx: "adx",
    /**
     * The free Azure Data Explorer cluster Kusto offering.
     */
    Free: "free",
    /**
     * The Fabric Real-Time Analytics Kusto offering.
     */
    Fabric: "fabric",
} as const;

/**
 * The type of a Kusto offering.
 */
export type KustoOfferingType = (typeof KustoOfferingType)[keyof typeof KustoOfferingType];

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

export const TargetAuthenticationType = {
    /**
     * The Azure Active Directory authentication.
     */
    Aad: "Aad",
    /**
     * The SQL password authentication.
     */
    Sql: "Sql",
} as const;

/**
 * The type of authentication to use when connecting to a target.
 */
export type TargetAuthenticationType = (typeof TargetAuthenticationType)[keyof typeof TargetAuthenticationType];

export const TargetCollectionStatus = {
    /**
     * Denotes a target that is enabled.
     */
    Enabled: "Enabled",
    /**
     * Denotes a target that is disabled.
     */
    Disabled: "Disabled",
} as const;

/**
 * The target collection status.
 */
export type TargetCollectionStatus = (typeof TargetCollectionStatus)[keyof typeof TargetCollectionStatus];
