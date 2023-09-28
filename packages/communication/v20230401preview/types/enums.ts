export const DomainManagement = {
    AzureManaged: "AzureManaged",
    CustomerManaged: "CustomerManaged",
    CustomerManagedInExchangeOnline: "CustomerManagedInExchangeOnline",
} as const;

/**
 * Describes how a Domains resource is being managed.
 */
export type DomainManagement = (typeof DomainManagement)[keyof typeof DomainManagement];

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

export const UserEngagementTracking = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes whether user engagement tracking is enabled or disabled.
 */
export type UserEngagementTracking = (typeof UserEngagementTracking)[keyof typeof UserEngagementTracking];
