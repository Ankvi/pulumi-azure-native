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

export const BackingResourcePublicNetworkAccess = {
    Enabled: "Enabled",
    Disabled: "Disabled",
} as const;

/**
 * The artifact store backing resource network access type
 */
export type BackingResourcePublicNetworkAccess = (typeof BackingResourcePublicNetworkAccess)[keyof typeof BackingResourcePublicNetworkAccess];

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

export const DeviceType = {
    Unknown: "Unknown",
    AzureStackEdge: "AzureStackEdge",
} as const;

/**
 * The type of the device.
 */
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType];

export const DiskCreateOptionTypes = {
    Unknown: "Unknown",
    Empty: "Empty",
} as const;

/**
 * Specifies how the virtual machine should be created.
 */
export type DiskCreateOptionTypes = (typeof DiskCreateOptionTypes)[keyof typeof DiskCreateOptionTypes];

export const IPAllocationMethod = {
    Unknown: "Unknown",
    Static: "Static",
    Dynamic: "Dynamic",
} as const;

/**
 * IP address allocation method.
 */
export type IPAllocationMethod = (typeof IPAllocationMethod)[keyof typeof IPAllocationMethod];

export const IPVersion = {
    Unknown: "Unknown",
    IPv4: "IPv4",
} as const;

/**
 * IP address version.
 */
export type IPVersion = (typeof IPVersion)[keyof typeof IPVersion];

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

export const NetworkFunctionRoleConfigurationType = {
    Unknown: "Unknown",
    VirtualMachine: "VirtualMachine",
} as const;

/**
 * Role type.
 */
export type NetworkFunctionRoleConfigurationType = (typeof NetworkFunctionRoleConfigurationType)[keyof typeof NetworkFunctionRoleConfigurationType];

export const NetworkFunctionType = {
    Unknown: "Unknown",
    VirtualNetworkFunction: "VirtualNetworkFunction",
    ContainerizedNetworkFunction: "ContainerizedNetworkFunction",
} as const;

/**
 * The network function type.
 */
export type NetworkFunctionType = (typeof NetworkFunctionType)[keyof typeof NetworkFunctionType];

export const OperatingSystemTypes = {
    Unknown: "Unknown",
    Windows: "Windows",
    Linux: "Linux",
} as const;

/**
 * The OS type.
 */
export type OperatingSystemTypes = (typeof OperatingSystemTypes)[keyof typeof OperatingSystemTypes];

export const PublisherScope = {
    Unknown: "Unknown",
    Private: "Private",
} as const;

/**
 * The publisher scope.
 */
export type PublisherScope = (typeof PublisherScope)[keyof typeof PublisherScope];

export const SkuDeploymentMode = {
    Unknown: "Unknown",
    Azure: "Azure",
    PrivateEdgeZone: "PrivateEdgeZone",
} as const;

/**
 * The sku deployment mode.
 */
export type SkuDeploymentMode = (typeof SkuDeploymentMode)[keyof typeof SkuDeploymentMode];

export const SkuName = {
    Basic: "Basic",
    Standard: "Standard",
} as const;

/**
 * Name of this Sku
 */
export type SkuName = (typeof SkuName)[keyof typeof SkuName];

export const SkuType = {
    Unknown: "Unknown",
    EvolvedPacketCore: "EvolvedPacketCore",
    SDWAN: "SDWAN",
    Firewall: "Firewall",
} as const;

/**
 * The sku type.
 */
export type SkuType = (typeof SkuType)[keyof typeof SkuType];

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

export const VMSwitchType = {
    Unknown: "Unknown",
    Management: "Management",
    Wan: "Wan",
    Lan: "Lan",
} as const;

/**
 * The type of the VM switch.
 */
export type VMSwitchType = (typeof VMSwitchType)[keyof typeof VMSwitchType];

export const VirtualMachineSizeTypes = {
    Unknown: "Unknown",
    Standard_D1_v2: "Standard_D1_v2",
    Standard_D2_v2: "Standard_D2_v2",
    Standard_D3_v2: "Standard_D3_v2",
    Standard_D4_v2: "Standard_D4_v2",
    Standard_D5_v2: "Standard_D5_v2",
    Standard_D11_v2: "Standard_D11_v2",
    Standard_D12_v2: "Standard_D12_v2",
    Standard_D13_v2: "Standard_D13_v2",
    Standard_DS1_v2: "Standard_DS1_v2",
    Standard_DS2_v2: "Standard_DS2_v2",
    Standard_DS3_v2: "Standard_DS3_v2",
    Standard_DS4_v2: "Standard_DS4_v2",
    Standard_DS5_v2: "Standard_DS5_v2",
    Standard_DS11_v2: "Standard_DS11_v2",
    Standard_DS12_v2: "Standard_DS12_v2",
    Standard_DS13_v2: "Standard_DS13_v2",
    Standard_F1: "Standard_F1",
    Standard_F2: "Standard_F2",
    Standard_F4: "Standard_F4",
    Standard_F8: "Standard_F8",
    Standard_F16: "Standard_F16",
    Standard_F1s: "Standard_F1s",
    Standard_F2s: "Standard_F2s",
    Standard_F4s: "Standard_F4s",
    Standard_F8s: "Standard_F8s",
    Standard_F16s: "Standard_F16s",
} as const;

/**
 * The size of the virtual machine.
 */
export type VirtualMachineSizeTypes = (typeof VirtualMachineSizeTypes)[keyof typeof VirtualMachineSizeTypes];

export const VirtualNetworkFunctionNFVIType = {
    Unknown: "Unknown",
    AzureCore: "AzureCore",
    AzureOperatorNexus: "AzureOperatorNexus",
} as const;

/**
 * The network function type.
 */
export type VirtualNetworkFunctionNFVIType = (typeof VirtualNetworkFunctionNFVIType)[keyof typeof VirtualNetworkFunctionNFVIType];
