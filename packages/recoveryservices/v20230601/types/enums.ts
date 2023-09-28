export const AgentAutoUpdateStatus = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * A value indicating whether the auto update is enabled.
 */
export type AgentAutoUpdateStatus = (typeof AgentAutoUpdateStatus)[keyof typeof AgentAutoUpdateStatus];

export const AlertsState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AlertsState = (typeof AlertsState)[keyof typeof AlertsState];

export const AutomationAccountAuthenticationType = {
    RunAsAccount: "RunAsAccount",
    SystemAssignedIdentity: "SystemAssignedIdentity",
} as const;

/**
 * A value indicating the type authentication to use for automation Account.
 */
export type AutomationAccountAuthenticationType = (typeof AutomationAccountAuthenticationType)[keyof typeof AutomationAccountAuthenticationType];

export const CrossSubscriptionRestoreState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
    PermanentlyDisabled: "PermanentlyDisabled",
} as const;

export type CrossSubscriptionRestoreState = (typeof CrossSubscriptionRestoreState)[keyof typeof CrossSubscriptionRestoreState];

export const DiskAccountType = {
    Standard_LRS: "Standard_LRS",
    Premium_LRS: "Premium_LRS",
    StandardSSD_LRS: "StandardSSD_LRS",
} as const;

/**
 * The disk type.
 */
export type DiskAccountType = (typeof DiskAccountType)[keyof typeof DiskAccountType];

export const ExtendedLocationType = {
    EdgeZone: "EdgeZone",
} as const;

/**
 * The extended location type.
 */
export type ExtendedLocationType = (typeof ExtendedLocationType)[keyof typeof ExtendedLocationType];

export const FailoverDeploymentModel = {
    NotApplicable: "NotApplicable",
    Classic: "Classic",
    ResourceManager: "ResourceManager",
} as const;

/**
 * The failover deployment model.
 */
export type FailoverDeploymentModel = (typeof FailoverDeploymentModel)[keyof typeof FailoverDeploymentModel];

export const ImmutabilityState = {
    Disabled: "Disabled",
    Unlocked: "Unlocked",
    Locked: "Locked",
} as const;

export type ImmutabilityState = (typeof ImmutabilityState)[keyof typeof ImmutabilityState];

export const InfrastructureEncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enabling/Disabling the Double Encryption state
 */
export type InfrastructureEncryptionState = (typeof InfrastructureEncryptionState)[keyof typeof InfrastructureEncryptionState];

export const LicenseType = {
    NotSpecified: "NotSpecified",
    NoLicenseType: "NoLicenseType",
    WindowsServer: "WindowsServer",
} as const;

/**
 * The license type.
 */
export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType];

export const PossibleOperationsDirections = {
    PrimaryToRecovery: "PrimaryToRecovery",
    RecoveryToPrimary: "RecoveryToPrimary",
} as const;

export type PossibleOperationsDirections = (typeof PossibleOperationsDirections)[keyof typeof PossibleOperationsDirections];

export const PublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * property to enable or disable resource provider inbound network traffic from public clients
 */
export type PublicNetworkAccess = (typeof PublicNetworkAccess)[keyof typeof PublicNetworkAccess];

export const RecoveryPlanActionLocation = {
    Primary: "Primary",
    Recovery: "Recovery",
} as const;

/**
 * The fabric location.
 */
export type RecoveryPlanActionLocation = (typeof RecoveryPlanActionLocation)[keyof typeof RecoveryPlanActionLocation];

export const RecoveryPlanGroupType = {
    Shutdown: "Shutdown",
    Boot: "Boot",
    Failover: "Failover",
} as const;

/**
 * The group type.
 */
export type RecoveryPlanGroupType = (typeof RecoveryPlanGroupType)[keyof typeof RecoveryPlanGroupType];

export const ReplicationProtectedItemOperation = {
    ReverseReplicate: "ReverseReplicate",
    Commit: "Commit",
    PlannedFailover: "PlannedFailover",
    UnplannedFailover: "UnplannedFailover",
    DisableProtection: "DisableProtection",
    TestFailover: "TestFailover",
    TestFailoverCleanup: "TestFailoverCleanup",
    Failback: "Failback",
    FinalizeFailback: "FinalizeFailback",
    CancelFailover: "CancelFailover",
    ChangePit: "ChangePit",
    RepairReplication: "RepairReplication",
    SwitchProtection: "SwitchProtection",
    CompleteMigration: "CompleteMigration",
} as const;

export type ReplicationProtectedItemOperation = (typeof ReplicationProtectedItemOperation)[keyof typeof ReplicationProtectedItemOperation];

export const ResourceIdentityType = {
    SystemAssigned: "SystemAssigned",
    None: "None",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
} as const;

/**
 * The type of managed identity used. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user-assigned identities. The type 'None' will remove any identities.
 */
export type ResourceIdentityType = (typeof ResourceIdentityType)[keyof typeof ResourceIdentityType];

export const SecurityType = {
    None: "None",
    TrustedLaunch: "TrustedLaunch",
    ConfidentialVM: "ConfidentialVM",
} as const;

/**
 * The target VM security type.
 */
export type SecurityType = (typeof SecurityType)[keyof typeof SecurityType];

export const SetMultiVmSyncStatus = {
    Enable: "Enable",
    Disable: "Disable",
} as const;

/**
 * A value indicating whether multi-VM sync has to be enabled. Value should be 'Enabled' or 'Disabled'.
 */
export type SetMultiVmSyncStatus = (typeof SetMultiVmSyncStatus)[keyof typeof SetMultiVmSyncStatus];

export const SkuName = {
    Standard: "Standard",
    RS0: "RS0",
} as const;

/**
 * Name of SKU is RS0 (Recovery Services 0th version) and the tier is standard tier. They do not have affect on backend storage redundancy or any other vault settings. To manage storage redundancy, use the backupstorageconfig
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SoftDeleteState = {
    Invalid: "Invalid",
    Enabled: "Enabled",
    Disabled: "Disabled",
    AlwaysON: "AlwaysON",
} as const;

export type SoftDeleteState = (typeof SoftDeleteState)[keyof typeof SoftDeleteState];

export const SqlServerLicenseType = {
    NotSpecified: "NotSpecified",
    NoLicenseType: "NoLicenseType",
    PAYG: "PAYG",
    AHUB: "AHUB",
} as const;

/**
 * The SQL Server license type.
 */
export type SqlServerLicenseType = (typeof SqlServerLicenseType)[keyof typeof SqlServerLicenseType];
