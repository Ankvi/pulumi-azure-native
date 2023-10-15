export const AvailabilityType = {
    Local: "Local",
    Online: "Online",
    Notify: "Notify",
} as const;

/**
 * Indicates the way the update content can be downloaded.
 */
export type AvailabilityType = (typeof AvailabilityType)[keyof typeof AvailabilityType];

export const DiagnosticLevel = {
    Off: "Off",
    Basic: "Basic",
    Enhanced: "Enhanced",
} as const;

/**
 * Desired level of diagnostic data emitted by the cluster.
 */
export type DiagnosticLevel = (typeof DiagnosticLevel)[keyof typeof DiagnosticLevel];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const ServiceName = {
    WAC: "WAC",
} as const;

/**
 * Name of the service.
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

export const SoftwareAssuranceIntent = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * Customer Intent for Software Assurance Benefit.
 */
export type SoftwareAssuranceIntent = (typeof SoftwareAssuranceIntent)[keyof typeof SoftwareAssuranceIntent];

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

/**
 * State of the update as it relates to this stamp.
 */
export type State = (typeof State)[keyof typeof State];

export const UpdateRunPropertiesState = {
    Unknown: "Unknown",
    Succeeded: "Succeeded",
    InProgress: "InProgress",
    Failed: "Failed",
} as const;

/**
 * State of the update run.
 */
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

/**
 * Overall update state of the stamp.
 */
export type UpdateSummariesPropertiesState = (typeof UpdateSummariesPropertiesState)[keyof typeof UpdateSummariesPropertiesState];

export const WindowsServerSubscription = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * Desired state of Windows Server Subscription.
 */
export type WindowsServerSubscription = (typeof WindowsServerSubscription)[keyof typeof WindowsServerSubscription];
