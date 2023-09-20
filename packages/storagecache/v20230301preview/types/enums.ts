export const AmlFilesystemIdentityType = {
    UserAssigned: "UserAssigned",
    None: "None",
} as const;

export type AmlFilesystemIdentityType = (typeof AmlFilesystemIdentityType)[keyof typeof AmlFilesystemIdentityType];

export const CacheIdentityType = {
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned, UserAssigned",
    None: "None",
} as const;

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

export type MaintenanceDayOfWeekType = (typeof MaintenanceDayOfWeekType)[keyof typeof MaintenanceDayOfWeekType];

export const NfsAccessRuleAccess = {
    No: "no",
    Ro: "ro",
    Rw: "rw",
} as const;

export type NfsAccessRuleAccess = (typeof NfsAccessRuleAccess)[keyof typeof NfsAccessRuleAccess];

export const NfsAccessRuleScope = {
    Default: "default",
    Network: "network",
    Host: "host",
} as const;

export type NfsAccessRuleScope = (typeof NfsAccessRuleScope)[keyof typeof NfsAccessRuleScope];

export const UsernameSource = {
    AD: "AD",
    LDAP: "LDAP",
    File: "File",
    None: "None",
} as const;

export type UsernameSource = (typeof UsernameSource)[keyof typeof UsernameSource];