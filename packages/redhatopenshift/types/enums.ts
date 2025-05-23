export const EncryptionAtHost = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Whether master virtual machines are encrypted at host.
 */
export type EncryptionAtHost = (typeof EncryptionAtHost)[keyof typeof EncryptionAtHost];

export const FipsValidatedModules = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * If FIPS validated crypto modules are used
 */
export type FipsValidatedModules = (typeof FipsValidatedModules)[keyof typeof FipsValidatedModules];

export const OutboundType = {
    Loadbalancer: "Loadbalancer",
    UserDefinedRouting: "UserDefinedRouting",
} as const;

/**
 * The OutboundType used for egress traffic.
 */
export type OutboundType = (typeof OutboundType)[keyof typeof OutboundType];

export const PreconfiguredNSG = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Specifies whether subnets are pre-attached with an NSG
 */
export type PreconfiguredNSG = (typeof PreconfiguredNSG)[keyof typeof PreconfiguredNSG];

export const ProvisioningState = {
    AdminUpdating: "AdminUpdating",
    Canceled: "Canceled",
    Creating: "Creating",
    Deleting: "Deleting",
    Failed: "Failed",
    Succeeded: "Succeeded",
    Updating: "Updating",
} as const;

/**
 * The cluster provisioning state.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const Visibility = {
    Private: "Private",
    Public: "Public",
} as const;

/**
 * Ingress visibility.
 */
export type Visibility = (typeof Visibility)[keyof typeof Visibility];
