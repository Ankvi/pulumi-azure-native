export const CustomImageOsType = {
    Windows: "Windows",
    Linux: "Linux",
    None: "None",
} as const;

/**
 * The OS type of the custom image (i.e. Windows, Linux)
 */
export type CustomImageOsType = (typeof CustomImageOsType)[keyof typeof CustomImageOsType];

export const EnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the schedule (i.e. Enabled, Disabled)
 */
export type EnableStatus = (typeof EnableStatus)[keyof typeof EnableStatus];

export const EnvironmentPermission = {
    Reader: "Reader",
    Contributor: "Contributor",
} as const;

/**
 * The access rights to be granted to the user when provisioning an environment
 */
export type EnvironmentPermission = (typeof EnvironmentPermission)[keyof typeof EnvironmentPermission];

export const HostCachingOptions = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

/**
 * Caching option for a data disk (i.e. None, ReadOnly, ReadWrite).
 */
export type HostCachingOptions = (typeof HostCachingOptions)[keyof typeof HostCachingOptions];

export const LinuxOsState = {
    NonDeprovisioned: "NonDeprovisioned",
    DeprovisionRequested: "DeprovisionRequested",
    DeprovisionApplied: "DeprovisionApplied",
} as const;

/**
 * The state of the Linux OS (i.e. NonDeprovisioned, DeprovisionRequested, DeprovisionApplied).
 */
export type LinuxOsState = (typeof LinuxOsState)[keyof typeof LinuxOsState];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Managed identity.
 */
export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const NotificationChannelEventType = {
    AutoShutdown: "AutoShutdown",
    Cost: "Cost",
} as const;

/**
 * The event type for which this notification is enabled (i.e. AutoShutdown, Cost)
 */
export type NotificationChannelEventType = (typeof NotificationChannelEventType)[keyof typeof NotificationChannelEventType];

export const PolicyEvaluatorType = {
    AllowedValuesPolicy: "AllowedValuesPolicy",
    MaxValuePolicy: "MaxValuePolicy",
} as const;

/**
 * The evaluator type of the policy (i.e. AllowedValuesPolicy, MaxValuePolicy).
 */
export type PolicyEvaluatorType = (typeof PolicyEvaluatorType)[keyof typeof PolicyEvaluatorType];

export const PolicyFactName = {
    UserOwnedLabVmCount: "UserOwnedLabVmCount",
    UserOwnedLabPremiumVmCount: "UserOwnedLabPremiumVmCount",
    LabVmCount: "LabVmCount",
    LabPremiumVmCount: "LabPremiumVmCount",
    LabVmSize: "LabVmSize",
    GalleryImage: "GalleryImage",
    UserOwnedLabVmCountInSubnet: "UserOwnedLabVmCountInSubnet",
    LabTargetCost: "LabTargetCost",
    EnvironmentTemplate: "EnvironmentTemplate",
    ScheduleEditPermission: "ScheduleEditPermission",
} as const;

/**
 * The fact name of the policy (e.g. LabVmCount, LabVmSize, MaxVmsAllowedPerLab, etc.
 */
export type PolicyFactName = (typeof PolicyFactName)[keyof typeof PolicyFactName];

export const PolicyStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The status of the policy.
 */
export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

export const PremiumDataDisk = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * The setting to enable usage of premium data disks.
 * When its value is 'Enabled', creation of standard or premium data disks is allowed.
 * When its value is 'Disabled', only creation of standard data disks is allowed.
 */
export type PremiumDataDisk = (typeof PremiumDataDisk)[keyof typeof PremiumDataDisk];

export const SourceControlType = {
    VsoGit: "VsoGit",
    GitHub: "GitHub",
    StorageAccount: "StorageAccount",
} as const;

/**
 * The artifact source's type.
 */
export type SourceControlType = (typeof SourceControlType)[keyof typeof SourceControlType];

export const StorageType = {
    Standard: "Standard",
    Premium: "Premium",
    StandardSSD: "StandardSSD",
} as const;

/**
 * The storage type for the disk (i.e. Standard, Premium).
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const TransportProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
} as const;

/**
 * Protocol type of the port.
 */
export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

export const UsagePermissionType = {
    Default: "Default",
    Deny: "Deny",
    Allow: "Allow",
} as const;

/**
 * Indicates whether public IP addresses can be assigned to virtual machines on this subnet (i.e. Allow, Deny).
 */
export type UsagePermissionType = (typeof UsagePermissionType)[keyof typeof UsagePermissionType];

export const WindowsOsState = {
    NonSysprepped: "NonSysprepped",
    SysprepRequested: "SysprepRequested",
    SysprepApplied: "SysprepApplied",
} as const;

/**
 * The state of the Windows OS (i.e. NonSysprepped, SysprepRequested, SysprepApplied).
 */
export type WindowsOsState = (typeof WindowsOsState)[keyof typeof WindowsOsState];
