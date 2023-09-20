export const AutomationArtifactStatus = {
    NotGenerated: "NotGenerated",
    Generated: "Generated",
} as const;

export type AutomationArtifactStatus = (typeof AutomationArtifactStatus)[keyof typeof AutomationArtifactStatus];

export const ConfigurationType = {
    IISConnectionString: "IISConnectionString",
    IISAuthentication: "IISAuthentication",
    ApacheTomcatContextResource: "ApacheTomcatContextResource",
} as const;

export type ConfigurationType = (typeof ConfigurationType)[keyof typeof ConfigurationType];

export const LoadBalancerType = {
    Private: "Private",
    Public: "Public",
} as const;

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

export type TargetHydrationStorageProviderType = (typeof TargetHydrationStorageProviderType)[keyof typeof TargetHydrationStorageProviderType];

export const TargetStorageAccessType = {
    Shared: "Shared",
    Exclusive: "Exclusive",
} as const;

export type TargetStorageAccessType = (typeof TargetStorageAccessType)[keyof typeof TargetStorageAccessType];

export const TargetStorageProjectionType = {
    ContainerFileSystem: "ContainerFileSystem",
    PersistentVolume: "PersistentVolume",
} as const;

export type TargetStorageProjectionType = (typeof TargetStorageProjectionType)[keyof typeof TargetStorageProjectionType];

export const WorkloadDeploymentTarget = {
    AzureKubernetesService: "AzureKubernetesService",
    AzureAppServiceContainer: "AzureAppServiceContainer",
    AzureAppServiceNative: "AzureAppServiceNative",
} as const;

export type WorkloadDeploymentTarget = (typeof WorkloadDeploymentTarget)[keyof typeof WorkloadDeploymentTarget];

export const WorkloadDeploymentType = {
    IISAKSWorkloadDeployment: "IISAKSWorkloadDeployment",
    ApacheTomcatAKSWorkloadDeployment: "ApacheTomcatAKSWorkloadDeployment",
} as const;

export type WorkloadDeploymentType = (typeof WorkloadDeploymentType)[keyof typeof WorkloadDeploymentType];

export const WorkloadType = {
    IISWorkload: "IISWorkload",
    ApacheTomcatWorkload: "ApacheTomcatWorkload",
} as const;

export type WorkloadType = (typeof WorkloadType)[keyof typeof WorkloadType];