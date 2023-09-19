export const ConfigurationType = {
    Skip: "Skip",
    CreateAndMount: "CreateAndMount",
    Mount: "Mount",
} as const;

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

export type DiskSkuName = (typeof DiskSkuName)[keyof typeof DiskSkuName];

export const ManagedServiceIdentityType = {
    None: "None",
    UserAssigned: "UserAssigned",
} as const;

export type ManagedServiceIdentityType = (typeof ManagedServiceIdentityType)[keyof typeof ManagedServiceIdentityType];

export const NamingPatternType = {
    FullResourceName: "FullResourceName",
} as const;

export type NamingPatternType = (typeof NamingPatternType)[keyof typeof NamingPatternType];

export const OSType = {
    Linux: "Linux",
    Windows: "Windows",
} as const;

export type OSType = (typeof OSType)[keyof typeof OSType];

export const RoutingPreference = {
    Default: "Default",
    RouteAll: "RouteAll",
} as const;

export type RoutingPreference = (typeof RoutingPreference)[keyof typeof RoutingPreference];

export const SAPConfigurationType = {
    Deployment: "Deployment",
    Discovery: "Discovery",
    DeploymentWithOSConfig: "DeploymentWithOSConfig",
} as const;

export type SAPConfigurationType = (typeof SAPConfigurationType)[keyof typeof SAPConfigurationType];

export const SAPDatabaseScaleMethod = {
    ScaleUp: "ScaleUp",
} as const;

export type SAPDatabaseScaleMethod = (typeof SAPDatabaseScaleMethod)[keyof typeof SAPDatabaseScaleMethod];

export const SAPDatabaseType = {
    HANA: "HANA",
    DB2: "DB2",
} as const;

export type SAPDatabaseType = (typeof SAPDatabaseType)[keyof typeof SAPDatabaseType];

export const SAPDeploymentType = {
    SingleServer: "SingleServer",
    ThreeTier: "ThreeTier",
} as const;

export type SAPDeploymentType = (typeof SAPDeploymentType)[keyof typeof SAPDeploymentType];

export const SAPEnvironmentType = {
    NonProd: "NonProd",
    Prod: "Prod",
} as const;

export type SAPEnvironmentType = (typeof SAPEnvironmentType)[keyof typeof SAPEnvironmentType];

export const SAPHighAvailabilityType = {
    AvailabilitySet: "AvailabilitySet",
    AvailabilityZone: "AvailabilityZone",
} as const;

export type SAPHighAvailabilityType = (typeof SAPHighAvailabilityType)[keyof typeof SAPHighAvailabilityType];

export const SAPProductType = {
    ECC: "ECC",
    S4HANA: "S4HANA",
    Other: "Other",
} as const;

export type SAPProductType = (typeof SAPProductType)[keyof typeof SAPProductType];

export const SAPSoftwareInstallationType = {
    ServiceInitiated: "ServiceInitiated",
    SAPInstallWithoutOSConfig: "SAPInstallWithoutOSConfig",
    External: "External",
} as const;

export type SAPSoftwareInstallationType = (typeof SAPSoftwareInstallationType)[keyof typeof SAPSoftwareInstallationType];

export const SslPreference = {
    Disabled: "Disabled",
    RootCertificate: "RootCertificate",
    ServerCertificate: "ServerCertificate",
} as const;

export type SslPreference = (typeof SslPreference)[keyof typeof SslPreference];
