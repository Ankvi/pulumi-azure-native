export const AutomationArtifactStatus = {
    NotGenerated: "NotGenerated",
    Generated: "Generated",
} as const;

/**
 * Gets or sets the status of automation artifacts.
 */
export type AutomationArtifactStatus = (typeof AutomationArtifactStatus)[keyof typeof AutomationArtifactStatus];

export const ConfigurationType = {
    IISConnectionString: "IISConnectionString",
    IISAuthentication: "IISAuthentication",
    ApacheTomcatContextResource: "ApacheTomcatContextResource",
} as const;

/**
 * Gets or sets the configuration type.
 */
export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const LoadBalancerType = {
    Private: "Private",
    Public: "Public",
} as const;

/**
 * Gets or sets the load balancer type.
 */
export type LoadBalancerType = (typeof LoadBalancerType)[keyof typeof LoadBalancerType];

export const OperatingSystemType = {
    Windows: "Windows",
    Linux: "Linux",
} as const;

export type OperatingSystemType = (typeof OperatingSystemType)[keyof typeof OperatingSystemType];

export const ResourceIdentityTypes = {
    None: "None",
    SystemAssigned: "SystemAssigned",
    UserAssigned: "UserAssigned",
} as const;

export type ResourceIdentityTypes = (typeof ResourceIdentityTypes)[keyof typeof ResourceIdentityTypes];

export const SecretStoreType = {
    None: "None",
    KubeSecret: "KubeSecret",
    KeyVaultSecret: "KeyVaultSecret",
    AppServiceAppSettings: "AppServiceAppSettings",
} as const;

export type SecretStoreType = (typeof SecretStoreType)[keyof typeof SecretStoreType];

export const TargetHydrationStorageProviderType = {
    AzureFileShare: "AzureFileShare",
} as const;

/**
 * Gets or sets the storage provider type on the target.
 * Applicable when StorageProjectionType is not ContainerFileSystem.
 */
export type TargetHydrationStorageProviderType = (typeof TargetHydrationStorageProviderType)[keyof typeof TargetHydrationStorageProviderType];

export const TargetStorageAccessType = {
    Shared: "Shared",
    Exclusive: "Exclusive",
} as const;

/**
 * Gets or sets the target storage access type.
 */
export type TargetStorageAccessType = (typeof TargetStorageAccessType)[keyof typeof TargetStorageAccessType];

export const TargetStorageProjectionType = {
    ContainerFileSystem: "ContainerFileSystem",
    PersistentVolume: "PersistentVolume",
} as const;

/**
 * Gets or sets the target projection type.
 */
export type TargetStorageProjectionType = (typeof TargetStorageProjectionType)[keyof typeof TargetStorageProjectionType];

export const WorkloadDeploymentTarget = {
    AzureKubernetesService: "AzureKubernetesService",
    AzureAppServiceContainer: "AzureAppServiceContainer",
    AzureAppServiceNative: "AzureAppServiceNative",
} as const;

/**
 * Gets or sets the deployment target platform.
 */
export type WorkloadDeploymentTarget = (typeof WorkloadDeploymentTarget)[keyof typeof WorkloadDeploymentTarget];

export const WorkloadDeploymentType = {
    IISAKSWorkloadDeployment: "IISAKSWorkloadDeployment",
    ApacheTomcatAKSWorkloadDeployment: "ApacheTomcatAKSWorkloadDeployment",
} as const;

/**
 * Gets or sets the instance type.
 */
export type WorkloadDeploymentType = (typeof WorkloadDeploymentType)[keyof typeof WorkloadDeploymentType];

export const WorkloadType = {
    IISWorkload: "IISWorkload",
    ApacheTomcatWorkload: "ApacheTomcatWorkload",
} as const;

/**
 * Gets or sets the instance type.
 */
export type WorkloadType = (typeof WorkloadType)[keyof typeof WorkloadType];
