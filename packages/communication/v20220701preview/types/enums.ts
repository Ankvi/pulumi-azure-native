export const DomainManagement = {
    AzureManaged: "AzureManaged",
    CustomerManaged: "CustomerManaged",
    CustomerManagedInExchangeOnline: "CustomerManagedInExchangeOnline",
} as const;

export type DomainManagement = (typeof DomainManagement)[keyof typeof DomainManagement];

export const UserEngagementTracking = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type UserEngagementTracking = (typeof UserEngagementTracking)[keyof typeof UserEngagementTracking];
