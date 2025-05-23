export const AddonType = {
    SRM: "SRM",
    VR: "VR",
    HCX: "HCX",
    Arc: "Arc",
} as const;

/**
 * Addon type
 */
export type AddonType = (typeof AddonType)[keyof typeof AddonType];

export const AvailabilityStrategy = {
    /**
     * in single zone
     */
    SingleZone: "SingleZone",
    /**
     * in two zones
     */
    DualZone: "DualZone",
} as const;

/**
 * The availability strategy for the private cloud
 */
export type AvailabilityStrategy = (typeof AvailabilityStrategy)[keyof typeof AvailabilityStrategy];

export const DhcpTypeEnum = {
    SERVER: "SERVER",
    RELAY: "RELAY",
} as const;

/**
 * Type of DHCP: SERVER or RELAY.
 */
export type DhcpTypeEnum = (typeof DhcpTypeEnum)[keyof typeof DhcpTypeEnum];

export const DnsServiceLogLevelEnum = {
    /**
     * is debug
     */
    DEBUG: "DEBUG",
    /**
     * is info
     */
    INFO: "INFO",
    /**
     * is warning
     */
    WARNING: "WARNING",
    /**
     * is error
     */
    ERROR: "ERROR",
    /**
     * is fatal
     */
    FATAL: "FATAL",
} as const;

/**
 * DNS Service log level.
 */
export type DnsServiceLogLevelEnum = (typeof DnsServiceLogLevelEnum)[keyof typeof DnsServiceLogLevelEnum];

export const DnsZoneType = {
    /**
     * Primary DNS zone.
     */
    Public: "Public",
    /**
     * Private DNS zone.
     */
    Private: "Private",
} as const;

/**
 * The type of DNS zone to use.
 */
export type DnsZoneType = (typeof DnsZoneType)[keyof typeof DnsZoneType];

export const EncryptionState = {
    /**
     * is enabled
     */
    Enabled: "Enabled",
    /**
     * is disabled
     */
    Disabled: "Disabled",
} as const;

/**
 * Status of customer managed encryption key
 */
export type EncryptionState = (typeof EncryptionState)[keyof typeof EncryptionState];

export const InternetEnum = {
    /**
     * is enabled
     */
    Enabled: "Enabled",
    /**
     * is disabled
     */
    Disabled: "Disabled",
} as const;

/**
 * Connectivity to internet is enabled or disabled
 */
export type InternetEnum = (typeof InternetEnum)[keyof typeof InternetEnum];

export const MountOptionEnum = {
    /**
     * is mount
     */
    MOUNT: "MOUNT",
    /**
     * is attach
     */
    ATTACH: "ATTACH",
} as const;

/**
 * Mode that describes whether the LUN has to be mounted as a datastore or
 * attached as a LUN
 */
export type MountOptionEnum = (typeof MountOptionEnum)[keyof typeof MountOptionEnum];

export const PlacementPolicyState = {
    /**
     * is enabled
     */
    Enabled: "Enabled",
    /**
     * is disabled
     */
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
 * Placement Policy type
 */
export type PlacementPolicyType = (typeof PlacementPolicyType)[keyof typeof PlacementPolicyType];

export const PortMirroringDirectionEnum = {
    /**
     * is ingress
     */
    INGRESS: "INGRESS",
    /**
     * is egress
     */
    EGRESS: "EGRESS",
    /**
     * is bidirectional
     */
    BIDIRECTIONAL: "BIDIRECTIONAL",
} as const;

/**
 * Direction of port mirroring profile.
 */
export type PortMirroringDirectionEnum = (typeof PortMirroringDirectionEnum)[keyof typeof PortMirroringDirectionEnum];

export const ScriptExecutionParameterType = {
    Value: "Value",
    SecureValue: "SecureValue",
    Credential: "Credential",
} as const;

/**
 * script execution parameter type
 */
export type ScriptExecutionParameterType = (typeof ScriptExecutionParameterType)[keyof typeof ScriptExecutionParameterType];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const SslEnum = {
    /**
     * is enabled
     */
    Enabled: "Enabled",
    /**
     * is disabled
     */
    Disabled: "Disabled",
} as const;

/**
 * Protect LDAP communication using SSL certificate (LDAPS)
 */
export type SslEnum = (typeof SslEnum)[keyof typeof SslEnum];

export const SystemAssignedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
} as const;

/**
 * Type of managed service identity (either system assigned, or none).
 */
export type SystemAssignedServiceIdentityType = (typeof SystemAssignedServiceIdentityType)[keyof typeof SystemAssignedServiceIdentityType];
