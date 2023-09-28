export const AddonType = {
    SRM: "SRM",
    VR: "VR",
    HCX: "HCX",
    Arc: "Arc",
} as const;

/**
 * The type of private cloud addon
 */
export type AddonType = (typeof AddonType)[keyof typeof AddonType];

export const AffinityStrength = {
    Should: "Should",
    Must: "Must",
} as const;

/**
 * vm-host placement policy affinity strength (should/must)
 */
export type AffinityStrength = (typeof AffinityStrength)[keyof typeof AffinityStrength];

export const AffinityType = {
    Affinity: "Affinity",
    AntiAffinity: "AntiAffinity",
} as const;

/**
 * placement policy affinity type
 */
export type AffinityType = (typeof AffinityType)[keyof typeof AffinityType];

export const AvailabilityStrategy = {
    SingleZone: "SingleZone",
    DualZone: "DualZone",
} as const;

/**
 * The availability strategy for the private cloud
 */
export type AvailabilityStrategy = (typeof AvailabilityStrategy)[keyof typeof AvailabilityStrategy];

export const AzureHybridBenefitType = {
    SqlHost: "SqlHost",
    None: "None",
} as const;

/**
 * placement policy azure hybrid benefit opt-in type
 */
export type AzureHybridBenefitType = (typeof AzureHybridBenefitType)[keyof typeof AzureHybridBenefitType];

export const DhcpTypeEnum = {
    SERVER: "SERVER",
    RELAY: "RELAY",
} as const;

/**
 * Type of DHCP: SERVER or RELAY.
 */
export type DhcpTypeEnum = (typeof DhcpTypeEnum)[keyof typeof DhcpTypeEnum];

export const DnsServiceLogLevelEnum = {
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARNING: "WARNING",
    ERROR: "ERROR",
    FATAL: "FATAL",
} as const;

/**
 * DNS Service log level.
 */
export type DnsServiceLogLevelEnum = (typeof DnsServiceLogLevelEnum)[keyof typeof DnsServiceLogLevelEnum];

export const EncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Status of customer managed encryption key
 */
export type EncryptionState = (typeof EncryptionState)[keyof typeof EncryptionState];

export const InternetEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Connectivity to internet is enabled or disabled
 */
export type InternetEnum = (typeof InternetEnum)[keyof typeof InternetEnum];

export const MountOptionEnum = {
    MOUNT: "MOUNT",
    ATTACH: "ATTACH",
} as const;

/**
 * Mode that describes whether the LUN has to be mounted as a datastore or attached as a LUN
 */
export type MountOptionEnum = (typeof MountOptionEnum)[keyof typeof MountOptionEnum];

export const PlacementPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether the placement policy is enabled or disabled
 */
export type PlacementPolicyState = (typeof PlacementPolicyState)[keyof typeof PlacementPolicyState];

export const PlacementPolicyType = {
    VmVm: "VmVm",
    VmHost: "VmHost",
} as const;

/**
 * placement policy type
 */
export type PlacementPolicyType = (typeof PlacementPolicyType)[keyof typeof PlacementPolicyType];

export const PortMirroringDirectionEnum = {
    INGRESS: "INGRESS",
    EGRESS: "EGRESS",
    BIDIRECTIONAL: "BIDIRECTIONAL",
} as const;

/**
 * Direction of port mirroring profile.
 */
export type PortMirroringDirectionEnum = (typeof PortMirroringDirectionEnum)[keyof typeof PortMirroringDirectionEnum];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the private cloud. The type 'SystemAssigned' refers to an implicitly created identity. The type 'None' will remove any identities from the Private Cloud.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ScriptExecutionParameterType = {
    Value: "Value",
    SecureValue: "SecureValue",
    Credential: "Credential",
} as const;

/**
 * The type of execution parameter
 */
export type ScriptExecutionParameterType = (typeof ScriptExecutionParameterType)[keyof typeof ScriptExecutionParameterType];

export const SslEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Protect LDAP communication using SSL certificate (LDAPS)
 */
export type SslEnum = (typeof SslEnum)[keyof typeof SslEnum];
