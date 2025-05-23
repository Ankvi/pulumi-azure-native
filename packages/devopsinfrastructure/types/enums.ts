export const AzureDevOpsPermissionType = {
    /**
     * Pool will inherit permissions from the project or organization.
     */
    Inherit: "Inherit",
    /**
     * Only the pool creator will be an admin of the pool.
     */
    CreatorOnly: "CreatorOnly",
    /**
     * Only the specified accounts will be admins of the pool.
     */
    SpecificAccounts: "SpecificAccounts",
} as const;

/**
 * Determines who has admin permissions to the Azure DevOps pool.
 */
export type AzureDevOpsPermissionType = (typeof AzureDevOpsPermissionType)[keyof typeof AzureDevOpsPermissionType];

export const CachingType = {
    /**
     * Don't use host caching.
     */
    None: "None",
    /**
     * For workloads that only do read operations.
     */
    ReadOnly: "ReadOnly",
    /**
     * For workloads that do a balance of read and write operations.
     */
    ReadWrite: "ReadWrite",
} as const;

/**
 * The type of caching to be enabled for the data disks. The default value for caching is readwrite. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
 */
export type CachingType = (typeof CachingType)[keyof typeof CachingType];

export const CertificateStoreNameOption = {
    /**
     * The X.509 certificate store for personal certificates.
     */
    My: "My",
    /**
     * The X.509 certificate store for trusted root certificate authorities (CAs).
     */
    Root: "Root",
} as const;

/**
 * Name of the certificate store to use on the machine, currently 'My' and 'Root' are supported.
 */
export type CertificateStoreNameOption = (typeof CertificateStoreNameOption)[keyof typeof CertificateStoreNameOption];

export const EphemeralType = {
    /**
     * Ephemeral is handled by Managed DevOps Pools service.
     */
    Automatic: "Automatic",
    /**
     * CacheDisk ephemeral only, requires that the SKU has a cache that is large enough for the image.
     */
    CacheDisk: "CacheDisk",
    /**
     * ResourceDisk ephemeral only, requires only that the SKU supports it.
     */
    ResourceDisk: "ResourceDisk",
} as const;

/**
 * The ephemeral type of the image.
 */
export type EphemeralType = (typeof EphemeralType)[keyof typeof EphemeralType];

export const LogonType = {
    /**
     * Run as a service.
     */
    Service: "Service",
    /**
     * Run in interactive mode.
     */
    Interactive: "Interactive",
} as const;

/**
 * Determines how the service should be run. By default, this will be set to Service.
 */
export type LogonType = (typeof LogonType)[keyof typeof LogonType];

export const ManagedServiceIdentityType = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
    SystemAssigned_UserAssigned: "SystemAssigned,UserAssigned",
} as const;

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed).
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const OsDiskStorageAccountType = {
    /**
     * Standard OS disk type.
     */
    Standard: "Standard",
    /**
     * Premium OS disk type.
     */
    Premium: "Premium",
    /**
     * Standard SSD OS disk type.
     */
    StandardSSD: "StandardSSD",
} as const;

/**
 * The Azure SKU name of the machines in the pool.
 */
export type OsDiskStorageAccountType = (typeof OsDiskStorageAccountType)[keyof typeof OsDiskStorageAccountType];

export const PredictionPreference = {
    /**
     * Balance between cost and performance.
     */
    Balanced: "Balanced",
    /**
     * Optimizes for cost over performance.
     */
    MostCostEffective: "MostCostEffective",
    /**
     * Halfway through cost and balanced.
     */
    MoreCostEffective: "MoreCostEffective",
    /**
     * Halfway through balanced and performance.
     */
    MorePerformance: "MorePerformance",
    /**
     * Optimizes for performance over cost.
     */
    BestPerformance: "BestPerformance",
} as const;

/**
 * Determines the balance between cost and performance.
 */
export type PredictionPreference = (typeof PredictionPreference)[keyof typeof PredictionPreference];

export const ProvisioningState = {
    /**
     * Represents a succeeded operation.
     */
    Succeeded: "Succeeded",
    /**
     * Represents a failed operation.
     */
    Failed: "Failed",
    /**
     * Represents a canceled operation.
     */
    Canceled: "Canceled",
    /**
     * Represents a pending operation.
     */
    Provisioning: "Provisioning",
    /**
     * Represents a pending operation.
     */
    Updating: "Updating",
    /**
     * Represents an operation under deletion.
     */
    Deleting: "Deleting",
    /**
     * Represents an accepted operation.
     */
    Accepted: "Accepted",
} as const;

/**
 * The status of the current operation.
 */
export type ProvisioningState = (typeof ProvisioningState)[keyof typeof ProvisioningState];

export const ResourcePredictionsProfileType = {
    /**
     * Customer provides the stand-by agent scheme.
     */
    Manual: "Manual",
    /**
     * The stand-by agent scheme is determined based on historical demand.
     */
    Automatic: "Automatic",
} as const;

/**
 * Determines how the stand-by scheme should be provided.
 */
export type ResourcePredictionsProfileType = (typeof ResourcePredictionsProfileType)[keyof typeof ResourcePredictionsProfileType];

export const StorageAccountType = {
    /**
     * The data disk should use standard locally redundant storage.
     */
    StandardLRS: "Standard_LRS",
    /**
     * The data disk should use premium locally redundant storage.
     */
    PremiumLRS: "Premium_LRS",
    /**
     * The data disk should use standard SSD locally redundant storage.
     */
    StandardSSDLRS: "StandardSSD_LRS",
    /**
     * The data disk should use premium SSD zonal redundant storage.
     */
    PremiumZRS: "Premium_ZRS",
    /**
     * The data disk should use standard SSD zonal redundant storage.
     */
    StandardSSDZRS: "StandardSSD_ZRS",
} as const;

/**
 * The storage Account type to be used for the data disk. If omitted, the default is "standard_lrs".
 */
export type StorageAccountType = (typeof StorageAccountType)[keyof typeof StorageAccountType];
