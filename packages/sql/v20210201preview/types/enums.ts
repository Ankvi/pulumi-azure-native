export const AdministratorType = {
    ActiveDirectory: "ActiveDirectory",
} as const;

/**
 * Type of the sever administrator.
 */
export type AdministratorType = (typeof AdministratorType)[keyof typeof AdministratorType];

export const IdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * The identity type. Set this to 'SystemAssigned' in order to automatically create and assign an Azure Active Directory principal for the resource.
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

export const ManagedInstanceLicenseType = {
    LicenseIncluded: "LicenseIncluded",
    BasePrice: "BasePrice",
} as const;

/**
 * The license type. Possible values are 'LicenseIncluded' (regular price inclusive of a new SQL license) and 'BasePrice' (discounted AHB price for bringing your own SQL licenses).
 */
export type ManagedInstanceLicenseType = (typeof ManagedInstanceLicenseType)[keyof typeof ManagedInstanceLicenseType];

export const ManagedInstanceProxyOverride = {
    Proxy: "Proxy",
    Redirect: "Redirect",
    Default: "Default",
} as const;

/**
 * Connection type used for connecting to the instance.
 */
export type ManagedInstanceProxyOverride = (typeof ManagedInstanceProxyOverride)[keyof typeof ManagedInstanceProxyOverride];

export const ManagedServerCreateMode = {
    Default: "Default",
    PointInTimeRestore: "PointInTimeRestore",
} as const;

/**
 * Specifies the mode of database creation.
 * 
 * Default: Regular instance creation.
 * 
 * Restore: Creates an instance by restoring a set of backups to specific point in time. RestorePointInTime and SourceManagedInstanceId must be specified.
 */
export type ManagedServerCreateMode = (typeof ManagedServerCreateMode)[keyof typeof ManagedServerCreateMode];

export const PrincipalType = {
    User: "User",
    Group: "Group",
    Application: "Application",
} as const;

/**
 * Principal Type of the sever administrator.
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

export const StorageAccountType = {
    GRS: "GRS",
    LRS: "LRS",
    ZRS: "ZRS",
} as const;

/**
 * The storage account type used to store backups for this instance. The options are LRS (LocallyRedundantStorage), ZRS (ZoneRedundantStorage) and GRS (GeoRedundantStorage)
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];
