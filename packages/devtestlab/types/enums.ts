export const CustomImageOsType = {
    Windows: "Windows",
    Linux: "Linux",
    None: "None",
} as const;

export type CustomImageOsType = (typeof CustomImageOsType)[keyof typeof CustomImageOsType];

export const EnableStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type EnableStatus = (typeof EnableStatus)[keyof typeof EnableStatus];

export const EnvironmentPermission = {
    Reader: "Reader",
    Contributor: "Contributor",
} as const;

export type EnvironmentPermission = (typeof EnvironmentPermission)[keyof typeof EnvironmentPermission];

export const HostCachingOptions = {
    None: "None",
    ReadOnly: "ReadOnly",
    ReadWrite: "ReadWrite",
} as const;

export type HostCachingOptions = (typeof HostCachingOptions)[keyof typeof HostCachingOptions];

export const LinuxOsState = {
    NonDeprovisioned: "NonDeprovisioned",
    DeprovisionRequested: "DeprovisionRequested",
    DeprovisionApplied: "DeprovisionApplied",
} as const;

export type LinuxOsState = (typeof LinuxOsState)[keyof typeof LinuxOsState];

export const ManagedIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type ManagedIdentityType = (typeof ManagedIdentityType)[keyof typeof ManagedIdentityType];

export const NotificationChannelEventType = {
    AutoShutdown: "AutoShutdown",
    Cost: "Cost",
} as const;

export type NotificationChannelEventType = (typeof NotificationChannelEventType)[keyof typeof NotificationChannelEventType];

export const PolicyEvaluatorType = {
    AllowedValuesPolicy: "AllowedValuesPolicy",
    MaxValuePolicy: "MaxValuePolicy",
} as const;

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

export type PolicyFactName = (typeof PolicyFactName)[keyof typeof PolicyFactName];

export const PolicyStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type PolicyStatus = (typeof PolicyStatus)[keyof typeof PolicyStatus];

export const PremiumDataDisk = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type PremiumDataDisk = (typeof PremiumDataDisk)[keyof typeof PremiumDataDisk];

export const SourceControlType = {
    VsoGit: "VsoGit",
    GitHub: "GitHub",
    StorageAccount: "StorageAccount",
} as const;

export type SourceControlType = (typeof SourceControlType)[keyof typeof SourceControlType];

export const StorageType = {
    Standard: "Standard",
    Premium: "Premium",
    StandardSSD: "StandardSSD",
} as const;

export type StorageType = (typeof StorageType)[keyof typeof StorageType];

export const TransportProtocol = {
    Tcp: "Tcp",
    Udp: "Udp",
} as const;

export type TransportProtocol = (typeof TransportProtocol)[keyof typeof TransportProtocol];

export const UsagePermissionType = {
    Default: "Default",
    Deny: "Deny",
    Allow: "Allow",
} as const;

export type UsagePermissionType = (typeof UsagePermissionType)[keyof typeof UsagePermissionType];

export const WindowsOsState = {
    NonSysprepped: "NonSysprepped",
    SysprepRequested: "SysprepRequested",
    SysprepApplied: "SysprepApplied",
} as const;

export type WindowsOsState = (typeof WindowsOsState)[keyof typeof WindowsOsState];