export const EncryptionConfigType = {
    UserManaged: "UserManaged",
    ServiceManaged: "ServiceManaged",
} as const;

export type EncryptionConfigType = (typeof EncryptionConfigType)[keyof typeof EncryptionConfigType];

export const EncryptionIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type EncryptionIdentityType = (typeof EncryptionIdentityType)[keyof typeof EncryptionIdentityType];

export const EncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EncryptionState = (typeof EncryptionState)[keyof typeof EncryptionState];

export const FirewallAllowAzureIpsState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type FirewallAllowAzureIpsState = (typeof FirewallAllowAzureIpsState)[keyof typeof FirewallAllowAzureIpsState];

export const FirewallState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type FirewallState = (typeof FirewallState)[keyof typeof FirewallState];

export const TierType = {
    Consumption: "Consumption",
    Commitment_1TB: "Commitment_1TB",
    Commitment_10TB: "Commitment_10TB",
    Commitment_100TB: "Commitment_100TB",
    Commitment_500TB: "Commitment_500TB",
    Commitment_1PB: "Commitment_1PB",
    Commitment_5PB: "Commitment_5PB",
} as const;

export type TierType = (typeof TierType)[keyof typeof TierType];

export const TrustedIdProviderState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type TrustedIdProviderState = (typeof TrustedIdProviderState)[keyof typeof TrustedIdProviderState];