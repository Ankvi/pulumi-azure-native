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
