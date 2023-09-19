export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const ManagedInstanceLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

export type ManagedInstanceLicenseType = (typeof ManagedInstanceLicenseType)[keyof typeof ManagedInstanceLicenseType];

export const ManagedInstanceProxyOverride = {
    Proxy: "Proxy",
    Redirect: "Redirect",
    Default: "Default",
} as const;

export type ManagedInstanceProxyOverride = (typeof ManagedInstanceProxyOverride)[keyof typeof ManagedInstanceProxyOverride];

export const ManagedServerCreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
} as const;

export type ManagedServerCreateMode = (typeof ManagedServerCreateMode)[keyof typeof ManagedServerCreateMode];

export const PrincipalType = {
    User: "User",
    Group: "Group",
    Application: "Application",
} as const;

export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const StorageAccountType = {
    GRS: "GRS",
    LRS: "LRS",
    ZRS: "ZRS",
} as const;

export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];
