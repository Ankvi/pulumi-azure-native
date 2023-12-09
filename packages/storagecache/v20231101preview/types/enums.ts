export const AmlFilesystemIdentityType = {
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

/**
 * The type of identity used for the resource.
 */
export type AmlFilesystemIdentityType = (typeof AmlFilesystemIdentityType)[keyof typeof AmlFilesystemIdentityType];

export const AmlFilesystemSquashMode = {
    None: "None",
    RootOnly: "RootOnly",
    All: "All",
} as const;

/**
 * Squash mode of the AML file system. 'All': User and Group IDs on files will be squashed to the provided values for all users on non-trusted systems. 'RootOnly': User and Group IDs on files will be squashed to provided values for solely the root user on non-trusted systems. 'None': No squashing of User and Group IDs is performed for any users on any systems.
 */
export type AmlFilesystemSquashMode = (typeof AmlFilesystemSquashMode)[keyof typeof AmlFilesystemSquashMode];

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
