export const AmlFilesystemIdentityType = {
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the resource.
 */
export type AmlFilesystemIdentityType = (typeof AmlFilesystemIdentityType)[keyof typeof AmlFilesystemIdentityType];

export const CacheIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the cache
 */
export type CacheIdentityType = (typeof CacheIdentityType)[keyof typeof CacheIdentityType];

export const ConflictResolutionMode = {
    Fail: "Fail",
    Skip: "Skip",
    OverwriteIfDirty: "OverwriteIfDirty",
    OverwriteAlways: "OverwriteAlways",
} as const;

/**
 * How the import job will handle conflicts. For example, if the import job is trying to bring in a directory, but a file is at that path, how it handles it. Fail indicates that the import job should stop immediately and not do anything with the conflict. Skip indicates that it should pass over the conflict. OverwriteIfDirty causes the import job to delete and re-import the file or directory if it is a conflicting type, is dirty, or was not previously imported. OverwriteAlways extends OverwriteIfDirty to include releasing files that had been restored but were not dirty. Please reference https://learn.microsoft.com/en-us/azure/azure-managed-lustre/ for a thorough explanation of these resolution modes.
 */
export type ConflictResolutionMode = (typeof ConflictResolutionMode)[keyof typeof ConflictResolutionMode];

export const MaintenanceDayOfWeekType = {
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",
    Sunday: "Sunday",
} as const;

/**
 * Day of the week on which the maintenance window will occur.
 */
export type MaintenanceDayOfWeekType = (typeof MaintenanceDayOfWeekType)[keyof typeof MaintenanceDayOfWeekType];

export const NfsAccessRuleAccess = {
    No: "no",
    Ro: "ro",
    Rw: "rw",
} as const;

/**
 * Access allowed by this rule.
 */
export type NfsAccessRuleAccess = (typeof NfsAccessRuleAccess)[keyof typeof NfsAccessRuleAccess];

export const NfsAccessRuleScope = {
    Default: "default",
    Network: "network",
    Host: "host",
} as const;

/**
 * Scope for this rule. The scope and filter determine which clients match the rule.
 */
export type NfsAccessRuleScope = (typeof NfsAccessRuleScope)[keyof typeof NfsAccessRuleScope];

export const OperationalStateType = {
    Ready: "Ready",
    Busy: "Busy",
    Suspended: "Suspended",
    Flushing: "Flushing",
} as const;

/**
 * Storage target operational state.
 */
export type OperationalStateType = (typeof OperationalStateType)[keyof typeof OperationalStateType];

export const StorageTargetType = {
    Nfs3: "nfs3",
    Clfs: "clfs",
    Unknown: "unknown",
    BlobNfs: "blobNfs",
} as const;

/**
 * Type of the Storage Target.
 */
export type StorageTargetType = (typeof StorageTargetType)[keyof typeof StorageTargetType];

export const UsernameSource = {
    AD: "AD",
    LDAP: "LDAP",
    File: "File",
    None: "None",
} as const;

/**
 * This setting determines how the cache gets username and group names for clients.
 */
export type UsernameSource = (typeof UsernameSource)[keyof typeof UsernameSource];
