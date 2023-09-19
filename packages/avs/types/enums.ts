export const AddonType = {
    SRM: "SRM",
    VR: "VR",
    HCX: "HCX",
    Arc: "Arc",
} as const;

export type AddonType = (typeof AddonType)[keyof typeof AddonType];

export const AffinityStrength = {
    Should: "Should",
    Must: "Must",
} as const;

export type AffinityStrength = (typeof AffinityStrength)[keyof typeof AffinityStrength];

export const AffinityType = {
    Affinity: "Affinity",
    AntiAffinity: "AntiAffinity",
} as const;

export type AffinityType = (typeof AffinityType)[keyof typeof AffinityType];

export const AvailabilityStrategy = {
    SingleZone: "SingleZone",
    DualZone: "DualZone",
} as const;

export type AvailabilityStrategy = (typeof AvailabilityStrategy)[keyof typeof AvailabilityStrategy];

export const AzureHybridBenefitType = {
    SqlHost: "SqlHost",
    None: "None",
} as const;

export type AzureHybridBenefitType = (typeof AzureHybridBenefitType)[keyof typeof AzureHybridBenefitType];

export const DhcpTypeEnum = {
    SERVER: "SERVER",
    RELAY: "RELAY",
} as const;

export type DhcpTypeEnum = (typeof DhcpTypeEnum)[keyof typeof DhcpTypeEnum];

export const DnsServiceLogLevelEnum = {
    DEBUG: "DEBUG",
    INFO: "INFO",
    WARNING: "WARNING",
    ERROR: "ERROR",
    FATAL: "FATAL",
} as const;

export type DnsServiceLogLevelEnum = (typeof DnsServiceLogLevelEnum)[keyof typeof DnsServiceLogLevelEnum];

export const EncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EncryptionState = (typeof EncryptionState)[keyof typeof EncryptionState];

export const InternetEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type InternetEnum = (typeof InternetEnum)[keyof typeof InternetEnum];

export const MountOptionEnum = {
    MOUNT: "MOUNT",
    ATTACH: "ATTACH",
} as const;

export type MountOptionEnum = (typeof MountOptionEnum)[keyof typeof MountOptionEnum];

export const PlacementPolicyState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PlacementPolicyState = (typeof PlacementPolicyState)[keyof typeof PlacementPolicyState];

export const PlacementPolicyType = {
    VmVm: "VmVm",
    VmHost: "VmHost",
} as const;

export type PlacementPolicyType = (typeof PlacementPolicyType)[keyof typeof PlacementPolicyType];

export const PortMirroringDirectionEnum = {
    INGRESS: "INGRESS",
    EGRESS: "EGRESS",
    BIDIRECTIONAL: "BIDIRECTIONAL",
} as const;

export type PortMirroringDirectionEnum = (typeof PortMirroringDirectionEnum)[keyof typeof PortMirroringDirectionEnum];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const ScriptExecutionParameterType = {
    Value: "Value",
    SecureValue: "SecureValue",
    Credential: "Credential",
} as const;

export type ScriptExecutionParameterType = (typeof ScriptExecutionParameterType)[keyof typeof ScriptExecutionParameterType];

export const SslEnum = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SslEnum = (typeof SslEnum)[keyof typeof SslEnum];
