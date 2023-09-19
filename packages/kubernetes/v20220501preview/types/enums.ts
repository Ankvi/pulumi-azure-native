export const AuthenticationMethod = {
    Token: "Token",
    AAD: "AAD",
} as const;

export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

export const PrivateLinkState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PrivateLinkState = (typeof PrivateLinkState)[keyof typeof PrivateLinkState];

export const ProvisioningState = {
    Succeeded: "Succeeded",
    Failed: "Failed",
    Canceled: "Canceled",
    Provisioning: "Provisioning",
    Updating: "Updating",
    Deleting: "Deleting",
    Accepted: "Accepted",
} as const;

export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
