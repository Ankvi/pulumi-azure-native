export const EncryptionKeySource = {
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

export type EncryptionKeySource = (typeof EncryptionKeySource)[keyof typeof EncryptionKeySource];

export const KeySource = {
    Default: "Default",
    Microsoft_Keyvault: "Microsoft.Keyvault",
} as const;

export type KeySource = (typeof KeySource)[keyof typeof KeySource];

export const PrivateLinkServiceConnectionStatus = {
    Pending: "Pending",
    Approved: "Approved",
    Rejected: "Rejected",
    Disconnected: "Disconnected",
} as const;

export type PrivateLinkServiceConnectionStatus = (typeof PrivateLinkServiceConnectionStatus)[keyof typeof PrivateLinkServiceConnectionStatus];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RequiredNsgRules = {
    AllRules: "AllRules",
    NoAzureDatabricksRules: "NoAzureDatabricksRules",
    NoAzureServiceRules: "NoAzureServiceRules",
} as const;

export type RequiredNsgRules = (typeof RequiredNsgRules)[keyof typeof RequiredNsgRules];