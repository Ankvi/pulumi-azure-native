export const DomainManagement = {
    AzureManaged: "AzureManaged",
    CustomerManaged: "CustomerManaged",
    CustomerManagedInExchangeOnline: "CustomerManagedInExchangeOnline",
} as const;

/**
 * Describes how a Domains resource is being managed.
 */
export type DomainManagement = (typeof DomainManagement)[keyof typeof DomainManagement];

export const UserEngagementTracking = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Describes whether user engagement tracking is enabled or disabled.
 */
export type UserEngagementTracking = (typeof UserEngagementTracking)[keyof typeof UserEngagementTracking];
