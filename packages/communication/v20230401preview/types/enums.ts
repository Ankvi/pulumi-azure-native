export const DomainManagement = {
    AzureManaged: "AzureManaged",
    CustomerManaged: "CustomerManaged",
    CustomerManagedInExchangeOnline: "CustomerManagedInExchangeOnline",
} as const;

export type DomainManagement = (typeof DomainManagement)[keyof typeof DomainManagement];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const UserEngagementTracking = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type UserEngagementTracking = (typeof UserEngagementTracking)[keyof typeof UserEngagementTracking];
