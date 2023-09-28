export const EncryptionKeySource = {
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

/**
 * The encryption keySource (provider). Possible values (case-insensitive):  Microsoft.Keyvault
 */
export type EncryptionKeySource = (typeof EncryptionKeySource)[keyof typeof EncryptionKeySource];

export const KeySource = {
    Default: "Default",
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

/**
 * The encryption keySource (provider). Possible values (case-insensitive):  Default, Microsoft.Keyvault
 */
export type KeySource = (typeof KeySource)[keyof typeof KeySource];

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

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

/**
 * The status of a private endpoint connection
 */
export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The network access type for accessing workspace. Set value to disabled to access workspace only via private link.
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RequiredNsgRules = {
    AllRules: "AllRules",
    NoAzureDatabricksRules: "NoAzureDatabricksRules",
    NoAzureServiceRules: "NoAzureServiceRules",
} as const;

/**
 * Gets or sets a value indicating whether data plane (clusters) to control plane communication happen over private endpoint. Supported values are 'AllRules' and 'NoAzureDatabricksRules'. 'NoAzureServiceRules' value is for internal use only.
 */
export type RequiredNsgRules = (typeof RequiredNsgRules)[keyof typeof RequiredNsgRules];
