export const AzureFrontDoorEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable Azure front door
 */
export type AzureFrontDoorEnabled = (typeof AzureFrontDoorEnabled)[keyof typeof AzureFrontDoorEnabled];

export const DatabaseTier = {
    Burstable: "Burstable",
    GeneralPurpose: "GeneralPurpose",
    MemoryOptimized: "MemoryOptimized",
} as const;

/**
 * Tier of the server SKU
 */
export type DatabaseTier = (typeof DatabaseTier)[keyof typeof DatabaseTier];

export const DatabaseType = {
    MySql: "MySql",
} as const;

/**
 * Database type
 */
export type DatabaseType = (typeof DatabaseType)[keyof typeof DatabaseType];

export const DiskStorageType = {
    Premium_LRS: "Premium_LRS",
    Standard_LRS: "Standard_LRS",
    StandardSSD_LRS: "StandardSSD_LRS",
} as const;

/**
 * Storage type
 */
export type DiskStorageType = (typeof DiskStorageType)[keyof typeof DiskStorageType];

export const EnableBackup = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable Azure backup for the workload
 */
export type EnableBackup = (typeof EnableBackup)[keyof typeof EnableBackup];

export const EnableSslEnforcement = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable SSL enforcement on the database
 */
export type EnableSslEnforcement = (typeof EnableSslEnforcement)[keyof typeof EnableSslEnforcement];

export const FileShareStorageType = {
    Standard_LRS: "Standard_LRS",
    Standard_GRS: "Standard_GRS",
    Standard_ZRS: "Standard_ZRS",
    Premium_LRS: "Premium_LRS",
} as const;

/**
 * File share backing storage type
 */
export type FileShareStorageType = (typeof FileShareStorageType)[keyof typeof FileShareStorageType];

export const FileShareType = {
    NfsOnController: "NfsOnController",
    AzureFiles: "AzureFiles",
} as const;

/**
 * Share type
 */
export type FileShareType = (typeof FileShareType)[keyof typeof FileShareType];

export const HAEnabled = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * Whether to enable HA for the server
 */
export type HAEnabled = (typeof HAEnabled)[keyof typeof HAEnabled];

export const LoadBalancerType = {
    ApplicationGateway: "ApplicationGateway",
    LoadBalancer: "LoadBalancer",
} as const;

/**
 * Load balancer type
 */
export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const ManagedServiceIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of manage identity
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const OSImageOffer = {
    UbuntuServer: "UbuntuServer",
} as const;

/**
 * OS image offer
 */
export type OSImageOffer = (typeof OSImageOffer)[keyof typeof OSImageOffer];

export const OSImagePublisher = {
    Canonical: "Canonical",
} as const;

/**
 * OS image publisher
 */
export type OSImagePublisher = (typeof OSImagePublisher)[keyof typeof OSImagePublisher];

export const OSImageSku = {
    OSImageSku_18_04_LTS: "18.04-LTS",
    OSImageSku_16_04_LTS: "16.04-LTS",
} as const;

/**
 * OS image sku
 */
export type OSImageSku = (typeof OSImageSku)[keyof typeof OSImageSku];

export const OSImageVersion = {
    Latest: "latest",
} as const;

/**
 * OS image version
 */
export type OSImageVersion = (typeof OSImageVersion)[keyof typeof OSImageVersion];

export const PHPVersion = {
    PHPVersion_7_2: "7.2",
    PHPVersion_7_3: "7.3",
    PHPVersion_7_4: "7.4",
} as const;

/**
 * PHP version
 */
export type PHPVersion = (typeof PHPVersion)[keyof typeof PHPVersion];

export const RedisCacheFamily = {
    C: "C",
    P: "P",
} as const;

/**
 * Cache family
 */
export type RedisCacheFamily = (typeof RedisCacheFamily)[keyof typeof RedisCacheFamily];

export const SAPDatabaseScaleMethod = {
    ScaleUp: "ScaleUp",
} as const;

/**
 * The DB scale method.
 */
export type SAPDatabaseScaleMethod = (typeof SAPDatabaseScaleMethod)[keyof typeof SAPDatabaseScaleMethod];

export const SAPDatabaseType = {
    HANA: "HANA",
    DB2: "DB2",
} as const;

/**
 * The database type. Eg: HANA, DB2, etc
 */
export type SAPDatabaseType = (typeof SAPDatabaseType)[keyof typeof SAPDatabaseType];

export const SAPDeploymentType = {
    SingleServer: "SingleServer",
    ThreeTier: "ThreeTier",
} as const;

/**
 * The deployment type. Eg: SingleServer/ThreeTier
 */
export type SAPDeploymentType = (typeof SAPDeploymentType)[keyof typeof SAPDeploymentType];

export const SAPEnvironmentType = {
    NonProd: "NonProd",
    Prod: "Prod",
} as const;

/**
 * Defines the environment type - Production/Non Production.
 */
export type SAPEnvironmentType = (typeof SAPEnvironmentType)[keyof typeof SAPEnvironmentType];

export const SAPHighAvailabilityType = {
    AvailabilitySet: "AvailabilitySet",
    AvailabilityZone: "AvailabilityZone",
} as const;

/**
 * The high availability type.
 */
export type SAPHighAvailabilityType = (typeof SAPHighAvailabilityType)[keyof typeof SAPHighAvailabilityType];

export const SAPProductType = {
    ECC: "ECC",
    S4HANA: "S4HANA",
    Other: "Other",
} as const;

/**
 * Defines the SAP Product type.
 */
export type SAPProductType = (typeof SAPProductType)[keyof typeof SAPProductType];

export const SearchType = {
    Elastic: "Elastic",
} as const;

/**
 * Search type
 */
export type SearchType = (typeof SearchType)[keyof typeof SearchType];

export const SkuTier = {
    Free: "Free",
    Basic: "Basic",
    Standard: "Standard",
    Premium: "Premium",
} as const;

/**
 * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
 */
export type SkuTier = (typeof SkuTier)[keyof typeof SkuTier];

export const WordpressVersions = {
    WordpressVersions_5_4_3: "5.4.3",
    WordpressVersions_5_4_2: "5.4.2",
    WordpressVersions_5_4_1: "5.4.1",
    WordpressVersions_5_4: "5.4",
} as const;

/**
 * Application version
 */
export type WordpressVersions = (typeof WordpressVersions)[keyof typeof WordpressVersions];

export const WorkloadKind = {
    WordPress: "WordPress",
} as const;

/**
 * Indicates which kind of php workload this resource represent e.g WordPress
 */
export type WorkloadKind = (typeof WorkloadKind)[keyof typeof WorkloadKind];
