export const ApplicationScopedVolumeKind = {
    /**
     * Provides Service Fabric High Availability Volume Disk
     */
    ServiceFabricVolumeDisk: "ServiceFabricVolumeDisk",
} as const;

export type ApplicationScopedVolumeKind = (typeof ApplicationScopedVolumeKind)[keyof typeof ApplicationScopedVolumeKind];

export const AutoScalingMechanismKind = {
    /**
     * Indicates that scaling should be performed by adding or removing replicas.
     */
    AddRemoveReplica: "AddRemoveReplica",
} as const;

export type AutoScalingMechanismKind = (typeof AutoScalingMechanismKind)[keyof typeof AutoScalingMechanismKind];

export const AutoScalingMetricKind = {
    /**
     * Indicates that the metric is one of resources, like cpu or memory.
     */
    Resource: "Resource",
} as const;

export type AutoScalingMetricKind = (typeof AutoScalingMetricKind)[keyof typeof AutoScalingMetricKind];

export const AutoScalingResourceMetricName = {
    /**
     * Indicates that the resource is CPU cores.
     */
    Cpu: "cpu",
    /**
     * Indicates that the resource is memory in GB.
     */
    MemoryInGB: "memoryInGB",
} as const;

export type AutoScalingResourceMetricName = (typeof AutoScalingResourceMetricName)[keyof typeof AutoScalingResourceMetricName];

export const AutoScalingTriggerKind = {
    /**
     * Indicates that scaling should be performed based on average load of all replicas in the service.
     */
    AverageLoad: "AverageLoad",
} as const;

export type AutoScalingTriggerKind = (typeof AutoScalingTriggerKind)[keyof typeof AutoScalingTriggerKind];

export const DiagnosticsSinkKind = {
    /**
     * Indicates an invalid sink kind. All Service Fabric enumerations have the invalid type.
     */
    Invalid: "Invalid",
    /**
     * Diagnostics settings for Geneva.
     */
    AzureInternalMonitoringPipeline: "AzureInternalMonitoringPipeline",
} as const;

export type DiagnosticsSinkKind = (typeof DiagnosticsSinkKind)[keyof typeof DiagnosticsSinkKind];

export const HeaderMatchType = {
    Exact: "exact",
} as const;

export type HeaderMatchType = (typeof HeaderMatchType)[keyof typeof HeaderMatchType];

export const NetworkKind = {
    /**
     * Indicates a container network local to a single Service Fabric cluster. The value is 1.
     */
    Local: "Local",
} as const;

export type NetworkKind = (typeof NetworkKind)[keyof typeof NetworkKind];

export const OperatingSystemType = {
    /**
     * The required operating system is Linux.
     */
    Linux: "Linux",
    /**
     * The required operating system is Windows.
     */
    Windows: "Windows",
} as const;

export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const PathMatchType = {
    Prefix: "prefix",
} as const;

export type PathMatchType = (typeof PathMatchType)[keyof typeof PathMatchType];

export const SecretKind = {
    /**
     * A simple secret resource whose plaintext value is provided by the user.
     */
    InlinedValue: "inlinedValue",
} as const;

export type SecretKind = (typeof SecretKind)[keyof typeof SecretKind];

export const SizeTypes = {
    Small: "Small",
    Medium: "Medium",
    Large: "Large",
} as const;

export type SizeTypes = (typeof SizeTypes)[keyof typeof SizeTypes];

export const VolumeProvider = {
    /**
     * Provides volumes that are backed by Azure Files.
     */
    SFAzureFile: "SFAzureFile",
} as const;

export type VolumeProvider = (typeof VolumeProvider)[keyof typeof VolumeProvider];
