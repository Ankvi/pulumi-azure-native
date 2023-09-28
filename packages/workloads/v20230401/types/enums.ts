export const ConfigurationType = {
    Skip: "Skip",
    CreateAndMount: "CreateAndMount",
    Mount: "Mount",
} as const;

/**
 * The type of file share config.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const DiskSkuName = {
    Standard_LRS: "Standard_LRS",
    Premium_LRS: "Premium_LRS",
    StandardSSD_LRS: "StandardSSD_LRS",
    UltraSSD_LRS: "UltraSSD_LRS",
    Premium_ZRS: "Premium_ZRS",
    StandardSSD_ZRS: "StandardSSD_ZRS",
    PremiumV2_LRS: "PremiumV2_LRS",
} as const;

/**
 * Defines the disk sku name.
 */
export type DiskSkuName = (typeof DiskSkuName)[keyof typeof DiskSkuName];

export const ManagedServiceIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

/**
 * Type of manage identity
 */
export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NamingPatternType = {
    FullResourceName: "FullResourceName",
} as const;

/**
 * The pattern type to be used for resource naming.
 */
export type NamingPatternType = (typeof NamingPatternType)[keyof typeof NamingPatternType];

export const OSType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

/**
 * The OS Type
 */
export type OSType = (typeof OSType)[keyof typeof OSType];

export const RoutingPreference = {
    Default: "Default",
    RouteAll: "RouteAll",
} as const;

/**
 * Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET.
 */
export type RoutingPreference = (typeof RoutingPreference)[keyof typeof RoutingPreference];

export const SAPConfigurationType = {
    Deployment: "Deployment",
    Discovery: "Discovery",
    DeploymentWithOSConfig: "DeploymentWithOSConfig",
} as const;

/**
 * The configuration Type.
 */
export type SAPConfigurationType = (typeof SAPConfigurationType)[keyof typeof SAPConfigurationType];

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

export const SAPSoftwareInstallationType = {
    ServiceInitiated: "ServiceInitiated",
    SAPInstallWithoutOSConfig: "SAPInstallWithoutOSConfig",
    External: "External",
} as const;

/**
 * The SAP software installation Type.
 */
export type SAPSoftwareInstallationType = (typeof SAPSoftwareInstallationType)[keyof typeof SAPSoftwareInstallationType];

export const SslPreference = {
    Disabled: "Disabled",
    RootCertificate: "RootCertificate",
    ServerCertificate: "ServerCertificate",
} as const;

/**
 * Gets or sets certificate preference if secure communication is enabled.
 */
export type SslPreference = (typeof SslPreference)[keyof typeof SslPreference];
