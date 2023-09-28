export const AuthenticationMethod = {
    Token: "Token",
    AAD: "AAD",
} as const;

/**
 * The mode of client authentication.
 */
export type AuthenticationMethod = (typeof AuthenticationMethod)[keyof typeof AuthenticationMethod];

export const AzureHybridBenefit = {
    True: "True",
    False: "False",
    NotApplicable: "NotApplicable",
} as const;

/**
 * Indicates whether Azure Hybrid Benefit is opted in
 */
export type AzureHybridBenefit = (typeof AzureHybridBenefit)[keyof typeof AzureHybridBenefit];

export const PrivateLinkState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Property which describes the state of private link on a connected cluster resource.
 */
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

/**
 * Provisioning state of the connected cluster resource.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ResourceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The type of identity used for the connected cluster. The type 'SystemAssigned, includes a system created identity. The type 'None' means no identity is assigned to the connected cluster.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];
