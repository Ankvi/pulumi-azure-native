export const AADObjectType = {
    User: "User",
    Group: "Group",
    ServicePrincipal: "ServicePrincipal",
} as const;

export type AADObjectType = (typeof AADObjectType)[keyof typeof AADObjectType];

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
    Commitment_100AUHours: "Commitment_100AUHours",
    Commitment_500AUHours: "Commitment_500AUHours",
    Commitment_1000AUHours: "Commitment_1000AUHours",
    Commitment_5000AUHours: "Commitment_5000AUHours",
    Commitment_10000AUHours: "Commitment_10000AUHours",
    Commitment_50000AUHours: "Commitment_50000AUHours",
    Commitment_100000AUHours: "Commitment_100000AUHours",
    Commitment_500000AUHours: "Commitment_500000AUHours",
} as const;

export type TierType = (typeof TierType)[keyof typeof TierType];