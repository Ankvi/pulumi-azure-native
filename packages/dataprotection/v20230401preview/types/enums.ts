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

export type CrossRegionRestoreState = (typeof CrossRegionRestoreState)[keyof typeof CrossRegionRestoreState];

export const CrossSubscriptionRestoreState = {
    Disabled: "Disabled",
    PermanentlyDisabled: "PermanentlyDisabled",
    Enabled: "Enabled",
} as const;

export type CrossSubscriptionRestoreState = (typeof CrossSubscriptionRestoreState)[keyof typeof CrossSubscriptionRestoreState];

export const DataStoreTypes = {
    OperationalStore: "OperationalStore",
    VaultStore: "VaultStore",
    ArchiveStore: "ArchiveStore",
} as const;

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

export const ImmutabilityState = {
    Disabled: "Disabled",
    Unlocked: "Unlocked",
    Locked: "Locked",
} as const;

export type ImmutabilityState = (typeof ImmutabilityState)[keyof typeof ImmutabilityState];

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

export const SecretStoreType = {
    Invalid: "Invalid",
    AzureKeyVault: "AzureKeyVault",
} as const;

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

export type SoftDeleteState = (typeof SoftDeleteState)[keyof typeof SoftDeleteState];

export const StorageSettingStoreTypes = {
    ArchiveStore: "ArchiveStore",
    OperationalStore: "OperationalStore",
    VaultStore: "VaultStore",
} as const;

export type StorageSettingStoreTypes = (typeof StorageSettingStoreTypes)[keyof typeof StorageSettingStoreTypes];

export const StorageSettingTypes = {
    GeoRedundant: "GeoRedundant",
    LocallyRedundant: "LocallyRedundant",
    ZoneRedundant: "ZoneRedundant",
} as const;

export type StorageSettingTypes = (typeof StorageSettingTypes)[keyof typeof StorageSettingTypes];

export const ValidationType = {
    ShallowValidation: "ShallowValidation",
    DeepValidation: "DeepValidation",
} as const;

export type ValidationType = (typeof ValidationType)[keyof typeof ValidationType];

export const WeekNumber = {
    First: "First",
    Fourth: "Fourth",
    Last: "Last",
    Second: "Second",
    Third: "Third",
} as const;

export type WeekNumber = (typeof WeekNumber)[keyof typeof WeekNumber];
