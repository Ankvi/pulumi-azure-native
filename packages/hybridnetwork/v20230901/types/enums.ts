export const ApplicationEnablement = {
    Unknown: "Unknown",
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The application enablement.
 */
export type ApplicationEnablement = (typeof ApplicationEnablement)[keyof typeof ApplicationEnablement];

export const ArtifactReplicationStrategy = {
    Unknown: "Unknown",
    SingleReplication: "SingleReplication",
} as const;

/**
 * The replication strategy.
 */
export type ArtifactReplicationStrategy = (typeof ArtifactReplicationStrategy)[keyof typeof ArtifactReplicationStrategy];

export const ArtifactStoreType = {
    Unknown: "Unknown",
    AzureContainerRegistry: "AzureContainerRegistry",
    AzureStorageAccount: "AzureStorageAccount",
} as const;

/**
 * The artifact store type.
 */
export type ArtifactStoreType = (typeof ArtifactStoreType)[keyof typeof ArtifactStoreType];

export const ArtifactType = {
    Unknown: "Unknown",
    OCIArtifact: "OCIArtifact",
    VhdImageFile: "VhdImageFile",
    ArmTemplate: "ArmTemplate",
    ImageFile: "ImageFile",
} as const;

/**
 * The artifact type.
 */
export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];

export const AzureArcKubernetesArtifactType = {
    Unknown: "Unknown",
    HelmPackage: "HelmPackage",
} as const;

/**
 * The artifact type.
 */
export type AzureArcKubernetesArtifactType = (typeof AzureArcKubernetesArtifactType)[keyof typeof AzureArcKubernetesArtifactType];

export const AzureCoreArtifactType = {
    Unknown: "Unknown",
    VhdImageFile: "VhdImageFile",
    ArmTemplate: "ArmTemplate",
} as const;

/**
 * The artifact type.
 */
export type AzureCoreArtifactType = (typeof AzureCoreArtifactType)[keyof typeof AzureCoreArtifactType];

export const AzureOperatorNexusArtifactType = {
    Unknown: "Unknown",
    ImageFile: "ImageFile",
    ArmTemplate: "ArmTemplate",
} as const;

/**
 * The artifact type.
 */
export type AzureOperatorNexusArtifactType = (typeof AzureOperatorNexusArtifactType)[keyof typeof AzureOperatorNexusArtifactType];

export const ConfigurationGroupValueConfigurationType = {
    Unknown: "Unknown",
    Secret: "Secret",
    Open: "Open",
} as const;

/**
 * The value which indicates if configuration values are secrets
 */
export type ConfigurationGroupValueConfigurationType = (typeof ConfigurationGroupValueConfigurationType)[keyof typeof ConfigurationGroupValueConfigurationType];

export const ContainerizedNetworkFunctionNFVIType = {
    Unknown: "Unknown",
    AzureArcKubernetes: "AzureArcKubernetes",
} as const;

/**
 * The network function type.
 */
export type ContainerizedNetworkFunctionNFVIType = (typeof ContainerizedNetworkFunctionNFVIType)[keyof typeof ContainerizedNetworkFunctionNFVIType];

export const IdType = {
    Unknown: "Unknown",
    Open: "Open",
    Secret: "Secret",
} as const;

/**
 * The resource reference arm id type.
 */
export type IdType = (typeof IdType)[keyof typeof IdType];

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

export const NFVIType = {
    Unknown: "Unknown",
    AzureArcKubernetes: "AzureArcKubernetes",
    AzureCore: "AzureCore",
    AzureOperatorNexus: "AzureOperatorNexus",
} as const;

/**
 * The NFVI type.
 */
export type NFVIType = (typeof NFVIType)[keyof typeof NFVIType];

export const NetworkFunctionConfigurationType = {
    Unknown: "Unknown",
    Secret: "Secret",
    Open: "Open",
} as const;

/**
 * The value which indicates if NF  values are secrets
 */
export type NetworkFunctionConfigurationType = (typeof NetworkFunctionConfigurationType)[keyof typeof NetworkFunctionConfigurationType];

export const NetworkFunctionType = {
    Unknown: "Unknown",
    VirtualNetworkFunction: "VirtualNetworkFunction",
    ContainerizedNetworkFunction: "ContainerizedNetworkFunction",
} as const;

/**
 * The network function type.
 */
export type NetworkFunctionType = (typeof NetworkFunctionType)[keyof typeof NetworkFunctionType];

export const PublisherScope = {
    Unknown: "Unknown",
    Private: "Private",
} as const;

/**
 * The publisher scope.
 */
export type PublisherScope = (typeof PublisherScope)[keyof typeof PublisherScope];

export const SkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * Name of this Sku
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const TemplateType = {
    Unknown: "Unknown",
    ArmTemplate: "ArmTemplate",
} as const;

/**
 * The template type.
 */
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType];

export const Type = {
    Unknown: "Unknown",
    ArmResourceDefinition: "ArmResourceDefinition",
    NetworkFunctionDefinition: "NetworkFunctionDefinition",
} as const;

/**
 * The resource element template type.
 */
export type Type = (typeof Type)[keyof typeof Type];

export const VirtualNetworkFunctionNFVIType = {
    Unknown: "Unknown",
    AzureCore: "AzureCore",
    AzureOperatorNexus: "AzureOperatorNexus",
} as const;

/**
 * The network function type.
 */
export type VirtualNetworkFunctionNFVIType = (typeof VirtualNetworkFunctionNFVIType)[keyof typeof VirtualNetworkFunctionNFVIType];
