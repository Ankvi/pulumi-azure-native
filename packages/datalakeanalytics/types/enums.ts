export const AADObjectType = {
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
} as const;

/**
 * The type of AAD object the object identifier refers to.
 */
export type AADObjectType = (typeof AADObjectType)[keyof typeof AADObjectType];

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
 * The current state of the IP address firewall for this account.
 */
export type FirewallState = (typeof FirewallState)[keyof typeof FirewallState];

export const TierType = {
    Consumption: "Consumption",
    Commitment_100AUHours: "Commitment_100AUHours",
    Commitment_500AUHours: "Commitment_500AUHours",
    Commitment_1000AUHours: "Commitment_1000AUHours",
    Commitment_5000AUHours: "Commitment_5000AUHours",
    Commitment_10000AUHours: "Commitment_10000AUHours",
    Commitment_50000AUHours: "Commitment_50000AUHours",
    Commitment_100000AUHours: "Commitment_100000AUHours",
    Commitment_500000AUHours: "Commitment_500000AUHours",
} as const;

/**
 * The commitment tier for the next month.
 */
export type TierType = (typeof TierType)[keyof typeof TierType];
