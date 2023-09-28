export const EncryptionConfigType = {
    UserManaged: "UserManaged",
    ServiceManaged: "ServiceManaged",
} as const;

/**
 * The type of encryption configuration being used. Currently the only supported types are 'UserManaged' and 'ServiceManaged'.
 */
export type EncryptionConfigType = (typeof EncryptionConfigType)[keyof typeof EncryptionConfigType];

export const EncryptionIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * The type of encryption being used. Currently the only supported type is 'SystemAssigned'.
 */
export type EncryptionIdentityType = (typeof EncryptionIdentityType)[keyof typeof EncryptionIdentityType];

export const EncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The current state of encryption for this Data Lake Store account.
 */
export type EncryptionState = (typeof EncryptionState)[keyof typeof EncryptionState];

export const FirewallAllowAzureIpsState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The current state of allowing or disallowing IPs originating within Azure through the firewall. If the firewall is disabled, this is not enforced.
 */
export type FirewallAllowAzureIpsState = (typeof FirewallAllowAzureIpsState)[keyof typeof FirewallAllowAzureIpsState];

export const FirewallState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The current state of the IP address firewall for this Data Lake Store account.
 */
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

/**
 * The commitment tier to use for next month.
 */
export type TierType = (typeof TierType)[keyof typeof TierType];

export const TrustedIdProviderState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The current state of the trusted identity provider feature for this Data Lake Store account.
 */
export type TrustedIdProviderState = (typeof TrustedIdProviderState)[keyof typeof TrustedIdProviderState];
