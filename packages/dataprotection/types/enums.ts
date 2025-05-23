export const AKSVolumeTypes = {
    AzureDisk: "AzureDisk",
    AzureFileShareSMB: "AzureFileShareSMB",
} as const;

export type AKSVolumeTypes = (typeof AKSVolumeTypes)[keyof typeof AKSVolumeTypes];

export const AbsoluteMarker = {
    AllBackup: "AllBackup",
    FirstOfDay: "FirstOfDay",
    FirstOfMonth: "FirstOfMonth",
    FirstOfWeek: "FirstOfWeek",
    FirstOfYear: "FirstOfYear",
} as const;

export type AbsoluteMarker = (typeof AbsoluteMarker)[keyof typeof AbsoluteMarker];

export const AlertsState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

export type AlertsState = (typeof AlertsState)[keyof typeof AlertsState];

export const CrossRegionRestoreState = {
    Disabled: "Disabled",
    Enabled: "Enabled",
} as const;

/**
 * CrossRegionRestore state
 */
export type CrossRegionRestoreState = (typeof CrossRegionRestoreState)[keyof typeof CrossRegionRestoreState];

export const CrossSubscriptionRestoreState = {
    Disabled: "Disabled",
    PermanentlyDisabled: "PermanentlyDisabled",
    Enabled: "Enabled",
} as const;

/**
 * CrossSubscriptionRestore state
 */
export type CrossSubscriptionRestoreState = (typeof CrossSubscriptionRestoreState)[keyof typeof CrossSubscriptionRestoreState];

export const DataStoreTypes = {
    OperationalStore: "OperationalStore",
    VaultStore: "VaultStore",
    ArchiveStore: "ArchiveStore",
} as const;

/**
 * type of datastore; Operational/Vault/Archive
 */
export type DataStoreTypes = (typeof DataStoreTypes)[keyof typeof DataStoreTypes];

export const DayOfWeek = {
    Friday: "Friday",
    Monday: "Monday",
    Saturday: "Saturday",
    Sunday: "Sunday",
    Thursday: "Thursday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
} as const;

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

export const EncryptionState = {
    /**
     * CMK encryption is enabled on the Backup Vault
     */
    Enabled: "Enabled",
    /**
     * CMK encryption is disabled on the Backup Vault. User can not set this state once Encryption State is 'Enabled'.
     */
    Disabled: "Disabled",
    /**
     * CMK encryption is in inconsistent state on the Backup Vault. This state indicates that user needs to retry the encryption settings operation immediately to correct the state.
     */
    Inconsistent: "Inconsistent",
} as const;

/**
 * Encryption state of the Backup Vault.
 */
export type EncryptionState = (typeof EncryptionState)[keyof typeof EncryptionState];

export const IdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

/**
 * The identity type. 'SystemAssigned' and 'UserAssigned' are mutually exclusive. 'SystemAssigned' will use implicitly created managed identity.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const ImmutabilityState = {
    Disabled: "Disabled",
    Unlocked: "Unlocked",
    Locked: "Locked",
} as const;

/**
 * Immutability state
 */
export type ImmutabilityState = (typeof ImmutabilityState)[keyof typeof ImmutabilityState];

export const InfrastructureEncryptionState = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Enabling/Disabling the Double Encryption state
 */
export type InfrastructureEncryptionState = (typeof InfrastructureEncryptionState)[keyof typeof InfrastructureEncryptionState];

export const Month = {
    April: "April",
    August: "August",
    December: "December",
    February: "February",
    January: "January",
    July: "July",
    June: "June",
    March: "March",
    May: "May",
    November: "November",
    October: "October",
    September: "September",
} as const;

export type Month = (typeof Month)[keyof typeof Month];

export const ResourcePropertiesObjectType = {
    DefaultResourceProperties: "DefaultResourceProperties",
} as const;

/**
 * Type of the specific object - used for deserializing
 */
export type ResourcePropertiesObjectType = (typeof ResourcePropertiesObjectType)[keyof typeof ResourcePropertiesObjectType];

export const SecretStoreType = {
    Invalid: "Invalid",
    AzureKeyVault: "AzureKeyVault",
} as const;

/**
 * Gets or sets the type of secret store
 */
export type SecretStoreType = (typeof SecretStoreType)[keyof typeof SecretStoreType];

export const SoftDeleteState = {
    /**
     * Soft Delete is turned off for the BackupVault
     */
    Off: "Off",
    /**
     * Soft Delete is enabled for the BackupVault but can be turned off
     */
    On: "On",
    /**
     * Soft Delete is permanently enabled for the BackupVault and the setting cannot be changed
     */
    AlwaysOn: "AlwaysOn",
} as const;

/**
 * State of soft delete
 */
export type SoftDeleteState = (typeof SoftDeleteState)[keyof typeof SoftDeleteState];

export const StorageSettingStoreTypes = {
    ArchiveStore: "ArchiveStore",
    OperationalStore: "OperationalStore",
    VaultStore: "VaultStore",
} as const;

/**
 * Gets or sets the type of the datastore.
 */
export type StorageSettingStoreTypes = (typeof StorageSettingStoreTypes)[keyof typeof StorageSettingStoreTypes];

export const StorageSettingTypes = {
    GeoRedundant: "GeoRedundant",
    LocallyRedundant: "LocallyRedundant",
    ZoneRedundant: "ZoneRedundant",
} as const;

/**
 * Gets or sets the type.
 */
export type StorageSettingTypes = (typeof StorageSettingTypes)[keyof typeof StorageSettingTypes];

export const ValidationType = {
    ShallowValidation: "ShallowValidation",
    DeepValidation: "DeepValidation",
} as const;

/**
 * Specifies the type of validation. In case of DeepValidation, all validations from /validateForBackup API will run again.
 */
export type ValidationType = (typeof ValidationType)[keyof typeof ValidationType];

export const WeekNumber = {
    First: "First",
    Fourth: "Fourth",
    Last: "Last",
    Second: "Second",
    Third: "Third",
} as const;

export type WeekNumber = (typeof WeekNumber)[keyof typeof WeekNumber];
