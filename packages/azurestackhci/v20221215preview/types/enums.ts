export const AvailabilityType = {
    Local: "Local",
    Online: "Online",
    Notify: "Notify",
} as const;

export type AvailabilityType = (typeof AvailabilityType)[keyof typeof AvailabilityType];

export const CloudInitDataSource = {
    NoCloud: "NoCloud",
    Azure: "Azure",
} as const;

export type CloudInitDataSource = (typeof CloudInitDataSource)[keyof typeof CloudInitDataSource];

export const CreatedByType = {
    User: "User",
    Application: "Application",
    ManagedIdentity: "ManagedIdentity",
    Key: "Key",
} as const;

export type CreatedByType = (typeof CreatedByType)[keyof typeof CreatedByType];

export const DiagnosticLevel = {
    Off: "Off",
    Basic: "Basic",
    Enhanced: "Enhanced",
} as const;

export type DiagnosticLevel = (typeof DiagnosticLevel)[keyof typeof DiagnosticLevel];

export const DiskFileFormat = {
    Vhdx: "vhdx",
    Vhd: "vhd",
} as const;

export type DiskFileFormat = (typeof DiskFileFormat)[keyof typeof DiskFileFormat];

export const ExtendedLocationTypes = {
    CustomLocation: "CustomLocation",
} as const;

export type ExtendedLocationTypes = (typeof ExtendedLocationTypes)[keyof typeof ExtendedLocationTypes];

export const HyperVGeneration = {
    V1: "V1",
    V2: "V2",
} as const;

export type HyperVGeneration = (typeof HyperVGeneration)[keyof typeof HyperVGeneration];

export const IPPoolTypeEnum = {
    Vm: "vm",
    Vippool: "vippool",
} as const;

export type IPPoolTypeEnum = (typeof IPPoolTypeEnum)[keyof typeof IPPoolTypeEnum];

export const IpAllocationMethodEnum = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

export type IpAllocationMethodEnum = (typeof IpAllocationMethodEnum)[keyof typeof IpAllocationMethodEnum];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NetworkTypeEnum = {
    NAT: "NAT",
    Transparent: "Transparent",
    L2Bridge: "L2Bridge",
    L2Tunnel: "L2Tunnel",
    ICS: "ICS",
    Private: "Private",
    Overlay: "Overlay",
    Internal: "Internal",
    Mirrored: "Mirrored",
} as const;

export type NetworkTypeEnum = (typeof NetworkTypeEnum)[keyof typeof NetworkTypeEnum];

export const OperatingSystemTypes = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const OsTypeEnum = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OsTypeEnum = (typeof OsTypeEnum)[keyof typeof OsTypeEnum];

export const PrivateIPAllocationMethodEnum = {
    Dynamic: "Dynamic",
    Static: "Static",
} as const;

export type PrivateIPAllocationMethodEnum = (typeof PrivateIPAllocationMethodEnum)[keyof typeof PrivateIPAllocationMethodEnum];

export const ProvisioningAction = {
    Install: "install",
    Uninstall: "uninstall",
    Repair: "repair",
} as const;

export type ProvisioningAction = (typeof ProvisioningAction)[keyof typeof ProvisioningAction];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
} as const;

export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SoftwareAssuranceIntent = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

export type SoftwareAssuranceIntent = (typeof SoftwareAssuranceIntent)[keyof typeof SoftwareAssuranceIntent];

export const SoftwareAssuranceStatus = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type SoftwareAssuranceStatus = (typeof SoftwareAssuranceStatus)[keyof typeof SoftwareAssuranceStatus];

export const State = {
    HasPrerequisite: "HasPrerequisite",
    Obsolete: "Obsolete",
    Ready: "Ready",
    NotApplicableBecauseAnotherUpdateIsInProgress: "NotApplicableBecauseAnotherUpdateIsInProgress",
    Preparing: "Preparing",
    Installing: "Installing",
    Installed: "Installed",
    PreparationFailed: "PreparationFailed",
    InstallationFailed: "InstallationFailed",
    Invalid: "Invalid",
    Recalled: "Recalled",
    Downloading: "Downloading",
    DownloadFailed: "DownloadFailed",
    HealthChecking: "HealthChecking",
    HealthCheckFailed: "HealthCheckFailed",
    ReadyToInstall: "ReadyToInstall",
    ScanInProgress: "ScanInProgress",
    ScanFailed: "ScanFailed",
} as const;

export type State = (typeof State)[keyof typeof State];

export const UpdateRunPropertiesState = {
    Unknown: "Unknown",
    Succeeded: "Succeeded",
    InProgress: "InProgress",
    Failed: "Failed",
} as const;

export type UpdateRunPropertiesState = (typeof UpdateRunPropertiesState)[keyof typeof UpdateRunPropertiesState];

export const UpdateSummariesPropertiesState = {
    Unknown: "Unknown",
    AppliedSuccessfully: "AppliedSuccessfully",
    UpdateAvailable: "UpdateAvailable",
    UpdateInProgress: "UpdateInProgress",
    UpdateFailed: "UpdateFailed",
    NeedsAttention: "NeedsAttention",
    PreparationInProgress: "PreparationInProgress",
    PreparationFailed: "PreparationFailed",
} as const;

export type UpdateSummariesPropertiesState = (typeof UpdateSummariesPropertiesState)[keyof typeof UpdateSummariesPropertiesState];

export const VmSizeEnum = {
    Default: "Default",
    Standard_A2_v2: "Standard_A2_v2",
    Standard_A4_v2: "Standard_A4_v2",
    Standard_D2s_v3: "Standard_D2s_v3",
    Standard_D4s_v3: "Standard_D4s_v3",
    Standard_D8s_v3: "Standard_D8s_v3",
    Standard_D16s_v3: "Standard_D16s_v3",
    Standard_D32s_v3: "Standard_D32s_v3",
    Standard_DS2_v2: "Standard_DS2_v2",
    Standard_DS3_v2: "Standard_DS3_v2",
    Standard_DS4_v2: "Standard_DS4_v2",
    Standard_DS5_v2: "Standard_DS5_v2",
    Standard_DS13_v2: "Standard_DS13_v2",
    Standard_K8S_v1: "Standard_K8S_v1",
    Standard_K8S2_v1: "Standard_K8S2_v1",
    Standard_K8S3_v1: "Standard_K8S3_v1",
    Standard_K8S4_v1: "Standard_K8S4_v1",
    Standard_NK6: "Standard_NK6",
    Standard_NK12: "Standard_NK12",
    Standard_NV6: "Standard_NV6",
    Standard_NV12: "Standard_NV12",
    Standard_K8S5_v1: "Standard_K8S5_v1",
    Custom: "Custom",
} as const;

export type VmSizeEnum = (typeof VmSizeEnum)[keyof typeof VmSizeEnum];

export const WindowsServerSubscription = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

export type WindowsServerSubscription = (typeof WindowsServerSubscription)[keyof typeof WindowsServerSubscription];